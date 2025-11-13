import './magic-world.css'
import backgroundImage from '../../assets/9.svg?url'

function MagicWorld() {
  const growthStages = [
    { days: "Day 1-5", boxes: 200, size: 1 },
    { days: "Day 6-10", boxes: 260, size: 1.3 },
    { days: "Day 11-15", boxes: 338, size: 1.6 },
    { days: "Day 16-20", boxes: 439, size: 1.9 },
    { days: "Day 21-25", boxes: 571, size: 2.2 },
    { days: "Day 25-30", boxes: 743, size: 2.5 }
  ]

  return (
    <div 
      className="magic-world-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Starry Background */}
      <div className="starry-background">
        {Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={i} 
            className="star" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Title Section */}
      <div className="title-section">
        <h1 className="main-title">The Magic World</h1>
        <p className="subtitle">Growing Every 6 Day</p>
      </div>

      {/* Main Description */}
      <div className="description-section">
        <p className="description-text">
          Every 6 days, 30% more boxes are added — and the Magic World keeps expanding.
        </p>
      </div>

      {/* Growth Stages */}
      {/* <div className="growth-stages">
        {growthStages.map((stage, index) => (
          <div key={index} className="stage-cluster">
            <div className="growth-label">+30% More Boxes</div>
            <div className="box-cluster" style={{ transform: `scale(${stage.size})` }}>
              {Array.from({ length: Math.min(15 + index * 3, 25) }).map((_, i) => (
                <div 
                  key={i} 
                  className="magic-box"
                  style={{
                    left: `${(i % 5) * 20}%`,
                    top: `${Math.floor(i / 5) * 30}%`,
                    animationDelay: `${i * 0.1}s`
                  }}
                ></div>
              ))}
            </div>
            <div className="stage-info">
              <p className="days-label">{stage.days}</p>
              <p className="boxes-count">{stage.boxes} Boxes</p>
            </div>
          </div>
        ))}
      </div> */}

      {/* Glowing Curved Line */}
      {/* <div className="curved-line-container">
        <svg className="curved-line" viewBox="0 0 1200 300" preserveAspectRatio="none">
          <path
            d="M 50 250 Q 200 200, 400 180 Q 600 160, 800 150 Q 1000 140, 1150 100"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="5"
            className="glow-path"
          />
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9" />
              <stop offset="30%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#fbbf24" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div> */}

      {/* And Soon Section */}
      {/* <div className="and-soon-section">
        <p className="and-soon-text">And Soon</p>
        <svg className="golden-arrow" width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="#fbbf24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="rotate(45 12 12)"
          />
        </svg>
      </div> */}
    </div>
  )
}

export default MagicWorld

