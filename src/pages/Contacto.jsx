import ContactForm from '../components/ContactForm'

function Contacto() {
  return (
    <section className="page-content">
      <h2>Contacto</h2>
      <p>Ponete en contacto con nosotros para dudas o consultas.</p>

      <div className="contacto-layout">
        <div className="contacto-form-col">
          <ContactForm />
        </div>

        <aside className="contacto-mapa-col">
          <h3>Nuestra Ubicación</h3>
          <p className="mapa-subtitulo">Salta, Argentina</p>
          <iframe
            title="Ubicación en Salta, Argentina"
            src="https://maps.google.com/maps?q=Salta,+Argentina&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="mapa-iframe"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </aside>
      </div>
    </section>
  )
}

export default Contacto