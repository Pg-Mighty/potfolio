import { useState, useEffect } from 'react';
import '../styles/sideB.css';

const QUESTS = [
    { icon: '🥾', name: 'Death Stranding', status: 'Status: Completing the Ciral Network' },
    { icon: '♠️', name: 'Delta rune', status: 'Status: Pacifing' },
];

const LOOT_ITEMS = [
    { icon: '🎮', name: 'Gaming', rarity: 'legendary', rarityLabel: '★ Legendary' },
    { icon: '🎵', name: 'Music', rarity: 'epic', rarityLabel: '★ Epic' },
    { icon: '🎬', name: 'Anime / Movies', rarity: 'rare', rarityLabel: '★ Rare' },
    { icon: '🏋️', name: 'Fitness', rarity: 'uncommon', rarityLabel: '★ Uncommon' },
    { icon: '🏓', name: 'Table-Tennis', rarity: 'legendary', rarityLabel: '★ Legendary' },
    { icon: '🌌', name: 'Space', rarity: 'legendary', rarityLabel: '★ Legendary' },

];

export default function SideB() {
    const [showAchievement, setShowAchievement] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowAchievement(false), 3500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="side-b">
            {/* ── Achievement Toast ── */}
            {showAchievement && (
                <div className="b-achievement">
                    <span className="b-achievement__icon">🏅</span>
                    <div className="b-achievement__text">
                        ACHIEVEMENT UNLOCKED!<br />
                        "Discovered the Secret Side"
                    </div>
                </div>
            )}

            <div className="b-container">
                {/* ── Hero ── */}
                <section className="b-hero" id="hero-b">
                    <div className="b-hero__badge">⚡ PLAYER ⚡</div>
                    <h1 className="b-hero__name">SUMUKH RAIKAR</h1>
                    <p className="b-hero__subtitle">
                        WELCOME TO MY WORLD.
                        <span className="b-hero__cursor" />
                    </p>
                    <div className="b-hero__hp-bar">
                        <div className="b-hero__hp-label">HP ████████░░ 85%</div>
                        <div className="b-hero__hp-track">
                            <div className="b-hero__hp-fill" />
                        </div>
                    </div>
                </section>

                {/* ── Player Stats ── */}
                <section className="b-section">
                    <h2 className="b-section__title">⊞ PLAYER STATS</h2>
                    <div className="b-section__divider" />
                    <div className="b-stats">
                        <div className="b-stat-card">
                            <div className="b-stat-card__value">LVL 21</div>
                            <div className="b-stat-card__label">Current Level</div>
                        </div>
                        <div className="b-stat-card">
                            <div className="b-stat-card__value">CE</div>
                            <div className="b-stat-card__label">Class: Engineer</div>
                        </div>
                        <div className="b-stat-card">
                            <div className="b-stat-card__value">3RD</div>
                            <div className="b-stat-card__label">Year of Quest</div>
                        </div>
                        <div className="b-stat-card">
                            <div className="b-stat-card__value">WEB3</div>
                            <div className="b-stat-card__label">Specialization</div>
                        </div>
                    </div>
                </section>

                {/* ── Current Quest ── */}
                <section className="b-section">
                    <h2 className="b-section__title">⊞ CURRENT QUESTS</h2>
                    <div className="b-section__divider" />
                    <div className="b-quest-widget pixel-border">
                        <div className="b-quest__header">
                            <span className="b-quest__icon">🗡️</span>
                            <span className="b-quest__label">Active Missions</span>
                        </div>
                        <div className="b-quest__list">
                            {QUESTS.map((q) => (
                                <div className="b-quest__item" key={q.name}>
                                    <span className="b-quest__item-icon">{q.icon}</span>
                                    <div className="b-quest__item-info">
                                        <div className="b-quest__item-name">{q.name}</div>
                                        <div className="b-quest__item-status">{q.status}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CRT Monitor ── */}
                <section className="b-section">
                    <h2 className="b-section__title">⊞ Currently watching</h2>
                    <div className="b-section__divider" />
                    <div className="b-crt-monitor">
                        <div className="b-crt__header">
                            <span className="b-crt__dot b-crt__dot--red" />
                            <span className="b-crt__dot b-crt__dot--yellow" />
                            <span className="b-crt__dot b-crt__dot--green" />
                            <span className="b-crt__title">SIGNAL: ACTIVE</span>
                        </div>
                        <div className="b-crt__content">
                            <div className="b-crt__video-embed">
                                <iframe
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="Video Embed"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                            <div className="b-crt__placeholder">
                                ► TRANSMISSION LOG: Favorite tracks & gameplay highlights
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Loot / Inventory ── */}
                <section className="b-section">
                    <h2 className="b-section__title">⊞ Intrests</h2>
                    <div className="b-section__divider" />
                    <div className="b-inventory__grid">
                        {LOOT_ITEMS.map((item) => (
                            <div
                                className={`b-loot-item b-loot-item--${item.rarity}`}
                                key={item.name}
                            >
                                <span className="b-loot-item__icon">{item.icon}</span>
                                <div className="b-loot-item__name">{item.name}</div>
                                <div className="b-loot-item__rarity">{item.rarityLabel}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Footer ── */}
                <footer className="b-footer">
                    <p className="b-footer__text">
                        <span>It's not whether you win or lose, it's how you play the game.</span><br />
                        INSERT COIN TO CONTINUE...<br />
                        © 2026 SUMUKH RAIKAR
                    </p>
                </footer>
            </div>
        </div>
    );
}
