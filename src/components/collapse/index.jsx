import { useState } from "react"
import './collapse.css'
import arrow from '../../assets/arrow.png'

function Collapse({ title, content }) {
   const [isOpen, setIsOpen] = useState(false)
   return (
      <div className="collapse">
  <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
    <h3>{title}</h3>
    <img 
      src={arrow} 
      alt="arrow" 
      className={`collapse__arrow ${isOpen ? 'open' : ''}`} 
    />
  </div>
  <div className={`collapse__content ${isOpen ? 'open' : ''}`}>
    <div>{content}</div>
  </div>
</div>
   )
}

export default Collapse
    