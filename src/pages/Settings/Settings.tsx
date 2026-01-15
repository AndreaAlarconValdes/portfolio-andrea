import Box from "../../components/Box";
import { presetColors } from "../../constants/constants";
import { useColor } from "../../context/ColorContext";
import "./Settings.css";


export default function Settings() {
    const { setColor } = useColor();


    const handlePresetColorClick = (presetColor: string) => {
        setColor(presetColor);
    };

    return (
        <div className="settings" >
            <Box className="settings-content">
                <div className="settings-header">
                    <h2>Wallpaper</h2>
                    <p>Select your favorite background color.</p>
                </div>
                <div className="color-setting">
                    <h3>Solid colors</h3>
                    <div className="preset-colors">
                        {presetColors.map((preset, index) => (
                            <button
                                className="preset-color"
                                key={index}
                                onClick={() => handlePresetColorClick(preset)}
                                style={{
                                    backgroundColor: preset,
                                }}
                                aria-label={`Select color ${preset}`}
                            ></button>
                        ))}
                    </div>
                </div>

            
            </Box>
        </div>
    );
}
