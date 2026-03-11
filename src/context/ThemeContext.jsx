import { createContext, useContext, useState, useCallback } from 'react';
import { useCoinSound } from '../hooks/useCoinSound';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('sideA');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [rippleOrigin, setRippleOrigin] = useState({ x: 0, y: 0 });
  const [nextTheme, setNextTheme] = useState(null);
  const playCoinSound = useCoinSound();

  const toggleTheme = useCallback((event) => {
    if (isTransitioning) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const incoming = theme === 'sideA' ? 'sideB' : 'sideA';

    setRippleOrigin({ x, y });
    setNextTheme(incoming);
    setIsTransitioning(true);

    // Play coin sound when transitioning to Side B
    if (incoming === 'sideB') {
      playCoinSound();
    }
  }, [theme, isTransitioning, playCoinSound]);

  const completeTransition = useCallback(() => {
    setTheme(nextTheme);
    setIsTransitioning(false);
    setNextTheme(null);
  }, [nextTheme]);

  return (
    <ThemeContext.Provider value={{
      theme,
      isTransitioning,
      rippleOrigin,
      nextTheme,
      toggleTheme,
      completeTransition,
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
