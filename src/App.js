import Home from "./Home";
import { useViewpiont } from "./Hooks/mediaquery";


function App() {

  const viewFuc = useViewpiont((width, height)=>{
    const logoscuroselslides_ele = document.querySelector('.js-logoscuroselslides')
    const emailContent_ele = document.querySelector('.js-email_content')
    const footerContent_ele = document.querySelector('.footer_content')
    
      if(width >= 768){
        logoscuroselslides_ele.style.width = '200%'
      }else{
        logoscuroselslides_ele.style.width = '400%'
      }

      if(width >= 481){
          emailContent_ele.style.width = '400px'
          emailContent_ele.style.paddingRight = '100px'
          emailContent_ele.style.paddingLeft = '15px'


        footerContent_ele.style.justifyContent = 'center'
       }else{
          emailContent_ele.style.width = '280px'
          emailContent_ele.style.paddingRight = '25px'
          emailContent_ele.style.paddingLeft = '10px'

          footerContent_ele.style.justifyContent = 'start'
       }

  })

  window.onload = viewFuc
  window.onresize = viewFuc
  
  return (
    <Home />
  );
} 

export default App;
