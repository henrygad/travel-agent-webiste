export function Arrowslidernav({arrownavs_ele}, arrowFunc = ()=>{}) {

    arrownavs_ele.forEach((arrows, index)=> {

        arrows.addEventListener('click', ()=> { // call each slider arrow nav
           
              arrowFunc(index)
            })
    })
}

export function Dotsslidernav({dotnavs_ele}, dotFunc = (newCurrentposition)=>{}) {
    let newCurrentposition;

    dotnavs_ele.forEach((dot, index)=> {

            dot.addEventListener('click', ()=> { // call each slider arrow nav

                newCurrentposition = (index * 100) - 100
                dotFunc(newCurrentposition)
            })
    })
}

export function Autoslidernav({autoPlayDurition, onloadPlay}, autoFunc = ()=>{}){
    let itRunning = false

    if(onloadPlay){

        autoFunc()
    }

    function Play(){

        itRunning = true
    }
    function Pause(){

        itRunning = false
    }
    function Autoslider(){

        if(itRunning){

            autoFunc() // call autoFunc every autoTimeDurition
        }
    }
    
    setInterval(Autoslider, autoPlayDurition)


    return [()=>Play(), ()=>Pause()]
}