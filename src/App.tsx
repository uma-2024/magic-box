
import { lazy, Suspense } from 'react'
import './App.css'
import Welcome from './components/welcome/welcome'
import Vision from './components/vision/vision'
import Problem from './components/problem/problem'
import Solution from './components/solution/solution'

// Lazy load components for better performance
const Grow = lazy(() => import('./components/grow/grow'))
const SummitGrowth = lazy(() => import('./components/summit-growth/summit-growth'))
const MagicWorld = lazy(() => import('./components/magic-world/magic-world'))
const LimitedBoxes = lazy(() => import('./components/limited-boxes/limited-boxes'))
const BoxPurchase = lazy(() => import('./components/box-purchase/box-purchase'))
const CommunityRewards = lazy(() => import('./components/community-rewards/community-rewards'))
const MagicStart = lazy(() => import('./components/magic-start/magic-start'))
const RewardTitle = lazy(() => import('./components/reward-title/reward-title'))

// Loading fallback component
const LoadingFallback = () => (
  <div style={{ 
    minHeight: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    background: 'linear-gradient(180deg, #0a0a1a 0%, #1a1a2e 50%, #0a0a1a 100%)'
  }}>
    <div style={{ 
      color: '#fbbf24', 
      fontSize: '1.5rem',
      textShadow: '0 0 20px rgba(251, 191, 36, 0.8)'
    }}>
      Loading...
    </div>
  </div>
)

function App() {
  return (
    <div className="app-container">
      <Welcome />
      <Suspense fallback={<LoadingFallback />}>
        <Grow />
        <SummitGrowth />
        <MagicWorld />
        <LimitedBoxes />
        <Vision/>
        <Problem/>
        <Solution/>
        <BoxPurchase/>
        <CommunityRewards/>
        <MagicStart/>
        <RewardTitle/>
      </Suspense>
    </div>
  )
}

export default App
