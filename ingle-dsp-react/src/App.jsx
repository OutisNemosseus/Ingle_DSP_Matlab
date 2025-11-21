import { useState, useEffect } from 'react'
import { Routes, Route, useParams, Link, Navigate } from 'react-router-dom'
import { ReactCusdis } from 'react-cusdis'
import ProgramList from './components/ProgramList'
import IDELayout from './components/IDELayout'
import programs from './data/index.js'
import './App.css'

function App() {
  const [pyodide, setPyodide] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loadingStatus, setLoadingStatus] = useState('Loading Python environment...')

  useEffect(() => {
    let cancelled = false

    async function initPyodide() {
      console.log('[Init] start')
      try {
        setLoadingStatus('Loading Pyodide... (First load may be slow, subsequent loads will be cached)')

        // Check if script already exists
        const existingScript = document.querySelector('script[src*="pyodide.js"]')
        if (existingScript) {
          console.log('[Init] pyodide script already exists, removing')
          existingScript.remove()
        }

        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.1/full/pyodide.js'
        script.async = true

        script.onload = async () => {
          if (cancelled) {
            console.log('[Init] cancelled during script load')
            return
          }

          try {
            console.log('[Init] script loaded, initializing pyodide')
            const pyodideInstance = await window.loadPyodide({
              indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.1/full/'
            })

            if (cancelled) {
              console.log('[Init] cancelled after loadPyodide')
              return
            }

            console.log('[Init] pyodide loaded, version:', pyodideInstance.version)

            setLoadingStatus('📦 Loading NumPy and Matplotlib...')
            await pyodideInstance.loadPackage(['numpy', 'matplotlib'])
            console.log('[Init] packages loaded')

            if (cancelled) {
              console.log('[Init] cancelled after loadPackage')
              return
            }

            setLoadingStatus('🔧 Initializing Python environment...')
            await pyodideInstance.runPythonAsync(`
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import numpy as np
import io
import base64
print("Python environment initialized")
            `)
            console.log('[Init] Python environment initialized')

            if (cancelled) {
              console.log('[Init] cancelled after Python init')
              return
            }

            setPyodide(pyodideInstance)
            setLoading(false)
            setLoadingStatus('✅ Ready!')
            console.log('[Init] complete')
          } catch (error) {
            console.error('[Init] error during initialization:', error)
            setLoadingStatus('❌ Failed to initialize: ' + error.message)
          }
        }

        script.onerror = () => {
          console.error('[Init] failed to load pyodide script')
          setLoadingStatus('❌ Failed to load Pyodide script')
        }

        document.head.appendChild(script)
      } catch (error) {
        console.error('[Init] error in initPyodide:', error)
        setLoadingStatus('❌ Error: ' + error.message)
      }
    }

    initPyodide()

    return () => {
      console.log('[Init] cleanup')
      cancelled = true
    }
  }, [])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <h2>Ingle DSP Programs</h2>
          <p className="loading-status">{loadingStatus}</p>
          <p className="loading-hint">Setting up Python runtime environment with NumPy and Matplotlib...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<ProgramList />} />
        <Route path="/program/:programId" element={<ProgramPage pyodide={pyodide} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

function ProgramPage({ pyodide }) {
  const { programId } = useParams()
  const program = programs.find(p => p.id === programId)

  if (!program) {
    return (
      <div className="program-not-found">
        <h2>Program not found</h2>
        <Link to="/" className="back-link">← Back to list</Link>
      </div>
    )
  }

  return (
    <div className="program-page">
      <div className="program-header">
        <Link to="/" className="back-link">← Back to list</Link>
        <h1>{program.displayName || program.title}</h1>
        {program.description && <p className="subtitle">{program.description}</p>}
      </div>
      <IDELayout pyodide={pyodide} program={program} />
      {pyodide && (
        <div className="cusdis-wrapper">
          <ReactCusdis
            lang="zh-cn"
            attrs={{
              appId: 'ed2e19cc-6950-40bd-89ec-89c8b5f7f07f',
              host: 'https://cusdis.com',
              pageId: programId,
              pageUrl: window.location.href,
              pageTitle: program.displayName || program.title
            }}
          />
        </div>
      )}
    </div>
  )
}

export default App
