

import './App.css'
import Welcome from './components/welcome/welcome'
// import Header from './components/header/header'
// import Vision from './components/vision/vision'
// import Problem from './components/problem/problem'
// import Solution from './components/solution/solution'
import Grow from './components/grow/grow'
// import RewardEngine from './components/reward-engine/reward-engine'
import SummitGrowth from './components/summit-growth/summit-growth'
import LimitedBoxes from './components/limited-boxes/limited-boxes'
import MagicWorld from './components/magic-world/magic-world'
function App() {


  return (
    <div className="app-container">
      <Welcome />
      {/* <Header /> */}
      <Grow />
      <SummitGrowth/>
     <MagicWorld/>
     <LimitedBoxes/>
      {/* <Vision />
      <Problem />
      <Solution />
    
      <RewardEngine/> */}
     

    </div>
  )
}

export default App
