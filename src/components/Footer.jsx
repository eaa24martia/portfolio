import Navigation from "./Navigation";

export default function Footer() {
  return (
        <footer>
            <section>

        
            <img src="./public/img/tvebak-green.png" alt="Logo Image" />
            <p>tvebakmartin@gmail.com</p>
            <p>+45 71 83 01 15</p>

            <section className="social-icons">
            <i className="fa-brands fa-linkedin" style={{color: "#4b694e"}}></i>
            <i className="fa-brands fa-square-instagram" style={{color: "#4b694e"}}></i>
            <i className="fa-brands fa-square-facebook" style={{color: "#4b694e"}}></i>
        </section>

            <p>© 2024 My Portfolio. All rights reserved.</p>

        </section>
            < Navigation />
        <section className="cv-section">
            <a href="cv" className="cv-header">SHOW CV</a>
        </section>
        <section>
            
        </section>
    </footer>
  );
}
