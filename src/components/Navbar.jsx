function Navbar({ currentPage, onNavigate }) {
  const pages = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <header className="navbar">
      <h1 className="logo">Serv-Tec</h1>
      <nav>
        <ul className="nav-links">
          {pages.map((page) => (
            <li key={page.id}>
              <button
                type="button"
                className={`nav-button ${currentPage === page.id ? 'active' : ''}`}
                onClick={() => onNavigate(page.id)}
              >
                {page.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar