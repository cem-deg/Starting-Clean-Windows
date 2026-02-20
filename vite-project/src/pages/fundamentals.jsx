import React, { useState } from "react";
import { useNavigate } from "react-router";
import './Fundamentals.css';

export default function Fundamentals() {
    const navigate = useNavigate();
    const [selectedCPU, setSelectedCPU] = useState(null);
    const [selectedGPU, setSelectedGPU] = useState(null);

    const handleSelectCPU = (cpu) => {
        setSelectedCPU(cpu);
    };

    const handleSelectGPU = (gpu) => {
        setSelectedGPU(gpu);
    };

    const handleConfirm = () => {
        navigate('/step1', { state: { selectedCPU, selectedGPU } });
    };

    const handleBackToCPU = () => {
        setSelectedCPU(null);
        setSelectedGPU(null);
    };

    const handleBackToGPU = () => {
        setSelectedGPU(null);
    };

    return (
        <div className="fundamentals-wrapper">
            <main className="fundamentals-container">
                <h2>Fundamentals of Fresh Windows for Good Performance</h2>
                
                {!selectedCPU ? (
                    <div className="cpu-selection">
                        <h3 className="selection-title">Select Your Processor (CPU)</h3>
                        
                        <div className="cpu-buttons">
                            <button 
                                className="cpu-btn intel-btn"
                                onClick={() => handleSelectCPU('intel')}
                            >
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg" 
                                    alt="Intel" 
                                    className="intel-logo"
                                />
                                <span>Intel</span>
                            </button>
                            
                            <button 
                                className="cpu-btn amd-btn"
                                onClick={() => handleSelectCPU('amd')}
                            >
                                <i className="bi bi-amd"></i>
                                <span>AMD</span>
                            </button>
                        </div>
                    </div>
                ) : !selectedGPU ? (
                    <div className="cpu-selection">
                        <button className="back-btn" onClick={handleBackToCPU}>
                            <i className="bi bi-arrow-left"></i> Change Processor
                        </button>
                        
                        <h3 className="selection-title">Select Your Graphics Card (GPU)</h3>
                        
                        <div className="cpu-buttons">
                            <button 
                                className="cpu-btn nvidia-btn"
                                onClick={() => handleSelectGPU('nvidia')}
                            >
                                <i className="bi bi-nvidia"></i>
                                <span>NVIDIA</span>
                            </button>
                            
                            <button 
                                className="cpu-btn amd-btn"
                                onClick={() => handleSelectGPU('amd')}
                            >
                                <i className="bi bi-amd"></i>
                                <span>AMD</span>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="confirmation-screen">
                        <div className="confirmation-card">
                            <div className="confirmation-icon">
                                <i className="bi bi-check-circle"></i>
                            </div>
                            <h3 className="confirmation-title">Your Selection</h3>
                            
                            <div className="confirmation-selections">
                                <div className="confirmation-item">
                                    <span className="confirmation-label">Processor</span>
                                    <span className="confirmation-value">
                                        {selectedCPU === 'intel' ? (
                                            <img 
                                                src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg" 
                                                alt="Intel" 
                                                className="confirmation-intel-logo"
                                            />
                                        ) : (
                                            <><i className="bi bi-amd"></i> AMD</>
                                        )}
                                    </span>
                                </div>
                                <div className="confirmation-item">
                                    <span className="confirmation-label">Graphics Card</span>
                                    <span className="confirmation-value">
                                        <i className={selectedGPU === 'nvidia' ? 'bi bi-nvidia' : 'bi bi-amd'}></i>
                                        {selectedGPU === 'nvidia' ? 'NVIDIA' : 'AMD'}
                                    </span>
                                </div>
                            </div>

                            <div className="confirmation-info">
                                <div className="info-badge">
                                    <i className="bi bi-list-ol"></i>
                                    <span>8 Steps</span>
                                </div>
                                <p className="info-text">
                                    We'll guide you through <strong>8 optimization steps</strong> to get your Windows running at peak performance. Follow each step carefully for best results.
                                </p>
                            </div>

                            <div className="confirmation-buttons">
                                <button className="back-btn" onClick={handleBackToGPU}>
                                    <i className="bi bi-arrow-left"></i> Change Selection
                                </button>
                                <button className="start-btn" onClick={handleConfirm}>
                                    Start Optimization
                                    <i className="bi bi-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}