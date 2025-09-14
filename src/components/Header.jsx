import Navigation from "./Navigation";

export default function Header() {
 return (
  <>
  <header className="header-container">
    <Navigation />
    <section className="header">
      <section className="social-icons">
        <i className="fa-brands fa-linkedin" style={{color: "#4b694e"}}></i>
        <i className="fa-brands fa-square-instagram" style={{color: "#4b694e"}}></i>
        <i className="fa-brands fa-square-facebook" style={{color: "#4b694e"}}></i>
      </section>
      <img src="/img/tvebak-green.png" alt="Portfolio Logo" className="header-logo" />
      <section className="cv-section">
        <a href="cv" className="cv-header">SHOW CV</a>
      </section>
    </section>
  </header>
  </>
);
}