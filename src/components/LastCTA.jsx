import { useContext } from 'react'
import { StoreContext } from '@/context/store'
import styles from './last-cta.module.css'

import { scrollToTop } from '@/utils/dataUtils'

const LastCTA = () => {
  const { setMessage, textAreaRef } = useContext(StoreContext)
  return (
    <section className={`container ${styles.lastCta}`}>
      <div className='row'>
        <div className={`col-md-12`}>
          <h2>Te invitamos a contactarnos.</h2>
          <button
            onClick={() =>
              scrollToTop(
                setMessage,
                'Necesito mas información sobre sus sistemas de seguridad...',
                textAreaRef.current,
              )
            }
            className={`btn ${styles.button}`}
          >
            ¡QUIERO MÁS INFORMACIÓN!
          </button>
        </div>
      </div>
    </section>
  )
}

export default LastCTA
