import { useState, useEffect } from 'react'

const STEPS = [
  {
    emoji: '💧',
    title: 'Wet Your Brush',
    desc: 'Run your toothbrush under the tap for a moment. This softens the bristles and gets them ready!',
  },
  {
    emoji: '🟢',
    title: 'Add Toothpaste',
    desc: 'Squeeze out a pea-sized amount of toothpaste. That's all you need — not too much, not too little!',
  },
  {
    emoji: '🔄',
    title: 'Brush in Circles',
    desc: 'Use small, gentle circular motions on every tooth. Cover the outside, inside, and chewing surfaces. Brush for 2 full minutes!',
  },
  {
    emoji: '🚰',
    title: 'Spit & Rinse',
    desc: 'Spit out the toothpaste, then rinse your mouth with water. Great job — your teeth are sparkling clean! 🦷✨',
  },
]

function BrushingGuide({ onNavigate }) {
  const [step, setStep] = useState(0)

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (step < STEPS.length - 1) {
      const timer = setTimeout(() => setStep(s => s + 1), 5000)
      return () => clearTimeout(timer)
    }
  }, [step])

  const current = STEPS[step]
  const pct = ((step + 1) / STEPS.length) * 100

  return (
    <div className="page guide-page">
      <h1>🪥 Brushing Guide</h1>
      <p className="subtitle">Follow these 4 easy steps every time you brush!</p>

      <div className="guide-progress-bar">
        <div className="guide-progress-fill" style={{ width: `${pct}%` }} />
      </div>

      <div className="guide-step">
        <div className="guide-step-emoji">{current.emoji}</div>
        <div className="guide-step-num">Step {step + 1} of {STEPS.length}</div>
        <h2>{current.title}</h2>
        <p>{current.desc}</p>
      </div>

      <div className="guide-dots">
        {STEPS.map((_, i) => (
          <button
            key={i}
            className={`guide-dot ${i === step ? 'active' : ''}`}
            onClick={() => setStep(i)}
          />
        ))}
      </div>

      <div className="guide-nav">
        {step > 0 && (
          <button className="btn-secondary" onClick={() => setStep(s => s - 1)}>
            ← Back
          </button>
        )}
        {step < STEPS.length - 1 ? (
          <button className="btn-primary" onClick={() => setStep(s => s + 1)}>
            Next →
          </button>
        ) : (
          <button className="btn-green" onClick={() => onNavigate('brushing')}>
            ▶ Start Brushing!
          </button>
        )}
      </div>
    </div>
  )
}

export default BrushingGuide
