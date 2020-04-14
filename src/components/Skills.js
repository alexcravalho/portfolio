import React from 'react';
import './App.css';

const Skills = (props) => (
  <div className='Skills'>
    <div className='heading'>Skills</div>
    <div className='front-end-container'>
      <div className='sub-heading'>Front-End</div>
      <div className='items-container'>
        {props.frontEndList.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </div>
    </div>
    <div className='back-end-container'>
      <div className='sub-heading'>Back-End</div>
      <div className='items-container'>
        {props.backEndList.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </div>
    </div>
    <div className='tools-container'>
      <div className='sub-heading'>Tools</div>
      <div className='items-container'>
        {props.toolsList.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </div>
    </div>
    <div className='other-container'>
      <div className='sub-heading'>Other</div>
      <div className='items-container'>
        {props.otherList.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
