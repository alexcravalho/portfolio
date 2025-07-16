import { role } from './experience.data';

type roleProps = {
  role: role;
};

export default function Role({ role }: roleProps) {
  return (
    <div className="role-description">
      <div className="role-header">
        <div className="role-title">{role.title}</div>
        <div className="role-position">{role.position}</div>
        <div className="role-date">{role.dates}</div>
      </div>
      <div className="role-text">{role.text}</div>
    </div>
  );
}
