#!/usr/bin/env node
/**
 * Watch python/ folder for changes and auto-regenerate pages
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { generatePages } from './generate-pages.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.join(__dirname, '..');
const pythonDir = path.join(projectRoot, 'python');

console.log('👀 Watching python/ folder for changes...\n');
console.log(`📂 Watching: ${pythonDir}`);
console.log('   Press Ctrl+C to stop\n');

// Initial generation
console.log('🔄 Running initial generation...\n');
generatePages();
console.log('\n✅ Ready! Watching for changes...\n');

// Debounce timer to avoid multiple rapid regenerations
let debounceTimer = null;
const DEBOUNCE_DELAY = 500; // ms

// Watch the python directory
fs.watch(pythonDir, { recursive: true }, (eventType, filename) => {
  if (!filename || !filename.endsWith('.py')) {
    return;
  }

  console.log(`📝 Detected ${eventType} in ${filename}`);

  // Clear existing timer
  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }

  // Set new timer
  debounceTimer = setTimeout(() => {
    console.log('🔄 Regenerating pages...\n');
    try {
      generatePages();
      console.log('\n✅ Regeneration complete! Still watching...\n');
    } catch (error) {
      console.error('❌ Error during regeneration:', error.message);
    }
  }, DEBOUNCE_DELAY);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n\n👋 Stopped watching. Goodbye!\n');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n\n👋 Stopped watching. Goodbye!\n');
  process.exit(0);
});
