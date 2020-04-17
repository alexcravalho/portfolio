import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Recent from './Recent';
import Experience from './Experience';
import Education from './Education';
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
        'mailto:a.d.cravalho@gmail.com?subject=Connect%20with%20Alex%20Cravalho&body=Hello%20Alex&#44%0D%0AI%20found%20your%20email%20on%20your%20website%20and%20want%20to%20connect!'
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
      frontEndList: [
        'TypeScript',
        'JavaScript',
        'React',
        'React Hooks',
        'Material-UI',
        'jQuery',
        'HTML',
        'CSS',
      ],
      backEndList: [
        'Node/Express',
        'MongoDB',
        'PostgreSQL',
        'MySQL',
        'Cassandra'
      ],
      toolsList: [
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
        'RESTful API',
        'Agile',
        'TDD',
        'MVC'
      ],
      jobList: [
        'Hack Reactor at Galvanize Inc.',
        'United States Peace Corps',
        'Cedars-Sinai Medical Center'
      ],
      jobDes: [
        "Hack Reactor is a full-time Software Engineering Immersive bootcamp covering over 1000 hours of practical hands-on experience in full-stack software engineering. The parent company, Galvanize Inc., hired me to work as part of the Hack Reactor Engineering team, that managed and mentored junior engineers students on engineering principles. In that role, I performed code reviews for the junior engineers and gave them guidance on how to improve their code and problem solve across the full-stack. This mentorship included computer science fundamentals, best practices, front-end and back-end development, and also app deployment technologies (including AWS EC2, S3, Docker, and various load testing tools).",

        "The United States Peace Corps is a U.S. governmental organization that provides aid to foreign countries. The Peace Corps mission is to promote world peace and friendship by helping interested countries meet their needs for trained men and women. To achieve this goal, I worked with the Peace Corps as an secondary English Language Instructor in Madagascar, Africa.Going beyond the duties of a teacher, I developd a number of projects to benefit the native community where I lived, learned the native language, and learned the native culture while residing in the country for over two years. ",

        "Cedars-Sinai is a nonprofit academic healthcare organization serving the diverse Los Angeles community and beyond. My role as Staff Assistant took me deep into the post-surgery recovery units. I worked as clerical staff, supporting nurses, managing sensitive patient data on the medical record and responding to over fifty phone calls daily. Among my other duties, I also acted as a Customer Service Liaison interacting with a high volume of clients utilizing outstanding communication skills."

      ],
      jobDates: [
        '2019 - 2020',
        '2015 - 2017',
        '2011 - 2013'
      ]
    }

  }
  render() {
    return (
      <div className="App">
        <Home homeList={this.state.homeList} hrefList={this.state.hrefList} iconList={this.state.iconList}/>
        <div className="info">
          <About />
          <Skills  frontEndList={this.state.frontEndList} backEndList={this.state.backEndList} toolsList={this.state.toolsList} otherList={this.state.otherList}/>
          <Recent />
          <Experience jobList={this.state.jobList} jobDes={this.state.jobDes} jobDates={this.state.jobDates}/>
          <Education iconList={this.state.iconList}/>
        </div>
      </div>
    );
  }
}

export default App;
