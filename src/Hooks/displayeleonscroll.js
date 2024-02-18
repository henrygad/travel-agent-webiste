export const useDisplayelement = ([propTop, propeElementid], propFunc)=>{

    function getcurrentsection(){
        const element_id = document.getElementById(propeElementid)
        const rect = element_id.getBoundingClientRect()

        propFunc(rect.top <= propTop, rect.top)
      }

      setTimeout(() => {
        getcurrentsection()
      }, 100);

      window.onscroll = getcurrentsection
}