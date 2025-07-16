import { appList } from './software.data';
import Application from './Application';

export default function Software() {
  return (
    <div className="Software">
      <div className="heading">Software Applications</div>
      <div className="application-list">
        {appList.map((app, i) => (
          <Application app={app} key={i} />
        ))}
      </div>
    </div>
  );
}
