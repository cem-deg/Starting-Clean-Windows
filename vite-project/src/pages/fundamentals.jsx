import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import './Fundamentals.css';

export default function Fundamentals() {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedCPU, setSelectedCPU] = useState(location.state?.selectedCPU || null);
    const [selectedGPU, setSelectedGPU] = useState(location.state?.selectedGPU || null);
    const [step, setStep] = useState(location.state?.selectedCPU && location.state?.selectedGPU ? 2 : 1);

    const handleSelectCPU = (cpu) => {
        setSelectedCPU(cpu);
    };

    const handleSelectGPU = (gpu) => {
        setSelectedGPU(gpu);
    };

    const handleProceedToConfirmation = () => {
        if (selectedCPU && selectedGPU) {
            setStep(2);
        }
    };

    const handleBackToSelection = () => {
        setStep(1);
    };

    const handleConfirm = () => {
        navigate('/step1', { state: { selectedCPU, selectedGPU } });
    };

    return (
        <div className="fundamentals-wrapper">
            <main className="fundamentals-container">
                <h2>Fundamentals of Fresh Windows for Good Performance</h2>
                
                {step === 1 ? (
                    <div className="selection-container">
                        <div className="selection-row">
                            <div className="cpu-selection-section">
                                <h3 className="selection-title">Select Your Processor (CPU)</h3>
                                <div className="cpu-buttons">
                                    <button 
                                        className={`cpu-btn intel-btn ${selectedCPU === 'intel' ? 'selected' : ''}`}
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
                                        className={`cpu-btn amd-btn ${selectedCPU === 'amd' ? 'selected' : ''}`}
                                        onClick={() => handleSelectCPU('amd')}
                                    >
                                        <i className="bi bi-amd"></i>
                                        <span>AMD</span>
                                    </button>
                                </div>
                            </div>
                            
                            <div className="gpu-selection-section">
                                <h3 className="selection-title">Select Your Graphics Card (GPU)</h3>
                                <div className="cpu-buttons">
                                    <button 
                                        className={`cpu-btn nvidia-btn ${selectedGPU === 'nvidia' ? 'selected' : ''}`}
                                        onClick={() => handleSelectGPU('nvidia')}
                                    >
                                        <i className="bi bi-nvidia"></i>
                                        <span>NVIDIA</span>
                                    </button>
                                    
                                    <button 
                                        className={`cpu-btn amd-btn ${selectedGPU === 'amd' ? 'selected' : ''}`}
                                        onClick={() => handleSelectGPU('amd')}
                                    >
                                        <i className="bi bi-amd"></i>
                                        <span>AMD</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="selection-actions">
                            <button 
                                className="proceed-btn"
                                disabled={!selectedCPU || !selectedGPU}
                                onClick={handleProceedToConfirmation}
                            >
                                Continue
                                <i className="bi bi-arrow-right"></i>
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
                                <button className="back-btn" onClick={handleBackToSelection}>
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