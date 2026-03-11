import { useTheme } from '../context/ThemeContext';
import '../styles/flipButton.css';

export default function FlipButton() {
    const { theme, toggleTheme, isTransitioning } = useTheme();
    const isSideB = theme === 'sideB';

    return (
        <div className={`toggle-wrapper ${isSideB ? 'toggle-wrapper--retro' : ''}`}>
            <span style={{ "color": "Cyan", "font-size": "11px", "fontFamily": "Trebuchet MS, sans-serif" }} className={`toggle-label ${!isSideB ? 'toggle-label--active' : ''}`}>
                Professional<br></br><span style={{ paddingLeft: "16px" }}>Mode</span>
            </span>
            <button
                className={`toggle-switch ${isSideB ? 'toggle-switch--on' : ''} ${isSideB ? 'toggle-switch--retro' : ''}`}
                onClick={toggleTheme}
                disabled={isTransitioning}
                aria-label="Toggle theme"
                id="flip-toggle"
                role="switch"
                aria-checked={isSideB}
            >
                <span className="toggle-switch__thumb" />
            </button>
            <span style={{ "color": "#ff2c97", "font-size": "13px", "fontFamily": "Happy Monkey" }} className={`toggle-label ${isSideB ? 'toggle-label--active' : ''}`}>
                Hobby<br></br><span style={{ paddingLeft: "5px" }}>Mode</span>
            </span>
        </div>
    );
}
