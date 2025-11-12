import './vision.css'
import backgroundImage from '../../assets/2.svg'

function Vision() {
  return (
    <div 
      className="vision-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Starry Sky */}
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

      {/* Magical Energy Lines */}
      {/* <div className="energy-lines">
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={i} 
            className="energy-line" 
            style={{
              left: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div> */}

      {/* Glowing Book */}
      {/* <div className="magic-book">
        <div className="book-pages"></div>
        <div className="book-glow"></div>
        <div className="book-light-beam"></div>
      </div> */}

      {/* Potato Characters */}
      {/* <div className="characters">
        <div className="potato-character character-left">
          <div className="potato-body"></div>
          <div className="potato-sprout"></div>
          <div className="potato-sunglasses"></div>
          <div className="potato-outfit"></div>
        </div>
        <div className="potato-character character-center">
          <div className="potato-body"></div>
          <div className="potato-sprout"></div>
          <div className="potato-sunglasses"></div>
          <div className="potato-outfit"></div>
          <div className="cowboy-hat"></div>
        </div>
        <div className="potato-character character-right">
          <div className="potato-body"></div>
          <div className="potato-sprout"></div>
          <div className="potato-sunglasses"></div>
          <div className="potato-outfit"></div>
        </div>
      </div> */}

      {/* Magic Particles */}
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

      {/* Top Text Overlay */}
      <div className="text-overlay-top">
        <h1 className="vision-title">THE VISION</h1>
        <p className="vision-subtitle">Building the World of Decentralized Magic</p>
      </div>

      {/* Bottom Text Overlay */}
      <div className="text-overlay-bottom">
        <p className="vision-tagline">Power. Trust. Community.</p>
      </div>
    </div>
  )
}

export default Vision

