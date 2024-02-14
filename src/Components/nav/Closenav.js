import { UseRemovemenu } from "./displaymenu"

const Closenav = ({displaymobilenav}) => {

  const closenavstyle ={
    close_nav: {
      position: "absolute",
      top: '20px',
      right: '30px',
      width: '40px',
      height: '40px',
      cursor: 'pointer',
    },
    close_nav_line_wrapper: {
      position: "relative",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    span1: {
      position: "absolute",
      display: 'block',
      width: '10%',
      height: '60%',
      borderRadius: '8px',
      backgroundColor: 'var(--fifth-color)',
      transformOrigin: 'center',
      transform: ' rotate(45deg)',
    },
    span2: {
      position: "absolute",
      display: 'block',
      width: '10%',
      height: '60%',
      borderRadius: '8px',
      backgroundColor: 'var(--fifth-color)',
      transformOrigin: 'center',
      transform: 'rotate(-45deg)',
    },
  }


  return (
    <div className='close_nav' style={closenavstyle.close_nav} onClick={e=> UseRemovemenu(displaymobilenav)}>
        <div className="close_nav_line_wrapper" style={closenavstyle.close_nav_line_wrapper}>
            <span style={closenavstyle.span1}></span>
            <span style={closenavstyle.span2}></span>
        </div>
    </div>
  )
}

export default Closenav
