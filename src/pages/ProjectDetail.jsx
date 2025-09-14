import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";


export default function ProjectDetail() {
  const [project, setProject] = useState({}); // state to handle the data (project)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const response = await fetch('/projects.json');
        if (!response.ok) {
          throw new Error('Failed to fetch project');
        }
        const data = await response.json();
        
        // Handle both single project and array of projects
        const projects = Array.isArray(data) ? data : [data];
        const foundProject = projects.find(project => project.id === id);
        
        if (!foundProject) {
          throw new Error('Project not found');
        }
        
        setProject(foundProject);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]); // <--- "[id]" VERY IMPORTANT!!!

  function goBack() {
    navigate("/projects");
  }

  if (loading) return <div>Loading project...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section id="project-page" className="page">
      <div className="container">
        <button onClick={goBack} style={{ marginBottom: '1rem' }}>
          ← Back to Projects
        </button>
        
        <h1>{project?.title}</h1>
        
        <div className="project-details">
          <p><strong>Year:</strong> {project.year}</p>
          <p><strong>Description:</strong> {project.description}</p>
          
          {project.tags && (
            <div>
              <strong>Technologies:</strong> {project.tags.join(', ')}
            </div>
          )}
          
          {project.links && project.links.length > 0 && (
            <div style={{ marginTop: '1rem' }}>
              <strong>Links:</strong>
              <div>
                {project.links.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ marginRight: '1rem', display: 'inline-block', marginTop: '0.5rem' }}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          )}
          
          {project.image && (
            <div style={{ marginTop: '1rem' }}>
              <img 
                src={project.image} 
                alt={project.title}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
