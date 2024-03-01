import { Getcurrentslidesposition,  Moveslides } from "./app/index.js"
import { Arrowslidernav, Dotsslidernav, Autoslidernav } from "./app/controls.js"
import { useEffect } from "react"


const Settings = (arrSlides = 'none', {
    slidesWrapperId = 'none',
    slidesWrapperClass = 'none',
    numberOfSlides_toDisplay_PerView = ()=>{},
    slidemove_from = 'left',
    autoplay: {isAutoplayActivated = false, onloadPlay = true, isPauseActivated = false, autoPlayDurition = 2000, autoPlayAnimation = 'none'},
    arrownav: {isArrownavActivated = false,  arrowslidernav_Class = 'none', arrowNavAnimation = 'none'},
    dotnav: {isDotnavActivated = false, dotslidernav_Class = 'none', dotNavAnimation = 'none'},
    },  Myfunc = (slideInfo)=>{})=>{


    //Global Varibles 
    const perView = 100//width by % 
    const Createnewarrslides = (array, groupSize) => {

        const newGroupOfArr = []
        while (array.length > 0) {
            newGroupOfArr.push(array.splice(0, groupSize))
        }

        return newGroupOfArr
    }
    const createNewArrslides = Createnewarrslides(arrSlides, numberOfSlides_toDisplay_PerView())
    const numberOfSlides = createNewArrslides.length
    const repeateFirstSlides = 1 //onces
    const totalNumberOfSlides_perView = numberOfSlides + repeateFirstSlides
    const slidesWrapperHrWidth = totalNumberOfSlides_perView * 100
    const slidesWrapperVrHeight = totalNumberOfSlides_perView * 100  
    const Slidemovefromopposite = (value) => {
        let newValue;

        if(value === 'left' || value === 'top'){
            if(value === 'left') newValue = 'right'
            else if(value === 'top') newValue = 'bottom'
        }else if(value === 'right' || value === 'bottom'){
            if(value === 'right') newValue = 'left'
            else if(value === 'bottom') newValue = 'top'
        }else return;

        return newValue
    }
    const EvaluatewidthAndheightslideswrapper = (value) => {     
        let newValue;

        if(value === 'left' || value === 'right') newValue = 'left'
        else if(value === 'top' || value === 'bottom')newValue = 'top';

        return newValue
    }
    const slidemovefrom_opposite = Slidemovefromopposite(slidemove_from.toLocaleLowerCase())
    const hrWidthOrVrheight = EvaluatewidthAndheightslideswrapper(slidemove_from.toLocaleLowerCase())
    //End Of Global Varibles 


    useEffect(()=>{
  
        const slides_ele = document.getElementById(slidesWrapperId)
        const arrownavs_ele = document.querySelectorAll('.'+ arrowslidernav_Class)
        const dotnavs_ele = document.querySelectorAll('.'+ dotslidernav_Class)

        if(slides_ele === null ||
           slides_ele ===  undefined){
            return;
        }


        if(isArrownavActivated){

            Arrowslidernav({arrownavs_ele}, (index)=>{ 
                let slideMove_forArrownav;   
                const currentposition = Getcurrentslidesposition( // get current positon of the slides wrapper value from the left or top relative to position the view piont
                {slides_ele, slidemove_from})

                if(index === 0){ //left arrow nav

                    slideMove_forArrownav = slidemove_from.toLocaleLowerCase() === 'left' ||
                                            slidemove_from.toLocaleLowerCase() === 'top' ? slidemove_from: slidemovefrom_opposite
                }else if(index === 1){ //right arrow nav 

                    slideMove_forArrownav = slidemove_from.toLocaleLowerCase() === 'left' ||
                                            slidemove_from.toLocaleLowerCase() === 'top' ? slidemovefrom_opposite: slidemove_from
                }

                Moveslides({
                    currentposition, slides_ele,
                    slidemove_from:  slideMove_forArrownav,
                    animation_value: arrowNavAnimation, 
                    numberOfSlides,  perView, numberOfSlides_toDisplay_PerView,
                }, Myfunc)
            })  
        }
        
        if(isDotnavActivated){

            Dotsslidernav({dotnavs_ele}, (newCurrentposition)=>{
                Moveslides({
                    currentposition: newCurrentposition, 
                    slides_ele,
                    slidemove_from: slidemove_from.toLocaleLowerCase() === 'left' ||
                                    slidemove_from.toLocaleLowerCase() === 'top' ? slidemove_from: slidemovefrom_opposite,
                    animation_value: dotNavAnimation,
                    numberOfSlides, perView, numberOfSlides_toDisplay_PerView,
                }, Myfunc)
            })
        }

        if(isAutoplayActivated){

            const [Play, Pause] =  Autoslidernav({onloadPlay, autoPlayDurition}, ()=>{
                    const currentposition = Getcurrentslidesposition( // get current positon of the slides wrapper value from the left or top relative to position the view piont
                        {slides_ele, slidemove_from})
                    Moveslides({currentposition,
                                slides_ele,
                                slidemove_from,
                                animation_value: autoPlayAnimation, 
                                numberOfSlides, 
                                perView,
                                numberOfSlides_toDisplay_PerView}, Myfunc)
                    })

                Play()                      
                if(isPauseActivated){
                    slides_ele.addEventListener('mouseenter', event=> Pause())
                    slides_ele.addEventListener('mouseleave', event => Play())
                }
        }      
    
    })

    
    return( //display slides in the DOM
        <div classname={slidesWrapperClass}
         id={slidesWrapperId} 
         style={{position: 'relative', 
                top: '0%', left: '0%',
                display: 'flex', 
                flexDirection: slidemove_from.toLocaleLowerCase() === 'top' || slidemove_from.toLocaleLowerCase() === 'bottom'? 'column': 'row', 
                width: hrWidthOrVrheight === 'left'? slidesWrapperHrWidth+'%': '100%', 
                height: hrWidthOrVrheight === 'top'? slidesWrapperVrHeight+'%': '100%'}}>
             {
                createNewArrslides.map((element, index)=>(
                    element
                ))
            }
            {createNewArrslides[0]}
        </div>
    )
}


export default Settings;