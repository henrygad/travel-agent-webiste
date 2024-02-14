import { Useopenmenu } from "./displaymenu";

const Hamburger = ({displaymobilenav}) => {

    const hamburgarstyle = {
        hamburger: {
          justifyContent: 'center',
          alignItems: 'center',
          width: '40px',
          height: '30px',
          border: '1px solid var(--primary-color)',
          borderRadius: '4px',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          cursor: 'pointer',
        },
        hamburger_line_wraper:{
          width: '60%',
          height:'60%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        span: {
          height: '17%',
          width: '100%',
          borderRadius: '8px',
          backgroundColor: 'var(--primary-color)',
        },
    }
  return (
    <div className='hamburgar' style={hamburgarstyle.hamburger} onClick={e=> Useopenmenu(displaymobilenav)}>
        <div className='hamburger_line_wraper' style={hamburgarstyle.hamburger_line_wraper}>
            <span style={hamburgarstyle.span}></span>
            <span style={hamburgarstyle.span}></span>
            <span style={hamburgarstyle.span}></span>
        </div>
    </div>
  )
}

export default Hamburger;