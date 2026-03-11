import { useCallback, useRef } from 'react';

export function useCoinSound() {
    const audioCtxRef = useRef(null);

    const play = useCallback(() => {
        try {
            if (!audioCtxRef.current) {
                audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
            }
            const ctx = audioCtxRef.current;
            const now = ctx.currentTime;

            // First tone (higher pitch - the "bling")
            const osc1 = ctx.createOscillator();
            const gain1 = ctx.createGain();
            osc1.type = 'square';
            osc1.frequency.setValueAtTime(987.77, now); // B5
            osc1.frequency.setValueAtTime(1318.5, now + 0.08); // E6
            gain1.gain.setValueAtTime(0.3, now);
            gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
            osc1.connect(gain1);
            gain1.connect(ctx.destination);
            osc1.start(now);
            osc1.stop(now + 0.25);

            // Second tone (the sparkle)
            const osc2 = ctx.createOscillator();
            const gain2 = ctx.createGain();
            osc2.type = 'square';
            osc2.frequency.setValueAtTime(1318.5, now + 0.08); // E6
            osc2.frequency.setValueAtTime(1567.98, now + 0.15); // G6
            gain2.gain.setValueAtTime(0, now);
            gain2.gain.setValueAtTime(0.25, now + 0.08);
            gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
            osc2.connect(gain2);
            gain2.connect(ctx.destination);
            osc2.start(now + 0.08);
            osc2.stop(now + 0.35);
        } catch (e) {
            // Audio not supported, fail silently
        }
    }, []);

    return play;
}
