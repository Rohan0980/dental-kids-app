import { useState } from 'react'
import { useApp } from '../context/AppContext'

// Upper arch: A–J (right to left as viewed from front)
const UPPER_TEETH = [
  { id: 'A', name: 'Upper Right 2nd Molar' },
  { id: 'B', name: 'Upper Right 1st Molar' },
  { id: 'C', name: 'Upper Right Canine' },
  { id: 'D', name: 'Upper Right Lateral Incisor' },
  { id: 'E', name: 'Upper Right Central Incisor' },
  { id: 'F', name: 'Upper Left Central Incisor' },
  { id: 'G', name: 'Upper Left Lateral Incisor' },
  { id: 'H', name: 'Upper Left Canine' },
  { id: 'I', name: 'Upper Left 1st Molar' },
  { id: 'J', name: 'Upper Left 2nd Molar' },
]

// Lower arch: K–T (left to right)
const LOWER_TEETH = [
  { id: 'K', name: 'Lower Left 2nd Molar' },
  { id: 'L', name: 'Lower Left 1st Molar' },
  { id: 'M', name: 'Lower Left Canine' },
  { id: 'N', name: 'Lower Left Lateral Incisor' },
  { id: 'O', name: 'Lower Left Central Incisor' },
  { id: 'P', name: 'Lower Right Central Incisor' },
  { id: 'Q', name: 'Lower Right Lateral Incisor' },
  { id: 'R', name: 'Lower Right Canine' },
  { id: 'S', name: 'Lower Right 1st Molar' },
  { id: 'T', name: 'Lower Right 2nd Molar' },
]

const ALL_TEETH = [...UPPER_TEETH, ...LOWER_TEETH]

function TeethMap({ onNavigate }) {
  const { state, toggleTooth, brushAllTeeth, resetTeeth } = useApp()
  const [selected, setSelected] = useState(null)

  const brushed = state.brushedTeeth
  const count = brushed.length
  const total = ALL_TEETH.length
  const pct = Math.round((count / total) * 100)

  const handleTap = (tooth) => {
    toggleTooth(tooth.id)
    setSelected(tooth)
  }

  const handleAllDone = () => {
    brushAllTeeth()
    onNavigate('rewards')
  }

  const tooltipText = selected
    ? `${selected.id} — ${selected.name}`
    : 'Tap a tooth to mark it as brushed!'

  return (
    <div className="page teeth-page">
      <h1>🗺️ Teeth Map</h1>
      <p className="subtitle">Tap each tooth you brushed today</p>

      {/* Progress bar */}
      <div className="teeth-progress">
        <div className="teeth-progress-bar">
          <div className="teeth-progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <span className="teeth-progress-label">{count}/{total}</span>
      </div>

      {/* Upper arch */}
      <div className="teeth-arch">
        <span className="arch-label">Upper Teeth</span>
        <div className="teeth-row">
          {UPPER_TEETH.map(tooth => (
            <button
              key={tooth.id}
              className={`tooth-btn ${brushed.includes(tooth.id) ? 'brushed' : ''}`}
              onClick={() => handleTap(tooth)}
              title={tooth.name}
            >
              <span className="tooth-emoji-sm">🦷</span>
              {tooth.id}
            </button>
          ))}
        </div>
      </div>

      {/* Tooltip */}
      <div className="tooth-tooltip">{tooltipText}</div>

      {/* Lower arch */}
      <div className="teeth-arch">
        <span className="arch-label">Lower Teeth</span>
        <div className="teeth-row">
          {LOWER_TEETH.map(tooth => (
            <button
              key={tooth.id}
              className={`tooth-btn ${brushed.includes(tooth.id) ? 'brushed' : ''}`}
              onClick={() => handleTap(tooth)}
              title={tooth.name}
            >
              <span className="tooth-emoji-sm">🦷</span>
              {tooth.id}
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="teeth-actions" style={{ marginTop: 20 }}>
        <button className="btn-green" onClick={handleAllDone}>
          ✅ All Done!
        </button>
        <button className="btn-secondary" onClick={resetTeeth}>
          ↺ Reset
        </button>
      </div>
    </div>
  )
}

export default TeethMap
