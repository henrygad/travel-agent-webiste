import reviewerimg1 from '../Assets/testimonial-img/reviewer1.jpg'
import reviewerimg2 from '../Assets/testimonial-img/reviewer2.jpg'
import reviewerimg3 from '../Assets/testimonial-img/reviewer3.jpg'
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

const Testimonailslider = () => {
//js code
//end of js code


//css code
    let testimonailsliderstyle = {
        wrapper: {
            justifyContent: 'center',
            gridRowGap: '30px',
            height: '400px',
        },
       title_div: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flexBasis: '320px',
        },
        title: {
            width: '60%',
            paddingBottom: '60px',
        },
        h2: {
            whiteSpace: 'pre'
        },
        h3: {
            paddingBottom: '10px',
        },
        dots_nav: {
            width: '60%',
            display: 'flex',
            gridGap: '20px',
        },
        dot: {
            width: '10px',
            height: '10px',
            borderRadius:'50%',
            backgroundColor: 'lightgray',
        },
        dot1: {
            width: '10px',
            height: '10px',
            borderRadius:'50%',
            backgroundColor: 'black',
        },
        slider: {
            display: 'flex',
            flexBasis: '320px',
            height: '100%',
            overflow: 'hidden',
        },
        slides: {
            position: 'relative',        
            top: '-00%',
            width: '100%',
            height: '100%',
        },
        slide: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
        },
        slide_one: {
            position: 'absolute',
            top: '-10%',
            left: '-5%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            zIndex: '10',
        },
        slidecontent: {
            position: 'relative',
            width: '75%',
            height: 'auto%',
            padding: '25px',
            backgroundColor: '#fff',
            border: '.1px solid lightgray',
            borderRadius: '20px',
        },
        slidecontent_one: {
            position: 'relative',
            width: '75%',
            height: 'auto%',
            padding: '25px',
            backgroundColor: '#fff',
            borderRadius: '20px',
            filter:'drop-shadow(-1px 40px 20px rgba(226, 226, 226, 0.25))',
        },
        slideimg: {
            position: 'absolute',
            top: "-10%",
            left: "-5%",
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            objectFit: 'cover',
        },
        paragraph: {
            fontSize: '14px',
        },
        name: {
            fontSize: '13px',
            marginTop:'8%',
        },
        description: {
            fontSize: '13px',
            marginTop:'2px',
        },
        slider_nav: {
            display:'flex', 
            flexDirection: 'column',
            justifyContent: 'center',
            gridGap:'30px',
            width: '25px',
        },
    }

    const {wrapper, title_div, slider, 
           title, h2, h3, dot, dots_nav, dot1,
            slides, slider_nav, slide, slide_one, slidecontent, slidecontent_one,
             slideimg, paragraph, name, description} = testimonailsliderstyle
//end of css code

  return (
    <div className="flex_box_2d testimonial_slider_wrapper" style={wrapper}>
        <div className="title&dotnavs_wrapper" style={title_div}>
            <div className="title" style={title}>
                <h3 style={h3}>Testimonials</h3>
                <h2 style={h2}>What people say <br/>about Us.</h2>
            </div>
            <div className="dot_navs" style={dots_nav}>
                <div className="dot" style={dot1}></div>
                <div className="dot" style={dot}></div>
                <div className="dot" style={dot}></div>
            </div>
        </div>
        <div className="slider" style={slider}>
            <div className="slides" style={slides}>
                <div className="slide one" style={slide_one}>
                    <div className='slide content' style={slidecontent_one}>
                        <img style={slideimg} src={reviewerimg3} alt="client" />
                        <p className="slide_paragraph" style={paragraph}>
                            “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                        </p>
                        <p className="slide_name" style={name}>Mike taylor</p>
                        <p className="slide_description" style={description}>Lahore, Pakistan</p>
                    </div>
                </div>
                <div className="slide two" style={slide}>
                    <div className='slide_content' style={slidecontent}>
                        <img style={slideimg} src={reviewerimg2} alt="client" />
                        <p className="slide_paragraph" style={paragraph}>
                            “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                        </p>
                        <p className="slide_name" style={name}>Chris Thomas</p>
                        <p className="slide_description" style={description}>CEO of Red Button</p>
                    </div>
                </div>
                <div className="slide three" style={slide}>
                    <div className='slide content' style={slidecontent}>
                        <img style={slideimg} src={reviewerimg1} alt="client" />
                        <p className="slide_paragraph" style={paragraph}>
                            “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                        </p>
                        <p className="slide_name" style={name}>Rosline Jonhson</p>
                        <p className="slide_description" style={description}>Front end engineer</p>
                    </div>
                </div>
            </div>
            <div className='slider_arr_nav' style={slider_nav}>
                <SlArrowUp size={'.8em'} color='black' />
                <SlArrowDown size={'.8em'} color='gray' />
            </div>
        </div>
    </div>
  )
}

export default Testimonailslider
