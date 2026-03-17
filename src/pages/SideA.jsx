import GitHubProjects from '../components/GitHubProjects';
import '../styles/sideA.css';

const SKILLS = [
    { name: 'Spring Boot', icon: '🍃', level: 80 },
    { name: 'Core Java', icon: '☕', level: 85 },
    { name: 'Docker', icon: '🐳', level: 70 },
    { name: 'HTML/CSS', icon: '🎨', level: 90 },
    { name: 'SQL', icon: '🗃️', level: 75 },
    { name: 'Node JS/TS', icon: '💚', level: 82 },
    { name: 'C/C++', icon: '⚙️', level: 78 },
    { name: 'Python', icon: '🐍', level: 80 },
    { name: 'Backend API', icon: '🔌', level: 85 },
    { name: 'Web3', icon: '🔗', level: 72 },
];

const AWARDS = [
    {
        icon: '🏆',
        title: 'HackIndia 2025 — Top 10',
        desc: 'Finished in the Top 10 at HackIndia 2025, a national-level Web3 and AI Hackathon, competing against hundreds of teams.',
        tag: 'Web3 & AI',
    },
    {
        icon: '💡',
        title: 'Converge 2.0 — Top 10',
        desc: 'Placed Top 10 in the Converge 2.0 Innovative Idea Challenge for a disruptive tech concept with real-world impact.',
        tag: 'Innovation',
    },
];

export default function SideA() {
    return (
        <div className="side-a">
            {/* ── Animated Background Elements ── */}
            <div className="a-bg-grid" />
            <div className="a-bg-glow a-bg-glow--1" />
            <div className="a-bg-glow a-bg-glow--2" />
            <div className="a-bg-glow a-bg-glow--3" />
            <div className="a-floating-orbs">
                {[...Array(6)].map((_, i) => (
                    <div className={`a-orb a-orb--${i + 1}`} key={i} />
                ))}
            </div>

            <div className="a-container">
                {/* ── Hero ── */}
                <section className="a-hero" id="hero-a">
                    <div className="a-hero__content">
                        <div className="a-hero__text">
                            <div className="a-hero__badge">
                                <span className="a-hero__badge-dot" />
                                Available for opportunities
                            </div>
                            <h1 className="a-hero__name">
                                <span className="a-hero__name-line">Sumukh</span>
                                <span className="a-hero__name-line a-hero__name-line--accent">Raikar</span>
                            </h1>
                            <p className="a-hero__title">
                                3rd Year Computer Engineering Student passionate about{' '}
                                <span className="a-hero__highlight">Web3 technologies</span>
                            </p>
                            <div className="a-hero__cta">
                                <a
                                    className="a-hero__btn a-hero__btn--primary"
                                    href="https://github.com/Pg-Mighty"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>View GitHub</span>
                                    <span className="a-hero__btn-arrow">→</span>
                                </a>
                                <a className="a-hero__btn a-hero__btn--secondary" href="#about-a">
                                    Learn More
                                </a>
                            </div>
                        </div>

                        {/* ── Profile Picture ── */}
                        <div className="a-hero__pfp-wrapper">
                            <div className="a-hero__pfp-ring" />
                            <div className="a-hero__pfp">
                                <div className="a-hero__pfp-placeholder">
                                    <image>
                                        <img src="profile.jpeg" style={{ width: '200%', height: '200%', objectFit: 'cover' }}></img>
                                    </image>

                                </div>
                            </div>
                            <div className="a-hero__pfp-status">
                                <span className="a-hero__pfp-status-dot" />
                                <span>Coding</span>
                            </div>
                        </div>
                    </div>

                    {/* ── Scroll indicator ── */}
                    <div className="a-hero__scroll">
                        <div className="a-hero__scroll-line" />
                        <span>SCROLL</span>
                    </div>
                </section>

                {/* ── About ── */}
                <section className="a-section" id="about-a">
                    <div className="a-section__header">
                        <span className="a-section__num">01</span>
                        <h2 className="a-section__title">About Me</h2>
                        <div className="a-section__line" />
                    </div>
                    <div className="a-about__content">
                        <div className="a-about__text">
                            <p>
                                I'm pursuing my{' '}
                                <span className="a-about__highlight">
                                    Bachelor of Engineering in Computer Engineering
                                </span>{' '}
                                at Don Bosco College of Engineering (2022–2026).
                            </p>
                            <p>
                                My passion lies at the intersection of decentralized systems and modern
                                web technologies. I'm actively exploring{' '}
                                <span className="a-about__highlight">web3.js</span>,{' '}
                                <span className="a-about__highlight">blockchain development</span>, and
                                building scalable backend architectures.
                            </p>
                            <p>
                                When I'm not coding, I'm competing in hackathons, contributing to
                                open-source projects, and keeping up with the Web3 ecosystem.
                            </p>
                        </div>
                        <div className="a-about__cards">
                            <div className="a-about__card">
                                <div className="a-about__card-icon">🎓</div>
                                <div className="a-about__card-label">Education</div>
                                <div className="a-about__card-value">BE Computer Engineering</div>
                            </div>
                            <div className="a-about__card">
                                <div className="a-about__card-icon">🏫</div>
                                <div className="a-about__card-label">College</div>
                                <div className="a-about__card-value">Don Bosco College of Eng.</div>
                            </div>
                            <div className="a-about__card">
                                <div className="a-about__card-icon">📅</div>
                                <div className="a-about__card-label">Duration</div>
                                <div className="a-about__card-value">2022 — 2026</div>
                            </div>
                            <div className="a-about__card">
                                <div className="a-about__card-icon">🌐</div>
                                <div className="a-about__card-label">Focus</div>
                                <div className="a-about__card-value">Web3 & Blockchain</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Skills ── */}
                <section className="a-section" id="skills-a">
                    <div className="a-section__header">
                        <span className="a-section__num">02</span>
                        <h2 className="a-section__title">Tech Stack</h2>
                        <div className="a-section__line" />
                    </div>
                    <div className="a-skills__grid">
                        {SKILLS.map((skill, i) => (
                            <div
                                className="a-skill-card"
                                key={skill.name}
                                style={{ animationDelay: `${i * 0.05}s` }}
                            >
                                <div className="a-skill-card__top">
                                    <span className="a-skill-card__icon">{skill.icon}</span>
                                    <span className="a-skill-card__level">{skill.level}%</span>
                                </div>
                                <span className="a-skill-card__name">{skill.name}</span>
                                <div className="a-skill-card__bar">
                                    <div
                                        className="a-skill-card__bar-fill"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Awards ── */}
                <section className="a-section" id="awards-a">
                    <div className="a-section__header">
                        <span className="a-section__num">03</span>
                        <h2 className="a-section__title">Achievements</h2>
                        <div className="a-section__line" />
                    </div>
                    <div className="a-awards__list">
                        {AWARDS.map((award) => (
                            <div className="a-award-card" key={award.title}>
                                <div className="a-award-card__glow" />
                                <div className="a-award-card__content">
                                    <div className="a-award-card__top">
                                        <span className="a-award-card__icon">{award.icon}</span>
                                        <span className="a-award-card__tag">{award.tag}</span>
                                    </div>
                                    <h3 className="a-award-card__title">{award.title}</h3>
                                    <p className="a-award-card__desc">{award.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Live Projects ── */}
                <section className="a-section" id="projects-a">
                    <div className="a-section__header">
                        <span className="a-section__num">04</span>
                        <h2 className="a-section__title">Live Projects</h2>
                        <div className="a-section__line" />
                    </div>
                    <GitHubProjects />
                </section>

                {/* ── Footer ── */}
                <footer className="a-footer">
                    <div className="a-footer__line" />
                    <p>
                        Designed & Built by <span>Sumukh Raikar</span> and <span>AI</span> · © 2025 ·{' '}
                        <a
                            href="https://github.com/Pg-Mighty"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub ↗
                        </a>
                    </p>
                </footer>
            </div>
        </div>
    );
}
