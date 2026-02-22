import { NavLink } from "react-router";
import Logo from "./Logo";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
            <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
            <Logo style={{ width: '32px', height: '32px', filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.5))' }} />
            <span>EFFW</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                to="/" 
                end
              >
                Home
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                to="/shortcut-bios"
              >
                BIOS Update
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                to="/shortcut-boot"
              >
                CPU Boot
              </NavLink>
            </li>
            <li className="nav-item d-flex align-items-center">
              <NavLink 
                className="btn btn-outline-danger ms-2 px-3 py-1 d-flex align-items-center gap-1"
                to="/app-center"
                style={{ fontSize: '0.9rem' }}
              >
                <i className="bi bi-grid-fill"></i>
                Apps
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

        </nav>
    )
}