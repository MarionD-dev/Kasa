import "./logement.css"
import arrowcaroussel from "../../assets/arrowcaroussel.png"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Collapse from "../../components/Collapse"

function Logement() {
    const { id } = useParams()
    const [logement, setLogement] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        fetch(`http://localhost:8080/api/properties/${id}`)
            .then(response => response.json())
            .then(data => setLogement(data))
    }, [id])  

    console.log(logement)
    
    
    const handleNext = () => {
        if (currentIndex === logement.pictures.length - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const handlePrev = () => {
    if (currentIndex === 0) {
        setCurrentIndex(logement.pictures.length - 1)
    } else {
        setCurrentIndex(currentIndex - 1)
    }
}

if (!logement) return <div>Loading...</div>


return (
  <div className="logement">

    <div className="logement__carrousel">
      {logement.pictures.length > 1 && (
        <button onClick={handlePrev}>
          <img src={arrowcaroussel} alt="Previous" style={{ transform: "rotate(180deg)" }} />
        </button>
      )}
      <img src={logement.pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      {logement.pictures.length > 1 && (<>
          <span className="logement_carrousel_counter">{currentIndex + 1}/{logement.pictures.length}</span>
          <button onClick={handleNext}>
            <img src={arrowcaroussel} alt="Next" />
          </button>
        </>
      )}
    </div>


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