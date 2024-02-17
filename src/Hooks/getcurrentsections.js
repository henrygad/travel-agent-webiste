
 export const useCurrentsection = (sectionId)=> {
      const el_id = document.getElementById(sectionId)
      const rect = el_id.getBoundingClientRect()

      console.log(rect.top)
      
      return(
        rect.top <= -60 &&
        rect.bottom >= 0 &&
        rect.left >= 0 &&
        rect.right >= 0
      )

  }