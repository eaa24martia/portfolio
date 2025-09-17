import Fade from "./Fade.jsx";

export default function Overview({ project }) {
  if (!project) return null;
  
  return (
    <Fade>
    <section className="overview-section">
      <h2>Project Overview</h2>
      <div className="overview-container">
        <div className="overview-item">
          <h3>Client</h3>
          <p>{project.client}</p>
        </div>
        <div className="overview-item">
          <h3>Team</h3>
          <p>{project.team}</p>
        </div>
        <div className="overview-item">
          <h3>Time</h3>
          <p>{project.time}</p>
        </div>
        <div className="overview-item">
          <h3>Focus</h3>
          <ul>
            {project.focus && project.focus.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    </Fade>
  );
}