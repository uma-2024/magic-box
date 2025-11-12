import './summit-growth.css'
import backgroundImage from '../../assets/7.svg'

function SummitGrowth() {
  return (
    <div 
      className="summit-growth-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

      {/* Glowing Particles/Fireflies */}
      <div className="particles">
        {Array.from({ length: 80 }).map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Butterflies */}
      {/* <div className="butterflies">
        <div className="butterfly butterfly-1"></div>
        <div className="butterfly butterfly-2"></div>
        <div className="butterfly butterfly-3"></div>
      </div> */}

      {/* Purple Flowers */}
      {/* <div className="flowers">
        <div className="flower flower-1"></div>
        <div className="flower flower-2"></div>
        <div className="flower flower-3"></div>
      </div> */}

      {/* Glowing Mushrooms */}
      {/* <div className="mushrooms">
        <div className="mushroom mushroom-1"></div>
        <div className="mushroom mushroom-2"></div>
      </div> */}

      {/* Text Content */}
      <div className="text-content">
        <p className="top-text">Grow Your Summit Quantity</p>
        <h1 className="percentage-text">10-150%</h1>
        <p className="bottom-text">By One Address</p>
      </div>
    </div>
  )
}

export default SummitGrowth

