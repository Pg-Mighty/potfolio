import { useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import SideA from '../pages/SideA';
import SideB from '../pages/SideB';
import '../styles/ripple.css';

export default function RippleTransition() {
    const { isTransitioning, rippleOrigin, nextTheme, completeTransition } = useTheme();
    const overlayRef = useRef(null);

    useEffect(() => {
        if (!isTransitioning || !overlayRef.current) return;

        const el = overlayRef.current;

        // Force reflow to ensure clip-path starts from 0
        el.getBoundingClientRect();

        // Start expanded animation on next frame
        requestAnimationFrame(() => {
            el.classList.add('ripple-overlay--expanding');
        });

        const handleEnd = () => {
            completeTransition();
        };

        el.addEventListener('transitionend', handleEnd, { once: true });

        return () => {
            el.removeEventListener('transitionend', handleEnd);
        };
    }, [isTransitioning, completeTransition]);

    if (!isTransitioning) return null;

    const clipStart = `circle(0% at ${rippleOrigin.x}px ${rippleOrigin.y}px)`;
    const clipEnd = `circle(150vmax at ${rippleOrigin.x}px ${rippleOrigin.y}px)`;

    return (
        <div
            ref={overlayRef}
            className={`ripple-overlay theme-${nextTheme}`}
            style={{
                '--clip-start': clipStart,
                '--clip-end': clipEnd,
            }}
        >
            {nextTheme === 'sideA' ? <SideA /> : <SideB />}
        </div>
    );
}
