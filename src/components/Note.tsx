import Draggable from "./Draggable";
import "./Note.css";

const Note = () => {
  return (
    <Draggable className="note" initialPosition={{ x: 0, y: 0 }}>
      <h4>To do:</h4>
      <ul>
        <li>Land a creative web developer job</li>
        <li>Drink more water (less coffee... maybe)</li>
        <li className="line-through">Move to Ireland</li>
        <li>Learn the basics of Marketing & Analytics</li>
        <li className="line-through">Level up my English fluency</li>
        <li className="line-through">Volunteer for animal causes</li>
        <li>Explore a new country solo</li>
      </ul>
    </Draggable>
  );
};

export default Note;
