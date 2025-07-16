type NeonButtonProps = {
  link: string;
  text: string;
};

export default function NeonButton({ link, text }: NeonButtonProps) {
  return (
    <a className="btn" href={link} target="_blank" rel="noopener noreferrer">
      <div>{text}</div>
    </a>
  );
}
