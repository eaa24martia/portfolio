
export default function Section({ title, subtitle, tagline, image, className }) {
  return (
    <section className={`section ${className}`}>
      <section>
        <h4>{subtitle}</h4>
        <h1>{title}</h1>
        <h4>{tagline}</h4>
      </section>

      <section>
        <img src={image} alt={title} />
      </section>
    </section>
  );
}