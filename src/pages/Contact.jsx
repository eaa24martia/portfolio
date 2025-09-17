import Fade from "../components/Fade.jsx";

export default function Contact() {
  return (
    <section className="contact-page-container">
      {/* decorative rotating image (keeps it simple to debug) */}
      <div className="rotator-wrap" aria-hidden="true">
        <img className="rotator-img" src="/img/contact-background.png" alt="" />
      </div>

    <Fade>
      <div className="contact-page-content">
        <h1>Let's talk</h1>
        <h2>tvebakmartin@gmail.com</h2>
        <h2>+45 60 69 25 05</h2>

        <img src="/img/about-me.png" alt="Image of myself" />

        <div className="download-cv">
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            DOWNLOAD CV
          </a>
        </div>
        </div>
        </Fade>

      <section className="social-icons-a">
        <i className="fa-brands fa-linkedin" style={{color: "#4b694e"}}></i>
        <i className="fa-brands fa-square-instagram" style={{color: "#4b694e"}}></i>
        <i className="fa-brands fa-square-facebook" style={{color: "#4b694e"}}></i>
      </section>
    </section>
  );
}