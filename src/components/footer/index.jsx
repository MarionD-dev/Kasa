import logo from '../../assets/logo.png'
import './footer.css'

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa logo" className="footer__logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer