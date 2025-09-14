import { useState, useEffect } from 'react';

export default function Slider() {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch('/projects.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error('Error loading projects:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  if (loading) {
    return (
      <section>
        <div className="slide-container">
          <div className="loading">Loading projects...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <div className="slide-container">
          <div className="error">Error loading projects: {error}</div>
        </div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section>
        <div className="slide-container">
          <div className="no-projects">No projects found.</div>
        </div>
      </section>
    );
  }

  return (
    <section className="slider-section">
      <h2 className="slider-h2">My Projects</h2>
      <div className="slide-container">
        <div className="slider-wrapper">
          <button className="slider-btn prev-btn" onClick={prevSlide}>
            <i className="fa-solid fa-arrow-left" style={{ color: '#faf3de' }}></i>
          </button>
          <div className="slider-content">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="card">
                  <div className="image-content">
                    <div className="card-image">
                      <img
                        src={project.image || "https://tinypic.host/images/2022/12/19/img_avatar.png"}
                        alt={project.title || "Project image"}
                        className="card-img"
                      />
                    </div>
                  </div>
                  <div className="card-content">
                    <h2 className="name">{project.title || "Untitled Project"}</h2>
                    <p className="description">
                      {project.description || "No description available."}
                    </p>
                    <div className="project-tags">
                      {project.tags && project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="tag">{tag}</span>
                      ))}
                    </div>
                    {project.links && project.links[0] && (
                      <a
                        href={project.links[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        {project.links[0].text}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="slider-btn next-btn" onClick={nextSlide}>
            <i className="fa-solid fa-arrow-right" style={{ color: '#faf3de' }}></i>
          </button>
        </div>
        <div className="slider-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}