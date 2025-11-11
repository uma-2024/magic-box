import './welcome.css'
import backgroundImage from '../../assets/Untitled design.svg'

function Welcome() {
  return (
    <div 
      className="welcome-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Text Overlay */}
      <div className="text-overlay">
        <h1 className="welcome-title">WELCOME TO MAGIC-BOX</h1>
        <p className="welcome-subtitle">A FULLY DECENTRALIZED MAGIC WORLD</p>
      </div>
    </div>
  )
}

export default Welcome

