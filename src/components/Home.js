import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

const FontAwesomeStyle = {
  margin: '0.4em'
}

const Home = (props) => (
  <div className="Home">
    <div className='name'>Alex Cravalho</div>
    <div className='position'>Software Engineer</div>
    <div className='home-buttons-container'>
      {props.homeList.map((text, idx) => (
        <a href={props.hrefList[idx]} key={idx}>
          <div className='home-button'>
            <FontAwesomeIcon style={FontAwesomeStyle} icon={props.iconList[idx]}/>
            <div className='home-button-text'>{text}</div>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default Home;
