import { useState, useEffect } from 'react';


const GITHUB_USERNAME = 'Pg-Mighty';
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`;

const LANG_COLORS = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Java: '#b07219',
    'C++': '#f34b7d',
    C: '#555555',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Solidity: '#AA6746',
    Rust: '#dea584',
    Go: '#00ADD8',
    Shell: '#89e051',
    Dart: '#00B4AB',
    Kotlin: '#A97BFF',
};

export default function GitHubProjects() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(API_URL)
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch repositories');
                return res.json();
            })
            .then(data => {
                const filtered = data.filter(r => !r.fork);
                setRepos(filtered);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="a-projects__loading">
                {[...Array(6)].map((_, i) => (
                    <div className="a-skeleton-card" key={i}>
                        <div className="a-skeleton-card__header" />
                        <div className="a-skeleton-card__body" />
                        <div className="a-skeleton-card__body" />
                        <div className="a-skeleton-card__body" />
                    </div>
                ))}
            </div>
        );
    }

    if (error) {
        return (
            <div className="a-projects__error">
                <p>⚠️ {error}</p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                    Check back later or visit{' '}
                    <a
                        href={`https://github.com/${GITHUB_USERNAME}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--a-accent)' }}
                    >
                        GitHub →
                    </a>
                </p>
            </div>
        );
    }

    return (
        <div className="a-projects__grid">
            {repos.map(repo => (
                <a
                    className="a-project-card"
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="a-project-card__header">
                        <span className="a-project-card__icon">  <img src="./Github.png" alt="GitHub Icon" />    </span>
                        <div className="a-project-card__links">
                            {repo.homepage && (
                                <span className="a-project-card__link" title="Live Demo">🔗</span>
                            )}
                            <span className="a-project-card__link" title="Source Code">↗</span>
                        </div>
                    </div>
                    <h3 className="a-project-card__name">{repo.name}</h3>
                    <p className="a-project-card__desc">
                        {repo.description || 'No description available.'}
                    </p>
                    <div className="a-project-card__footer">
                        {repo.language && (
                            <span className="a-project-card__lang">
                                <span
                                    className="a-project-card__lang-dot"
                                    style={{ background: LANG_COLORS[repo.language] || '#888' }}
                                />
                                {repo.language}
                            </span>
                        )}
                        {repo.stargazers_count > 0 && (
                            <span className="a-project-card__stat">⭐ {repo.stargazers_count}</span>
                        )}
                        {repo.forks_count > 0 && (
                            <span className="a-project-card__stat">🍴 {repo.forks_count}</span>
                        )}
                    </div>
                </a>
            ))}
        </div>
    );
}
