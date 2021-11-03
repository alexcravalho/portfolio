import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Recent from './Recent';
import Experience from './Experience';
import Education from './Education';
import Footer from './Footer';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      homeList: [
        'RESUME',
        'LINKEDIN',
        'GITHUB',
        "(530) 559-6101",
        'a.d.cravalho@gmail.com'
      ],
      hrefList: [
        'https://alexcravalho-portfolio.s3-us-west-2.amazonaws.com/AlexanderCravalhoResume.pdf',
        'https://www.linkedin.com/in/alexcravalho',
        'https://github.com/alexcravalho',
        'tel:+15305596101',
        "mailto:a.d.cravalho@gmail.com?subject=Connect%20with%20Alex%20Cravalho&body=Hello%20Alex,%0D%0A%0D%0AI%20found%20your%20email%20on%20your%20website%20and%20want%20to%20connect!"
      ],
      iconList: [
        faFileDownload,
        faLinkedin,
        faGithubSquare,
        faPhoneSquareAlt,
        faPaperPlane,
        faPlusCircle,
        faMinusCircle
      ],
      aboutImgList: [
        'tiger',
        'phil',
        'canoe'
      ],
      picCap: [
        'Tiger Kingdom Zoo, Phucket, Thailand',
        'Davao, Philippines, with my brother Andy',
        'Kayaking in Thailand'
      ],
      frontEndList: [
        'TypeScript',
        'JavaScript',
        'React',
        'React Hooks',
        'Redux',
        'Material-UI',
        'Styled Components',
        'jQuery',
        'HTML',
        'CSS',
      ],
      backEndList: [
        'Node/Express',
        'MongoDB',
        'PostgreSQL',
        'MySQL',
        'Apache Cassandra'
      ],
      toolsList: [
        'Tekton',
        'ArgoCD',
        'TravisCI',
        'Swagger',
        'Docker',
        'Nginx',
        'Git/Github',
        'K6',
        'Loader.io',
        'Webpack',
        'Babel',
        'Jest/Enzyme',
        'Mocha/Chai',
        'Eslint',
        'Trello',
        'Puppeteer'
      ],
      otherList: [
        'Red Hat Openshift',
        'Kubernetes',
        'CI/CD',
        'RESTful API',
        'Agile',
        'TDD',
        'MVC'
      ],
      frontDes: [
        'Developers prefer TypeScript over JavaScript because of its static type checking and readability, so I thought it would be fun to learn and add to my repertoire. Check out my GreenPDF Internal Tool project!',
        "JavaScript is my main programming language and where I wrote my first 'Hello World'",
        'React is the modern framework I prefer to use when building applications. This site was built with React!',
        'React Hooks uses only functional components, which streamlines React applications and makes them more understandable and readable',
        'I just got started remodeling some of my old React applications with Redux to continue learning additional Front End tools',
        'Material-UI is a package with pre-built and thoroughly tested user interface components, that make web development faster and easier',
        'A modern styling package that allows developers to build fully customized CSS directly into React components',
        'The very first application I built used only jQuery, vanilla JS, and CSS',
        'This is the foundation of all modern web applications',
        'I style pixel-perfect user interfaces with a deep knowledge of CSS'
      ],
      backDes: [
        "The 'N' and 'E' of the 'MERN' stack and my go-to for the back-end",
        'An exceptional NoSQL database that is flexible and easy to use',
        'A powerful object-relational database used by big companies like Apple',
        'Another good relational database option used by Netflix and GitHub',
        'A powerhouse database known for its ability to handle large amounts of data and being highly scalable'
      ],
      toolDes: [
        'This powerful and flexible CI/CD pipeline tool integrates seamlessly with Openshift. It provides Kubernetes-style resources for declaring CI/CD concepts',
        'A declarative, GitOps continuous delivery tool for Kubernetes that allows for easy, automated deployment and mananagment of applicaitons in controlled environments',
        'It\'s a hosted, distributed continuous integration service used to build and test software projects hosted on GitHub.',
        'An amazing tool that helps accelerate the design, building, and documentation of API services',
        'My preferred method of containerization for deployment',
        'I have experience implementing Nginx as a load balancer to scale a service for high web traffic',
        'My favorite version control system that I use for most of my applications',
        'An open-source load testing tool that makes performance testing easier',
        'A cloud based load and scalability testing service',
        'One of the best module bundlers that is widely used',
        'A JavaScript compiler that works well with both JavaScript and TypeScript',
        'A simple yet powerful combo for testing React components',
        'Mocha is a JavaScript testing utility used in combination with Chai an assertion library for testing',
        'Eslint helps programmers follow best practices by identifying problematic code during the development process',
        'Trello is an easy to use collaboration tool that lets users organize projects on boards. This is very helpful in Kanban style workflow management',
        'Puppeteer is a Node.js library that provides high-level API control of headless Chrome browser'
      ],
      otherDes: [
        "I'm currently working toward becoming a fully certified Red Hat Openshift specialist",
        "I've recently been awarded a certification in Kubernetes and Containers by Red Hat",
        'At IBM I learned to build CI/CD piplines with Tekton, ArgoCD and TravisCI',
        "This architectural style is what I use for all my API's when I build applications with a back-end",
        'I have experience with Agile practices including test-driven development, executing sprints, pair programing, and cross-team coordination',
        'I have experience developing my own testing suites for various projects',
        'Model-View-Controller design pattern reinforces separation of concerns and good programming practices'
      ],
      jobList: [
        'IBM Inc.',
        'Hack Reactor @ Galvanize Inc.',
        'Hack Reactor @ Galvanize Inc.',
        'United States Peace Corps',
        'Cedars-Sinai Medical Center'
      ],
      jobDes: [
        "It is my great pleasure and privilege to say that I now work for IBM. I recently joined the IBM Client Engineering team as a Cloud Engineer, a specialized engineering position that helps clients accelerate their Cloud and Hybrid Cloud transformations. Part full-stack, part DevOps, I work to build MVPs for IBMs clients in the financial sector. Among the awesome things I get to work with here, I especially loved building out an AI Chat Assistant, utilizing IBM Watson Assistant, Watson Discovery, Watson Speech To Text, and Watson Text to Speech. I love the dedication of IBM to its employees as they provide endless training, knowledge and upskilling opportunities. IBM is dedicated to training its employees on Red Hat Openshift, which is an Enterprise level Kubernetes container management system with tons of additional features. Beyond earning Red Hat certifications, IBM wants its employees to be cross-functional, educating employees in AI, Design Thinking, Data Science and Sales.",

        "I got promoted! Seeing my teaching experience as extremely valueable in the engineering field, Galvanize interivewed me for the Technical Mentor role directing and overseeing the education of students in a geographical location. I accepted the position as a Technical Mentor for Galvanize Inc.'s Hack Reactor Software Engineering Immersive program and worked with engineering students in their journey to become fully trained software engineers. In this role, I taught classes covering all aspects of web development in our local Denver campus. I functioned as the campus' main technical resource and guided students through front-end development, back-end development, and deployment. Among my many teaching responsibilities, I also participated in curriculum improvement for the company nationally and contributed to the Galvanize codebase internally.",

        "Hack Reactor is a full-time Software Engineering Immersive bootcamp covering over 1000 hours of practical hands-on experience in full-stack software engineering. The parent company, Galvanize Inc., hired me to work as part of the Hack Reactor education team managing and mentoring junior engineers on engineering principles. In that role, I performed code reviews for the junior engineers and gave them guidance on how to improve their code and problem solve across the full-stack. This mentorship included computer science fundamentals, best practices, front-end and back-end development, and also app deployment technologies (including AWS EC2, S3, Docker, and various load testing tools).",

        "The United States Peace Corps is a U.S. governmental organization that provides aid to foreign countries. The Peace Corps mission is to promote world peace and friendship by helping interested countries meet their needs for trained men and women. To achieve this goal, I worked with the Peace Corps as a secondary English Language Instructor in Madagascar, Africa. Going beyond the duties of a teacher, I developed a number of projects to benefit the native community where I lived, learned the native language, and learned the local culture while residing in the country for over two years. ",

        "Cedars-Sinai is a nonprofit academic healthcare organization serving the diverse Los Angeles community and beyond. My role as Staff Assistant took me deep into the post-surgery recovery units. I worked as clerical staff, supporting nurses, managing sensitive patient data on the medical record and responding to over fifty phone calls daily. Among my other duties, I also acted as a Customer Service Liaison interacting with a high volume of clients utilizing outstanding communication skills."

      ],
      jobTitles: [
        'Cloud Engineer, Client Engineering',
        'Technical Mentor, Software Engineering Instructor',
        'Software Engineering Immersive Resident',
        'English Language Instructor',
        'Customer Service Liaison & Staff Assistant'
      ],
      jobDates: [
        '2021 - present',
        '2020 - 2021',
        '2019 - 2020',
        '2015 - 2017',
        '2011 - 2013'
      ],
      recentLinks: [
        'https://alexcravalho-portfolio.s3-us-west-2.amazonaws.com/GreenPDFdemo.gif',
        'https://alexcravalho-portfolio.s3-us-west-2.amazonaws.com/Edwards501-John-01-01-2020.pdf',
        'https://github.com/alexcravalho/GreenPDFInternal',
        'https://alexcravalho-portfolio.s3-us-west-2.amazonaws.com/CrashStatsdemo.gif',
        'https://github.com/alexcravalho/CrashStats',
        'https://alexcravalho-portfolio.s3-us-west-2.amazonaws.com/Soundwavedemo.gif',
        'https://github.com/JASTdance/related-tracks'
      ],
      btnText: [
        'Demo',
        'PDF',
        'Github'
      ]
    }

  }
  render() {
    return (
      <div className='App'>
        <Home homeList={this.state.homeList} hrefList={this.state.hrefList} iconList={this.state.iconList}/>
        <div className='info'>
          <About aboutImgList={this.state.aboutImgList} picCap={this.state.picCap} />
          <Skills  frontEndList={this.state.frontEndList} backEndList={this.state.backEndList} toolsList={this.state.toolsList} otherList={this.state.otherList} frontDes={this.state.frontDes} backDes={this.state.backDes} toolDes={this.state.toolDes} otherDes={this.state.otherDes}/>
          <Recent recentLinks={this.state.recentLinks} btnText={this.state.btnText}/>
          <Experience jobList={this.state.jobList} jobDes={this.state.jobDes} jobDates={this.state.jobDates} jobTitles={this.state.jobTitles}/>
          <Education iconList={this.state.iconList}/>
        </div>
        <Footer homeList={this.state.homeList} hrefList={this.state.hrefList} iconList={this.state.iconList}/>
      </div>
    );
  }
}

export default App;
