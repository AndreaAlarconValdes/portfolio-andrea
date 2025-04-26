import "./HandwriteText.css";

interface HandwriteProps {
  title: string;
  arrowDown?: boolean;
}

const HandwriteText = ({ title, arrowDown }: HandwriteProps) => {
  return (
    <div style={{ display: "flex", gap: ".5rem", alignItems: "flex-end" }}>
      <p className="handwriting"> {title}</p>
      {arrowDown && (
        <img
          src="./arrow-down.png"
          alt="arrow"
          style={{
            height: "20px",
            transform: "rotate(-80deg)",
          }}
        />
      )}
    </div>
  );
};

export default HandwriteText;
