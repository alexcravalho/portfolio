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
          <div className='dropdown-title'>Hack Reactor, Software Engineering Immersive</div>
          <div className='dropdown-date-grey'>2019</div>
          <div className='dropdown-symbol'>
            <FontAwesomeIcon icon={this.props.iconList[5]}/>
          </div>
        </div>}

        {!this.state.hrInfo && <div className='dropdown-blue' onClick={() => {this.handleClick('hrInfo')}}>
          <div className='dropdown-title'>Hack Reactor, Software Engineering Immersive</div>
          <div className='dropdown-date-white'>2019</div>
          <div className='dropdown-symbol'>
            <FontAwesomeIcon icon={this.props.iconList[6]}/>
          </div>
        </div>}

        {!this.state.hrInfo && <div className='invisible-dropdown'>
            <div className='invisible-dropdown-title'>Advanced Full Stack JavaScript Course, 18 Weeks</div>
            <div className='invisible-dropdown-text'>
              This full time program trained me in the latest industry technologies and standards for Software Engineering and gave me real experience practicing that knowledge over 1000 hours of solo and paired programming. To gain entrance to the program, students must demonstrate a strong proficiency in JavaScript, problem solving, and autonomous learning. Candidates for the course must also pass a selective interview process and complete over 80 hours of pre-course work. The introductory section (weeks 1-6, 40 hrs/week) focused on paired sprints to develop Computer Science fundamentals, such as functional programming, debugging, and recursion. The junior section (weeks 7-11, 60 hrs/week) involved project based sprints, learning new technologies and programming across the full stack with JavaScript. I learned to interact with API's, query datasets from common databases, build stateful and functional components in React, and send data from back end to front end with server requests. In the senior phase (weeks 12-18, 60 hrs/week) I worked on two Agile engineering teams with daily standups, code reviews and version control through github, ground-up system design and implementation, as well as containerization and deployment techniques. Throughout the course I built my own applications to test my knowledge and reinforce the techniques learned throughout the program.
            </div>
          </div>}

        {this.state.scInfo && <div className='dropdown-grey' onClick={() => {this.handleClick('scInfo')}} >
          <div className='dropdown-title'>UC Santa Cruz, Bachelor of Arts</div>
          <div className='dropdown-date-grey'>2011</div>
          <div className='dropdown-symbol'>
            <FontAwesomeIcon icon={this.props.iconList[5]}/>
          </div>
        </div>}

        {!this.state.scInfo && <div className='dropdown-blue' onClick={() => {this.handleClick('scInfo')}} >
          <div className='dropdown-title'>UC Santa Cruz, Bachelor of Arts</div>
          <div className='dropdown-date-white'>2011</div>
          <div className='dropdown-symbol'>
            <FontAwesomeIcon icon={this.props.iconList[6]}/>
          </div>
        </div>}

        {!this.state.scInfo && <div className='invisible-dropdown'>
            <div className='invisible-dropdown-title'>Major in Business Management Economics</div>
            <div className='invisible-dropdown-text'>
              My journey to becoming a software engineer was a long journey. In college, I thought I wanted to become a dentist and started on the pre-biology track full of math and science courses. Eventually, I found that I was much more interested in Business Management, investing, and startups. I saw that startups had the potential to change the world with even a simple idea. Pursuing this interest, I studied micro and macro economics with additional coursework in business strategy, so that I could understand why and how companies make business decisions. This knowledge has prepared me to enter the engineering field, in that I am able to understand the costs, benefits, and tradeoffs of company decisions and how those decisions can impact the development process.
            </div>
          </div>}

      </div>
    </div>
    )
  }
};

export default Education;
