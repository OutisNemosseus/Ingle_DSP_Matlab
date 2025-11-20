import './TextOutput.css'

function TextOutput({ output }) {
  if (!output || output.trim() === '') {
    return null
  }

  return (
    <div className="text-output">
      <div className="text-output-header">
        <span className="text-output-title">📄 Text Output</span>
      </div>
      <pre className="text-output-content">{output}</pre>
    </div>
  )
}

export default TextOutput
