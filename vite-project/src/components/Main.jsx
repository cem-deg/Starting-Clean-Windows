import { Link } from "react-router";
import Logo from "./Logo";

export default function Main() {
    return (
        <main className="hero-section text-center py-5">
            <div className="container">
                <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
                    <Logo style={{ width: '80px', height: '80px', filter: 'drop-shadow(0 0 12px rgba(251, 191, 36, 0.6))' }} />
                    <h1 className="display-4 fw-bold mb-0">Everything for Fresh Windows</h1>
                </div>
                <p className="lead text-secondary mb-4">Your guide to optimizing Windows for peak performance</p>
                
                <p className="mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    Your ultimate resource for optimizing and maintaining a fresh Windows installation.
                </p>
                <div className="logo-slider my-5">
                    <div className="slider-track">
                        {/* Define common style for consistency */}
                        {/* First Set */}
                        <div className="slide"><i className="bi bi-windows" style={{ fontSize: '1.8rem', color: '#000000' }}></i></div>
                        <div className="slide"><img src="https://cdn.simpleicons.org/nvidia/000000" alt="Nvidia" style={{ height: '30px', width: 'auto' }} /></div>
                        <div className="slide"><img src="https://cdn.simpleicons.org/intel/000000" alt="Intel" style={{ height: '35px', width: 'auto' }} /></div>
                        <div className="slide"><img src="https://cdn.simpleicons.org/amd/000000" alt="AMD" style={{ height: '65px', width: 'auto' }} /></div>
                        <div className="slide"><img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Micro-Star_International_logo2020.svg" alt="MSI" style={{ height: '17px', width: 'auto', filter: 'brightness(0)' }} /></div>
                        <div className="slide"><img src="https://cdn.simpleicons.org/asus/000000" alt="ASUS" style={{ height: '60px', width: 'auto' }} /></div>
                        <div className="slide"><img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Gigabyte_Technology_logo_20080107.svg" alt="Gigabyte" style={{ height: '16px', width: 'auto', filter: 'brightness(0)' }} /></div>
                        
                        {/* Duplicate for seamless loop */}
                        <div className="slide"><i className="bi bi-windows" style={{ fontSize: '1.8rem', color: '#000000' }}></i></div>
                        <div className="slide"><img src="https://cdn.simpleicons.org/nvidia/000000" alt="Nvidia" style={{ height: '30px', width: 'auto' }} /></div>
                        <div className="slide"><img src="https://cdn.simpleicons.org/intel/000000" alt="Intel" style={{ height: '35px', width: 'auto' }} /></div>
                        <div className="slide"><img src="https://cdn.simpleicons.org/amd/000000" alt="AMD" style={{ height: '65px', width: 'auto' }} /></div>
                        <div className="slide"><img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Micro-Star_International_logo2020.svg" alt="MSI" style={{ height: '17px', width: 'auto', filter: 'brightness(0)' }} /></div>
                        <div className="slide"><img src="https://cdn.simpleicons.org/asus/000000" alt="ASUS" style={{ height: '60px', width: 'auto' }} /></div>
                        <div className="slide"><img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Gigabyte_Technology_logo_20080107.svg" alt="Gigabyte" style={{ height: '16px', width: 'auto', filter: 'brightness(0)' }} /></div>

                        {/* Third Set */}
                        <div className="slide"><i className="bi bi-windows" style={{ fontSize: '1.8rem', color: '#000000' }}></i></div>
                        <div className="slide"><img src="https://cdn.simpleicons.org/nvidia/000000" alt="Nvidia" style={{ height: '30px', width: 'auto' }} /></div>
                        <div className="slide"><img src="https://cdn.simpleicons.org/intel/000000" alt="Intel" style={{ height: '35px', width: 'auto' }} /></div>
                        <div className="slide"><img src="https://cdn.simpleicons.org/amd/000000" alt="AMD" style={{ height: '65px', width: 'auto' }} /></div>
                        <div className="slide"><img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Micro-Star_International_logo2020.svg" alt="MSI" style={{ height: '17px', width: 'auto', filter: 'brightness(0)' }} /></div>
                        <div className="slide"><img src="https://cdn.simpleicons.org/asus/000000" alt="ASUS" style={{ height: '60px', width: 'auto' }} /></div>
                        <div className="slide"><img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Gigabyte_Technology_logo_20080107.svg" alt="Gigabyte" style={{ height: '16px', width: 'auto', filter: 'brightness(0)' }} /></div>
                    </div>
                </div>

                <div className="performance">
                    <h2 className="h4 fw-bold mb-3">Optimize Your System</h2>
                    <p className="text-secondary mb-4">
                        We Guaranteed This Will Make Your Windows Faster!
                    </p>
                </div>
                <div className="disclaimer mb-4">
                    <h6><i className="bi bi-speedometer2"></i> These Improvements are for <span>Gaming Performances.</span></h6>
                </div>
                
                <Link to="/fundamentals" className="btn btn-outline-danger btn-lg px-5 py-3">
                    <i className="bi bi-rocket-takeoff me-2"></i>
                    Get Started
                </Link>
                
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="info-card p-4">
                            <p className="h5"><span className="safe-text"><i className="bi bi-shield-check me-2"></i>Is it safe?</span></p>
                            <p className="text-secondary">
                                Yes, our optimization tips are safe because you won't download anything from our site. We only guide you to what you need to do!
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="info-card p-4">
                            <p className="h5"><i className="bi bi-question-circle me-2"></i>Why is it free?</p>
                            <p className="text-secondary">
                                Our mission is to help users get the best performance out of their Desktop. We believe everyone deserves fast and efficient systems without any cost.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="info-card p-4">
                            <p className="h5"><span className="work-text"><i className="bi bi-lightning-charge me-2"></i>How does it work?</span></p>
                            <p className="text-secondary">
                                Our guides are step-by-step so you can start with fundamentals and progress to advanced optimizations at your own pace.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}