import './Nav.css'
import Hamburger from './Hamburger'
import Closenav from './Closenav'
import {SlArrowDown } from "react-icons/sl"
import { UseRemovemenu } from './displaymenu'

const Nav = () => {

    let nav = {
        main_nav: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flex: '1',
            backgroundColor: 'rgba(0, 0 , 0, 0)',
          },
          nav_list_wrapper: {
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '100%',
            height: 'auto',
          },
          ul_list: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
          list: {
            fontFamily: 'var( --google-san-font)',
            fontSize: '16px',
            cursor: 'pointer',
          },
          login: {
          },
          sign_up: {
            fontFamily: 'var( --google-san-font)',
            fontSize: '16px',
            padding: '5px 20px',
            margin: '0 5px',
            whiteSpace: 'pre',
            cursor: 'pointer',
          },
          choose_lang: {
            fontFamily: 'var( --google-san-font)',
            fontSize: '16px',
            whiteSpace: 'pre',
            cursor: 'pointer',
          }
    }

    const {main_nav, nav_list_wrapper, ul_list, list, sign_up, choose_lang} = nav

    
  return (
    <nav className='main_nav' style={main_nav}>

        <Hamburger displaymobilenav={'js-mobilenav'}/>

        <div className='nav_list_wraper js-mobilenav' style={nav_list_wrapper} onClick={e=> UseRemovemenu('js-mobilenav')}>

          <Closenav displaymobilenav={'js-mobilenav'}/>

          <ul className='ul_list' style={ul_list}>
              <li className='list' style={list}>Destination</li>
              <li className='list' style={list}>Hotels</li>
              <li className='list' style={list}>Flights</li>
              <li className='list' style={list}>Bookings</li>
              <li className='list' style={list}>Login</li>
              <li className='sign_up' style={sign_up}>Sign up</li>
              <li className='choose_lang ' style={choose_lang}>EN <SlArrowDown  size={'.5em'} /> </li>
          </ul>
        </div>
  </nav>
  )
}

export default Nav
