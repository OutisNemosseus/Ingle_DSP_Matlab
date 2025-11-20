import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import programs from '../data/index.js'
import './ProgramList.css'

function ProgramList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTags, setSelectedTags] = useState(new Set())
  const [groupBy, setGroupBy] = useState('chapter') // 'chapter' or 'category'

  // Extract all unique tags from programs
  const allTags = useMemo(() => {
    const tagsSet = new Set()
    programs.forEach(program => {
      if (program.tags && Array.isArray(program.tags)) {
        program.tags.forEach(tag => tagsSet.add(tag))
      }
    })
    return Array.from(tagsSet).sort()
  }, [])

  // Filter programs based on search term and selected tags
  const filteredPrograms = useMemo(() => {
    return programs.filter(program => {
      // Check search term
      const matchesSearch = !searchTerm ||
        (program.displayName || program.title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (program.description || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (program.id || '').toLowerCase().includes(searchTerm.toLowerCase())

      // Check tags
      const matchesTags = selectedTags.size === 0 ||
        (program.tags && program.tags.some(tag => selectedTags.has(tag)))

      return matchesSearch && matchesTags
    })
  }, [searchTerm, selectedTags])

  // Group programs by chapter or category
  const groupedPrograms = useMemo(() => {
    const groups = {}
    filteredPrograms.forEach(program => {
      let groupKey
      if (groupBy === 'chapter') {
        groupKey = program.chapter ? `Chapter ${program.chapter}` : 'Other'
      } else {
        groupKey = program.category || 'Other'
      }

      if (!groups[groupKey]) {
        groups[groupKey] = []
      }
      groups[groupKey].push(program)
    })

    // Sort groups by key (so chapters are in order: Chapter 02, Chapter 03, etc.)
    const sortedGroups = {}
    Object.keys(groups).sort((a, b) => {
      if (a === 'Other') return 1
      if (b === 'Other') return -1
      return a.localeCompare(b)
    }).forEach(key => {
      sortedGroups[key] = groups[key]
    })

    return sortedGroups
  }, [filteredPrograms, groupBy])

  const toggleTag = (tag) => {
    const newSelectedTags = new Set(selectedTags)
    if (newSelectedTags.has(tag)) {
      newSelectedTags.delete(tag)
    } else {
      newSelectedTags.add(tag)
    }
    setSelectedTags(newSelectedTags)
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedTags(new Set())
  }

  return (
    <div className="program-list">
      {/* Header with GitHub link */}
      <div className="header-container">
        <div className="header-content">
          <h1 className="main-title">📊 Ingle DSP Programs</h1>
          <p className="subtitle">
            Digital Signal Processing with MATLAB - Convert & Run in Browser
          </p>
          <div className="header-links">
            <a
              href="https://www.amazon.com/Digital-Signal-Processing-Using-MATLAB/dp/0534371744"
              target="_blank"
              rel="noopener noreferrer"
              className="book-link"
            >
              📖 Book: DSP using MATLAB (Ingle & Proakis)
            </a>
            <a
              href="https://github.com/OutisNemosseus/Ingle_DSP_Matlab"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              GitHub Repository
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Digital_signal_processing"
              target="_blank"
              rel="noopener noreferrer"
              className="wikipedia-link"
            >
              📚 Wikipedia: Digital Signal Processing
            </a>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 Search programs by name, description, or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {(searchTerm || selectedTags.size > 0) && (
            <button onClick={clearFilters} className="clear-button">
              Clear Filters
            </button>
          )}
        </div>

        {/* Group By Toggle */}
        <div className="group-by-section">
          <span className="group-by-label">Group by:</span>
          <div className="group-by-buttons">
            <button
              onClick={() => setGroupBy('chapter')}
              className={`group-by-button ${groupBy === 'chapter' ? 'active' : ''}`}
            >
              📚 Chapter
            </button>
            <button
              onClick={() => setGroupBy('category')}
              className={`group-by-button ${groupBy === 'category' ? 'active' : ''}`}
            >
              📂 Category
            </button>
          </div>
        </div>

        {/* Hashtag Filter */}
        {allTags.length > 0 && (
          <div className="tags-section">
            <div className="tags-header">Filter by tags:</div>
            <div className="tags-container">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`tag-button ${selectedTags.has(tag) ? 'active' : ''}`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="results-count">
          Showing {filteredPrograms.length} of {programs.length} programs
        </div>
      </div>

      {/* Programs List */}
      <div className="programs-container">
        {Object.keys(groupedPrograms).length === 0 ? (
          <div className="no-results">
            <p>No programs found matching your filters.</p>
            <button onClick={clearFilters} className="clear-button">
              Clear Filters
            </button>
          </div>
        ) : (
          Object.entries(groupedPrograms).map(([category, categoryPrograms]) => (
            <div key={category} className="category-section">
              <h2 className="category-title">{category}</h2>
              <div className="programs-grid">
                {categoryPrograms.map(program => (
                  <Link
                    key={program.id}
                    to={`/program/${program.id}`}
                    className="program-card"
                  >
                    <div className="program-card-header">
                      <h3 className="program-title">
                        {program.displayName || program.title}
                      </h3>
                      <span className="program-id">{program.id}</span>
                    </div>
                    {program.description && (
                      <p className="program-description">{program.description}</p>
                    )}
                    {program.chapter && (
                      <div className="program-meta">
                        <span className="chapter-badge">Chapter {program.chapter}</span>
                      </div>
                    )}
                    {program.tags && program.tags.length > 0 && (
                      <div className="program-tags">
                        {program.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="program-tag">#{tag}</span>
                        ))}
                        {program.tags.length > 3 && (
                          <span className="program-tag-more">+{program.tags.length - 3} more</span>
                        )}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="footer">
        <p>
          🐍 Powered by <strong>Pyodide</strong> - Python running in your browser
        </p>
        <p>
          Convert MATLAB DSP programs to Python and execute them with NumPy & Matplotlib
        </p>
      </div>
    </div>
  )
}

export default ProgramList
