import React from 'react';
import './App.css';

const About = (props) => (
  <div className='About'>
    <div className='heading'>About Me</div>
    <div className='about-text'>
      Hi, I'm Alex! I'm a passionate problem solver and creative, out-of-the box, thinker. I am naturally curious and love breaking things down into their respective parts to figure out how they work. I love leveraging technology against modern problems to improve the quality of people's lives.
    </div>
    <div className='about-text'>
      I am a Software Engineer who works across the full stack and loves to build intuitive, attractive, and performant interfaces. I prefer working on the front end, with React in both TypeScript and JavaScript. As a full stack engineer, I have knowlege of modern databases like PostgreSQL, MongoDB and more.
    </div>
    <div className='about-text'>
      When I'm not programming, I love to travel, explore the outdoors, play my ukelele, and enjoy just about any kind of game.
    </div>
    <div className='about-pic-row'>
      {props.aboutImgList.map((pic, idx) => (
        <div className='about-img-box' key={idx}>
          <img className='about-img' alt={pic} src={`https://alexcravalho-portfolio.s3-us-west-2.amazonaws.com/${pic}.webp`}></img>
          <div className='about-img-cap'>{props.picCap[idx]}</div>
        </div>
      ))}
    </div>
  </div>
);

export default About;
