import './problem.css'
import backgroundImage from '../../assets/3.svg'

function Problem() {
  const challenges = [
    "Web3 projects often fail to deliver consistent rewards",
    "Users face trust gaps, delays, and complex systems",
    "Growth is limited by centralized control and opaque operations"
  ]

  return (
    <div 
      className="problem-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Circuit Board Lines */}
      <div className="circuit-lines">
        <div className="circuit-line line-1"></div>
        <div className="circuit-line line-2"></div>
        <div className="circuit-line line-3"></div>
        <div className="circuit-line line-4"></div>
      </div>

      {/* Blue Light Effects */}
      <div className="light-effects">
        <div className="light-effect effect-1"></div>
        <div className="light-effect effect-2"></div>
      </div>

      {/* Orange Sparks */}
      <div className="sparks">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className="spark" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 1.5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Cracked Blue Cube */}
      {/* <div className="cube-container">
        <div className="cracked-cube">
          <div className="cube-face front"></div>
          <div className="cube-face back"></div>
          <div className="cube-face top"></div>
          <div className="cube-face bottom"></div>
          <div className="cube-face left"></div>
          <div className="cube-face right"></div>
          <div className="cube-cracks">
            <div className="crack crack-1"></div>
            <div className="crack crack-2"></div>
            <div className="crack crack-3"></div>
            <div className="crack crack-4"></div>
          </div>
          <div className="cube-glow"></div>
        </div>

       
        <div className="debris">
          <div className="debris-piece piece-1"></div>
          <div className="debris-piece piece-2"></div>
          <div className="debris-piece piece-3"></div>
          <div className="debris-piece piece-4"></div>
        </div>
      </div> */}

      {/* Content Section */}
      <div className="problem-content">
        {/* Title Section */}
        <div className="title-section">
          <h1 className="problem-title">THE PROBLEM</h1>
          <p className="problem-subtitle">The Challenge</p>
        </div>

        {/* Bullet Points */}
        <div className="challenges-list">
          {challenges.map((challenge, index) => (
            <div key={index} className="challenge-item">
              <div className="checkmark-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path 
                    d="M20 6L9 17L4 12" 
                    stroke="#10b981" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="challenge-text">{challenge}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Problem

