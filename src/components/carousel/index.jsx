import { useState } from "react"
import arrowcaroussel from "../../assets/arrowcaroussel.png"
import './carousel.css'

function Carousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        if (currentIndex === pictures.length - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const handlePrev = () => {
        if (currentIndex === 0) {
            setCurrentIndex(pictures.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }

    return (
        <div className="carousel">
            {pictures.length > 1 && (
                <button onClick={handlePrev}>
                    <img src={arrowcaroussel} alt="Previous" style={{ transform: "rotate(180deg)" }} />
                </button>
            )}
            <img src={pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} />
            {pictures.length > 1 && (
                <>
                    <span className="carousel_counter">{currentIndex + 1}/{pictures.length}</span>
                    <button onClick={handleNext}>
                        <img src={arrowcaroussel} alt="Next" />
                    </button>
                </>
            )}
        </div>
    )
}

export default Carousel