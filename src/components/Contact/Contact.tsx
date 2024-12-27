import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Container } from "./styles";


export function Contact() {

  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free discussion.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:risheetajain309@gmail.com"><img src={emailIcon} alt="Email" /></a>
          <a href="mailto:risheetajain309@gmail.com">risheetajain309@gmail.com</a>
        </div>
        <div>
          <a href="tel:+917737366393"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+917737366393">(+91) 7737366393</a>
        </div>
      </div>
      {/* <Form></Form> */}
    </Container>
  )
}