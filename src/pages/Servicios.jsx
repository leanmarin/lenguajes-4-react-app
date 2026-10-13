// Array local de servicios y habilidades IT (Punto A - TP4)
const SERVICIOS = [
  {
    id: 1,
    titulo: 'Desarrollo de Software Web',
    descripcion: 'Diseño y desarrollo de aplicaciones web responsivas, escalables y orientadas a la experiencia de usuario.',
    tecnologias: 'React, Node.js, TypeScript, PostgreSQL',
    imagen: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    titulo: 'Infraestructura & Cloud',
    descripcion: 'Implementación y administración de servidores en la nube, automatización de despliegues y contenedores.',
    tecnologias: 'Docker, AWS, Linux, CI/CD',
    imagen: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    titulo: 'Ciberseguridad & Redes',
    descripcion: 'Análisis de vulnerabilidades, configuración de redes seguras y protección integral de datos empresariales.',
    tecnologias: 'Firewalls, VPN, Pentesting, Criptografía',
    imagen: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
  },
]

function Servicios() {
  return (
    <section className="page-content">
      <h2>Servicios</h2>
      <p>Servicios y competencias técnicas del área de Tecnologías de la Información.</p>

      <div className="cards-grid">
        {SERVICIOS.map((item) => (
          <article key={item.id} className="card">
            <img
              src={item.imagen}
              alt={item.titulo}
              className="card-image"
              loading="lazy"
            />
            <div className="card-body">
              <h3>{item.titulo}</h3>
              <p>{item.descripcion}</p>
              <p className="card-tech">
                <strong>Tecnologías:</strong> {item.tecnologias}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Servicios