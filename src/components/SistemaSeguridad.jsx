import { scrollToTop } from '@/utils/dataUtils.js'
import { useContext } from 'react'
import { StoreContext } from '@/context/store'
import Tilde from '@/components/Tilde'
import imgPadreHijo from '@/assets/img/padre-hija-degrade.png'
import imgPadreHijoOpt from '@/assets/img/padre-hija-degrade.webp'
import { getTitlesSystem } from '@/utils/dataUtils'

import styles from './sistemas-seguridad.module.css'

const SistemaSeguridad = () => {
  const { setMessage, textAreaRef } = useContext(StoreContext)
  const titlesSystem = getTitlesSystem('titlesSystem')
  return (
    <section className={`container-fluid ${styles.sistemaSeguridad}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h2>
              Aparte de nuestro Totem, contamos con un nuevo sistema de
              seguridad.
            </h2>
            <h3>
              "EDIFICIO SEGURO", es un sistema de seguridad electrónico integral
              para consorcios. <br /> Similar al Totem, PERO SIN LA INTERACCIÓN
              DEL MONITORISTA
            </h3>
            <h4>¿En qué consiste este servicio llamado, "Edificio Seguro"?</h4>
            <p>
              Consiste en combinación de diferentes tecnologías; controles de
              acceso, cámaras de seguridad, dispositivos de alarma y personal
              altamente calificado en nuestro centro de monitoreo para la
              recepción de distintos eventos.
            </p>
            <p>
              Se instala en los diferentes accesos una controladora digital con
              lectora del tipo PIN/tarjeta, quien será el encargado de validar
              el acceso.
            </p>
            <p>
              A su vez, cada acceso tendrá un sensor en la puerta indicando si
              la puerta fue violentada (sin validación) o si la puerta quedó
              abierta, en este último caso la central de monitoreo contactará a
              la última persona que realizó la apertura.
            </p>
            <p>
              Cada apertura queda registrada para posterior análisis como
              también las llamadas telefónicas y los eventos de videos.
            </p>
            <p>
              Cada consorcio tendrá un Drive destinado a información de estado
              del servicio, imágenes, videos, etc.
            </p>
            <p>
              La central de monitoreo posee el acceso al sistema de video para
              realizar video verificación y si algún residente necesita
              asistencia al ingresar al edificio. Las imágenes/videos del
              edificio son grabadas en duplicado en nuestros servidores
              externos, para evitar que por un posible vandalismo o descuido se
              pierda información sensible el consorcio.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className={`col-md-6 ${styles.contentData}`}>
            <div data-aos='fade-up'></div>
            <div className={`row`}>
              <div className={`col-md-6 ${styles.contentUl}`}>
                <ul className={`${styles.firstUl}`}>
                  {titlesSystem &&
                    titlesSystem.map(
                      item =>
                        item.column === 'left' && (
                          <li data-aos='fade-up' key={item.id}>
                            <Tilde id={item.id} />
                            {item.title}
                          </li>
                        ),
                    )}
                </ul>
              </div>
              <div
                className={`col-md-6 ${styles.contentUl} ${styles.contentData}`}
              >
                <ul className={`${styles.lastUl}`}>
                  {titlesSystem &&
                    titlesSystem.map(
                      item =>
                        item.column === 'right' && (
                          <li data-aos='fade-up' key={item.id}>
                            <Tilde id={item.id} />
                            {item.title}
                          </li>
                        ),
                    )}
                </ul>
              </div>
              <div className={`col-md-12 ${styles.contentButton}`}>
                <button
                  data-aos='fade-up'
                  onClick={() =>
                    scrollToTop(
                      setMessage,
                      'Necesito mas información sobre este nuevo sistema de seguridad llamado "Edificio Seguro" y conocer diferencias de precios con respecto al Totem de Seguridad...',
                      textAreaRef.current,
                    )
                  }
                  className={`btn ${styles.buttonEdicificioSeguro}`}
                >
                  NECESITO MAS INFORMACIÓN
                </button>
              </div>
            </div>
          </div>
          <div className={`col-md-6 ${styles.contentImg}`}>
            <picture>
              <source srcSet={imgPadreHijoOpt} type='image/webp' />
              <source srcSet={imgPadreHijo} type='image/jpg' />

              <img
                data-aos='fade-up'
                className={`img-fluid ${styles.imgApp}`}
                src={imgPadreHijo}
                alt='imagen principal aplicacion para totem de seguridad de edificios'
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SistemaSeguridad
