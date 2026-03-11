import { ThemeProvider, useTheme } from './context/ThemeContext';
import FlipButton from './components/FlipButton';
import RippleTransition from './components/RippleTransition';
import SideA from './pages/SideA';
import SideB from './pages/SideB';
import './index.css';

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`theme-${theme}`}>
      {/* Flip Toggle */}
      <FlipButton />

      {/* Ripple Transition Overlay */}
      <RippleTransition />

      {/* Current Theme Content */}
      {theme === 'sideA' ? <SideA /> : <SideB />}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
