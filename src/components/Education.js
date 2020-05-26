import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';


class Education extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hrInfo: true,
      scInfo: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (name) {
    this.setState({ [name]: !this.state[name] });
  };

  render() {
    return (
    <div className='Education'>
      <div className='heading'>Education</div>
      <div className='dropdown-container'>

        {this.state.hrInfo && <div className='dropdown-grey' onClick={() => {this.handleClick('hrInfo')}}>
          <span className='dropdown-title'>Hack Reactor, Software Engineering Immersive</span>
          <span className='dropdown-date-grey'>2019</span>
          <span className='dropdown-symbol'>
            <FontAwesomeIcon icon={this.props.iconList[5]}/>
          </span>
        </div>}

        {!this.state.hrInfo && <div className='dropdown-green' onClick={() => {this.handleClick('hrInfo')}}>
          <span className='dropdown-title'>Hack Reactor, Software Engineering Immersive</span>
          <span className='dropdown-date-white'>2019</span>
          <span className='dropdown-symbol'>
            <FontAwesomeIcon icon={this.props.iconList[6]}/>
          </span>
        </div>}

        {!this.state.hrInfo && <div className='invisible-dropdown'>
            <div className='invisible-dropdown-title'>Advanced Full Stack JavaScript Course, 18 Weeks</div>
            <div className='invisible-dropdown-text'>
              This full time program trained me in the latest industry technologies and standards for Software Engineering and gave me real experience practicing that knowledge over 1000 hours of solo and paired programming. To gain entrance to the program, students must demonstrate a strong proficiency in JavaScript, problem solving, and autonomous learning. Candidates for the course must also pass a selective interview process and complete over 80 hours of pre-course work. The introductory section (weeks 1-6, 40 hrs/week) focused on paired sprints to develop Computer Science fundamentals, such as functional programming, debugging, and recursion. The junior section (weeks 7-11, 60 hrs/week) involved project based sprints, learning new technologies and programming across the full stack with JavaScript. I learned to interact with API's, query datasets from common databases, build stateful and functional components in React, and send data from back end to front end with server requests. In the senior phase (weeks 12-18, 60 hrs/week) I worked on two Agile engineering teams with daily standups, code reviews and version control through github, ground-up system design and implementation, as well as containerization and deployment techniques. Throughout the course I built my own applications to test my knowledge and reinforce the techniques learned throughout the program.
            </div>
          </div>}

        {this.state.scInfo && <div className='dropdown-grey' onClick={() => {this.handleClick('scInfo')}} >
          <span className='dropdown-title'>UC Santa Cruz, Bachelor of Arts</span>
          <span className='dropdown-date-grey'>2011</span>
          <span className='dropdown-symbol'>
            <FontAwesomeIcon icon={this.props.iconList[5]}/>
          </span>
        </div>}

        {!this.state.scInfo && <div className='dropdown-green' onClick={() => {this.handleClick('scInfo')}} >
          <span className='dropdown-title'>UC Santa Cruz, Bachelor of Arts</span>
          <span className='dropdown-date-white'>2011</span>
          <span className='dropdown-symbol'>
            <FontAwesomeIcon icon={this.props.iconList[6]}/>
          </span>
        </div>}

        {!this.state.scInfo && <div className='invisible-dropdown'>
            <div className='invisible-dropdown-title'>Major in Business Management Economics</div>
            <div className='invisible-dropdown-text'>
              lorem ipsum.....
            </div>
          </div>}

      </div>
    </div>
    )
  }
};

export default Education;
