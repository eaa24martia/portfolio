import { useEffect } from "react";
import { NavLink } from "react-router";
import Fade from "./Fade.jsx";

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

      <Fade>
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
     <a
                    href="https://www.linkedin.com/in/tvebak"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <i className="fa-brands fa-linkedin" style={{ color: "#faf3de" }}></i>
                </a>
                <a
                    href="/portfolio/ComingSoon"
                    target=""
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <i className="fa-brands fa-square-instagram" style={{ color: "#faf3de" }}></i>
                </a>
                <a
                    href="/portfolio/ComingSoon"
                    target=""
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                >
                    <i className="fa-brands fa-square-facebook" style={{ color: "#faf3de" }}></i>
                </a>
  </div>

  {/* Mobile CV button */}
  <div className="mobile-cv">
    <a href="/portfolio/ComingSoon" target="" rel="noopener noreferrer">
      SHOW CV
    </a>
  </div>
</nav>

<div className="hamburger">
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
</div>
</Fade>

</section>


    );
} 


