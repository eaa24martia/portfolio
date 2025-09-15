
export default function Section({ title, subtitle, tagline, image, className, Link }) {
  return (
    <section className={`section ${className}`}>
      <section>
        <h3>{subtitle}</h3>
        <h1>{title}</h1>
        <h4>{tagline}</h4>
        {Link}
      </section>
      <section>
        <img src={image} alt={title} />
      </section>
    </section>
  );
}