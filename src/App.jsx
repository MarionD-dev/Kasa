import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Page Home</div>} />
      <Route path="/logement/:id" element={<div>Page Logement</div>} />
      <Route path="/about" element={<div>Page About</div>} />
      <Route path="*" element={<div>Page 404</div>} />
    </Routes>
  )
}

export default App