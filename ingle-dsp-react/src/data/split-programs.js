// Script to split chapter files into individual program files
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chapters = ['02', '03', '04', '05', '06', '07', '08'];
const programsDir = path.join(__dirname, 'programs');

// Ensure programs directory exists
if (!fs.existsSync(programsDir)) {
  fs.mkdirSync(programsDir, { recursive: true });
}

let allPrograms = [];

chapters.forEach(chapterNum => {
  const chapterFile = path.join(__dirname, 'matlab', `dsp-chapter-${chapterNum}.js`);

  if (!fs.existsSync(chapterFile)) {
    console.log(`Warning: ${chapterFile} not found`);
    return;
  }

  // Read the chapter file
  const content = fs.readFileSync(chapterFile, 'utf8');

  // Extract the programs array using regex
  const match = content.match(/const chapter\d+Programs = (\[[\s\S]*\]);?\s*export default/);

  if (!match) {
    console.log(`Warning: Could not parse ${chapterFile}`);
    return;
  }

  // Eval the array (we need to handle the JSON safely)
  let programs;
  try {
    programs = eval(match[1]);
  } catch (e) {
    console.log(`Error parsing ${chapterFile}:`, e.message);
    return;
  }

  console.log(`\nProcessing Chapter ${chapterNum}: ${programs.length} programs`);

  programs.forEach((program, index) => {
    const programId = program.id;
    const fileName = `${programId}.js`;
    const filePath = path.join(programsDir, fileName);

    // Create the individual program file
    const fileContent = `// ${program.displayName || program.title}
// ${program.description}

const ${programId.replace(/-/g, '_')} = ${JSON.stringify(program, null, 2)};

export default ${programId.replace(/-/g, '_')};
`;

    fs.writeFileSync(filePath, fileContent, 'utf8');
    console.log(`  ✓ Created ${fileName}`);

    allPrograms.push(programId);
  });
});

// Create index.js that imports all programs
let indexContent = `// Auto-generated index file for all DSP programs
// Total programs: ${allPrograms.length}

`;

allPrograms.forEach(id => {
  const varName = id.replace(/-/g, '_');
  indexContent += `import ${varName} from './programs/${id}.js';\n`;
});

indexContent += `\nconst programs = [\n`;
allPrograms.forEach(id => {
  const varName = id.replace(/-/g, '_');
  indexContent += `  ${varName},\n`;
});
indexContent += `];\n\nexport default programs;\n`;

fs.writeFileSync(path.join(__dirname, 'index.js'), indexContent, 'utf8');
console.log(`\n✓ Created index.js with ${allPrograms.length} programs`);

console.log('\n✅ Done! All programs have been split into individual files.');
