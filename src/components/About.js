import React from 'react';
import './App.css';

const About = (props) => (
  <div className='About'>
    <div className='heading'>About Me</div>
    <div className='about-text'>
      Hi, I'm Alex! I'm a logical problem solver, creative, out-of-the box thinker, and sci-fi enthusiast. I am naturally curious and love breaking things down into their respective parts to figure out how they work.
    </div>
    <div className='about-text'>
    I am a Software Engineer and a proud IBMer currently working as a Client Engineering (formerly Garage) Cloud Engineer. Just recently, I became Red Hat Certified in Kubernetes and Containers and I'm working toward my Red Hat Specialization in OpenShift. I love playing around with web development using React and enjoy designing intuitive and aesthetic applications. At IBM, I get a chance to experiment with some cutting edge AI technology and recently built a Virtual Assistant utilizing some of IBM’s best offerings.
    </div>
    <div className='about-text'>
      When I'm not programming, I love to travel, lift weights, play video games, roll dice with friends, and speculate over financial investments.
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
