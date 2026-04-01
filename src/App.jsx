import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/Home'
import About from './pages/About'
import Logement from './pages/Logement'
import Error from './pages/Error'


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="*" element={<Error/>} />
    </Routes>
    <Footer />
    </>
  )
}

export default App