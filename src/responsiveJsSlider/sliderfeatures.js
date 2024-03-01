
export const Dislaydotbackgrondcolor = ({slidescurrentPositionIndex = 0, 
                                        dotslidernav_Class = 'none', 
                                        backgroundColor = 'none',
                                        transition = 'none'}) =>{
    setTimeout(Fetch,100)
    function Fetch(){
       const dotslidernavs = document.querySelectorAll('.'+ dotslidernav_Class)

       if(dotslidernavs === null ||
          dotslidernavs === undefined){
            return;
        }

        dotslidernavs.forEach((dot, index)=> {
            dot.style.backgroundColor = 'rgba(0, 0, 0, .25)'
            dot.style.transition = transition


            if(index === slidescurrentPositionIndex){
                dot.style.backgroundColor = backgroundColor
            }             
        }) 

    }
    
}