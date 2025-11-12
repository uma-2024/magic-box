import './reward-engine.css'
import backgroundImage from '../../assets/6.svg'

function RewardEngine() {
  return (
    <div 
      className="reward-engine-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

      {/* Golden Particles */}
      <div className="golden-particles">
        {Array.from({ length: 60 }).map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Text Content */}
      <div className="text-content">
        <h1 className="title-line title-main">MAGIC BOX</h1>
        <h2 className="title-line title-sub">THE REWARD ENGINE</h2>
        <h3 className="title-line title-small">EXPLAINED</h3>
      </div>
    </div>
  )
}

export default RewardEngine

