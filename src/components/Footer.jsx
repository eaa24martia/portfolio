
import { NavLink } from "react-router-dom";
import Fade from "./Fade.jsx";

export default function Footer() {
  const scrollToHeader = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);
  };

return (
 <Fade>
    <footer>
        <section className="footer-contact">
            <img src={import.meta.env.DEV ? "/img/tvebak-green.webp" : "/portfolio/img/tvebak-green.webp"} alt="Logo Image" />
            <p>tvebakmartin@gmail.com</p>
            <p>+45 60 69 25 05</p>

            <section className="social-icons-a">
                <a
                    href="https://www.linkedin.com/in/tvebak"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <i className="fa-brands fa-linkedin" style={{ color: "#4b694e" }}></i>
                </a>
                <a
                    href="https://www.instagram.com/your-instagram-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <i className="fa-brands fa-square-instagram" style={{ color: "#4b694e" }}></i>
                </a>
                <a
                    href="https://www.facebook.com/your-facebook-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                >
                    <i className="fa-brands fa-square-facebook" style={{ color: "#4b694e" }}></i>
                </a>
            </section>

            <section>
                <p>© 2025 Martin Andersen. All rights reserved.</p>
            </section>
        </section>

        <section className="footer-navigation">
            <section className="nav-section-footer">
                <h2>Navigation</h2>
                <ul>
                    <li className="nav-item">
                        <NavLink to="/" onClick={scrollToHeader}> HOME</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" onClick={scrollToHeader}>PROJECTS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" onClick={scrollToHeader}>ABOUT</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" onClick={scrollToHeader}>CONTACT</NavLink>
                    </li>
                </ul>

                    <div className="mobile-cv-footer">
                        <a href={`${import.meta.env.BASE_URL}cv.pdf`} target="_blank" rel="noopener noreferrer">
                        SHOW CV
                        </a>
                    </div>
            </section>
        </section>
    </footer>
 </Fade>
);
}
