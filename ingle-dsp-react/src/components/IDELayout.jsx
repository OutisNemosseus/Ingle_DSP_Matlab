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
      let codeToRun = compilerCode

      // 如果之后要加参数替换，可以在这里恢复：
      // Object.keys(params).forEach(key => {
      //   const v = params[key]
      //   const pattern = new RegExp(`\\{\\{${key}\\}\\}`, 'g')
      //   codeToRun = codeToRun.replace(
      //     pattern,
      //     typeof v === 'string' ? `"${v}"` : v
      //   )
      // })

      // ⭐ 包一层 Python，用 StringIO 抓 stdout
      const wrappedCode = `
import sys, io, traceback

_stdout_buffer = io.StringIO()
_stdout_backup = sys.stdout
sys.stdout = _stdout_buffer

try:
${codeToRun.split('\n').map(line => '    ' + line).join('\n')}
except Exception:
    traceback.print_exc()
finally:
    sys.stdout = _stdout_backup

_stdout = _stdout_buffer.getvalue()
_stdout
`

      console.log('[Run] runPython sync start (wrapped), length =', wrappedCode.length)

      const result = pyodide.runPython(wrappedCode)
      console.log('[Run] runPython sync returned (raw):', result)

      // 取出 stdout 文本（可能是 PyProxy，也可能是直接 string）
      let stdout = ''
      if (result && typeof result.toJs === 'function') {
        const jsVal = result.toJs()
        result.destroy && result.destroy()
        stdout = String(jsVal ?? '')
      } else {
        stdout = String(result ?? '')
      }

      console.log('[Run] captured stdout length =', stdout.length)
      console.log('[Run] stdout content (first 200 chars):', stdout.substring(0, 200))

      // 从 stdout 里找 data:image/png;base64,...
      let imgB64 = null
      const match = stdout.match(/data:image\/png;base64,([A-Za-z0-9+/=]+)/)
      if (match) {
        imgB64 = match[1]              // 纯 base64
        stdout = stdout.replace(match[0], '').trim()  // 把整段 data URL 从文本里删掉
        console.log('[Run] extracted plot base64 length =', imgB64.length)
      } else {
        console.log('[Run] no plot data found in stdout')
      }

      if (imgB64) {
        setPlotData(imgB64)
      }

      setTextOutput(stdout || 'Code executed (no output)')

    } catch (err) {
      console.error('[Run] error in wrapped run:', err)
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
