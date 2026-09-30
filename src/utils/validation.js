export const MESSAGE_MAX_LENGTH = 300

const NAME_REGEX = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+(?:[ '-][A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)+$/
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validateName(value) {
  const name = value.trim().replace(/\s+/g, ' ')
  if (!name) return 'El nombre y apellido es obligatorio.'
  if (/\d/.test(name)) return 'El nombre y apellido no puede contener números.'
  if (name.length < 5) return 'Ingresá al menos 5 caracteres.'
  if (name.length > 60) return 'El nombre y apellido no puede superar los 60 caracteres.'
  if (!NAME_REGEX.test(name)) {
    return 'Ingresá nombre y apellido, solo con letras y separados por un espacio.'
  }
  return ''
}

export function validateEmail(value) {
  const email = value.trim()
  if (!email) return 'El correo electrónico es obligatorio.'
  if (email.length > 100) return 'El correo electrónico no puede superar los 100 caracteres.'
  if (!email.includes('@')) return 'El correo debe incluir el símbolo "@".'
  if (!EMAIL_REGEX.test(email)) {
    return 'El formato del correo no es válido (ejemplo: nombre@dominio.com).'
  }
  return ''
}

export function validateMessage(value) {
  const message = value.trim()
  if (!message) return 'El mensaje es obligatorio.'
  if (message.length < 10) return 'El mensaje debe tener al menos 10 caracteres.'
  if (value.length > MESSAGE_MAX_LENGTH) {
    return `El mensaje no puede superar los ${MESSAGE_MAX_LENGTH} caracteres.`
  }
  return ''
}

export const validators = {
  name: validateName,
  email: validateEmail,
  message: validateMessage,
}
