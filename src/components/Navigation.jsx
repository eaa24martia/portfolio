import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    console.log("Hamburger clicked!", isActive); // Debug line
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

    return(
      <section>

      
<nav className={`navigation ${isActive ? 'active' : ''}`}>
  <li className="nav-item">
    <NavLink to="/" end onClick={closeMenu}> HOME</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/projects" onClick={closeMenu}>PROJECTS</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/about" onClick={closeMenu}>ABOUT</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/contact" onClick={closeMenu}>CONTACT</NavLink>
  </li>
  
  {/* Mobile social icons */}
  <div className="mobile-social-icons">
    <i className="fab fa-linkedin" style={{color: '#FAF3DE'}}></i>
    <i className="fab fa-instagram" style={{color: '#FAF3DE'}}></i>
    <i className="fab fa-github" style={{color: '#FAF3DE'}}></i>
  </div>
  
  {/* Mobile CV button */}
  <div className="mobile-cv">
    <a href="cv" className="cv-header">SHOW CV</a>
  </div>
</nav>

<div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
</div>

</section>


    );
} 


