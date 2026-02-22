import React from 'react';
import './Fundamentals.css';

export default function AppCenter() {
    const categories = [
        {
            title: "Browsers",
            apps: [
                { name: 'Chrome', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg', url: 'https://www.google.com/chrome/', desc: 'Fast, secure web browser.', color: '#4285F4' },
                { name: 'Firefox', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg', url: 'https://www.mozilla.org/firefox/new/', desc: 'Privacy-focused browser.', color: '#FF7139' },
                { name: 'Edge', image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Microsoft_Edge_logo_%282019%29.svg', url: 'https://www.microsoft.com/edge', desc: 'Built-in browser optimized for Windows.', color: '#0078D7' },
                { name: 'Brave', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Brave_lion_icon.svg', url: 'https://brave.com/', desc: 'Secure, fast & private web browser with Adblocker.', color: '#FB542B' }
            ]
        },
        {
            title: "Gaming",
            apps: [
                { name: 'Steam', image: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg', url: 'https://store.steampowered.com/about/', desc: 'The ultimate destination for playing, discussing, and creating games.', color: '#171a21' },
                { name: 'Epic Games', image: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg', url: 'https://store.epicgames.com/download', desc: 'PC games, mods, DLC & more.', color: '#313131' },
                { name: 'Discord', image: 'https://cdn.icon-icons.com/icons2/2108/PNG/512/discord_icon_130958.png', url: 'https://discord.com/download', desc: 'Talk over voice, video, and text.', color: '#5865F2', style: { borderRadius: '50%' } },
                { name: 'MSI Afterburner', image: 'https://cdn.simpleicons.org/msi/FF0000', url: 'https://www.msi.com/Landing/afterburner/graphics-cards', desc: 'Graphics card overclocking utility.', color: '#FF0000' },
                { name: 'Ubisoft Connect', image: 'https://cdn.simpleicons.org/ubisoft/0091FF', url: 'https://ubisoftconnect.com/', desc: 'The ecosystem of player services for Ubisoft games.', color: '#0091FF' },
                { name: 'EA App', image: 'https://cdn.simpleicons.org/ea/FF4747', url: 'https://www.ea.com/ea-app', desc: 'The best way to play your EA games.', color: '#FF4747' },
                { name: 'Battle.net', image: 'https://cdn.simpleicons.org/battledotnet/148EFF', url: 'https://www.blizzard.com/apps/battle.net/desktop', desc: 'Your gateway to all things Blizzard.', color: '#148EFF' },
                { name: 'GOG Galaxy', image: 'https://cdn.simpleicons.org/gogdotcom/AA00D7', url: 'https://www.gog.com/galaxy', desc: 'All your games and friends in one place.', color: '#AA00D7' },
                { name: 'Xbox App', icon: 'bi-xbox', url: 'https://www.xbox.com/en-US/apps/xbox-app-for-pc', desc: 'Play PC Game Pass games and connect with friends.', color: '#107C10' },
                { name: 'OBS Studio', image: 'https://cdn.simpleicons.org/obsstudio/302E31', url: 'https://obsproject.com/', desc: 'Free and open source software for video recording and live streaming.', color: '#302E31' },
            ]
        },
        {
            title: "Media",
            apps: [
                { name: 'VLC', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/VLC_Icon.svg', url: 'https://www.videolan.org/vlc/', desc: 'Free and open source cross-platform multimedia player.', color: '#FF8800' },
                { name: 'Spotify', image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg', url: 'https://www.spotify.com/download/windows/', desc: 'Digital music service.', color: '#1DB954' },
                { name: 'iTunes', image: 'https://upload.wikimedia.org/wikipedia/commons/d/df/ITunes_logo.svg', url: 'https://www.apple.com/itunes/', desc: 'Media player, media library, and mobile device management.', color: '#FB5B73' }
            ]
        },
        {
            title: "Utilities",
            apps: [
                { name: '7-Zip', image: '/logos/7zip.svg', url: 'https://www.7-zip.org/', desc: 'File archiver with a high compression ratio.', color: '#333333' },
                { name: 'WinRAR', image: '/logos/winrar.svg', url: 'https://www.win-rar.com/download.html', desc: 'Powerful archive manager.', color: '#7C4DFF' },
                { name: 'Notepad++', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Notepad_plus_plus.png', url: 'https://notepad-plus-plus.org/downloads/', desc: 'Source code editor and Notepad replacement.', color: '#90C63E' },
                { name: 'CPU-Z', image: '/logos/cpuz.svg', url: 'https://www.cpuid.com/softwares/cpu-z.html', desc: 'System profiling and monitoring application.', color: '#5C4DA6' }
            ]
        }
    ];

    return (
        <div className="fundamentals-wrapper">
            <main className="fundamentals-container" style={{ maxWidth: '100%', padding: '2rem 4rem' }}>
                <div className="step-page" style={{ maxWidth: '100%' }}>
                    <div className="step-header">
                        <h3 className="step-title">
                            <i className="bi bi-grid-3x3-gap-fill"></i>
                            App Center
                        </h3>
                        <p className="step-subtitle">Download essential applications for your fresh Windows installation.</p>
                    </div>

                    <div className="step-content-card" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                            {categories.map((category, idx) => (
                                <div key={idx} style={{ marginBottom: '1rem' }}>
                                    <h4 style={{ 
                                        fontWeight: 800, 
                                        fontSize: '1.25rem', 
                                        marginBottom: '1.5rem', 
                                        color: '#333',
                                        borderLeft: '4px solid #fbbf24',
                                        paddingLeft: '0.75rem'
                                    }}>
                                        {category.title}
                                    </h4>
                                    <div style={{ 
                                        display: 'grid', 
                                        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', 
                                        gap: '1rem'
                                    }}>
                                        {category.apps.map((app, index) => (
                                            <a 
                                                key={index}
                                                href={app.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ 
                                                    display: 'flex', 
                                                    flexDirection: 'column',
                                                    alignItems: 'center', 
                                                    justifyContent: 'center',
                                                    gap: '0.5rem', 
                                                    padding: '1.25rem 0.5rem', 
                                                    borderRadius: '12px', 
                                                    textDecoration: 'none',
                                                    background: '#ffffff',
                                                    border: '1px solid #f0f0f0',
                                                    transition: 'all 0.2s ease',
                                                    color: '#333',
                                                    textAlign: 'center',
                                                    boxShadow: '0 2px 5px rgba(0,0,0,0.03)'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                                    e.currentTarget.style.boxShadow = `0 6px 12px ${app.color}40`; // Hex with alpha (25%)
                                                    e.currentTarget.style.borderColor = app.color;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(0)';
                                                    e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.03)';
                                                    e.currentTarget.style.borderColor = '#f0f0f0';
                                                }}
                                            >
                                                <div style={{ 
                                                    display: 'flex',
                                                    alignItems: 'center', 
                                                    justifyContent: 'center',
                                                    height: '40px',
                                                    marginBottom: '0.1rem',
                                                    color: app.color // for icon color
                                                }}>
                                                    {app.icon ? (
                                                        <i className={`bi ${app.icon}`} style={{ fontSize: '2rem' }}></i>
                                                    ) : (
                                                        <img 
                                                            src={app.image} 
                                                            alt={`${app.name} logo`}
                                                            style={{
                                                                height: '32px',
                                                                width: 'auto',
                                                                objectFit: 'contain',
                                                                ...(app.style || {})
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                                <span style={{ 
                                                    fontSize: '0.85rem', 
                                                    fontWeight: 700,
                                                    color: '#444'
                                                }}>
                                                    {app.name}
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
