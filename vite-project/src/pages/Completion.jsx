import React from 'react';
import { useNavigate } from 'react-router';
import './Fundamentals.css';

export default function Completion() {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    };

    const essentialApps = [
        {
            name: 'Steam',
            icon: 'bi-steam',
            url: 'https://store.steampowered.com/about/',
            description: 'The ultimate destination for playing, discussing, and creating games.',
            iconStyle: { color: '#000000' }
        },
        {
            name: 'Spotify',
            icon: 'bi-spotify',
            url: 'https://www.spotify.com/download/windows/',
            description: 'Digital music service that gives you access to millions of songs.',
            iconStyle: { color: '#1DB954' }
        },
        {
            name: 'Discord',
            icon: 'bi-discord',
            url: 'https://discord.com/download',
            description: 'The easiest way to talk over voice, video, and text.',
            iconStyle: { color: '#5865F2' }
        }
    ];

    const handleMoreApps = () => {
        navigate('/app-center');
    };

    return (
        <div className="fundamentals-wrapper">
            <main className="fundamentals-container">
                <div className="step-page">
                    <div className="step-header">
                        <div className="step-badge" style={{ background: '#10b981', color: '#fff' }}>Completed</div>
                        <h3 className="step-title" style={{ color: '#10b981' }}>
                            <i className="bi bi-check-circle-fill" style={{ color: '#10b981' }}></i>
                            All Steps Completed!
                        </h3>
                        <p className="step-subtitle">Your system is now optimized for better performance.</p>
                    </div>

                    <div className="step-content-card">
                        <div className="step-instructions">
                            <h4 className="section-subtitle">
                                <i className="bi bi-stars"></i> Recommended Software
                            </h4>
                            
                            
                            <div className="essentials-grid">
                                {essentialApps.map((app, index) => (
                                    <a 
                                        key={index}
                                        href={app.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="essential-app-card"
                                    >
                                        <div className="app-icon-wrapper">
                                            <i className={`bi ${app.icon}`} style={app.iconStyle}></i>
                                        </div>
                                        <div className="app-info">
                                            <h5>{app.name}</h5>
                                            <p>{app.description}</p>
                                        </div>
                                        <i className="bi bi-box-arrow-up-right external-link-icon"></i>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="step-navigation" style={{ marginTop: '2rem', justifyContent: 'center', gap: '1rem' }}>
                            <button className="step-nav-btn prev-btn" onClick={handleHome}>
                                <i className="bi bi-house"></i>
                                Back to Home
                            </button>
                            <button className="start-btn" onClick={handleMoreApps} style={{margin: 0}}>
                                <i className="bi bi-grid-3x3-gap-fill"></i>
                                View More Apps
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
