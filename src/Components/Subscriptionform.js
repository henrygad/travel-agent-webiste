import { HiOutlineMail } from "react-icons/hi";

const Subscriptionform = () => {

    let subscribtion_form = {
        form: {
            position:'relative',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent:'center',
            alignItems: 'center',
            gridRowGap: '5px',
            gridColumnGap: '30px',
            zIndex: '5',
        },
        email_wrapper: {
            display: 'flex',
            flex: '2',
            justifyContent: 'flex-end',
            /* paddingRight: '10px', */
        },
        email_content: {
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center',
            paddingRight: '100px',
            paddingLeft: '20px',
            paddingBlock: '15px',
            backgroundColor: '#fff',
            borderRadius: '10px'
        },
        email: {
            paddingInline: '10px',
            paddingBlock: '5px',
        },
        button_wrapper: {
            display: 'flex',
            flex: '1',
            justifyContent: 'flex-end',
            /* paddingRight: '10px', */
        },
        button: {
            paddingInline: '40px',
            paddingBlock: '20px',
            color: '#fff',
            backgroundColor: 'rgba(255, 148, 109, 1)',
            borderRadius: '10px'
        },
    }

    const {form, email_wrapper, email_content, email, button_wrapper, button} = subscribtion_form
  return (
    <form className=" subscribtion_form" style={form}>
        <div className="email_input_wrapper" style={email_wrapper}>
            <div className="email_content" style={email_content}>
                <HiOutlineMail size={'1.5em'} color="gray"/>
                <input type="email" name="email" placeholder="Your email" id="js-email" style={email}/>
            </div>
        </div>
        <div className="button_input_wrapper" style={button_wrapper}>
            <input type="button" name="button" value="Subscribe" id="js-button" style={button}/>
        </div>
    </form>
  )
}

export default Subscriptionform
