import { Container } from "./styles";
// import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import './project.css';
import ProjectComponent from "./project_component";

export function Project() {
  const projectDataList = [
    {
      animateIn: "flipInX",
      icon: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
      link: "https://apps.apple.com/in/app/savdhan-bharat/id6475668649",
      linkText: "Visit site",
      title: "Savdhan Bharat",
      description: "Savdhaan Bharat is a application designed to maintain acomprehensive database of businesses that default on their payments to companies from whom they have procured goods to sell.",
      techList: ["Flutter", "Realtime Database"],
      image: ""
    }, {
      animateIn: "flipInX",
      icon: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
      link: "https://techmetsolutions.com/#/",
      linkText: "Visit site",
      title: "TechMET Solutions Website",
      description: "It is company website to showcasing total project, team and their work",
      techList: ["Flutter", "Firebase",],
      image: ""
    },

    {
      animateIn: "flipInX",
      icon: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
      link: "https://play.google.com/store/apps/details?id=com.techmetsolutions.united_we_stand_nashik",
      linkText: "Visit site",
      title: "United We stand Nashik",
      description: "It is an app for United We Stand Nashik to showcase theirevents, achievements, and members.Also, users canmake donations to NGOs and become members of them.",
      techList: ["Flutter", "PHP",],
      image: ""
    },
    {
      animateIn: "flipInX",
      icon: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
      link: "https://play.google.com/store/apps/details?id=com.techmetsolutions.lovin",
      linkText: "Visit site",
      title: "Lovin",
      description: "It is an app for United We Stand Nashik to showcase theirevents, achievements, and members.Also, users canmake donations to NGOs and become members of them.",
      techList: ["Flutter", "Firebase",],
      image: ""
    },
    {
      animateIn: "flipInX",
      icon: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
      link: "https://play.google.com/store/apps/details?id=com.techmetsolutions.lovin",
      linkText: "Visit site",
      title: "Lovin Choco",
      description: "It is an app for United We Stand Nashik to showcase theirevents, achievements, and members.Also, users canmake donations to NGOs and become members of them.",
      techList: ["Flutter", "Laravel",],
      image: ""
    },
    {
      animateIn: "flipInX",
      icon: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
      link: "",
      linkText: "Visit site",
      title: "NodejS Stripe Webhook",
      description: "It is a project that triggers when a particular event triggers in Stripe.It does some functionality like message sending,payment link activation, and more",
      techList: ["Node JS", "Stripe",],
      image: ""
    },
    {
      animateIn: "flipInX",
      icon: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
      link: "",
      linkText: "Visit site",
      title: "Audio Recorder Task",
      description: "It is a platform where admins can assign sentences to users who register to that application.Users have to record those sentences(audio) and upload them so that admins can approve them.",
      techList: ["Flutter ", "Firebase",],
      image: ""
    },
    {
      animateIn: "flipInX",
      icon: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
      link: "",
      linkText: "Visit site",
      title: "Honest Stripe Checkout Website / Windows Dashboard",
      description: "Build a solution for getting stripe payment details, and customer orders in the windows application or website dashboard",
      techList: ["Flutter ", "Firebase", "Stripe"],
      image: ""
    },
    {
      animateIn: "flipInX",
      icon: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
      link: "",
      linkText: "Visit site",
      title: "Honest Bellevue US",
      description: "Build a solution for getting stripe payment details, and customer orders in the windows application or website dashboard",
      techList: ["Flutter", "Firebase", "Stripe", "Clover"],
      image: ""
    },
    {
      animateIn: "flipInX",
      icon: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
      link: "http://www.steel-mandi.com/",
      linkText: "Visit site",
      title: "Steel Mandi",
      description: "Hassel free e-platform marketplace to trade steel and allied products, backed by data intelligence",
      techList: ["Flutter", "Firebase", "Ruby on Rust"],
      image: ""
    },
    {
      animateIn: "flipInX",
      icon: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
      link: "",
      linkText: "Visit site",
      title: "Aarogya Bohi Labham",
      description: "It is application to collect all expenses, distribute salary to workers and generate xls sheet",
      techList: ["Flutter", "Firebase",],
      image: ""
    },
    {
      animateIn: "flipInX",
      icon: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
      link: "",
      linkText: "Visit site",
      title: "To the Moon",
      description: "This is gaming application where you can invest your money and after every second's multiplier, the value increase and your invested amount also increases.With this I have put rive animation along with WebSocket.",
      techList: ["Flutter", "Firebase",],
      image: ""
    },
    {
      animateIn: "flipInX",
      icon: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
      link: "",
      linkText: "Visit site",
      title: "CricStock",
      description: "It is an app that combines cricket and trading in one frame.",
      techList: ["Flutter", "Firebase", "Stripe", "Clover"],
      image: ""
    },
    {
      animateIn: "flipInX",
      icon: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
      link: "",
      linkText: "Visit site",
      title: "Win Win Lotto",
      description: "It is a gaming application where users can earn money by playing quizzes and also by betting on a particular number and it's like a betting game",
      techList: ["Flutter", "APIs in Laravel"],
      image: ""
    },
    {
      animateIn: "flipInX",
      icon: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
      link: "",
      linkText: "Visit site",
      title: "Investment Value Coin",
      description: "It is a trading app just like Bitcoin, where user can invest at their own risk and get profit and loss according to it",
      techList: ["Flutter", "APIs in PHP"],
      image: ""
    },
    // Add more project objects as needed
  ];
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">




        {projectDataList.map((projectData, index) => (
          <ProjectComponent key={index} {...projectData} />
        ))}




      </div>
    </Container>
  );
}

