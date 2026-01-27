import React, { useState } from "react";
import './Fundamentals.css';

function AccordionItem({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            className={`accordion-item ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="accordion-header">
                <h3>{title}</h3>
                <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
            </div>
            {isOpen && (
                <div className="accordion-content" onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            )}
        </div>
    );
}

export default function Fundamentals() {
    return (
        <div className="fundamentals-wrapper">
            <main className="fundamentals-container">
                <h2>Fundamentals of Fresh Windows for Good Performance</h2>
                
                <AccordionItem title="1. BIOS Update">
                    <ol className="steps-list">
                        <li>Search your motherboard on Web Browser. </li>
                        <li>Make sure the Website you go to is <strong>Official Website</strong> of the brand you have.</li>
                        <li>Go to the Support or Downloads section of the website.</li>
                        <li>Look for the BIOS section.</li>
                        <li>Download the latest BIOS version available for your motherboard.</li>
                    </ol>
                </AccordionItem>
                <AccordionItem title="2. Chipset Drivers">
                    <ol className="steps-list">
                        <li>Search your motherboard on Web Browser. </li>
                        <li>Visit the official website of your motherboard manufacturer.</li>
                        <li>Go to the Support or Downloads section of the website.</li>
                        <li>You should download everything on that page. It will make your motherboard work properly.</li>
                        <li>Setup the downloaded drivers one by one.</li>
                    </ol>
                </AccordionItem>
                <AccordionItem title="3. GPU Drivers">
                    <ol className="steps-list">
                        <li>Identify your GPU model (NVIDIA, AMD, or Intel).</li>
                        <li>Visit the official website of your GPU manufacturer:
                            <ul>
                                <li>NVIDIA: <a href="https://www.nvidia.com/Download/index.aspx" target="_blank" rel="noopener noreferrer"><i class="bi bi-nvidia"></i></a></li>
                                <li>AMD: <a href="https://www.amd.com/en/support" target="_blank" rel="noopener noreferrer"><i class="bi bi-amd"></i></a></li>
                                <li>Intel: <a href="https://downloadcenter.intel.com/product/80939/Graphics" target="_blank" rel="noopener noreferrer">Intel Driver Download</a></li>
                            </ul>
                        </li>
                        <li>Use the search tool on the website to find the latest drivers for your specific GPU model.</li>
                        <li>Download and install the drivers by following the on-screen instructions.</li>
                    </ol>
                </AccordionItem>

                <AccordionItem title="4. Windows Update">
                    <ol className="steps-list">
                        <li>Click  <i class="bi bi-windows"></i>  icon and go to Settings.</li>
                        <li>Go to Update & Security.</li>
                        <li>Click on Windows Update in the left sidebar.</li>
                        <li>Click the "Check for updates" button.</li>
                        <li>If updates are available, click "Download and install" to begin the update process.</li>
                        <li>Restart your computer if prompted to complete the installation of updates.</li>
                    </ol>
                </AccordionItem>

                <AccordionItem title="5. Disable Startup Programs">
                    <ol className="steps-list">
                        <li>Right click on the taskbar and select Task Manager.</li>
                        <li>Go to the Startup tab.</li>
                        <li>Disable unnecessary programs that start with Windows.</li>
                    </ol>
                </AccordionItem>

                <AccordionItem title="6. Power Plan Settings">
                    <ol className="steps-list">
                        <li>Click  <i class="bi bi-search"></i>  and type "Select Power Plan".</li>
                        <li>Under "Power mode," select "Best performance" from the dropdown menu.</li>
                    </ol>
                </AccordionItem>

                <AccordionItem title="7. SSD Optimization">
                    <p>Buraya adımları yazabilirsin...</p>
                </AccordionItem>

                <AccordionItem title="8. Visual Effects">
                    <p>Buraya adımları yazabilirsin...</p>
                </AccordionItem>
            </main>
        </div>
    );
}