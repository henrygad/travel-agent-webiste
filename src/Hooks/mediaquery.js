const createmediaquery = document.createElement('style')
const addmediaquery = document.head.appendChild(createmediaquery)


export const useMediaqueryv = ([csscontent = 'stylesheet', minviewpointWidth = '0px', maxviewpointWidth = '0px']) => {
     let mediaquery = `
      @media (min-width: ${minviewpointWidth}) and (max-width: ${maxviewpointWidth}){
            /* add js css style here  */

            ${csscontent}
      }
     `

    if(addmediaquery.innerHTML.includes(mediaquery)) return;

     addmediaquery.innerHTML += mediaquery
}