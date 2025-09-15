
export default function Section({ title, subtitle, tagline, image, className, link }) {
  return (
    <section className={`section ${className}`}>
      <section>
        <h3>{subtitle}</h3>
        <h1>{title}</h1>
        <h4>{tagline}</h4>
        {link && (
          <a href={link.href} className="section-link">
            {link.text}
          </a>
        )}
      </section>
      <section>
        <img src={image} alt={title} />
      </section>
    </section>
  );
}