import features from '@/data/features.json'
import technologicalFeatures from '@/data/technological-features.json'
import newSistema from '@/data/new-sistema.json'

export const getFeatures = key => features[key]
export const getTechnologicalFeatures = key => technologicalFeatures[key]
export const getTitlesSystem = key => newSistema[key]

export const getCurrentMonth = () => {
  const date = new Date()
  const month = date.toLocaleString('es-AR', { month: 'long' })
  return month
}

export const scrollToTop = (setMessage, msg, textAreaRef) => {
  setMessage(msg)

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })

  setTimeout(() => {
    textAreaRef.focus()
  }, 500)
}

export const validation = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Ingresá un nombre'
  }
  if (!values.email) {
    errors.email = 'Ingresá tu email'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Ingresá un correo válido'
  }
  if (!values.phone) {
    errors.phone = 'Ingresá un teléfono'
  }
  if (!values.comments) {
    errors.comments = 'Enviá tu consulta'
  }
  return errors
}

export const getImageURL = name => {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}
