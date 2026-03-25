import { useState, useEffect, useRef } from 'react'
import { useApp } from '../context/AppContext'

const TOTAL_SECONDS = 120 // 2 minutes

function BrushingTimer({ onNavigate }) {
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS)
  const [running, setRunning] = useState(false)
  const [done, setDone] = useState(false)
  const intervalRef = useRef(null)
  const { completeBrush, state } = useApp()

  useEffect(() => {
    if (running && secondsLeft > 0) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((s) => s - 1)
      }, 1000)
    } else if (secondsLeft === 0 && running) {
      setRunning(false)
      setDone(true)
      completeBrush()
    }
    return () => clearInterval(intervalRef.current)
  }, [running, secondsLeft])

  const handleStart = () => {
    setRunning(true)
    setDone(false)
  }

  const handleReset = () => {
    setRunning(false)
    setDone(false)
    setSecondsLeft(TOTAL_SECONDS)
  }

  const minutes = Math.floor(secondsLeft / 60)
  const seconds = secondsLeft % 60
  const progress = ((TOTAL_SECONDS - secondsLeft) / TOTAL_SECONDS) * 100

  return (
    <div className="page timer-page">
      <h1>⏱️ Brush Time!</h1>

      {done ? (
        <div className="done-banner">
          <div className="done-emoji">🎉</div>
          <h2>Amazing job!</h2>
          <p>Your teeth are super clean!</p>
          <p className="stars-earned">⭐ {state.stars} star{state.stars !== 1 ? 's' : ''} earned total!</p>
          <button className="btn-primary" onClick={handleReset}>Brush Again</button>
          <button className="btn-secondary" onClick={() => onNavigate('rewards')}>See My Stars ⭐</button>
          <button className="btn-green" onClick={() => onNavigate('teeth')}>Update Teeth Map 🗺️</button>
        </div>
      ) : (
        <>
          <div className="timer-display">
            <div className="progress-ring-container">
              <svg className="progress-ring" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="#E3F2FD" strokeWidth="8" />
                <circle
                  cx="60" cy="60" r="54"
                  fill="none"
                  stroke="#4FC3F7"
                  strokeWidth="8"
                  strokeDasharray={`${2 * Math.PI * 54}`}
                  strokeDashoffset={`${2 * Math.PI * 54 * (1 - progress / 100)}`}
                  strokeLinecap="round"
                  transform="rotate(-90 60 60)"
                  style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                />
              </svg>
              <div className="timer-text">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </div>
            </div>
          </div>

          <p className="timer-hint">
            {running ? "🦷 Keep brushing! You're doing great!" : 'Press Start to begin!'}
          </p>

          <div className="timer-controls">
            {!running && <button className="btn-primary" onClick={handleStart}>▶ Start</button>}
            {running  && <button className="btn-warning" onClick={() => setRunning(false)}>⏸ Pause</button>}
            <button className="btn-secondary" onClick={handleReset}>↺ Reset</button>
          </div>
        </>
      )}
    </div>
  )
}

export default BrushingTimer
