import ImgPrincipal from '@/components/ImgPrincipal'
import Totem from '@/components/Totem'
import Tecnologia from '@/components/Tecnologia'
import DownloadApp from '@/components/DownloadApp'
// import SistemaSeguridad from '@/components/SistemaSeguridad'
import LastCTA from '@/components/LastCTA'

import './home.css'

const Home = () => {
  return (
    <section className='home'>
      <ImgPrincipal />
      <Totem />
      <Tecnologia />
      {/* <SistemaSeguridad /> */}
      <DownloadApp />
      <LastCTA />
    </section>
  )
}

export default Home
