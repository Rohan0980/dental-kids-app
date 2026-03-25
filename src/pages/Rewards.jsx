import { useApp } from '../context/AppContext'

function todayStr() {
  return new Date().toISOString().slice(0, 10)
}

function last7Days() {
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - (6 - i))
    return d.toISOString().slice(0, 10)
  })
}

function shortDay(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { weekday: 'short' }).slice(0, 1)
}

function Rewards() {
  const { state, BADGE_DEFS } = useApp()
  const { stars, streak, brushHistory, earnedBadges } = state

  const days = last7Days()
  const today = todayStr()

  const handleShare = () => {
    window.print()
  }

  return (
    <div className="page rewards-page">
      <h1>⭐ My Rewards</h1>

      {/* Stars */}
      <div className="stars-display">
        <div className="stars-big">⭐ {stars}</div>
        <div className="stars-label">
          {stars === 0 ? 'Brush your teeth to earn your first star!' : `Amazing! You've earned ${stars} star${stars !== 1 ? 's' : ''}!`}
        </div>
      </div>

      {/* Streak */}
      <div className="streak-section">
        <div className="section-title">🔥 Brushing Streak</div>
        <div className="streak-count">{streak} day{streak !== 1 ? 's' : ''} in a row!</div>
        <div className="streak-days">
          {days.map(day => (
            <div
              key={day}
              className={[
                'streak-day',
                brushHistory.includes(day) ? 'brushed' : '',
                day === today ? 'today' : '',
              ].filter(Boolean).join(' ')}
            >
              <span>{shortDay(day)}</span>
              {brushHistory.includes(day) && <span>✓</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Badges */}
      <div className="section-title">🏅 My Badges</div>
      <div className="badges-grid">
        {BADGE_DEFS.map(badge => {
          const earned = earnedBadges.includes(badge.id)
          return (
            <div key={badge.id} className={`badge-card ${earned ? 'earned' : 'locked'}`}>
              <span className="badge-emoji">{earned ? badge.emoji : '❓'}</span>
              <span className="badge-name">{badge.name}</span>
              <span className="badge-desc">{badge.desc}</span>
            </div>
          )
        })}
      </div>

      <button className="btn-secondary share-btn" onClick={handleShare}>
        📋 Share with My Dentist
      </button>
    </div>
  )
}

export default Rewards
