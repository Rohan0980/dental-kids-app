import { useState } from 'react'
import { AppProvider } from './context/AppContext'
import Home from './pages/Home'
import BrushingTimer from './pages/BrushingTimer'
import TeethMap from './pages/TeethMap'
import Rewards from './pages/Rewards'
import BrushingGuide from './pages/BrushingGuide'
import Navbar from './components/Navbar'
import './App.css'

const PAGES = {
  home:     Home,
  brushing: BrushingTimer,
  teeth:    TeethMap,
  rewards:  Rewards,
  guide:    BrushingGuide,
}

function AppShell() {
  const [currentPage, setCurrentPage] = useState('home')
  const PageComponent = PAGES[currentPage]

  return (
    <div className="app">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="main-content">
        <PageComponent onNavigate={setCurrentPage} />
      </main>
    </div>
  )
}

function App() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  )
}

export default App
