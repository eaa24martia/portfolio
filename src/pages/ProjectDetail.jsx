import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Detail from "../components/Detail.jsx";
import Overview from "../components/Overview.jsx";
import Fade from "../components/Fade.jsx";

export default function ProjectDetail() {
  const [project, setProject] = useState({});
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

        const projects = Array.isArray(data) ? data : [data];
        // Ensure id comparison works for both string and number
        const foundProject = projects.find(project => String(project.id) === id);

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
  }, [id]);

  function goBack() {
    navigate("/projects");
  }

  if (loading) return <div>Loading project...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main>
      <Fade>
      <section className="detail-image">
        <img src={project.image} alt={project.title} />
        <a href={project.links[0].url} target="_blank" rel="noopener noreferrer" className="project-link">
          {project.links[0].text}
        </a>
      </section>
      </Fade>

      <section>
        <Detail project={project.sections?.main || {}} />
      </section>

      <section>
        <Overview project={project} />
      </section>

      <section>

      <Detail project={project.sections?.discover || {}} />
      <Detail project={project.sections?.define || {}} />
      <Detail project={project.sections?.develop || {}} />
      <Detail project={project.sections?.deliver || {}} />
      </section>
    </main>
  );
}
