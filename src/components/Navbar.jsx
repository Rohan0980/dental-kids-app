const TABS = [
  { key: 'home',     icon: '🏠', label: 'Home' },
  { key: 'brushing', icon: '⏱️', label: 'Brush' },
  { key: 'teeth',    icon: '🗺️', label: 'Teeth' },
  { key: 'rewards',  icon: '⭐', label: 'Rewards' },
]

function Navbar({ currentPage, onNavigate }) {
  return (
    <nav className="navbar">
      {TABS.map(tab => (
        <button
          key={tab.key}
          className={`nav-btn ${currentPage === tab.key ? 'active' : ''}`}
          onClick={() => onNavigate(tab.key)}
        >
          <span className="nav-icon">{tab.icon}</span>
          <span className="nav-label">{tab.label}</span>
        </button>
      ))}
    </nav>
  )
}

export default Navbar
