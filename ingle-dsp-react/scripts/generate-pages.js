#!/usr/bin/env node
/**
 * Generate webpage modules from Python files
 * Scans python/ folder and creates corresponding JS modules in src/data/programs/
 * Also generates src/data/index.js with all programs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.join(__dirname, '..');
const pythonDir = path.join(projectRoot, 'python');
const programsDir = path.join(projectRoot, 'src', 'data', 'programs');
const indexPath = path.join(projectRoot, 'src', 'data', 'index.js');
const matlabRootDir = path.join(projectRoot, '..'); // Parent directory with CHAP_XX folders

/**
 * Find and read the corresponding MATLAB file
 */
function findMatlabFile(filename, chapter) {
  if (!chapter) return null;

  const matlabFilename = filename + '.m';  // filename already has no extension
  const chapterDir = path.join(matlabRootDir, `CHAP_${chapter}`);
  const matlabPath = path.join(chapterDir, matlabFilename);

  try {
    if (fs.existsSync(matlabPath)) {
      return fs.readFileSync(matlabPath, 'utf-8');
    }
  } catch (error) {
    // Silent fail - MATLAB file is optional
  }

  return null;
}

/**
 * Extract metadata from Python file header comments
 */
function extractMetadata(pythonCode, filename) {
  const lines = pythonCode.split('\n');
  const metadata = {
    title: '',
    description: '',
    chapter: '',
    category: ''
  };

  for (const line of lines) {
    if (!line.trim().startsWith('#')) break;

    const titleMatch = line.match(/^#\s*Title:\s*(.+)$/i);
    const descMatch = line.match(/^#\s*Description:\s*(.+)$/i);
    const chapterMatch = line.match(/^#\s*Chapter:\s*(.+)$/i);

    if (titleMatch) metadata.title = titleMatch[1].trim();
    if (descMatch) metadata.description = descMatch[1].trim();
    if (chapterMatch) metadata.chapter = chapterMatch[1].trim();
  }

  // Extract chapter from filename if not in metadata (e.g., ex020100 -> chapter 02)
  if (!metadata.chapter) {
    const chapterMatch = filename.match(/^ex(\d{2})/);
    if (chapterMatch) {
      metadata.chapter = chapterMatch[1];
    }
  }

  if (metadata.chapter) {
    metadata.category = `DSP - Chapter ${metadata.chapter}`;
  }

  // Use filename as fallback title
  if (!metadata.title) {
    metadata.title = filename.replace('.py', '');
  }

  // Use title as fallback description
  if (!metadata.description) {
    metadata.description = metadata.title;
  }

  return metadata;
}

/**
 * Generate JS module for a Python program
 */
function generateProgramModule(pythonFile, pythonCode) {
  const filename = path.basename(pythonFile, '.py');
  const metadata = extractMetadata(pythonCode, filename);

  // Find corresponding MATLAB file
  const matlabCode = findMatlabFile(filename, metadata.chapter);

  // Create program object
  const program = {
    id: filename.toLowerCase(),
    title: filename,
    displayName: metadata.title,
    description: metadata.description,
    category: metadata.category || 'DSP',
    chapter: metadata.chapter || '',
    source: matlabCode ? 'matlab' : 'python',
    pythonCode: pythonCode,
    matlabCode: matlabCode || undefined,
    defaultParams: {},
    params: [],
    tags: [
      metadata.chapter ? `chapter${metadata.chapter}` : '',
      'dsp',
      filename.toLowerCase()
    ].filter(Boolean),
    wikipediaLinks: [
      {
        title: 'Digital signal processing',
        url: 'https://en.wikipedia.org/wiki/Digital_signal_processing'
      }
    ]
  };

  // Generate JS module content
  const varName = filename.replace(/-/g, '_');
  const jsContent = `// ${metadata.title}
// ${metadata.description}

const ${varName} = ${JSON.stringify(program, null, 2)};

export default ${varName};
`;

  return jsContent;
}

/**
 * Generate index.js that imports all programs
 */
function generateIndex(programIds) {
  let indexContent = `// Auto-generated index file for all DSP programs
// Total programs: ${programIds.length}
// Generated: ${new Date().toISOString()}

`;

  // Import statements
  programIds.forEach(id => {
    const varName = id.replace(/-/g, '_');
    indexContent += `import ${varName} from './programs/${id}.js';\n`;
  });

  indexContent += '\nconst programs = [\n';
  programIds.forEach(id => {
    const varName = id.replace(/-/g, '_');
    indexContent += `  ${varName},\n`;
  });
  indexContent += '];\n\nexport default programs;\n';

  return indexContent;
}

/**
 * Main generation function
 */
function generatePages() {
  console.log('🚀 Starting page generation from Python files...\n');

  // Ensure directories exist
  if (!fs.existsSync(pythonDir)) {
    console.error(`❌ Error: python/ directory not found at ${pythonDir}`);
    console.log('   Please create the python/ folder and add .py files');
    process.exit(1);
  }

  if (!fs.existsSync(programsDir)) {
    fs.mkdirSync(programsDir, { recursive: true });
    console.log('✓ Created src/data/programs/ directory');
  }

  // Read all Python files
  const pyFiles = fs.readdirSync(pythonDir)
    .filter(file => file.endsWith('.py'))
    .sort();

  if (pyFiles.length === 0) {
    console.log('⚠ No Python files found in python/ directory');
    return;
  }

  console.log(`📂 Found ${pyFiles.length} Python files\n`);

  const programIds = [];
  let generated = 0;
  let errors = 0;

  // Process each Python file
  pyFiles.forEach(pyFile => {
    try {
      const pyFilePath = path.join(pythonDir, pyFile);
      const pythonCode = fs.readFileSync(pyFilePath, 'utf-8');

      // Generate JS module
      const jsContent = generateProgramModule(pyFile, pythonCode);

      // Write JS file
      const jsFile = pyFile.replace('.py', '.js');
      const jsFilePath = path.join(programsDir, jsFile);
      fs.writeFileSync(jsFilePath, jsContent, 'utf-8');

      const programId = path.basename(pyFile, '.py').toLowerCase();
      programIds.push(programId);

      console.log(`  ✓ Generated ${jsFile}`);
      generated++;

    } catch (error) {
      console.error(`  ✗ Error processing ${pyFile}:`, error.message);
      errors++;
    }
  });

  // Generate index.js
  try {
    const indexContent = generateIndex(programIds);
    fs.writeFileSync(indexPath, indexContent, 'utf-8');
    console.log(`\n✓ Generated src/data/index.js with ${programIds.length} programs`);
  } catch (error) {
    console.error(`\n✗ Error generating index.js:`, error.message);
    errors++;
  }

  // Summary
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Generation complete!`);
  console.log(`✓ Generated: ${generated} program modules`);
  if (errors > 0) {
    console.log(`✗ Errors: ${errors}`);
  }
  console.log(`📁 Output: src/data/programs/`);
  console.log(`${'='.repeat(60)}\n`);
}

export { generatePages };

// Run if called directly (always run if this file is executed)
generatePages();
