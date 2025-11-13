import './magic-start.css'
import backgroundImage from '../../assets/6.svg?url'

function MagicStart() {
  return (
    <div 
      className="magic-start-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Background Overlay */}
      <div className="background-overlay"></div>

      {/* Main Content */}
      <div className="magic-start-content">
        {/* Main Title */}
        <div className="title-section">
          <h1 className="main-title">
            PROUD TO HAVE YOU IN
          </h1>
          <h1 className="main-title highlight">
            MAGIC BOX.
          </h1>
        </div>

        {/* Tagline */}
        <p className="tagline">THE MAGIC STARTS NOW.</p>

        
        
      </div>

      {/* Background Particles */}
      <div className="background-particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

     
     
    </div>
  )
}

export default MagicStart

