# Ingle DSP Programs - Interactive MATLAB to Python Converter

An interactive web application for Digital Signal Processing (DSP) programs from Ingle & Proakis's "Digital Signal Processing using MATLAB". Convert MATLAB code to Python and run it directly in your browser using Pyodide.

## Features

- **Main Page with Hashtag Filtering**: Browse programs with dynamic tag-based filtering
- **Search Functionality**: Search programs by name, description, or ID
- **GitHub Header**: Direct links to repository and educational resources
- **Wikipedia Integration**: Educational links for each DSP concept
- **Three-Tab IDE**:
  - **MATLAB Tab**: View original MATLAB code
  - **Python Tab**: See auto-converted Python code
  - **Compiler Tab**: Edit and customize your own code
- **Pyodide Integration**: Run Python code with NumPy and Matplotlib in the browser
- **Interactive Parameters**: Modify program parameters with live inputs
- **Plot Output**: Matplotlib plots rendered as images
- **Text Output**: Console output and results

## Project Structure

```
ingle-dsp-react/
├── src/
│   ├── components/
│   │   ├── ProgramList.jsx         # Main listing page with search/hashtags
│   │   ├── ProgramList.css
│   │   ├── IDELayout.jsx           # IDE with Python/MATLAB/Compiler tabs
│   │   ├── IDELayout.css
│   │   ├── PlotOutput.jsx          # Matplotlib plot display
│   │   ├── PlotOutput.css
│   │   ├── TextOutput.jsx          # Text output display
│   │   └── TextOutput.css
│   ├── data/
│   │   ├── index.js                # Main programs export
│   │   └── matlab/
│   │       ├── index.js            # MATLAB programs aggregator
│   │       └── dsp-chapter-XX.js   # Chapter-specific programs
│   ├── App.jsx                     # Main app with Pyodide setup
│   ├── App.css
│   ├── main.jsx                    # React entry point
│   └── index.css
├── convert-programs.cjs            # MATLAB to Python converter
├── package.json
├── vite.config.js
└── index.html
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd "C:\Users\tongs\OneDrive\桌面\Berkeley Extension\Ingle_DSP_Matlab\ingle-dsp-react"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

## Converting MATLAB Programs

The project includes an automated conversion script to transform MATLAB files into Python code.

### Running the Converter

```bash
node convert-programs.cjs
```

This script will:
1. Scan all `CHAP_XX` directories in the parent folder
2. Convert each `.m` file to Python using the `matlabToPython` function
3. Generate chapter-specific data files in `src/data/matlab/`
4. Create an index file aggregating all programs

### Conversion Features

The `matlabToPython` function handles:
- Function declarations removal
- Comment conversion (`%` → `#`)
- Array range syntax (`start:end` → `np.arange()`)
- Element-wise operators (`.^`, `.*`, `./`)
- Math functions (`cos`, `sin`, `sqrt`, etc.)
- Loop conversions (`for` loops to `range()`)
- Conditional statements (`if`, `elseif`, `else`)
- Plotting commands (`figure`, `plot`, `subplot`, etc.)
- Automatic import statements
- Plot-to-base64 conversion for display

### Manual Conversion

For individual files, you can manually create program objects in `src/data/matlab/dsp-chapter-XX.js`:

```javascript
{
  id: 'program-id',
  title: 'Program Title',
  displayName: 'Display Name',
  description: 'Program description',
  category: 'DSP - Chapter X',
  chapter: 'X',
  source: 'matlab',
  pythonCode: '...converted Python code...',
  matlabCode: '...original MATLAB code...',
  defaultParams: {},
  params: [],
  tags: ['tag1', 'tag2'],
  wikipediaLinks: [
    {
      title: 'Topic',
      url: 'https://en.wikipedia.org/wiki/Topic'
    }
  ]
}
```

## Program Data Structure

### Program Object

Each program should follow this structure:

```javascript
{
  // Identification
  id: string,                    // Unique identifier
  title: string,                 // Program title
  displayName: string,           // Display name (optional)
  description: string,           // Brief description

  // Organization
  category: string,              // Category for grouping
  chapter: string,               // Chapter number
  source: string,                // 'matlab' or 'c'

  // Code
  pythonCode: string,            // Converted Python code
  matlabCode: string,            // Original MATLAB code

  // Parameters (optional)
  defaultParams: object,         // Default parameter values
  params: [                      // Parameter definitions
    {
      name: string,              // Parameter variable name
      label: string,             // Display label
      unit: string,              // Unit (optional)
      default: number|string,    // Default value
      step: number|null          // Step for number input (null for text)
    }
  ],

  // Educational (optional)
  tags: string[],                // Tags for filtering
  wikipediaLinks: [              // Educational resources
    {
      title: string,
      url: string
    }
  ]
}
```

## Building for Production

```bash
npm run build
```

This creates a production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Key Components

### ProgramList Component

Features:
- Search bar for filtering programs
- Hashtag-based tag filtering
- Category grouping
- Program cards with metadata
- Links to GitHub and Wikipedia

### IDELayout Component

Features:
- Three-tab interface (MATLAB, Python, Compiler)
- Code display and editor
- Parameter input section
- Wikipedia educational links
- Run button with status indicators

### Pyodide Integration

The app loads Pyodide on startup with:
- NumPy for numerical computing
- Matplotlib for plotting
- Base64 encoding for plot display

## Customization

### Adding New Programs

1. Place MATLAB files in `CHAP_XX/` directories
2. Run `node convert-programs.cjs`
3. Review and edit generated files in `src/data/matlab/`
4. Add tags, Wikipedia links, and parameters as needed

### Styling

- Global styles: `src/index.css`
- App styles: `src/App.css`
- Component styles: `src/components/*.css`

Color scheme:
- Primary: `#667eea` (purple-blue)
- Secondary: `#764ba2` (purple)
- Text: `#2c3e50` (dark blue-gray)

### Adding Parameters

To make a program interactive with user inputs:

```javascript
params: [
  {
    name: 'frequency',
    label: 'Frequency',
    unit: 'Hz',
    default: 10,
    step: 0.1
  }
],
defaultParams: {
  frequency: 10
}
```

In the Python code, use `{{frequency}}` as a placeholder, which will be replaced with the user's input value.

## Technologies Used

- **React 18** - UI framework
- **React Router** - Navigation
- **Vite** - Build tool
- **Pyodide** - Python in browser
- **NumPy** - Numerical computing
- **Matplotlib** - Plotting

## License

This project is for educational purposes based on Ingle & Proakis's DSP textbook.

## Contributing

To add new features or fix issues:

1. Create programs following the data structure
2. Test conversions thoroughly
3. Update documentation
4. Ensure plots render correctly

## Troubleshooting

### Pyodide Loading Issues

If Pyodide fails to load:
- Check browser console for errors
- Ensure stable internet connection (first load downloads ~100MB)
- Try clearing browser cache

### Conversion Issues

If MATLAB conversion produces errors:
- Review the original MATLAB code
- Check for unsupported syntax
- Manually edit the generated Python code in the Compiler tab

### Plot Display Issues

If plots don't display:
- Ensure code includes base64 encoding snippet
- Check that Matplotlib is imported
- Verify plot commands are correct

## Future Enhancements

- [ ] Add more DSP programs from remaining chapters
- [ ] Implement code syntax highlighting
- [ ] Add export functionality for Python code
- [ ] Create user code sharing feature
- [ ] Add interactive parameter sliders
- [ ] Implement real-time code validation

## Contact

For questions or issues, please open an issue on the GitHub repository.
