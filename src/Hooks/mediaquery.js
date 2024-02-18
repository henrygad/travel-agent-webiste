
export const useViewpiont = (propFunc) => { 
      function getWinddowviewpost(){
            propFunc(window.innerWidth, window.innerHeight)
      }
      
      return getWinddowviewpost;
}