import './PlotOutput.css'

function PlotOutput({ plotData }) {
  if (!plotData) {
    return null
  }

  return (
    <div className="plot-output">
      <div className="plot-header">
        <span className="plot-title">📊 Plot Output</span>
      </div>
      <div className="plot-container">
        <img
          src={`data:image/png;base64,${plotData}`}
          alt="Generated plot"
          className="plot-image"
        />
      </div>
    </div>
  )
}

export default PlotOutput
