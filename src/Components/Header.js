import { useEffect } from 'react'
import jadoologo from '../Assets/header-img/jadoo-logo.svg'
import Nav from './nav/Nav'
import { useCurrentsection } from '../Hooks/getcurrentsections'

const Header = () => {
  useCurrentsection('js-main-hero')


  const headerstyle = {
    header: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      backgroundColor: 'rgba(0, 0 , 0, 0)',
      zIndex: '100'
    },
    header_wrapper: {
      paddingTop: '15px',
      paddingBottom: '15px',
      display: 'flex',
      backgroundColor: 'rgba(0, 0 , 0, 0)',
    },
    header_logo: {
      width: '200px',
      height: 'auto',
    },
    logo: {
      height: '30px',
      backgroundColor: 'rgba(0, 0 , 0, 0)',
  },
  }

  useEffect(()=> {
    const displaymainheader = ()=>{
      const header_el = document.getElementById('js-main-header')
       const currentsection = getcurrentsection()

       if(currentsection){
           header_el.style.display= 'flex'
       }else{
          header_el.style.display= 'none'  
       }
    }

    function getcurrentsection() {
      const el_id = document.getElementById('js-main-hero')
      const rect = el_id.getBoundingClientRect()

      
      return(
        rect.top >= -50 &&
        rect.bottom >= 0 &&
        rect.left >= 0 &&
        rect.right >= 0
      )
    }

    window.onscroll = displaymainheader
  
  }, [])

  return (
    <header style={headerstyle.header} id='js-main-header'>
      <div className='header_container_auto' style={headerstyle.header_wrapper}>
        <div className='header_logo' style={headerstyle.header_logo}>
          <img className='logo' src={jadoologo} alt='jadoo logo' style={headerstyle.logo} />
        </div>
        <Nav />
      </div>
    </header>
  )
}

export default Header;
