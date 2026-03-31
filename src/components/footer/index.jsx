import footerbanner from '../../assets/footerbanner.png';
import './footer.css'

function Footer() {
   return (
      <footer className="footer">
         <img src={footerbanner} alt="Kasa banner" className="footer__banner" />
      </footer>
   )
}

export default Footer