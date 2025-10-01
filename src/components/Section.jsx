import Fade from "./Fade.jsx";

export default function Section({ title, subtitle, tagline, tagline2, tagline3, image, imageSmall, className, link, textClassName}) {
  return (
       <section className={`section ${className}`}>
      <Fade>
         <section className={textClassName || ""}>
          {subtitle && <h3>{subtitle}</h3>}
          {title && <h1>{title}</h1>}
          {tagline && <h4>{tagline}</h4>}
          {tagline2 && <h4>{tagline2}</h4>}
          {tagline3 && <h4>{tagline3}</h4>}
          {link && (
            <a href={link.href} className="project-link">
              {link.text}
            </a>
          )}
        </section>
      </Fade>
      <Fade>
        <section>
          <picture>
            {imageSmall && (
              <source media="(max-width: 1282px)" srcSet={imageSmall} />
            )}
            <img src={image} alt={title || subtitle} />
          </picture>
        </section>
      </Fade>
    </section>
  );
}