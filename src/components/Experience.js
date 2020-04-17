import React from 'react';
import './App.css';

const Experience = (props) => (
  <div className='Experience'>
    <div className='heading'>Experience</div>
    <div className='job-container'>
      {props.jobList.map((job, idx) => (
        <div className='job-description' key={idx}>
          <div className='job-header'>
            <span className='job-title'>{job}</span>
            <span className='job-date'>{props.jobDates[idx]}</span>
          </div>
          <div className='job-text'>{props.jobDes[idx]}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Experience;
