import './vision.css'
import backgroundImage from '../../assets/2.svg'

function Vision() {
  return (
    <div 
      className="vision-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
    
      <div className="starry-sky">
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={i} 
            className="star" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

     
      <div className="particles">
        {Array.from({ length: 40 }).map((_, i) => (
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

    
      <div className="text-overlay-top">
        <h1 className="vision-title">THE VISION</h1>
        <p className="vision-subtitle">Building the World of Decentralized Magic</p>
      </div>

     
      <div className="text-overlay-bottom">
        <p className="vision-tagline">Power. Trust. Community.</p>
      </div>
    </div>
  )
}

export default Vision

