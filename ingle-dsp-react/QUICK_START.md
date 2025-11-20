# Quick Start Guide - New Architecture

## What Changed?

Your project now has a **much simpler workflow**:

1. All Python programs are in the `python/` folder
2. A Node.js script automatically generates webpages from Python files
3. Just add a `.py` file and run the generator!

## Daily Workflow

### Option 1: Manual Generation (Simple)

```bash
# 1. Add or edit a Python file in python/ folder
# 2. Generate the webpages
npm run generate

# 3. Start the dev server
npm run dev

# 4. Open http://localhost:5173
```

### Option 2: Watch Mode (Recommended)

```bash
# 1. Start watch mode (auto-regenerates on changes)
npm run generate:watch

# 2. In another terminal, start dev server
npm run dev

# 3. Open http://localhost:5173
# 4. Edit files in python/ - they auto-update!
```

## Adding a New Python Program

### Step 1: Create the Python File

Create `python/my_new_program.py`:

```python
#!/usr/bin/env python3
# Title: My DSP Program
# Description: Does cool signal processing
# Chapter: 02

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Your code here
t = np.linspace(0, 1, 1000)
signal = np.sin(2 * np.pi * 5 * t)

plt.figure()
plt.plot(t, signal)
plt.title('5 Hz Sine Wave')
plt.xlabel('Time (s)')
plt.ylabel('Amplitude')
plt.grid(True)

# Required: Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
```

### Step 2: Generate

```bash
npm run generate
```

### Step 3: View

Open `http://localhost:5173` and your program will be in the list!

## Key Folders

| Folder | Purpose | Edit? |
|--------|---------|-------|
| `python/` | Your Python programs | YES - Edit these! |
| `scripts/` | Build automation | NO - Unless adding features |
| `src/data/programs/` | Auto-generated JS | NO - Generated from python/ |
| `src/data/index.js` | Auto-generated index | NO - Generated from python/ |
| `src/components/` | React components | YES - UI changes |

## Important Rules

1. **Always edit Python files in `python/` folder**
2. **Never manually edit files in `src/data/programs/`** - they will be overwritten
3. **Run `npm run generate` after adding/editing Python files** (unless using watch mode)
4. **Include the base64 plot export code** in every Python file that generates plots

## Project Structure

```
ingle-dsp-react/
│
├── python/              👈 EDIT HERE - Your Python programs
│   ├── ex020100.py
│   └── your_program.py
│
├── scripts/             ⚙️ Build automation
│   ├── generate-pages.js
│   └── watch-python.js
│
└── src/
    ├── data/
    │   ├── programs/    🚫 AUTO-GENERATED - Don't edit!
    │   └── index.js     🚫 AUTO-GENERATED - Don't edit!
    │
    └── components/      👈 EDIT HERE - React UI
```

## Troubleshooting

**Q: My new program doesn't show up**
- A: Run `npm run generate` and refresh browser

**Q: Changes aren't appearing**
- A: Make sure you saved the `.py` file and regenerated

**Q: Can I organize Python files in folders?**
- A: Yes! The generator scans subdirectories recursively

**Q: How do I delete a program?**
- A: Delete the `.py` file and run `npm run generate`

## Next Steps

See `NEW_ARCHITECTURE.md` for full documentation.

---

**You're all set!** Just add Python files to `python/` and run `npm run generate`. 🚀
