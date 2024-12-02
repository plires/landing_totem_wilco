import { scrollToTop } from '@/utils/dataUtils.js'
import { useContext } from 'react'
import { StoreContext } from '@/context/store'
import celImg from '@/assets/img/telefono-app.png'
import celImgOpt from '@/assets/img/telefono-app.webp'

import styles from './download-app.module.css'

const DownloadApp = () => {
  const { setMessage, textAreaRef } = useContext(StoreContext)
  return (
    <section className={`container-fluid ${styles.downloadApp}`}>
      <div className='row'>
        <div className={`col-md-6 ${styles.contentImg}`}>
          <picture>
            <source srcSet={celImgOpt} type='image/webp' />
            <source srcSet={celImg} type='image/jpg' />

            <img
              data-aos='fade-up'
              className={`img-fluid ${styles.imgApp}`}
              src={celImg}
              alt='imagen principal aplicacion para totem de seguridad de edificios'
            />
          </picture>
        </div>
        <div className={`col-md-6 ${styles.contentData}`}>
          <h2 data-aos='fade-up'>Contamos con APP Especializada.</h2>
          <p data-aos='fade-up'>
            Nuestra APP esta hecha a medida y con ella podrás visualizar las
            cámaras de tu hogar en tiempo real y comunicarse con nuestra central
            mediante un botón antipánico.
          </p>
          <button
            data-aos='fade-up'
            onClick={() =>
              scrollToTop(
                setMessage,
                'Necesito mas información y presupuesto sobre la APP de Wilco...',
                textAreaRef.current,
              )
            }
            className={`btn ${styles.buttonDescargar}`}
          >
            SOLICITAR PRESUPUESTO
          </button>
        </div>
      </div>
    </section>
  )
}
export default DownloadApp
