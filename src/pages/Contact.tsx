import HandwriteText from '../components/HandwriteText'
import EmailForm from '../components/EmailForm'
import Box from '../components/Box'
import "./Contact.css"
const Contact = () => {
  return (
         <div id="contact" className="email-container">
          <HandwriteText title={`Get in touch with me`} arrowPosition="right"  />
          <Box className="email-box">
            <EmailForm />
          </Box>
        </div>
  )
}

export default Contact
