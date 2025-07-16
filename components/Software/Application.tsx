import NeonButton from '../NeonButton';
import Image from 'next/image';
import { app } from './software.data';

type appProps = {
  app: app;
};

export default function Application({ app }: appProps) {
  return (
    <div className="application-item">
      <div className="sa-img-wrapper">
        <Image
          className="sa-img"
          src={app.imgURI}
          alt={app.altName}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 92vw, 320px"
          unoptimized
        />
      </div>
      <div className="sa-text-container">
        <div className="sa-title">{app.name}</div>
        <div className="sa-tech">{app.tech}</div>
        <div className="sa-description">{app.desc}</div>
        <div className="sa-button-container">
          {app.btnText.map((text, i) => (
            <NeonButton link={app.links[i]} text={text} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
