import jadoologo from '../Assets/header-img/jadoo-logo.svg'
import Nav from './nav/Nav'

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
  }

  return (
    <header style={headerstyle.header} id='js-header'>
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
