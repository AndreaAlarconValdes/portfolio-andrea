import "./HandwriteText.css"

interface HandwriteProps {
title: string;
}

const HandwriteText = ({title}: HandwriteProps) => {
  return (
      <p className="handwriting"> {title}</p>
  )
}

export default HandwriteText