import {useState, useEffect} from 'react'
import Card from '../../components/card'
import Banner from '../../components/banner'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

function Home() {
    const[properties, setProperties] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/properties')
        .then(response=> response.json())
        .then(data => setProperties(data))
    }, [])

    return <div>
        <Navbar />
        <Banner text="Chez vous, partout et ailleurs" />
        {properties.map(property => (
            <Card
                key={property.id}
                id={property.id}
                title={property.title}
                cover={property.cover}
            />
        ))}
        <Footer />
    </div>
}

export default Home