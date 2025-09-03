
import { useState, useEffect } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('/projects.json');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        // If projects.json contains a single project object, wrap it in an array
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
    <div>
      <h1>Projects</h1>
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <div>
          {projects.map((project) => (
            <div key={project.id} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
              <h2>{project.title}</h2>
              <p><strong>Year:</strong> {project.year}</p>
              <p>{project.description}</p>
              <div>
                <strong>Tags:</strong> {project.tags?.join(', ')}
              </div>
              {project.links && (
                <div style={{ marginTop: '1rem' }}>
                  {project.links.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem' }}>
                      {link.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
