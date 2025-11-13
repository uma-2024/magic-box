import './box-purchase.css'
import backgroundImage from '../../assets/8.svg?url'

function BoxPurchase() {
  return (
    <div 
      className="box-purchase-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Background Overlay */}
      <div className="background-overlay"></div>

      {/* Main Content */}
      <div className="box-purchase-content">
        {/* Main Title */}
        <h1 className="main-title">BOX PURCHASE OPTIONS & TOTAL GROWTH FLOW</h1>

        {/* Two Panel Section */}
        <div className="panels-container">
          {/* Left Panel: BOX PURCHASE OPTIONS */}
          <div className="panel left-panel">
            {/* Cube Icon */}
            <div className="cube-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 5L55 20V40L30 55L5 40V20L30 5Z" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.8"/>
                <path d="M30 5V30M30 30L55 20M30 30L5 20" stroke="#fbbf24" strokeWidth="1.5" opacity="0.6"/>
                <path d="M30 30V55M55 20V40M5 20V40" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6"/>
              </svg>
            </div>
            
            <h2 className="panel-title">BOX PURCHASE OPTIONS</h2>
            
            <div className="panel-details">
              <p className="detail-item">1 BOX = 1 MILLION</p>
              <p className="detail-item highlight">SUMMIT</p>
              <p className="detail-item">MAXIMUM 10 SLOTS PER</p>
              <p className="detail-item">DAY PER ADDRESS</p>
            </div>
          </div>

          {/* Right Panel: REWARD FLOW TOTAL GROWTH */}
          <div className="panel right-panel">
            <h2 className="panel-title">REWARD FLOW</h2>
            <h2 className="panel-title">TOTAL GROWTH</h2>
            
            <div className="panel-details">
              <p className="detail-item">1M + 100K = 1.10M</p>
              <p className="detail-item">2M +200K = 2.20M</p>
              <p className="detail-item">3M +300K = 3.30M</p>
              <p className="detail-item">5M +500K = 5.50M</p>
              <p className="detail-item">10M+1M = 11.0M</p>
            </div>
          </div>
        </div>
      </div>

      {/* Golden Particles Effect */}
      <div className="golden-particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{
              left: `${70 + Math.random() * 30}%`,
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

export default BoxPurchase

