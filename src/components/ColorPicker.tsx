import HandwriteText from "./HandwriteText";
import "./ColorPicker.css";

interface ColorPickerProps {
  color: string;
  onColorChange: (newColor: string) => void;
}
export default function ColorPicker({
  color,
  onColorChange,
}: ColorPickerProps) {
  const presetColors = [
      "#ffffff",
      "#e5e5e5",
      "#cccccc",
      "#999999",
      "#666666",
      "#333333",
      "#242424",
      "#000000",
    "#ff0000",
    "#ff9900",
    "#ffff66",
    "#00dc00",
    "#00efef",
    "#0000ff",
    "#9900ff",
    "#ed00ed",
    "#ff6666",
    "#ffcc66",
    "#ffff99",
    "#66ff66",
    "#66ffff",
    "#6666ff",
    "#cc66ff",
    "#ff66ff",
    "#ff9999",
    "#ffff00",
    "#ffffcc",
    "#99ff99",
    "#99ffff",
    "#9999ff",
    "#cf92f7",
    "#ff99ff",
    "#ffcccc",
    "#f9f991",
    "#fafadd",
    "#ccffcc",
    "#ccffff",
    "#ccccff",
    "#e0b3ff",
    "#ffccff",
  ];

  const handleInputChange = (e: { target: { value: string } }) => {
    onColorChange(e.target.value);
  };

  const handlePresetColorClick = (presetColor: string) => {
    onColorChange(presetColor);
  };

  return (
    <div className="color-picker-container">
      <HandwriteText title={`Try to personalise the background`} arrowPosition="left" />
      <div className="color-picker">
        <p>Colors</p>
        <div className="preset-colors">
          {presetColors.map((preset, index) => (
            <div
              className="preset-color"
              key={index}
              onClick={() => handlePresetColorClick(preset)}
              style={{
                backgroundColor: preset,
              }}
            ></div>
          ))}
        </div>
        <input type="color" value={color} onChange={handleInputChange} />
      </div>
    </div>
  );
}
