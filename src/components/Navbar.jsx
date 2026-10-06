import { NavLink } from 'react-router-dom'
import monogram from '../assets/portfolio/monogram.svg'

function Navbar() {
  return (
    <header className="site-header" id="top">
      <NavLink className="brand-mark" to="/" aria-label="Hari Haran home">
        <img src={monogram} alt="H" />
      </NavLink>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-active' : '')}>
          Design
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
          About me
        </NavLink>
        <a href="mailto:ihariharan47@gmail.com">Email me</a>
        <a
          href="https://drive.google.com/file/d/1KNrVf2EJdkm6zXOOT-iSMhmZLu_sVkkQ/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </nav>
    </header>
  )
}

export default Navbar
