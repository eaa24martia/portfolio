import { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import Fade from "../components/Fade";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('./projects.json');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(Array.isArray(data) ? data : [data]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div>Loading projects...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section id="projects-page">
      <Fade>
      <h1>Projects</h1>
      </Fade>
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <Fade>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-container">
              {project.image && (
                <img src={project.image} alt={project.title} className="project-image" />
              )}
              <section className="project-info">
                <h2>{project.title}</h2>
                <p><strong>Year:</strong> {project.year}</p>
                <p>{project.description}</p>
                <div>
                  <strong>Tags:</strong> {project.tags?.join(', ')}
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <NavLink to={`/projects/${project.id}`} className="project-link" target="_blank" style={{ marginRight: '1rem' }}>
                    DETAILS
                  </NavLink>
                  {project.links && project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginRight: '1rem' }}
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </section>
            </div>
          ))}
        </div>
        </Fade>
      )}
    </section>
  );
}
