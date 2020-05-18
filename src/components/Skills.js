import React from 'react';
import './App.css';

const Skills = (props) => (
  <div className='Skills'>
    <div className='heading'>Skills</div>
    <div className='front-end-container'>
      <div className='sub-heading'>Front-End</div>
      <div className='skill-container'>
        {props.frontEndList.map((skill, idx) => (
          <div className='skill'>
            <span className='skill-hover-text'>Text describing the skill</span>
            <div className='skill-name' key={idx}>{skill}</div>
          </div>
        ))}
      </div>
    </div>
    <div className='back-end-container'>
      <div className='sub-heading'>Back-End</div>
      <div className='skill-container'>
        {props.backEndList.map((skill, idx) => (
        <div className='skill'>
          <span className='skill-hover-text'>Text describing the skill</span>
          <div className='skill-name' key={idx}>{skill}</div>
        </div>
        ))}
      </div>
    </div>
    <div className='tools-container'>
      <div className='sub-heading'>Tools</div>
      <div className='skill-container'>
        {props.toolsList.map((skill, idx) => (
        <div className='skill'>
          <span className='skill-hover-text'>Text describing the skill</span>
          <div className='skill-name' key={idx}>{skill}</div>
        </div>
        ))}
      </div>
    </div>
    <div className='other-container'>
      <div className='sub-heading'>Other</div>
      <div className='skill-container'>
        {props.otherList.map((skill, idx) => (
        <div className='skill'>
          <span className='skill-hover-text'>Text describing the skill</span>
          <div className='skill-name' key={idx}>{skill}</div>
        </div>
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
