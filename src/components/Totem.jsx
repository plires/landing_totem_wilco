import React, { useContext, useEffect } from 'react'
import FeaturesTotem from '@/components/FeaturesTotem'
import { getImageURL, getFeatures } from '@/utils/dataUtils'
import totemImg from '@/assets/img/totem-wilco.jpg'
import totemImgOpt from '@/assets/img/totem-wilco.webp'
import { StoreContext } from '@/context/store'
import styles from './totems.module.css'

const Totem = () => {
  const { isMobile, setIsMobile } = useContext(StoreContext)

  useEffect(() => {
    // Función para verificar el tamaño de la ventana
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Verificamos el tamaño inicial al montar el componente
    handleResize()

    // Agregamos el listener de redimensionamiento
    window.addEventListener('resize', handleResize)

    // Eliminamos el listener cuando el componente se desmonta
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const features = getFeatures('features')
  return (
    <section className={` ${styles.totem}`}>
      <div className='container'>
        <div className={`row ${styles.contentHeader}`}>
          <div className='col-md-12'>
            <h2>La protección que te merecés</h2>
            <p>
              El totem es un sistema de seguridad que permite{' '}
              <span>interactuar en tiempo real</span> con un operador de video
              de monitoreo de guardia virtual. Los operadores de monitoreo rotan
              entre 30 y 45 minutos a fin de poder brindar al máximo su
              capacidad de vigilancia. La incorporación del tótem de seguridad
              dentro de un consorcio no solo{' '}
              <span>fortalece la protección del edificio</span>, sino que
              también promueve un entorno más seguro y tranquilo para todos los
              residentes. Con soluciones integrales de seguridad como las
              ofrecidas por <span>Wilco</span>, la videovigilancia se convierte
              en un aliado confiable para proteger los espacios compartidos.
            </p>
          </div>
        </div>

        <div data-aos='fade-up' className={`row ${styles.totemDesktop}`}>
          <div
            className={`col-md-4 ${styles.colLeft} ${isMobile ? styles.hidden : styles.show}`}
          >
            {features.map(
              item =>
                item.column === 'left' && (
                  <article key={item.id}>
                    <div className={`${styles.content_data}`}>
                      <h3 dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                      <p>{item.description}</p>
                    </div>
                    <img
                      className='img-fluid'
                      src={getImageURL(item.img)}
                      alt={item.alt}
                    />
                  </article>
                ),
            )}
          </div>
          <div className={`col-md-4 ${styles.contentImgTotem}`}>
            <picture>
              <source srcSet={totemImgOpt} type='image/webp' />
              <source srcSet={totemImg} type='image/jpg' />

              <img
                className={`img-fluid ${styles.imgPrincipal}`}
                src={totemImg}
                alt='imagen principal totem de seguridad para edificios'
              />
            </picture>
          </div>
          <div
            className={`col-md-4 ${styles.colRight} ${isMobile ? styles.hidden : styles.show}`}
          >
            {features.map(
              item =>
                item.column === 'right' && (
                  <article key={item.id}>
                    <img
                      className='img-fluid'
                      src={getImageURL(item.img)}
                      alt={item.alt}
                    />
                    <div className={`${styles.content_data}`}>
                      <h3 dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ),
            )}
          </div>
        </div>
      </div>

      <div className={`container-fluid ${styles.totemMobile}`}>
        <div className='row'>
          <div className='col-md-12'>
            <FeaturesTotem features={features} />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Totem
