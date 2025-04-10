import "./SocialMedia.css";

interface SocialMediaProps {
  color?: "black" | "white";
}

const SocialMedia = ({ color = "black" }: SocialMediaProps) => {
  const icons = [
    { class: "fa-solid fa-envelope", link:"mailto:alarconvaldes.a@gmail.com" },
    { class: "fa-brands fa-linkedin-in" , link:""},
    { class: "fa-brands fa-github" , link:"https://github.com/AndreaAlarconValdes"},
    { class: "fa-solid fa-file" , link:"./CV.pdf"},
  ];

  const style = {
    color: color,
    border: `2px solid ${color}`,
  };

  return (
    <ul className="social-media">
      {icons.map((icon) => (
        <li>
          <a
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={icon.class} style={style}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
