import jadoologo from '../Assets/header-img/jadoo-logo.svg'
import Hamburger from './Hamburger'
import Closenav from './Closenav'

import {SlArrowDown } from "react-icons/sl";

const Header = () => {

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
    main_nav: {
      flex: '1',
      backgroundColor: 'rgba(0, 0 , 0, 0)',
    },
    nav_list_wrapper: {
      width: '100%',
      height: 'auto',
      backgroundColor: 'rgba(0, 0 , 0, 0)',
    },
    ul_list: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%',
      height: 'auto',
      backgroundColor: 'rgba(0, 0 , 0, 0)',
    },
    list: {
      fontFamily: 'var( --google-san-font)',
      fontSize: '16px',
      color: 'var(--third-color)',
      cursor: 'pointer',
    },
    login: {
    },
    sign_up: {
      fontFamily: 'var( --google-san-font)',
      fontSize: '16px',
      color: 'var(--third-color)',
      padding: '5px 20px',
      margin: '0 5px',
      border: '1px solid var(--third-color)',
      whiteSpace: 'pre',
      cursor: 'pointer',
    },
    choose_lang: {
      fontFamily: 'var( --google-san-font)',
      fontSize: '16px',
      color: 'var(--third-color)',
      whiteSpace: 'pre',
      cursor: 'pointer',
    }
  }


  return (
    <header style={headerstyle.header}>
      <div className='header_container_auto' style={headerstyle.header_wrapper}>
        <div className='header_logo' style={headerstyle.header_logo}>
          <img className='logo' src={jadoologo} alt='jadoo logo' style={headerstyle.logo} />
        </div>
        <nav className='main_nav' style={headerstyle.main_nav}>

          <Hamburger display={'none'}/>

          <div className='nav_list_wraper' style={headerstyle.nav_list_wrapper}>

            <Closenav display={'none'}/>

            <ul className='ul_list' style={headerstyle.ul_list}>
                <li className='list' style={headerstyle.list}>Destination</li>
                <li className='list' style={headerstyle.list}>Hotels</li>
                <li className='list' style={headerstyle.list}>Flights</li>
                <li className='list' style={headerstyle.list}>Bookings</li>
                <li className='list' style={headerstyle.list}>Login</li>
                <li className='sign_up' style={headerstyle.sign_up}>Sign up</li>
                <li className='choose_lang ' style={headerstyle.choose_lang}>EN <SlArrowDown  size={'.5em'} /> </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
