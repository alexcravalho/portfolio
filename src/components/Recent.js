import React from 'react';
import './App.css';

const Recent = (props) => (
  <div className='Recent'>
    <div className='heading'>Recent Engineering Work</div>
    <div className="application-list">
      <div className="application-item">
        <img className='recent-img' src='/images/green.webp' alt='think green'></img>
        <div className="recent-text-container">
          <div className="recent-title">GreenPDF Internal Tool</div>
          <div className="recent-skills">React | TypeScript| Express | Node | Material-UI | Puppeteer</div>
          <div className="recent-description">I am currently building an internal tool for a small landscaping company that wants to update its business to include eco-friendly practices. The owner of the company wants to remove all paper records and move the company to a fully digital platform. This application captures relevant company data, transforms it into a beautiful PDF document and emails it to the company's cloud storage system at the click of a button.</div>
          <div className="recent-button-container">
            <button>View</button>
            <button>Github</button>
          </div>
        </div>
      </div>
      <div className="application-item">
      <img className='recent-img' src='/images/crashlogo.webp' alt='crash logo'></img>
        <div className="recent-text-container">
          <div className="recent-title">Crash Stats</div>
          <div className="recent-skills">React | React Hooks | JavaScript | Express | Node| MongoDB | AWS | Docker</div>
          <div className="recent-skills"></div>
          <div className="recent-description">Love Hockey? I do too! I created this application for sports buffs who want an edge in their Fantasy Hockey season. Want to know if a particular fantasy trade is worth it? This app can evaluate a particular player trade based on real game statistics from the NHL public API. It also allows you to input your own metrics for each category, which varies across fantasy leagues.</div>
          <div className="recent-button-container">
            <button>View</button>
            <button>Github</button>
          </div>
        </div>
      </div>
      <div className="application-item">
        <img className='recent-img' src='/images/jastdance.webp' alt='jastdance'></img>
        <div className="recent-text-container">
          <div className="recent-title">JASTDance</div>
          <div className="recent-skills">React | JavaScript | Express | Node | PostgreSQL | Cassandra | Nginx | Docker | Loader.io | New Relic</div>
          <div className="recent-description">Everyone listens to music! This app will be your go-to destination to listen to all the latest hits. I built out the back end of this application to scale for high-web traffic. I completely replaced and scaled the back-end of the Related Tracks service to handle 55 million+ records. I improved efficiency by optimizing database query speed from 3 seconds to less than 25 milliseconds. I designed and engineered the system architecture to include multiple servers and load balancer, increasing throughput by 33%. </div>
          <div className="recent-button-container">
            <button>View</button>
            <button>Github</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Recent;
