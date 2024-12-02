import Formulario from '@/components/Formulario'
import styles from './img-principal.module.css'

const ImgPrincipal = () => {
  return (
    <section className={`container-fluid imgPrincipal ${styles.imgPrincipal}`}>
      <div className={`container p-0 ${styles.container}`}>
        <div className='row'>
          <div className={`col-md-6 ${styles.contentData}`}>
            <h1>
              <span className='degrade'>Totem de seguridad</span>
              <br />
              TU ALIADO EN PROTECCIÓN
            </h1>
          </div>

          <div className={`col-md-6 ${styles.contentForm}`}>
            <Formulario />
          </div>
        </div>
      </div>
    </section>
  )
}
export default ImgPrincipal
