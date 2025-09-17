
import Fade from "./Fade.jsx";

export default function Detail({ project }) {
  if (!project) return null;
  
  return (
    <Fade>
    <section className={`section ${project.className}`}>
      <section>
        <h1>{project.title}</h1>
        <h4>{project.description}</h4>
      </section>
      <section>
        <img src={project.image} alt={project.title} />
      </section>
    </section>
    </Fade>
  );
}