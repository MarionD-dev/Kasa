import footerbanner from '../../assets/footerbanner.png';
import './footer.css'

function Footer() {
   return (
      <footer className="footer">
         <img src={footerbanner} alt="Kasa banner" className="footer__banner" />
         <p className="footer__text">© 2020 Kasa. All rights reserved</p>
      </footer>
   )
}

export default Footer