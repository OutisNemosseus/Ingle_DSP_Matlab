# New Architecture Guide

## Overview

This project has been redesigned with a **source-of-truth** architecture where Python files drive the web application. Simply add a `.py` file to the `python/` folder, and a webpage will be automatically generated for it.

## Directory Structure

```
ingle-dsp-react/
├── python/                          # SOURCE OF TRUTH - All Python programs
│   ├── ex020100.py
│   ├── ex020200.py
│   └── ... (your Python programs)
│
├── scripts/                         # Build automation scripts
│   ├── generate-pages.js           # Generates JS modules from Python files
│   ├── watch-python.js             # Watches python/ and auto-regenerates
│   └── extract-python.js           # One-time migration script (already run)
│
├── src/
│   ├── data/
│   │   ├── programs/               # AUTO-GENERATED - Do not edit manually!
│   │   │   ├── ex020100.js
│   │   │   └── ...
│   │   └── index.js                # AUTO-GENERATED - Program registry
│   ├── components/
│   │   ├── IDELayout.jsx
│   │   ├── ProgramList.jsx
│   │   └── ...
│   └── App.jsx
│
└── package.json
```

## How It Works

### 1. Add a Python Program

Simply create or paste a `.py` file in the `python/` folder:

```python
#!/usr/bin/env python3
# Title: My Amazing DSP Program
# Description: Demonstrates signal processing
# Chapter: 02
# Source: Custom

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Your DSP code here
x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.figure()
plt.plot(x, y)
plt.title('Sine Wave')
plt.xlabel('Time')
plt.ylabel('Amplitude')

# Save plot to base64 (required for web display)
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
```

### 2. Generate Webpages

Run the generator to create JS modules:

```bash
npm run generate
```

This will:
- Scan all `.py` files in `python/`
- Extract metadata from Python comments
- Generate corresponding `.js` modules in `src/data/programs/`
- Update `src/data/index.js` with all programs

### 3. Auto-Watch Mode (Recommended)

For development, use watch mode to automatically regenerate when Python files change:

```bash
npm run generate:watch
```

This will:
- Watch the `python/` folder for changes
- Automatically regenerate pages when you add/edit/delete `.py` files
- Keep running until you press Ctrl+C

### 4. Run the Development Server

Start the Vite dev server:

```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.

## Available NPM Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run generate` | Generate JS modules from Python files (one-time) |
| `npm run generate:watch` | Watch python/ and auto-regenerate on changes |
| `npm run extract` | Extract Python from JS (migration script - already run) |

## Python File Metadata

The generator extracts metadata from comments at the top of your Python file:

```python
#!/usr/bin/env python3
# Title: Display name for the program
# Description: Longer description (optional)
# Chapter: 02
# Source: Where this came from
```

- **Title**: Displayed as the program name (required)
- **Description**: Additional details (optional, defaults to title)
- **Chapter**: Used for categorization (optional)
- **Source**: Attribution (optional)

If no metadata is provided, the filename will be used as the title.

## Workflow Examples

### Adding a New Program

1. Create `python/my_program.py`
2. Add your DSP code
3. Run `npm run generate` or use watch mode
4. The webpage is automatically created!

### Editing an Existing Program

1. Edit `python/ex020100.py`
2. Save the file
3. If using watch mode, regeneration happens automatically
4. Otherwise, run `npm run generate`
5. Refresh your browser

### Organizing by Chapters

You can organize Python files by chapter:

```
python/
├── chapter-02/
│   ├── ex020100.py
│   └── ex020200.py
├── chapter-03/
│   └── ex030100.py
└── custom/
    └── my_program.py
```

The generator will recursively scan all subdirectories.

## Technical Details

### Pyodide Integration

The app uses Pyodide to run Python code in the browser:
- Python code is executed client-side via WebAssembly
- NumPy and Matplotlib are loaded automatically
- Plots are converted to base64 PNG images for display

### Generated JS Module Format

Each Python file generates a JS module like this:

```javascript
const ex020100 = {
  id: "ex020100",
  title: "ex020100",
  displayName: "Chapter 02: Example 02.01",
  description: "Signal Synthesis Example",
  category: "DSP - Chapter 02",
  chapter: "02",
  source: "python",
  pythonCode: "... full Python code ...",
  defaultParams: {},
  params: [],
  tags: ["chapter02", "dsp", "ex020100"],
  wikipediaLinks: [...]
};

export default ex020100;
```

### React Router Integration

The app automatically creates routes for each program:
- `/` - List of all programs
- `/program/ex020100` - Individual program page with IDE

## Benefits of New Architecture

1. **Simple Workflow**: Just drop `.py` files in the folder
2. **Single Source of Truth**: Python files are the authoritative source
3. **Version Control Friendly**: Python files are easier to diff than embedded JS strings
4. **Automation**: No manual JS module creation
5. **Scalability**: Easy to add hundreds of programs
6. **Hot Reload**: Watch mode + Vite HMR for instant updates
7. **Clean Separation**: Build scripts separate from source code

## Migration Notes

The old architecture had Python code embedded in JS files. The migration was completed using:

```bash
npm run extract
```

This created all the `.py` files in the `python/` folder from the existing JS modules. You don't need to run this again.

## Troubleshooting

### No programs showing up

1. Check that `python/` folder exists and contains `.py` files
2. Run `npm run generate` to regenerate
3. Check console for errors

### Program not updating

1. Make sure you saved the `.py` file
2. Regenerate with `npm run generate`
3. Hard refresh your browser (Ctrl+Shift+R)

### Watch mode not working

1. Make sure no other process is using port 5173
2. Check that the `python/` folder exists
3. Try stopping and restarting watch mode

## Future Enhancements

Possible improvements to consider:
- Support for multiple chapters in subdirectories
- Parameter extraction from Python docstrings
- Automatic test generation
- Export/import functionality for programs
- Syntax highlighting in the IDE
- Code execution time tracking

---

**Last Updated**: 2025-11-20
