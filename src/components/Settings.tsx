import "./Settings.css";
import Box from "./Box";
import { useState } from "react";

interface SettingsProps {
  onColorChange: (newColor: string) => void;
  onFilterChange: (newFilter: string) => void;
}
export default function Settings({
  onColorChange,
  onFilterChange,
}: SettingsProps) {
  const presetColors = [
    "#EC9696",
    "#54B9AD",
    "#F8D059",
    "#50C1EC",
    "#d496ec",
    "#a9c75d",
    "#f8b659",
    "#ec5850",
  ];
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handlePresetColorClick = (presetColor: string) => {
    onColorChange(presetColor);
    onFilterChange("none");
  };

  const handleFilterClick = (filter: string) => {
    onFilterChange(filter);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen); 
  };
  return (
    <Box
      title="Settings"
      color="#DADAD3"
      square
      bgColor="#f7f6f0"
      className="color-picker-box"
    >
      <div className="settings-content">
      <div className="bg-picker">
        <p>Change background</p>
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
      </div>

      <div className="filters">
        <button className="filter-button" onClick={toggleDropdown}>
          <span style={{fontSize:14, marginRight: 5}}>Filters</span> <i className="fa-solid fa-chevron-down"/>
        </button>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <button onClick={() => handleFilterClick("none")}>Normal</button>

            <button onClick={() => handleFilterClick("grayscale(100%)")}>
              Black and white
            </button>
            <button onClick={() => handleFilterClick("invert(100%)")}>
              Negative
            </button>
            <button onClick={() => handleFilterClick("hue-rotate(180deg)")}>
              Invert Hue
            </button>
          </div>
        )}
      </div>
      </div>
    </Box>
  );
}
