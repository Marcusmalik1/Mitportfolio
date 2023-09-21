



import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/MMlogo.png";

export default function Navigation() {

  const location = useLocation();
  const allowedPaths = ["/about", "/portfolio", "/contact"];
  const shouldShowNavigation = allowedPaths.includes(location.pathname);

  if (!shouldShowNavigation) {
    return null;
  }

  return (
    <nav className="navstyle">
      <div className="nav-container">
        <div className="logo">
          <NavLink to="/">
            <img className="mmlogo" src={logo} alt="Image of logo" />
          </NavLink>
        </div>
        <div className="menu">
          <NavLink to="/about">Om Mig</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/contact">Kontakt</NavLink>
        </div>
      </div>
    </nav>
  );
}

