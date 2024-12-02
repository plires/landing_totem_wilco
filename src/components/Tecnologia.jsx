import FeaturesTech from '@/components/FeaturesTech'
import userImg from '@/assets/img/totem-usuario.jpg'
import userImgOpt from '@/assets/img/totem-usuario.webp'
import { getTechnologicalFeatures } from '@/utils/dataUtils'

import styles from './tecnologia.module.css'

const Tecnologia = () => {
  const features = getTechnologicalFeatures('technologicalFeatures')
  return (
    <section className={`container ${styles.tecnologia}`}>
      <div className='row'>
        <div className='col-md-12'>
          <h2 data-aos='fade-up'>Última tecnología en sistemas de seguridad</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <picture>
            <source srcSet={userImgOpt} type='image/webp' />
            <source srcSet={userImg} type='image/jpg' />

            <img
              data-aos='fade-up'
              className={`img-fluid ${styles.imgPrincipal}`}
              src={userImg}
              alt='imagen principal totem de seguridad para edificios'
            />
          </picture>
        </div>
        <div className='col-md-6'>
          {features &&
            features.map(item => (
              <FeaturesTech key={item.id} features={item} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default Tecnologia
