const TIPS = [
  "Your enamel is the hardest substance in your body! 💪",
  "Brush for 2 minutes — that's the same as one song! 🎵",
  "You have 20 baby teeth that will be replaced by 32 adult teeth! 🦷",
  "Flossing cleans 35% of your tooth surface that brushing misses! 🧵",
  "Eating crunchy fruits and veggies helps clean your teeth naturally! 🍎",
  "Bacteria cause cavities by eating sugar and making acid! 🦠",
  "Drink water after eating to wash away sugar and acids! 💧",
  "Your tongue has taste buds that can taste 5 flavours! 👅",
  "Smiling is contagious — healthy teeth make the best smiles! 😁",
  "Brushing your teeth twice a day keeps cavities away! 🪥",
]

function getDailyTip() {
  const dayOfYear = Math.floor(
    (new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000
  )
  return TIPS[dayOfYear % TIPS.length]
}

function Home({ onNavigate }) {
  const tip = getDailyTip()

  return (
    <div className="page home-page">
      <div className="hero-section">
        <div className="tooth-emoji">🦷</div>
        <h1>Brushy!</h1>
        <p className="tagline">Keep your teeth sparkly clean!</p>
      </div>

      <div className="dental-tip">
        <strong>Did you know?</strong> {tip}
      </div>

      <div className="card-grid">
        <button className="feature-card" onClick={() => onNavigate('brushing')}>
          <span className="card-icon">⏱️</span>
          <h2>Brush Time!</h2>
          <p>2-minute timer with fun animations</p>
        </button>

        <button className="feature-card" onClick={() => onNavigate('teeth')}>
          <span className="card-icon">🗺️</span>
          <h2>Teeth Map</h2>
          <p>Track which teeth you brushed</p>
        </button>

        <button className="feature-card" onClick={() => onNavigate('rewards')}>
          <span className="card-icon">⭐</span>
          <h2>My Rewards</h2>
          <p>Collect stars and earn badges</p>
        </button>

        <button className="feature-card" onClick={() => onNavigate('guide')}>
          <span className="card-icon">🪥</span>
          <h2>How to Brush</h2>
          <p>Learn the best brushing technique</p>
        </button>
      </div>
    </div>
  )
}

export default Home
