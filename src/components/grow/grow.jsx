import './grow.css'
import backgroundImage from '../../assets/8.svg?url'
import middleLayerImage from '../../assets/Untitled design (2) (1).svg?url'

function Grow() {
  const leftFeatures = [
    "SUMMIT Token Growth",
    "AI-Powered Reward Engine",
    "Community Scaling - Powered by You"
  ]

  const rightFeatures = [
    "Compounding Cycles Every 6 Days",
    "Fully Transparent On-Chain Payouts",
    "Community Scaling - Powered by You"
  ]

  return (
    <div 
      className="grow-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Background Overlay */}
      <div className="background-overlay"></div>
      
      {/* Background Particles */}
      <div className="background-particles">
        {Array.from({ length: 25 }).map((_, i) => (
          <div 
            key={i} 
            className="sparkle" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Glowing Flora */}
      {/* <div className="glowing-flora">
        <div className="flora-item flora-left"></div>
        <div className="flora-item flora-right"></div>
      </div> */}

      {/* Magic Book with Light Beam */}
      {/* <div className="magic-book-section">
        <div className="magic-book">
          <div className="book-pages"></div>
          <div className="book-glow"></div>
          <div className="book-light-beam">
          
            {Array.from({ length: 15 }).map((_, i) => (
              <div 
                key={i} 
                className="golden-coin" 
                style={{
                  left: `${30 + Math.random() * 40}%`,
                  bottom: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              >
                <div className="coin-symbol">S</div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Potato Characters */}
      {/* <div className="characters-section">
        <div className="potato-character character-left">
          <div className="potato-body"></div>
          <div className="potato-sprout"></div>
          <div className="potato-sunglasses"></div>
          <div className="potato-outfit">
            <div className="outfit-v"></div>
            <div className="outfit-belt"></div>
          </div>
          <div className="arm-raised"></div>
        </div>
        <div className="potato-character character-center">
          <div className="potato-body"></div>
          <div className="potato-sprout"></div>
          <div className="potato-sunglasses"></div>
          <div className="potato-outfit">
            <div className="outfit-v"></div>
            <div className="outfit-belt"></div>
          </div>
          <div className="cowboy-hat"></div>
        </div>
        <div className="potato-character character-right">
          <div className="potato-body"></div>
          <div className="potato-sprout"></div>
          <div className="potato-sunglasses"></div>
          <div className="potato-outfit">
            <div className="outfit-v"></div>
            <div className="outfit-belt"></div>
          </div>
        </div>
      </div> */}

      {/* Title Section */}
      <div className="title-section">
        <h1 className="grow-title">GROW WITH MAGIC BOX</h1>
        <p className="grow-subtitle">Rewards That Flow Like Energy</p>
        {/* Middle Layer Image - Below subtitle */}
       
          <img src={middleLayerImage} alt="Middle Layer" className="middle-layer-image" />
     
      </div>

      {/* Feature Boxes */}
      {/* <div className="features-section">
     
        <div className="features-column features-left">
          {leftFeatures.map((feature, index) => (
            <div key={index} className="feature-box">
              <p className="feature-text">{feature}</p>
            </div>
          ))}
        </div>

    
        <div className="features-column features-right">
          {rightFeatures.map((feature, index) => (
            <div key={index} className="feature-box">
              <p className="feature-text">{feature}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* Slogan - Bottom */}
      <div className="slogan-section">
        <p className="slogan">The more you believe, the more your magic grows.</p>
      </div>
    </div>
  )
}

export default Grow

