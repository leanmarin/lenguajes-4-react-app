import { useEffect, useState } from 'react'

function Inicio() {
  const [articulos, setArticulos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://dev.to/api/articles?per_page=3&tag=programming')
      .then((res) => {
        if (!res.ok) throw new Error('No se pudieron obtener las publicaciones')
        return res.json()
      })
      .then((data) => {
        setArticulos(data)
        setCargando(false)
      })
      .catch((err) => {
        setError(err.message)
        setCargando(false)
      })
  }, [])

  return (
    <section className="page-content">
      <h2>Inicio</h2>
      <p>Artículos de tecnología obtenidos de Dev.to.</p>

      {cargando && <p className="status-message">Cargando artículos...</p>}
      {error && <p className="status-message error-message">Error: {error}</p>}

      {!cargando && !error && (
        <div className="cards-grid">
          {articulos.map((art) => (
            <article key={art.id} className="card">
              <img
                src={art.social_image || art.cover_image || 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'}
                alt={art.title}
                className="card-image"
                loading="lazy"
              />
              <div className="card-body">
                <h3>{art.title}</h3>
                <p className="card-meta">
                  <span><strong>Autor:</strong> {art.user?.name || 'Desconocido'}</span>
                  <span> · <strong>Fecha:</strong> {art.readable_publish_date}</span>
                </p>
                <p className="card-description">{art.description}</p>
                <a
                  href={art.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  Lee el artículo completo aquí
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default Inicio
