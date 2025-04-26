interface HandwriteProps {
  title: string;
  arrowPosition?: "left" | "right";
}

const HandwriteText = ({ title, arrowPosition }: HandwriteProps) => {
  

  
  return (
    <div  style={{ display: "flex",  flexDirection: arrowPosition == "left" ? "row-reverse" : "row",gap: ".5rem", alignItems: "flex-end" }}>
      <p className="handwriting"
      style={{fontFamily:"Indie Flower, cursive"}}
      >{title}</p>
      {arrowPosition && (
        <img
          src="./arrow-down.png"
          alt="arrow"
          style={{
            height: "20px",
            transform: arrowPosition === "left"
            ? "rotateY(180deg) rotate(-80deg)"
            : "rotate(-80deg)",
          }}
        />
        )}
  
    </div>
  );
};

export default HandwriteText;
