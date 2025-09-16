import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {

  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navigation");

    if (hamburger && navMenu) {
      const handleClick = () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
      };
      hamburger.addEventListener("click", handleClick);

      return () => {
        hamburger.removeEventListener("click", handleClick);
      };
    }
  }, []);

    return(
      <section>

      
<nav className="navigation">
  <li className="nav-item">
    <NavLink to="/" end> HOME</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/projects">PROJECTS</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/about">ABOUT</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/contact">CONTACT</NavLink>
  </li>
  
  {/* Mobile social icons */}
  <div className="mobile-social-icons">
    <i className="fab fa-linkedin" style={{ color: '#FAF3DE' }}></i>
    <i className="fab fa-github" style={{ color: '#FAF3DE' }}></i>
    <i className="fab fa-instagram" style={{ color: '#FAF3DE' }}></i>
  </div>

  {/* Mobile CV button */}
  <div className="mobile-cv">
    <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
      DOWNLOAD CV
    </a>
  </div>
</nav>

<div className="hamburger">
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
</div>

</section>


    );
} 


