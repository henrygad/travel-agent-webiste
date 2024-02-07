

const Closenav = ({display = 'flex'}) => {
  const closenavstyle ={
    close_nav: {
      display: display,
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
      backgroundColor: 'var(--secondary-color)',
      transformOrigin: 'center',
      transform: ' rotate(45deg)',
    },
    span2: {
      position: "absolute",
      display: 'block',
      width: '10%',
      height: '60%',
      borderRadius: '8px',
      backgroundColor: 'var(--secondary-color)',
      transformOrigin: 'center',
      transform: 'rotate(-45deg)',
    },
  }



  return (
    <div className='close_nav' style={closenavstyle.close_nav}>
        <div className="close_nav_line_wrapper" style={closenavstyle.close_nav_line_wrapper}>
            <span style={closenavstyle.span1}></span>
            <span style={closenavstyle.span2}></span>
        </div>
    </div>
  )
}

export default Closenav
