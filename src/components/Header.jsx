import { useEffect, useRef, useState } from 'react'
import logoWilco from '@/assets/img/logo-wilco.svg'
import logoWilcoSmall from '@/assets/img/logo-small-wilco.svg'

import './header.css'

const Header = () => {
  const [logo, setLogo] = useState(logoWilco)

  const headerElement = useRef()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      if (scrollPosition > 200) {
        headerElement.current.classList.add('fixed')
        setLogo(logoWilcoSmall)
      } else {
        headerElement.current.classList.remove('fixed')
        setLogo(logoWilco)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className='transition degrade' ref={headerElement}>
      <div className='content_logo transition'>
        <img className='img-fluid' src={logo} alt='logo depisos.com' />
      </div>
    </header>
  )
}

export default Header
