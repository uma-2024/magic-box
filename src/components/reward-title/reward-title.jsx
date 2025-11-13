import './reward-title.css'
import backgroundImage from '../../assets/12.svg?url'

function RewardTitle() {
  return (
    <div 
      className="reward-title-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Background Overlay */}
      <div className="background-overlay"></div>

      {/* Ethereal Patterns */}
      <div className="ethereal-patterns">
        <div className="pattern pattern-1"></div>
        <div className="pattern pattern-2"></div>
        <div className="pattern pattern-3"></div>
      </div>

      {/* Main Content */}
      <div className="reward-title-content">
        {/* Main Title - MAGIC BOX */}
        <h1 className="main-title">MAGIC BOX</h1>
        
        {/* Subtitle - THE REWARD ENGINE */}
        <h2 className="subtitle">THE REWARD ENGINE</h2>
        
        {/* Bottom Text - EXPLAINED */}
        <h3 className="bottom-text">EXPLAINED</h3>
      </div>

      {/* Golden Particles */}
      <div className="golden-particles">
        {Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              opacity: 0.3 + Math.random() * 0.7
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default RewardTitle

