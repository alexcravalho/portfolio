import React from 'react';
import './App.css';

const About = (props) => (
  <div className='About'>
    <div className='heading'>About Me</div>
    <div className='about-text'>
      Hi, I'm Alex! I'm a passionate problem solver and creative, out-of-the box, thinker. I am naturally curious and love breaking things down into their respective parts to figure out how they work. I love leveraging technology against modern problems to improve the quality of people's lives.
    </div>
    <div className='about-text'>
      Right now, I am working as a freelance Software Engineer taking up contracts while I look for long term positions in Seattle. Companies or employers, please reach out to me about work opportunities.
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
