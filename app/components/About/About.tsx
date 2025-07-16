import { aboutText, imageCardList } from './about.data';
import Image from 'next/image';

export default function About() {
  return (
    <div className="About">
      <div className="heading">About Me</div>
      {aboutText.map((text, i) => (
        <div className="about-text" key={i}>
          {text}
        </div>
      ))}
      <div className="about-pic-row">
        {imageCardList.map((card, i) => (
          <div className="about-img-box" key={i}>
            <div className="about-img-wrapper">
              <Image
                className="about-img"
                alt={card.imageName}
                src={card.src}
                fill
                style={{ objectFit: 'cover', height: '100%' }}
                sizes="(max-width: 768px) 92vw, 51vh"
                unoptimized
              />
            </div>
            <div className="about-img-cap">{card.picCap}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
