import React from 'react';
import './App.css';

const Experience = (props) => (
  <div className='Experience'>
    <div className='heading'>Experience</div>
    <div className='job-container'>
      {props.jobList.map((job, idx) => (
        <div className='job-description' key={idx}>
          <div className='job-header'>
            <div className='job-title'>{job}</div>
            <div className='job-position'>{props.jobTitles[idx]}</div>
            <div className='job-date'>{props.jobDates[idx]}</div>
          </div>
          <div className='job-text'>{props.jobDes[idx]}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Experience;
