import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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

return <div>Page Logement {id}</div>
}

export default Logement