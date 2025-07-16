import { roleList } from '../components/Experience/experience.data';
import Role from '../components/Experience/Role';

export default function Experience() {
  return (
    <div className="Experience">
      <div className="heading">Experience</div>
      <div className="role-container">
        {roleList.map((role, i) => (
          <Role role={role} key={i} />
        ))}
      </div>
    </div>
  );
}
