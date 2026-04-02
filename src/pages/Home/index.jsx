import {useState, useEffect} from 'react'
import Card from '../../components/card'
import Banner from '../../components/banner'
import './Home.css'

function Home() {
    const[properties, setProperties] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/properties')
        .then(response=> response.json())
        .then(data => setProperties(data))
    }, [])

    return (
  <div>
    <Banner text="Chez vous, partout et ailleurs" />
    <div className="cards__grid">
      {properties.map(property => (
        <Card
          key={property.id}
          id={property.id}
          title={property.title}
          cover={property.cover}
        />
      ))}
    </div>
  </div>
)
}

export default Home