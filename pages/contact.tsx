import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navList, hrefList, iconList } from '../components/Contact/contact.data';

export default function Contact() {
  return (
    <div className="Home">
      <div className="name">Alex Cravalho</div>
      <div className="position">Software Engineer</div>
      <div className="home-buttons-container">
        {navList.map((text, i) => (
          <a href={hrefList[i]} key={i} target="_blank" rel="noopener noreferrer">
            <div className="home-button" key={i}>
              <FontAwesomeIcon className="fa-icon" icon={iconList[i]} />
              <div className="home-button-text">{text}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
