const createmediaquery = document.createElement('style')
const addmediaquery = document.head.appendChild(createmediaquery)


export const useMediaqueryv = ([CSScontent, minviewpointWidth = '0px', maxviewpointWidth = '0px']) => {

            let mediaquery = `
                        @media (min-width: ${minviewpointWidth}) and (max-width: ${maxviewpointWidth}){
                              /* add js css style here  */

                              ${CSScontent}
                        }
                  `

                  if(addmediaquery.innerHTML.includes(mediaquery)) return;

                  addmediaquery.innerHTML += mediaquery

                  return [CSScontent]
}