import "./logement.css"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Collapse from "../../components/Collapse"
import Carousel from "../../components/carousel"

function Logement() {
    const { id } = useParams()
    const [logement, setLogement] = useState(null)
    const navigate = useNavigate() 

    useEffect(() => {
        fetch(`http://localhost:8080/api/properties/${id}`)
            .then(response => response.json())
            .then(data => {
    if (data === "Not found") {
        navigate("/404")
    } else {
        setLogement(data)
    }
})
            .catch(error => console.error('Error fetching logement:', error))
    }, [id])  

    console.log(logement)

if (!logement) return <div>Loading...</div>


return (
  <div className="logement">

    <Carousel pictures={logement.pictures} /> 

    <div className="logement__infos">
      
      <div className="logement_infos_left">
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>
        <div className="logement__tags">
          {logement.tags.map((tag, index) => (
            <span key={index} className="logement__tag">{tag}</span>
          ))}
        </div>
      </div>

      <div className="logement_infos_right">
        <div className="logement__host">
          <span>{logement.host.name}</span>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>
        <div className="logement__rating">
          {Array(5).fill(0).map((_, index) => (
            <span key={index} style={{ color: index < logement.rating ? '#FF6060' : '#E3E3E3' }}>★</span>
          ))}
        </div>
      </div>
    </div>

    <div className="logement__collapses">
      <Collapse title="Description" content={logement.description} />
      <Collapse title="Équipements" content={logement.equipments} />
    </div>

  </div>
)
}
export default Logement