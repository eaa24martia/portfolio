import Fade from "./Fade.jsx";

export default function Section({ title, subtitle, tagline, image, className, Link }) {
  return (
    <section className={`section ${className}`}>
      <Fade>
        <section>
          <h3>{subtitle}</h3>
          <h1>{title}</h1>
          <h4>{tagline}</h4>
          {Link}
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