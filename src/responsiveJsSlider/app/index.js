export const Getcurrentslidesposition = ({slides_ele, slidemove_from})=>{
    let currentposition;

    if(slidemove_from.toLocaleLowerCase() === 'left'||
            slidemove_from.toLocaleLowerCase() === 'right') currentposition = slides_ele.style.left// get slides position left relative the scream view point    
    else if(slidemove_from.toLocaleLowerCase() === 'top'||
            slidemove_from.toLocaleLowerCase() === 'bottom' ) currentposition = slides_ele.style.top // get slides position top relative the scream view point

    return parseFloat(currentposition) * -1
}
 
export const Moveslides = ({
        currentposition, 
        slides_ele,
        numberOfSlides, 
        slidemove_from,
        animation_value,
        perView,
        numberOfSlides_toDisplay_PerView,
    }, Myfunc = (value)=>{})=>{
            
    let Nextposition;
    const getAllSlides = [...slides_ele.children]
    const Createnewarrslides = (array, groupSize) => {
        const newGroupOfArr = []

        while (array.length > 0) {
            newGroupOfArr.push(array.splice(0, groupSize))
        }

        return newGroupOfArr
    }
    const createNewArrslides = Createnewarrslides(getAllSlides, numberOfSlides_toDisplay_PerView())
    slides_ele.style.transition = animation_value


    const Usualslidesmove = ()=>{

        if(currentposition === (numberOfSlides * 100)){

            slides_ele.style.transition = "none"
            Nextposition = 0 //move slides to the start
              
            setTimeout(() => { //next move to the next slide from left '-100%'
                slides_ele.style.transition = animation_value
                Nextposition = 100
                GetslideOnviewInfor(Nextposition)

                if(slidemove_from.toLocaleLowerCase() === 'left') slides_ele.style.left = '-'+ Nextposition +'%'
                else if(slidemove_from.toLocaleLowerCase() === 'top') slides_ele.style.top = '-'+ Nextposition +'%'   
            }, 100);
    
        }else if(currentposition < 0){

            Nextposition = 0
        }else if(currentposition === 0){

            Nextposition =  perView
        }else{

            currentposition += perView
            Nextposition = currentposition
        }

        return Nextposition
    }

    const Oppositeslidesmove = ()=>{
        
        if(currentposition < 0){

            Nextposition = 0
        }else if(currentposition === 0){

            slides_ele.style.transition = 'none'
            Nextposition = (numberOfSlides * 100) // this will move the slides to the repeated last slide

            setTimeout(() => { // move the slides to slide before the repeaded last slide(left = '-100%')

                slides_ele.style.transition = animation_value
                Nextposition = (numberOfSlides * 100) - perView
                GetslideOnviewInfor(Nextposition)
    
                if(slidemove_from.toLocaleLowerCase() === 'right') slides_ele.style.left = '-'+  Nextposition +'%'
                else if(slidemove_from.toLocaleLowerCase() === 'bottom') slides_ele.style.top = '-'+ Nextposition +'%'  
            }, 100)

        }else{

            currentposition -= perView
            Nextposition = currentposition 
        }
    
        return Nextposition
    }

    const GetslideOnviewInfor = (Nextposition)=>{
        let arrslides = []
        let slidesOnviewEle;
        let slidescurrentPositionIndex = (Nextposition) / 100
        if(slidescurrentPositionIndex === numberOfSlides){
            slidescurrentPositionIndex = 0
        }

        createNewArrslides.forEach((value, index)=>{

            arrslides.push(value)
            if(Nextposition === index * 100){

                slidesOnviewEle = value
            }
        })


        Myfunc({
            arrslides,
            slidescurrentPositionIndex,
            numberOfSlides,
            slidesOnviewEle,
            slideOnview_previousSibling: slidesOnviewEle[0].previousElementSibling, //little adjustment needed
            slideOnscream_NextSibling: slidesOnviewEle[0].nextElementSibling, //little adjustment needed
         })
    }

   
    if(slidemove_from.toLocaleLowerCase() === 'left') slides_ele.style.left = '-'+ Usualslidesmove() +'%'
    else if(slidemove_from.toLocaleLowerCase() === 'right')  slides_ele.style.left = '-'+ Oppositeslidesmove() +'%'
    else if(slidemove_from.toLocaleLowerCase() === 'top') slides_ele.style.top = '-'+ Usualslidesmove() +'%'
    else if(slidemove_from.toLocaleLowerCase() === 'bottom') slides_ele.style.top = '-'+ Oppositeslidesmove() +'%'

    GetslideOnviewInfor(Nextposition)
}