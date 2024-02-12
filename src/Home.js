import './Home.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Button from './Components/Button'
import Testimonailslider from './Components/Testimonailslider'
import Logoscurosel from './Components/Logoscurosel'
import Subscriptionform from './Components/Subscriptionform'


import travelimg from './Assets/hero-img/traveler-img.svg'
import { GoTriangleRight } from "react-icons/go";
import Calcweatherimg from './Assets/Service-img/calculateweather.jpg'
import flightimg from './Assets/Service-img/plane.jpg'
import microphoneimg from './Assets/Service-img/miccrophone.jpg'
import sittingsimg from './Assets/Service-img/sittings.jpg'
import tripdaysnav from './Assets/tripdestination-img/tripdestinationnav.svg'
import box1 from './Assets/booktrip-img/box1.jpg'
import box2 from './Assets/booktrip-img/box2.jpg'
import box3 from './Assets/booktrip-img/box3.jpg'
import booktripimg from './Assets/booktrip-img/booktripimg.jpg'


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
            <h1>Travel,<span>enjoy</span><br/>and live a new <br/>and full life
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
    <section className=' container_2clm top_destination_section'>
      <div className='title'>
        <h3>Top Selling</h3>
        <h2>Top Destinations</h2>
      </div>
      <div className='content flex_box_3d'>
        <div className='box one'>
          <div className='text'>
            <div>
              <p className='title'>Rome, Italty</p>
              <p className='price'>$5,42k</p>
            </div>
            <p className='trip_days'> <img src={tripdaysnav} alt='trip days nav' /> 10 Days Trip</p>
          </div>
        </div>
        <div className='box two'>
          <div className='text'>
            <div>
              <p className='title'>London, UK</p>
              <p className='price'>$4.2k</p>
            </div>
            <p className='trip_days'> <img src={tripdaysnav} alt='trip days nav' /> 12 Days Trip</p>
          </div>
        </div>
        <div className='boxthree'>
          <div className='content'>
            <div className='text'>
              <div>
                <p className='title'>Full Europe</p>
                <p className='price'>$15k</p>
              </div>
              <p className='trip_days'> <img src={tripdaysnav} alt='trip days nav' /> 28 Days Trip</p>
            </div>
          </div>
          <div className='bng_img'></div>
        </div>
      </div>
    </section>
    <section  className='container book_trip_section'>
      <div className='content  flex_box_2d'>
        <div className='text'>
          <div className='title'>
            <h3>Easy and Fast</h3>
            <h2>Book your next trip <br/>in 3 easy steps</h2>
          </div>
          <div className='boxs'>
            <div className='box one'>
              <img  src={box1} alt='box'/>
              <div className='box_text'>
                <p className='box_title'>Choose Destination</p>
                <p className='box_paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
              </div>
            </div>
            <div className='box two'>
              <img  src={box2} alt='box'/>
              <div className='box_text'>
                <p className='box_title'>Make Payment</p>
                <p className='box_paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
              </div>
            </div>
            <div className='box three'>
              <img  src={box3} alt='box'/>
              <div className='box_text'>
                <p className='box_title'>Reach Airport on Selected Date</p>
                <p className='box_paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
              </div>
            </div>
          </div>
        </div>
        <div className='img'>
          <img src={booktripimg} alt='book drip' />
        </div>
      </div>
    </section>
    <section className='container testimonials_section'>
      <Testimonailslider />
    </section>
    <section className='container trusted_companies_curosel'>
       <div className='curosel_wrapper'>
         <Logoscurosel />
       </div>
    </section>
    <section className='container subscription_section'>
      <div className='container_2clm div_wrapper'>
        <div className='title'>
          <p>
            Subscribe to get information, latest news and other <br/> interesting offers about Cobham
          </p>
        </div>
        <div className='content'>
          <Subscriptionform />
        </div>
      </div>
    </section>
  </main>
  <Footer />
  </>
  )
}

export default Home;