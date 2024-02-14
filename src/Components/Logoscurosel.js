import logoimg1 from '../Assets/logoscurosel-img/logo1.jpg'
import logoimg2 from '../Assets/logoscurosel-img/logo2.jpg'
import logoimg3 from '../Assets/logoscurosel-img/logo3.jpg'
import logoimg4 from '../Assets/logoscurosel-img/logo4.jpg'
import logoimg5 from '../Assets/logoscurosel-img/logo5.jpg'
import { useMediaqueryv } from '../Hooks/mediaquery'

const Logoscurosel = () => {


  /* start of js code */

  const logoscuroselslides_widthbigsize = () => {
    const csscontent = `
        .js-logoscuroselslides{
          width: 200%
        } 
    `

   const minviewpiontWidth = '768px'
   const maxviewpointWidth = '10000px'

   return[csscontent, minviewpiontWidth, maxviewpointWidth]

  }


  const logoscuroselslides_widthsmallsize = () => {
    const csscontent = `.js-logoscuroselslides{
       width: 400%;
     } `

    const minviewpiontWidth = '0px'
    const maxviewpointWidth = '767.99px'

    return[csscontent, minviewpiontWidth, maxviewpointWidth]
  }


   useMediaqueryv(logoscuroselslides_widthbigsize())
   useMediaqueryv(logoscuroselslides_widthsmallsize())
  /* end of js code */


  /* start of css code */
  let logoscurosel ={
    wrapper: {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
    },
    slides: {
      display: 'flex',
      gridGAp: '10px',
      height: '100%',
      paddingBlock: '50px',
    },
    slide: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '20%',
      height: '100%',
    },
    slide_center: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '20%',
      height: '60%',
      backgroundColor: '#fff',
      borderRadius: '20px',
      filter: 'drop-shadow(rgba(226, 226, 226, 0.25) -1px 40px 20px)',
    },
    img: {
      width: '100px',
      height: '100px',
      objectFit: 'contain',
    },
  }
  const {wrapper, slides, slide, img, slide_center} = logoscurosel
  /* end of css code */

  return (
    <div className="slides_wrapper" style={wrapper}>
       <div className='slides js-logoscuroselslides' style={slides}>
        <div className='slide' style={slide}><img style={img} src={logoimg1} alt='curosel' /></div>
        <div className='slide' style={slide}><img style={img} src={logoimg2} alt='curosel' /></div>
        <div className='slide' style={slide_center}><img style={img} src={logoimg3} alt='curosel' /></div>
        <div className='slide' style={slide}><img style={img} src={logoimg4} alt='curosel' /></div>
        <div className='slide' style={slide}><img style={img} src={logoimg5} alt='curosel' /></div>

        {/* repeated slides */}

        <div className='slide' style={slide}><img style={img} src={logoimg1} alt='curosel' /></div>
        <div className='slide' style={slide}><img style={img} src={logoimg2} alt='curosel' /></div>
        <div className='slide' style={slide_center}><img style={img} src={logoimg3} alt='curosel' /></div>
        <div className='slide' style={slide}><img style={img} src={logoimg4} alt='curosel' /></div>
        <div className='slide' style={slide}><img style={img} src={logoimg5} alt='curosel' /></div>
      </div>
    </div>
  )
}

export default Logoscurosel
