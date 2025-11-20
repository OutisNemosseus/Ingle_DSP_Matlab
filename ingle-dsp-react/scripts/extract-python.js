#!/usr/bin/env node
/**
 * Extract Python code from existing JS program files
 * This is a one-time migration script
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.join(__dirname, '..');
const programsDir = path.join(projectRoot, 'src', 'data', 'programs');
const pythonDir = path.join(projectRoot, 'python');

// Create python directory
if (!fs.existsSync(pythonDir)) {
  fs.mkdirSync(pythonDir, { recursive: true });
  console.log('✓ Created python/ directory');
}

// Read all JS files in programs directory
const jsFiles = fs.readdirSync(programsDir)
  .filter(file => file.endsWith('.js') && file !== 'index.js' && file !== 'use.js' && file !== 'plot.js');

console.log(`\nFound ${jsFiles.length} program files to extract\n`);

let extracted = 0;
let skipped = 0;

jsFiles.forEach(jsFile => {
  try {
    const jsFilePath = path.join(programsDir, jsFile);
    const content = fs.readFileSync(jsFilePath, 'utf-8');

    // Extract the pythonCode property using regex
    const pythonCodeMatch = content.match(/"pythonCode":\s*"((?:[^"\\]|\\.)*)"/s);

    if (!pythonCodeMatch) {
      console.log(`⚠ No pythonCode found in ${jsFile}`);
      skipped++;
      return;
    }

    // Unescape the Python code
    let pythonCode = pythonCodeMatch[1]
      .replace(/\\n/g, '\n')
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'")
      .replace(/\\\\/g, '\\')
      .replace(/\\r/g, '\r')
      .replace(/\\t/g, '\t');

    // Extract metadata for the header
    const titleMatch = content.match(/"displayName":\s*"([^"]+)"/);
    const descMatch = content.match(/"description":\s*"([^"]+)"/);
    const chapterMatch = content.match(/"chapter":\s*"([^"]+)"/);

    const title = titleMatch ? titleMatch[1].replace(/\\r/g, '').trim() : '';
    const description = descMatch ? descMatch[1].replace(/\\r/g, '').trim() : '';
    const chapter = chapterMatch ? chapterMatch[1] : '';

    // Create Python file with metadata header
    const pyFileName = jsFile.replace('.js', '.py');
    const pyFilePath = path.join(pythonDir, pyFileName);

    // Add metadata as Python comments at the top
    let pyFileContent = '#!/usr/bin/env python3\n';
    if (title) {
      pyFileContent += `# Title: ${title}\n`;
    }
    if (description && description !== title) {
      pyFileContent += `# Description: ${description}\n`;
    }
    if (chapter) {
      pyFileContent += `# Chapter: ${chapter}\n`;
    }
    pyFileContent += `# Source: Ingle DSP MATLAB Programs\n\n`;
    pyFileContent += pythonCode;

    fs.writeFileSync(pyFilePath, pyFileContent, 'utf-8');
    console.log(`✓ Extracted ${pyFileName}`);
    extracted++;

  } catch (error) {
    console.error(`✗ Error processing ${jsFile}:`, error.message);
    skipped++;
  }
});

console.log(`\n${'='.repeat(60)}`);
console.log(`Extraction complete!`);
console.log(`✓ Extracted: ${extracted} files`);
console.log(`⚠ Skipped: ${skipped} files`);
console.log(`📁 Python files location: python/`);
console.log(`${'='.repeat(60)}\n`);
