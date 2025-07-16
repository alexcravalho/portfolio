import { navList, iconList, hrefList } from './contact.data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactFooter() {
  return (
    <div className="footer">
      <div className="back-to-top">
        <a className="btn" href="#" title="back-to-top">
          Back to Top
        </a>
      </div>
      <div className="bottom-panel">
        <div className="project-link">
          <span className="link-text">Constructed in TypeScript with Next.js</span>
          <div className="footer-button">
            <a
              href="https://github.com/alexcravalho/portfolio"
              title="portfolio-github-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={iconList[2]} />
            </a>
          </div>
        </div>
        <div className="like-page-text">Like This Page?</div>
        <div className="footer-icon-holder">
          {navList.map((icon, i) => (
            <a href={hrefList[i]} title={icon} target="_blank" rel="noopener noreferrer" key={i}>
              <span className="icon-button">
                <FontAwesomeIcon icon={iconList[i]} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
