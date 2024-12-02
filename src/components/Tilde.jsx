import tilde from '@/assets/img/icon-tilde.svg'
import styles from './tilde.module.css'

const Tilde = ({ id }) => {
  return (
    <img
      className={`img-fluid ${styles.tilde}`}
      src={tilde}
      alt={`tilde - ${id}`}
    />
  )
}

export default Tilde
