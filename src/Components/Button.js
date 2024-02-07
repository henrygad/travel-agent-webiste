

const Button = ({text, color = '#ffff', backgroundColor, paddingBlock,paddingInline}) => {

  const buttonstyle = {
    display: 'block',
    textAlign: 'center',
    fontFamily: 'var( --google-san-font)',
    color: color,
    width: 'auto',
    height: 'auto',
    paddingBlock: paddingBlock,
    paddingInline: paddingInline,
    backgroundColor: backgroundColor,
    border: 0,
    borderRadius: '4px',
    boxShadow: `.1px .1px 10px ${backgroundColor}`,
  }
  return (
    <div>
      <button className="stylebtn" style={buttonstyle}>{text}</button>
    </div>
  )
}

export default Button
