import logo from '../Assets/footer-img/Jadoo-logo.jpg'
import facebookimg from '../Assets/footer-img/facebookimg.jpg'
import twitterimg from '../Assets/footer-img/twitterimg.jpg'
import instagramimg from '../Assets/footer-img/instagramimg.jpg'
import mobileappimg from '../Assets/footer-img/mobileappimg.jpg'
import footerbgimg from '../Assets/footer-img/footerbgimg.svg'



const Footer = () => {

  const footerstyle = {
    footer_wraper: {
      paddingTop: '100px',
      paddingBottom: '20px',
      backgroundImage: `url(${footerbgimg})`,
      backgroundRepeat: 'no-repeat',
      backgroundPositionX: 'right',
      backgroundPositionY: 'bottom',
      backgroundSize: 'contain',
    },
    footer_content: {
      paddingBlock: '50px',
      gridRowGap: '20px',
    },
    footer_content_div: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gridGap:' 20px',
      maxWidth: '240px',
    },
    logo_div: {
      minWidth: '180px',
    },
    logo: {
      height: '20px',
    },
    p: {
      width: '180px',
      fontSize: '13px',
      lineHeight: '20px',
    },
    content: {
      width:'180px',
      display: 'flex',
      flexDirection: 'column',
      gridGap:' 10px',
    },
    h4: {
      fontSize: '16px',
      width:'180px',
    },
    p_links: {
      fontSize: '14px',
      cursor: 'pointer',
    },
    socialimg: {
      height: '40px',
      cursor: 'pointer',
    },
    mobileappimg: {
      height: '60px',
      cursor: 'pointer',
    },
    footer_copyright: {
      width: '100%',
      textAlign: 'center',
      marginTop: '50px'
    },
    p_copyright: {
      fontSize: '15px',
      marginTop: '5px',
    },


  }
  return (
    <footer>
      <section className="container_2clm footer_wraper" style={footerstyle.footer_wraper}>
        <div className="flex_box_5d footer_content" style={footerstyle.footer_content}>
          <div className="footer_logo" style={footerstyle.footer_content_div}>
            <div className='logo_div' style={footerstyle.logo_div}><img className="logo" src={logo} alt="jaboo logo" style={footerstyle.logo}/></div>
            <p style={footerstyle.p}>Book your trip in minute, get full
               Control for much longer.
            </p>
          </div>
          <div className="footer_usefull_links company" style={footerstyle.footer_content_div}>
            <h4 className='title' style={footerstyle.h4}>Company</h4>
            <div className='content' style={footerstyle.content}>
              <p style={footerstyle.p_links}>About</p>
              <p style={footerstyle.p_links}>Careers</p>
              <p style={footerstyle.p_links}>Mobile</p>
            </div>
          </div>
          <div className="footer_usefull_links contact" style={footerstyle.footer_content_div}>
            <h4 className='title' style={footerstyle.h4}>Contact</h4>
            <div className='content' style={footerstyle.content}>
              <p style={footerstyle.p_links}>Help/GAQ</p>
              <p style={footerstyle.p_links}>Press</p>
              <p style={footerstyle.p_links}>Afilaites</p>
            </div>
          </div>
          <div className="footer_usefull_links more" style={footerstyle.footer_content_div}>
            <h4 className='title' style={footerstyle.h4}>More</h4>
            <div className='content' style={footerstyle.content}>
              <p style={footerstyle.p_links}>Airlinefees</p>
              <p style={footerstyle.p_links}>Airline</p>
              <p style={footerstyle.p_links}>Low fare tips</p>
              <p></p>
            </div>
          </div>
          <div className="footer_usefull_links reach_us" style={footerstyle.footer_content_div}>
            <div className='footer_socials'>
              <img src={facebookimg}  alt='social' style={footerstyle.socialimg}/>
              <img src={instagramimg}  alt='social' style={footerstyle.socialimg}/>
              <img src={twitterimg}  alt='social' style={footerstyle.socialimg}/>
            </div>
            <div className='dowloadmobile_app' style={footerstyle.dowloadmobile_app}>
              <img className='mobile_app'  src={mobileappimg} alt='mobile app' style={footerstyle.mobileappimg}/>
            </div>
          </div>
        </div>
        <div className="footer_copyright" style={footerstyle.footer_copyright}><p style={footerstyle.p_copyright}>All rights reserved @jadoo.com</p></div>
      </section>
    </footer>
  )
}

export default Footer