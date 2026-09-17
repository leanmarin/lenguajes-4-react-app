import { useState } from 'react';
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import Contacto from './pages/Contacto'

function App() {
  const [currentPage, setCurrentPage] = useState('inicio')

  const renderPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <Inicio />
      case 'servicios':
        return <Servicios />
      case 'contacto':
        return <Contacto />
      default:
        return <Inicio />
    }
  }

  return (
    <div className="app-container">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="content-container">
        {renderPage()}
      </div>
    </div>
  )
}

export default App