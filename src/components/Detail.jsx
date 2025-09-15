

export default function Detail({ project }) {
  if (!project) return null;
  
  return (
    <section className="detail-section">
      <section>
        <h1>{project.title}</h1>
        <h4>{project.description}</h4>
      </section>
      <section>
        <img src={project.image} alt={project.title} />
      </section>
    </section>
  );
}