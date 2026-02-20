import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
            <div className="container">
        <NavLink className="navbar-brand" to="/">EFFW</NavLink>
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                to="/" 
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                to="/fundamentals"
              >
                Fundamentals
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

        </nav>
    )
}