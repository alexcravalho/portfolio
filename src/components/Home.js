import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

const FontAwesomeStyle = {
  margin: '0.4em',
  color: 'black',
}

const Home = (props) => (
  <div className="Home">
    <div>Alex Cravalho</div>
    <div>Software Engineer</div>
    <div className='home-buttons-container'>
      {props.homeList.map((text, idx) => (
        <a href={props.hrefList[idx]} key={idx}>
          <div className='home-buttons'>
            <FontAwesomeIcon style={FontAwesomeStyle} icon={props.iconList[idx]}/>
            <div>{text}</div>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default Home;
