import logo from '../../assets/logo.png';
import './navbar.css'
import { NavLink } from 'react-router-dom';

function Navbar() {
   return (
      <nav className="navbar">
         <img src={logo} alt="Kasa logo" className="navbar__logo" />
            <ul className="navbar__links">
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/about">A Propos</NavLink></li>
            </ul>
      </nav>
   )
}

export default Navbar