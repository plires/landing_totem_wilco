import Tilde from '@/components/Tilde'
import styles from './features-tech.module.css'

const FeaturesTech = ({ features }) => {
  return (
    <div data-aos='fade-up' className={`${styles.contentFeatures}`}>
      <Tilde id={features.id} />
      <div className={`${styles.data}`}>
        <h4>{features.title}</h4>
        <p>{features.description}</p>
      </div>
    </div>
  )
}
export default FeaturesTech
