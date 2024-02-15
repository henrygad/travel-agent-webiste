import { HiOutlineMail } from "react-icons/hi";
import { useMediaqueryv } from "../Hooks/mediaquery";

const Subscriptionform = () => {

    const emailcontent_widthbigsize = ()=> {
        const CSScontent = `.js-email_content{
            width: 400px;
            
        } `
  
        const minviewpiontWidth = '481px'
        const maxviewpointWidth = '10000px'
  
        return[CSScontent, minviewpiontWidth, maxviewpointWidth]
      }

    const emailcontent_widthsmallsize = ()=> {
        const CSScontent = `.js-email_content{
            width: 280px;
           
        } `
  
        const minviewpiontWidth = '0px'
        const maxviewpointWidth = '480.99px'
  
        return[CSScontent, minviewpiontWidth, maxviewpointWidth]
      }

      useMediaqueryv(emailcontent_widthbigsize())
      useMediaqueryv(emailcontent_widthsmallsize())



    let subscribtion_form = {
        form: {
            position:'relative',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent:'center',
            alignItems: 'center',
            gridRowGap: '10px',
            gridColumnGap: '30px',
            paddingInline: '20px',
            zIndex: '5',
        },
        email_wrapper: {
            display: 'flex',
            flex: '1',
            justifyContent: 'flex-end',
        },
        email_content: {
            display: 'flex',
            justifyContent:'flex-start',
            alignItems: 'center',
            height: '60px',
            paddingLeft: '10px',
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
        },
        button: {
            paddingInline: '35px',
            height: '60px',
            color: '#fff',
            backgroundColor: 'rgba(255, 148, 109, 1)',
            borderRadius: '10px'
        },
    }

    const {form, email_wrapper, email_content, email, button_wrapper, button} = subscribtion_form
  return (
    <form className=" subscribtion_form" style={form}>
        <div className="email_input_wrapper" style={email_wrapper}>
            <div className="email_content js-email_content" style={email_content}>
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
