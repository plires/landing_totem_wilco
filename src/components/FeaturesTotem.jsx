import { getImageURL } from '@/utils/dataUtils'

import Slider from 'react-slick'
import './../../node_modules/slick-carousel/slick/slick.css'
import './../../node_modules/slick-carousel/slick/slick-theme.css'

import styles from './features-totem.module.css'

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  initialSlide: 0,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
}

const FeaturesTotem = ({ features }) => {
  return (
    <section className={`${styles.featuresTotem}`}>
      <Slider {...settings}>
        {features.map(item => (
          <article key={item.id} className={`${styles.containerFeatured}`}>
            <img
              className={`${styles.img_thumbnail} img-fluid`}
              src={getImageURL(item.img)}
              alt={item.name + ' - ' + item.id}
            />

            <h5 dangerouslySetInnerHTML={{ __html: item.title }}></h5>
          </article>
        ))}
      </Slider>
    </section>
  )
}

export default FeaturesTotem
