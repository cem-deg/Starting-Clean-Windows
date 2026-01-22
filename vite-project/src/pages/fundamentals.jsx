import React from "react";
import { NavLink } from "react-router";
import './Fundamentals.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Fundamentals() {
    return (
        <>
            <Navbar />
            <main className="fundamentals-container">
                <h2>Fundamentals of Fresh Windows for Good Performance</h2>
                <section>
                    <h3>1. BIOS Update</h3>
                    <p>Ensure your BIOS is updated to the latest version to improve hardware compatibility and performance.</p>
                </section>
                </main>
            <Footer />
        </>
    );
}