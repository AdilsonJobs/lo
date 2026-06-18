import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Program from './components/Program'
import Locations from './components/Locations'
import Instagram from './components/Instagram'
import Footer from './components/Footer'

function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      onClick={onToggle}
      title={theme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
      className="fixed z-50 flex items-center justify-center rounded-full transition-all duration-300"
      style={{
        bottom: '24px',
        right: '24px',
        width: '38px',
        height: '38px',
        border: '1px solid rgba(201,169,110,0.3)',
        backgroundColor: 'var(--card)',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,169,110,0.7)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(201,169,110,0.3)'}
    >
      {theme === 'dark' ? (
        /* Sun icon */
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.8" strokeLinecap="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ) : (
        /* Moon icon */
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.8" strokeLinecap="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') ?? 'light')

  const handleNavigate = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBack = () => {
    setCurrentPage('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleTheme = () => setTheme(t => {
    const next = t === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', next)
    return next
  })

  return (
    <div data-theme={theme} style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      {currentPage === 'home'      && <Hero      onNavigate={handleNavigate} />}
      {currentPage === 'gallery'   && <Gallery   currentPage={currentPage} onNavigate={handleNavigate} />}
      {currentPage === 'program'   && <Program   currentPage={currentPage} onNavigate={handleNavigate} />}
      {currentPage === 'locations' && <Locations currentPage={currentPage} onNavigate={handleNavigate} />}
      {currentPage === 'instagram' && <Instagram currentPage={currentPage} onNavigate={handleNavigate} />}
      {currentPage !== 'home'      && <Footer    onNavigate={handleNavigate} />}
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
    </div>
  )
}

export default App
