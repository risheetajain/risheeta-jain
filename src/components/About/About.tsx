import ScrollAnimation from "react-animate-on-scroll";
import htmlIcon from "../../assets/android.svg";
import dart from "../../assets/dart.svg";
import firebase from "../../assets/firebase.svg";
import flutter from "../../assets/flutter.svg";
import jsIcon from "../../assets/ios.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import RisheetaJain from "../../assets/risheetajain.png";
import { Container } from "./styles";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Risheeta, a application developer with a passion for creating custom aplicatipn experiences for my clients. With a platforms  including Android,iOS, Web,Windows, I have the tools to bring any idea vision to life.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>
            I have an experiences with multiple state managment like Bloc,Getx,Provider,also with payment gateway like stripe,paytm,cashfree ,Multiple animation in websites.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            But my services go beyond just custom development with APIs .I integrate database in firebase, supabase and many more - I'm also proficient in using Website and Backend development like Node JS, making it easy for my clients to get all things at one platform.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <p>
            So if you're in need of a new mobole development and website development or just looking to revamp your current online presence, I'd love to chat and see how I can help. Let's bring your dreams to reality together!</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.5 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={flutter} alt="Flutter" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={dart} alt="Dart" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={firebase} alt="firebase" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div> */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div> */}
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div> */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={RisheetaJain} alt="Risheeta Jain" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
