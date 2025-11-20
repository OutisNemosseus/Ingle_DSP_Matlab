const fs = require('fs');
const path = require('path');

// MATLAB to Python conversion mapping (improved version)
function matlabToPython(matlabCode, filename) {
  let python = matlabCode

  // Extract function name and comments
  const funcMatch = matlabCode.match(/function\s+(\w+)/)
  const funcName = funcMatch ? funcMatch[1] : filename.replace('.m', '')

  // Extract comments as description (take the first %)
  const commentLines = matlabCode.split('\n').filter(line => line.trim().startsWith('%'))
  const description = commentLines.length > 0 ? commentLines[0].replace(/^%\s*/, '') : funcName

  // 1. Remove global lines (must be done first)
  python = python.replace(/^global\s+.*$/gm, '')

  // 2. Remove MATLAB function declarations (main & sub-functions)
  //    Simply delete the entire line to avoid Python syntax errors
  python = python.replace(/^function\s+.*$/gm, '')

  // 3. Comment conversion: % -> #
  // Handle line start, then inline
  python = python.replace(/^%\s*/gm, '# ')
  python = python.replace(/(\s+)%\s*/g, '$1# ')

  // 4. legend() preprocessing (multi-line legend)
  python = python.replace(/legend\s*\(([^)]*)\)\s*;?/gs, (match, args) => {
    if (!args || !args.trim()) {
      return 'plt.legend()'
    }

    const cleanArgs = args.replace(/\s+/g, ' ').trim()
    const parts = []
    let current = ''
    let inQuote = false
    let quoteChar = null

    for (let i = 0; i < cleanArgs.length; i++) {
      const ch = cleanArgs[i]
      if ((ch === '"' || ch === "'") && (i === 0 || cleanArgs[i-1] !== '\\')) {
        if (!inQuote) {
          inQuote = true
          quoteChar = ch
        } else if (ch === quoteChar) {
          inQuote = false
          quoteChar = null
        }
        current += ch
      } else if (ch === ',' && !inQuote) {
        if (current.trim()) parts.push(current.trim())
        current = ''
      } else {
        current += ch
      }
    }
    if (current.trim()) parts.push(current.trim())

    const pyArgs = parts.map(p => {
      const text = p.replace(/^['"]|['"]$/g, '').trim()
      const escaped = text.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
      return `'${escaped}'`
    })

    return `plt.legend([${pyArgs.join(', ')}])`
  })

  // 5. Array ranges: support (start:step:end) and (start:end)
  // Note: This is heuristic, will treat all "a:b" in parentheses as range
  // First handle start:step:end
  python = python.replace(/\(([^:()]+):([^:()]+):([^()]+)\)/g, (match, start, step, end) => {
    return `np.arange(${start.trim()}, ${end.trim()} + ${step.trim()}, ${step.trim()})`
  })
  // Then handle start:end
  python = python.replace(/\(([^:()]+):([^()]+)\)/g, (match, start, end) => {
    return `np.arange(${start.trim()}, ${end.trim()} + 1)`
  })

  // 6. Element-wise operators
  python = python.replace(/\.\^/g, '**')
  python = python.replace(/\.\*/g, '*')
  python = python.replace(/\.\//g, '/')

  // Regular ^ replace with **
  python = python.replace(/\^/g, '**')

  // 7. pi constant / variable distinction
  const hasPiVariable = /^(\s*)pi(\s*=\s*[^=])/m.test(python)
  if (hasPiVariable) {
    python = python.replace(/\bpi\b/g, 'pi_val')
  } else {
    python = python.replace(/\bpi\b/g, 'np.pi')
  }

  // 8. Complex unit i/j = sqrt(-1)
  python = python.replace(/(\b[ij])\s*=\s*sqrt\(\s*-1\s*\)\s*;?/g, '$1 = 1j')

  // 9. Common math functions
  python = python.replace(/\bcos\(/g, 'np.cos(')
  python = python.replace(/\bsin\(/g, 'np.sin(')
  python = python.replace(/\btan\(/g, 'np.tan(')
  python = python.replace(/\bsqrt\(/g, 'np.sqrt(')
  python = python.replace(/\bexp\(/g, 'np.exp(')
  python = python.replace(/\blog\(/g, 'np.log(')
  python = python.replace(/\babs\(/g, 'np.abs(')
  python = python.replace(/\bmax\(/g, 'np.max(')
  python = python.replace(/\bmin\(/g, 'np.min(')
  python = python.replace(/\bsum\(/g, 'np.sum(')
  python = python.replace(/\bmean\(/g, 'np.mean(')

  // 10. MATLAB helper functions
  python = python.replace(/\blength\(/g, 'len(')
  python = python.replace(/\blogical\(/g, '(')      // logical(expr) -> (expr)
  python = python.replace(/\bconj\(/g, 'np.conj(')

  // 11. Loop conversions (match most specific forms first)

  // for r=1:length(x);
  python = python.replace(
    /for\s+(\w+)\s*=\s*1\s*:\s*len\(([^)]+)\)\s*;?\s*$/gm,
    (match, v, arr) => `for ${v} in range(len(${arr.trim()})):\n`
  )

  // for n=start:step:end;
  python = python.replace(
    /for\s+(\w+)\s*=\s*([^:\n]+)\s*:\s*([^:\n]+)\s*:\s*([^\n;]+)\s*;?\s*$/gm,
    (match, v, start, step, end) =>
      `for ${v} in range(${start.trim()}, ${end.trim()} + ${step.trim()}, ${step.trim()}):\n`
  )

  // for n=start:end;
  python = python.replace(
    /for\s+(\w+)\s*=\s*([^:\n]+)\s*:\s*([^\n;]+)\s*;?\s*$/gm,
    (match, v, start, end) =>
      `for ${v} in range(${start.trim()}, ${end.trim()} + 1):\n`
  )

  // 12. Conditional statements
  python = python.replace(/elseif\s+(.+)\s*$/gm, 'elif $1:')
  python = python.replace(/else\s*$/gm, 'else:')
  python = python.replace(/if\s+(.+)\s*$/gm, 'if $1:')

  // 13. Remove end
  python = python.replace(/^\s*end\s*;?\s*$/gm, '')

  // 14. axis([-200 200 -5 5]); convert to xlim + ylim, handle ; and comments
  python = python.replace(/axis\(\[([^\]]+)\]\)\s*;?\s*(#.*)?$/gm, (match, args, comment) => {
    const values = args.split(/\s+/).filter(v => v.trim())
    if (values.length === 4) {
      let out = `plt.xlim(${values[0]}, ${values[1]})\nplt.ylim(${values[2]}, ${values[3]})`
      if (comment) {
        out += `\n${comment}`
      }
      return out
    }
    return match
  })

  // 15. Clean lines with only semicolons (like ";  # PLOTS LIMITS")
  python = python.replace(/^\s*;\s*(#.*)$/gm, '$1')
  python = python.replace(/^\s*;\s*$/gm, '')

  // 16. Plotting related: figure / subplot / plot / labels / grid etc
  python = python.replace(/figure\((\d+)\)\s*;?/g, 'fig = plt.figure($1)\n')
  python = python.replace(/subplot\((\d+),\s*(\d+),\s*(\d+)\)\s*;?/g, 'plt.subplot($1, $2, $3)\n')
  python = python.replace(/\bplot\(([^)]+)\)\s*;?/g, 'plt.plot($1)\n')

  python = python.replace(/xlabel\(['"]([^'"]+)['"]\)\s*;?/g, "plt.xlabel('$1')\n")
  python = python.replace(/ylabel\(['"]([^'"]+)['"]\)\s*;?/g, "plt.ylabel('$1')\n")
  python = python.replace(/title\(['"]([^'"]+)['"]\)\s*;?/g, "plt.title('$1')\n")

  python = python.replace(/grid\s+on\s*;?/g, 'plt.grid(True)\n')
  python = python.replace(/grid\s+off\s*;?/g, 'plt.grid(False)\n')
  python = python.replace(/hold\s+on\s*;?/g, '# hold on\n')
  python = python.replace(/hold\s+off\s*;?/g, '# hold off\n')

  python = python.replace(/contour\(([^)]+)\)\s*;?/g, 'plt.contour($1)\n')
  python = python.replace(/clabel\(([^)]+)\)\s*;?/g, 'plt.clabel($1)\n')

  python = python.replace(/mesh\(([^)]+)\);?\s*/g, (match, args) => {
    return `ax = plt.gca()\nif not hasattr(ax, 'plot_surface'):\n    fig = plt.figure()\n    ax = fig.add_subplot(111, projection='3d')\n    X, Y = np.meshgrid(np.arange(${args}.shape[1]), np.arange(${args}.shape[0]))\n    ax.plot_surface(X, Y, ${args}, cmap='viridis')\n`
  })

  // 17. Auto-insert W / G placeholder functions (avoid NameError)
  function ensureHelper(name) {
    const callPattern = new RegExp(`\\b${name}\\s*\\(`)
    const defPattern = new RegExp(`def\\s+${name}\\s*\\(`)
    if (callPattern.test(python) && !defPattern.test(python)) {
      python =
`def ${name}(x):
    # TODO: Auto-placeholder function: replace with the formula from ${name}.m
    import numpy as _np
    return _np.zeros_like(x, dtype=float)

` + python
    }
  }

  ensureHelper('W')
  ensureHelper('G')

  // 18. Remove trailing semicolons (do after all replacements)
  python = python.replace(/;\s*$/gm, '')

  // 19. Add imports based on usage
  if (python.includes('plt.') || python.includes('plot(') || python.includes('figure(')) {
    python = `import matplotlib.pyplot as plt
import numpy as np
import io
import base64
${python.includes('mesh') || python.includes('3d') ? 'from mpl_toolkits.mplot3d import Axes3D\n' : ''}
` + python
  } else if (python.includes('np.') || /arange|array/.test(python)) {
    python = `import numpy as np
` + python
  }

  // 20. If plotting, append code to save as base64
  if (python.includes('plt.')) {
    python += `
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`
  }

  return { python, description, funcName }
}

// Main conversion script
function convertMatlabFiles() {
  console.log('Starting MATLAB to Python conversion...\n');

  // Configuration
  const sourceDir = path.join(__dirname, '..'); // Parent directory with CHAP_XX folders
  const outputDir = path.join(__dirname, 'src', 'data', 'matlab');

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Find all CHAP_XX directories
  const chapters = fs.readdirSync(sourceDir)
    .filter(name => /^CHAP_\d+$/.test(name))
    .sort();

  console.log(`Found ${chapters.length} chapter directories: ${chapters.join(', ')}\n`);

  const allPrograms = [];

  // Process each chapter
  chapters.forEach(chapterDir => {
    const chapterPath = path.join(sourceDir, chapterDir);
    const chapterNum = chapterDir.replace('CHAP_', '');

    console.log(`Processing ${chapterDir}...`);

    // Find all .m files in this chapter
    const mFiles = fs.readdirSync(chapterPath)
      .filter(name => name.endsWith('.m'))
      .sort();

    console.log(`  Found ${mFiles.length} MATLAB files`);

    const chapterPrograms = [];

    mFiles.forEach(mFile => {
      try {
        const mFilePath = path.join(chapterPath, mFile);
        const matlabCode = fs.readFileSync(mFilePath, 'utf-8');

        // Convert to Python
        const { python, description, funcName } = matlabToPython(matlabCode, mFile);

        // Create program object
        const program = {
          id: funcName.toLowerCase(),
          title: funcName,
          displayName: description,
          description: description,
          category: `DSP - Chapter ${chapterNum}`,
          chapter: chapterNum,
          source: 'matlab',
          pythonCode: python,
          matlabCode: matlabCode,
          defaultParams: {},
          params: [],
          tags: [
            `chapter${chapterNum}`,
            'dsp',
            funcName.toLowerCase()
          ],
          wikipediaLinks: [
            {
              title: 'Digital signal processing',
              url: 'https://en.wikipedia.org/wiki/Digital_signal_processing'
            }
          ]
        };

        chapterPrograms.push(program);
        console.log(`    ✓ Converted ${mFile}`);

      } catch (error) {
        console.error(`    ✗ Error converting ${mFile}:`, error.message);
      }
    });

    allPrograms.push(...chapterPrograms);

    // Write chapter file
    const chapterFileName = `dsp-chapter-${chapterNum.padStart(2, '0')}.js`;
    const chapterFilePath = path.join(outputDir, chapterFileName);

    const chapterFileContent = `// DSP Chapter ${chapterNum} Programs
// Auto-generated from MATLAB files

const chapter${chapterNum.padStart(2, '0')}Programs = ${JSON.stringify(chapterPrograms, null, 2)}

export default chapter${chapterNum.padStart(2, '0')}Programs
`;

    fs.writeFileSync(chapterFilePath, chapterFileContent, 'utf-8');
    console.log(`  Saved to ${chapterFileName}\n`);
  });

  // Create index file for matlab directory
  const matlabIndexContent = `// Index file for all MATLAB DSP programs
// Auto-generated

${chapters.map((ch, i) => {
  const num = ch.replace('CHAP_', '').padStart(2, '0');
  return `import chapter${num}Programs from './dsp-chapter-${num}.js'`;
}).join('\n')}

const allMatlabPrograms = [
${chapters.map(ch => {
  const num = ch.replace('CHAP_', '').padStart(2, '0');
  return `  ...chapter${num}Programs`;
}).join(',\n')}
]

export default allMatlabPrograms
`;

  fs.writeFileSync(path.join(outputDir, 'index.js'), matlabIndexContent, 'utf-8');
  console.log('✓ Created matlab/index.js\n');

  // Summary
  console.log('='.repeat(60));
  console.log(`Conversion complete!`);
  console.log(`Total programs converted: ${allPrograms.length}`);
  console.log(`Chapters processed: ${chapters.length}`);
  console.log('='.repeat(60));
}

// Run if called directly
if (require.main === module) {
  convertMatlabFiles();
}

module.exports = { matlabToPython, convertMatlabFiles };
