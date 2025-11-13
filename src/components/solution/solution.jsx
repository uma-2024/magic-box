import './solution.css'
import backgroundImage from '../../assets/4.svg?url'

function Solution() {
  const features = [
    "AI-Powered Growth Engine",
    "First Magic World on Solana Blockchain",
    "Grow Your SUMMIT Tokens Effortlessly",
    "Fully Decentralized and Transparent",
    "Earnings That Flow Like Energy"
  ]

  return (
    <div 
      className="solution-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Background Glowing Lines */}
      <div className="glowing-lines">
        <div className="glow-line line-1"></div>
        <div className="glow-line line-2"></div>
        <div className="glow-line line-3"></div>
        <div className="glow-line line-4"></div>
      </div>

      {/* Magical Particles */}
      <div className="magic-particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={i} 
            className="magic-particle" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Left Side - Illustration */}
      <div className="illustration-section">
        {/* Magic Book */}
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
            <div className="potato-outfit">
              <div className="outfit-v"></div>
              <div className="outfit-belt"></div>
            </div>
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
      </div>

      {/* Right Side - Content */}
      <div className="content-section">
        {/* Title Section */}
        <div className="title-section2">
          <h1 className="solution-title">THE SOLUTION</h1>
          <p className="solution-subtitle">Introducing Magic Box The Decentralized World of Growth and Trust</p>
        </div>

        {/* Features List */}
        <div className="features-list">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">
                <div className="icon-circle"></div>
              </div>
              <p className="feature-text">{feature}</p>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="tagline-section">
          <p className="tagline">Built on Trust. Powered by Decentralization.</p>
        </div>
      </div>
    </div>
  )
}

export default Solution

