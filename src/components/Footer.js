import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

const Footer = (props) => (
  <div className='footer'>
    <div className='back-to-top'>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className='btn' href='#' alt='back-to-top'>Back to Top!</a>
    </div>
    <div className='bottom-panel'>
      <div className='project-link'>
        <span className='link-text'>Constructed with React.js</span>
        <div className='footer-button'>
          <a href='https://github.com/alexcravalho/portfolio' alt='portfolio-github-link' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={props.iconList[2]}/>
          </a>
        </div>
      </div>
      <div className='like-page-text'>Like This Page?</div>
      <div className='footer-icon-holder'>
        {props.homeList.map((icon, idx) => (
          <a href={props.hrefList[idx]} alt={icon} target='_blank' rel='noopener noreferrer' key={idx}>
            <span className='icon-button'>
              <FontAwesomeIcon icon={props.iconList[idx]}/>
            </span>
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Footer;
