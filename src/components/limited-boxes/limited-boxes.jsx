import './limited-boxes.css'
import backgroundImage from '../../assets/11.svg?url'

function LimitedBoxes() {
  return (
    <div 
      className="limited-boxes-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

      {/* Stars */}
      <div className="stars">
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={i} 
            className="star" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Text Content */}
      <div className="text-content">
        <div className="headline">
          <h1 className="headline-line-1">LIMITED BOXES</h1>
          <h1 className="headline-line-2">AVAILABLE</h1>
        </div>
        <p className="slogan2">FIRST COME, FIRST SERVE!</p>
      </div>

      {/* Call to Action Button */}
      <div className="button-container">
        <button className="buy-button">
          BUY YOUR MAGIC BOX
        </button>
      </div>
    </div>
  )
}

export default LimitedBoxes

