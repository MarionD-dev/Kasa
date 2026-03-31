import {useState, useEffect} from 'react'
import Card from '../../components/card'

function Home() {
    const[properties, setProperties] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/properties')
        .then(response=> response.json())
        .then(data => setProperties(data))
    }, [])

    return <div>
        {properties.map(property => (
            <Card
                key={property.id}
                id={property.id}
                title={property.title}
                cover={property.cover}
            />
        ))}
    </div>
}

export default Home