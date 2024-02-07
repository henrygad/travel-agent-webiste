import './Home.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Button from './Components/Button'


import travelimg from './Assets/hero-img/traveler-img.svg'
import { GoTriangleRight } from "react-icons/go";
import Calcweatherimg from './Assets/Service-img/calculateweather.jpg'
import flightimg from './Assets/Service-img/plane.jpg'
import microphoneimg from './Assets/Service-img/miccrophone.jpg'
import sittingsimg from './Assets/Service-img/sittings.jpg'


const Home = () => {
  return (
  <>
  <Header />
  <main>
    <section className='hero_container_100vh hero_section'>
      <div className='flex_box_2d flex_wrapper'>
        <div className='hero_text'>
          <div className='text_wrapper'>
            <h2>Best Destinations around the world</h2>
            <h1>Travel,<span>enjoy</span> <br/>and live a new <br/> and full life
            </h1>
            <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
            <div className='btn_wrapper'>
              <Button text={'Find out more'} backgroundColor={'var(--fourth-color)'} paddingBlock={'8px'} paddingInline={'15px'}/>
              <button className='paly_demo_btn'><span><GoTriangleRight  className='icon' size={'1.5em'} color={'#fff'}/></span> Play Demo</button>
            </div>
          </div>
        </div>
        <div className='hero_img'>
          <div className='image_wrapper'>
            <img src={travelimg} alt='traveler' />
          </div>
        </div>
      </div>
    </section>
    <section className='container_2clm services_section'>
      <div className='title'>
        <h3>CATEGORY</h3>
        <h2>We Offer Best Services</h2>
      </div>
      <div className='flex_box_4d content'>
        <div className='box '>
          <img src={Calcweatherimg} alt='sercives' />
          <h4>Calculated Weather</h4>
          <p>Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>
        <div className='boxtwo '>
          <div className='content'>
            <img src={flightimg} alt='sercives' />
            <h4>Best Flights</h4>
            <p>Engrossed listening. Park gate sell they west hard for the.</p>
          </div>
          <div className='bg_img'></div>
        </div>
        <div className='box '>
          <img src={microphoneimg} alt='sercives' />
          <h4>Local Events</h4>
          <p>Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
        </div>
        <div className='box '>
          <img src={sittingsimg} alt='sercives' />
          <h4>Customization</h4>
          <p>We deliver outsourced aviation services for military customers</p>
        </div>
      </div>
    </section>
  </main>
  <Footer />
  </>
  )
}

export default Home;