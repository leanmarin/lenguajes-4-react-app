import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { MESSAGE_MAX_LENGTH, validators } from '../utils/validation'

const initialValues = { name: '', email: '', message: '' }

function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validators[name](value) }))
    }
    if (status !== 'sending') setStatus('idle')
  }

  const handleBlur = (event) => {
    const { name, value } = event.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validators[name](value) }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const newErrors = {}
    Object.keys(validators).forEach((field) => {
      newErrors[field] = validators[field](values[field])
    })
    setErrors(newErrors)
    setTouched({ name: true, email: true, message: true })
    if (Object.values(newErrors).some(Boolean)) return

    setStatus('sending')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name.trim(),
          from_email: values.email.trim(),
          message: values.message.trim(),
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )
      setStatus('success')
      setValues(initialValues)
      setErrors({})
      setTouched({})
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
    }
  }

  const remaining = MESSAGE_MAX_LENGTH - values.message.length

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="name">Nombre y Apellido</label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.name)}
          aria-describedby="name-error"
          autoComplete="name"
        />
        {errors.name && <span id="name-error" className="field-error" role="alert">{errors.name}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="email">Correo Electrónico</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.email)}
          aria-describedby="email-error"
          autoComplete="email"
        />
        {errors.email && <span id="email-error" className="field-error" role="alert">{errors.email}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          maxLength={MESSAGE_MAX_LENGTH + 50}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.message)}
          aria-describedby="message-error"
        />
        <span className={`char-counter ${remaining < 0 ? 'over' : ''}`}>
          {values.message.length}/{MESSAGE_MAX_LENGTH}
        </span>
        {errors.message && <span id="message-error" className="field-error" role="alert">{errors.message}</span>}
      </div>

      <button type="submit" className="submit-button" disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
      </button>

      {status === 'success' && (
        <p className="form-feedback success" role="status">
          ¡Mensaje enviado! Te responderemos a la brevedad.
        </p>
      )}
      {status === 'error' && (
        <p className="form-feedback error" role="alert">
          No pudimos enviar el mensaje. Intentá nuevamente en unos minutos.
        </p>
      )}
    </form>
  )
}

export default ContactForm
