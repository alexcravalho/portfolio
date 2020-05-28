import React from 'react';
import './App.css';

const NeonButton = (props) => (
  <a className="btn" href={props.link} target='_blank' rel='noopener noreferrer'>
    {/* <span></span>
    <span></span>
    <span></span>
    <span></span> */}
    {/* Neon Button */}
    <div>{props.text}</div>
  </a>
);

export default NeonButton;
