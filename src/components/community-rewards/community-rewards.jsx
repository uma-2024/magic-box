import './community-rewards.css'
import backgroundImage from '../../assets/8.svg?url'

function CommunityRewards() {
  const rewardLevels = [
    { level: '1st Level – Direct', percentage: '3%' },
    { level: '2nd Level – Team Growth', percentage: '2%' },
    { level: '3rd Level – Network Expansion', percentage: '2%' }
  ]

  return (
    <div 
      className="community-rewards-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Background Overlay */}
      <div className="background-overlay"></div>

      {/* Main Content */}
      <div className="community-rewards-content">
        {/* Main Title */}
        <h1 className="main-title">COMMUNITY GROWTH REWARDS</h1>
        
        {/* Subtitle */}
        <p className="subtitle">Earn Energy Income from 3 Levels of Your Network</p>

        {/* Two Column Layout */}
        <div className="rewards-layout">
          {/* Left Side: Visual Flow Diagram */}
          <div className="flow-diagram">
            {rewardLevels.map((item, index) => (
              <div key={index} className="flow-item">
                {/* Connecting Line (except for first item) */}
                {index > 0 && (
                  <div className="connecting-line"></div>
                )}
                
                {/* Circle with Percentage */}
                <div className="percentage-circle">
                  <span className="percentage-text">{item.percentage}</span>
                </div>
                
                {/* Level Label */}
                <div className="level-label">
                  <span className="level-text">{item.level}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Reward Table */}
          <div className="reward-table-container">
            <table className="reward-table">
              <thead>
                <tr>
                  <th className="table-header">GROWTH LEVEL</th>
                  <th className="table-header">REWARD FLOW (%)</th>
                </tr>
              </thead>
              <tbody>
                {rewardLevels.map((item, index) => (
                  <tr key={index} className="table-row">
                    <td className="table-cell">{item.level}</td>
                    <td className="table-cell percentage-cell">{item.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Golden Particles Effect */}
      <div className="golden-particles">
        {Array.from({ length: 25 }).map((_, i) => (
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

export default CommunityRewards

