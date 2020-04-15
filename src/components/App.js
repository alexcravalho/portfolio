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
          <Experience />
          <Education iconList={this.state.iconList}/>
        </div>
      </div>
    );
  }
}

export default App;
