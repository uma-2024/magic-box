import './header.css'
import logo from '../../assets/screen2.png'
import logo1 from '../../assets/screen3.png'
import logo2 from '../../assets/screen4.png'
import logo3 from '../../assets/screen5.png'
import logo4 from '../../assets/screen6.png'
import logo5 from '../../assets/screen1.png'
function Header() {
  return (
    <header className="header">
      <div className="header-container">
      <img src={logo5} alt="logo" className="header-logo" />
        <img src={logo} alt="logo" className="header-logo" />
        <img src={logo1} alt="logo" className="header-logo" />
        <img src={logo2} alt="logo" className="header-logo" />
        <img src={logo3} alt="logo" className="header-logo" />
        <img src={logo4} alt="logo" className="header-logo" />
      </div>
    </header>
  )
}

export default Header


