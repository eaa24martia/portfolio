import Fade from "./Fade.jsx";

export default function Section({ title, subtitle, tagline, image, className, link }) {
  return (
    <section className={`section ${className}`}>
      <Fade>
        <section>
          <h3>{subtitle}</h3>
          <h1>{title}</h1>
          <h4>{tagline}</h4>
          {link && (
            <a href={link.href} className="project-link">
              {link.text}
            </a>
          )}
        </section>
      </Fade>
      <Fade>
        <section>
          <img src={image} alt={title} />
        </section>
      </Fade>
    </section>
  );
}