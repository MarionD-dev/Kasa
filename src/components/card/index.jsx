import { Link } from 'react-router-dom'
import './card.css'

function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={cover} alt={title} />
      <div className="card__overlay"></div>
      <p className="card__title">{title}</p>
    </Link>
  )
}

export default Card