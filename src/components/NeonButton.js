import React from 'react';
import './App.css';

const NeonButton = (props) => (
  <a className="btn" href={props.link} target='_blank' rel='noopener noreferrer'>
    <div>{props.text}</div>
  </a>
);

export default NeonButton;
