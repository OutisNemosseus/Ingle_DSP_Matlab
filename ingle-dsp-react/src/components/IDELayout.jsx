import { useState, useEffect } from 'react'
import PlotOutput from './PlotOutput'
import TextOutput from './TextOutput'
import './IDELayout.css'

function IDELayout({ pyodide, program }) {
  const [activeTab, setActiveTab] = useState('python')
  const [pythonCode, setPythonCode] = useState(program.pythonCode || '')
  const [compilerCode, setCompilerCode] = useState(program.pythonCode || '')
  const [params, setParams] = useState(program.defaultParams || {})
  const [plotData, setPlotData] = useState(null)
  const [textOutput, setTextOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setPythonCode(program.pythonCode || '')
    setCompilerCode(program.pythonCode || '')
    setParams(program.defaultParams || {})
    setPlotData(null)
    setTextOutput('')
    setError(null)
    setActiveTab('python')
  }, [program])

  const handleParamChange = (paramName, value) => {
    setParams(prev => ({
      ...prev,
      [paramName]: value
    }))
  }

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      alert('Code copied to clipboard!')
    })
  }

  const runCode = async () => {
    console.log('[Run] clicked')

    if (!pyodide) {
      setError('Pyodide not ready')
      return
    }

    setIsRunning(true)
    setError(null)
    setPlotData(null)
    setTextOutput('')

    try {
      let codeToRun = activeTab === 'compiler' ? compilerCode : pythonCode

      Object.keys(params).forEach(key => {
        const v = params[key]
        const pattern = new RegExp(`\\{\\{${key}\\}\\}`, 'g')
        codeToRun = codeToRun.replace(pattern, typeof v === 'string' ? `"${v}"` : v)
      })

      const wrappedCode = `
import sys, io, traceback
_stdout_buffer = io.StringIO()
sys.stdout = _stdout_buffer

try:
${codeToRun.split("\n").map(line => "    " + line).join("\n")}
except Exception:
    traceback.print_exc()

sys.stdout = sys.__stdout__
_stdout_buffer.getvalue()
`

      console.log('[Run] runPythonAsync start')
      const result = await Promise.race([
        pyodide.runPythonAsync(wrappedCode),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Python execution timeout")), 8000))
      ])

      console.log('[Run] runPythonAsync resolved')

      const text = result || ''

      // Check if output contains plot data
      let plotDataResult = null
      let cleanText = text

      if (text && text.includes('data:image/png;base64,')) {
        const match = text.match(/data:image\/png;base64,([A-Za-z0-9+/=]+)/)
        if (match) {
          plotDataResult = match[1]
          cleanText = text.replace(/data:image\/png;base64,[A-Za-z0-9+/=]+/, '').trim()
          console.log('[Run] found plot data')
        }
      }

      if (plotDataResult) {
        setPlotData(plotDataResult)
      }

      setTextOutput(cleanText || 'Code executed successfully (no output)')

    } catch (err) {
      console.error('[Run] error:', err)
      setError(err.toString())
    } finally {
      console.log('[Run] finally: setIsRunning(false)')
      setIsRunning(false)
    }
  }

  // Build tabs array
  const tabs = []
  if (program.matlabCode) {
    tabs.push({ id: 'matlab', label: 'MATLAB', code: program.matlabCode })
  }
  tabs.push({ id: 'python', label: 'Python', code: pythonCode })
  tabs.push({ id: 'compiler', label: 'Compiler Editor', code: compilerCode })

  const currentCode = activeTab === 'matlab' ? program.matlabCode :
                      activeTab === 'python' ? pythonCode :
                      compilerCode

  return (
    <div className="ide-layout">
      <div className="ide-left-panel">
        {/* Tab Bar */}
        <div className="ide-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`ide-tab ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Code Display / Editor */}
        <div className="ide-code-container">
          <div className="ide-code-header">
            <span className="ide-code-title">
              {activeTab === 'matlab' ? 'Original MATLAB Code' :
               activeTab === 'python' ? 'Auto-converted Python Code' :
               'Edit and Compile Your Code'}
            </span>
            <button
              onClick={() => copyToClipboard(currentCode)}
              className="ide-copy-button"
            >
              📋 Copy
            </button>
          </div>

          {activeTab === 'compiler' ? (
            <textarea
              className="ide-code-editor"
              value={compilerCode}
              onChange={(e) => setCompilerCode(e.target.value)}
              placeholder="Write or paste your Python code here..."
              spellCheck={false}
            />
          ) : (
            <pre className="ide-code-display">
              <code>{currentCode || '// No code available'}</code>
            </pre>
          )}
        </div>

        {/* Parameters Section */}
        {program.params && program.params.length > 0 && (
          <div className="ide-params-section">
            <div className="ide-params-header">Parameters</div>
            <div className="ide-params-grid">
              {program.params.map(param => (
                <div key={param.name} className="ide-param-input">
                  <label>
                    {param.label}
                    {param.unit && <span className="param-unit">({param.unit})</span>}
                  </label>
                  <input
                    type={param.step === null ? 'text' : 'number'}
                    step={param.step || undefined}
                    value={params[param.name] !== undefined ? params[param.name] : param.default}
                    onChange={(e) => handleParamChange(
                      param.name,
                      param.step === null ? e.target.value : parseFloat(e.target.value)
                    )}
                    className="param-input-field"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Wikipedia Links Section */}
        {program.wikipediaLinks && program.wikipediaLinks.length > 0 && (
          <div className="ide-wikipedia-section">
            <div className="ide-wikipedia-header">📚 Related Wikipedia Articles</div>
            <div className="ide-wikipedia-links">
              {program.wikipediaLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wikipedia-link"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Run Button */}
        <div className="ide-run-section">
          <button
            onClick={runCode}
            disabled={isRunning || !pyodide}
            className="ide-run-button"
          >
            {isRunning ? '⏳ Running...' : '▶️ Run Code'}
          </button>
          {!pyodide && (
            <p className="ide-run-hint">Waiting for Python environment...</p>
          )}
        </div>
      </div>

      <div className="ide-right-panel">
        {/* Output Section */}
        <div className="ide-output-header">Output</div>

        {error && (
          <div className="ide-error">
            <strong>Error:</strong>
            <pre>{error}</pre>
          </div>
        )}

        {plotData && <PlotOutput plotData={plotData} />}

        {textOutput && <TextOutput output={textOutput} />}

        {!error && !plotData && !textOutput && !isRunning && (
          <div className="ide-no-output">
            <p>Click "Run Code" to execute the program</p>
            <p className="ide-hint">
              Output will appear here (text, plots, or errors)
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default IDELayout
