import Box from "../../components/Box";
import { useColor } from "../../context/ColorContext";
import "./Settings.css";


export default function Settings() {
    const { setColor } = useColor();
    const presetColors = [
        "#fafafa",
        "#f0aeae",
        "#54B9AD",
        "#F8D059",
        "#50C1EC",
        "#d496ec",
        "#a9c75d",
        "#f8b659",
        "#ec5850",
    ];

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

            
            </Box>
        </div>
    );
}
