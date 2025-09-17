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
        setCurrentIndex(0);
      } catch (err) {
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
    return <div className="slide-container">Loading projects...</div>;
  }

  if (error) {
    return <div className="slide-container">Error loading projects: {error}</div>;
  }

  if (projects.length === 0) {
    return <div className="slide-container">No projects found.</div>;
  }

  return (
    <section className="slider-section">
      <h2 className="slider-h2">My Projects</h2>

      <div className="slider-background">
        <svg className="blob" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(300,300)">
            <path
              d="M120,-160C160,-140,200,-100,210,-50C220,0,200,60,170,100C140,140,100,170,50,190C0,210,-50,210,-100,190C-150,170,-200,140,-220,90C-240,40,-240,-20,-210,-70C-180,-120,-120,-160,-60,-180C0,-200,60,-180,120,-160Z"
              fill="#67c67d2d"
              opacity="1"
            >
              <animate
                attributeName="d"
                dur="5s"
                repeatCount="indefinite"
                values="
                  M120,-160C160,-140,200,-100,210,-50C220,0,200,60,170,100C140,140,100,170,50,190C0,210,-50,210,-100,190C-150,170,-200,140,-220,90C-240,40,-240,-20,-210,-70C-180,-120,-120,-160,-60,-180C0,-200,60,-180,120,-160Z;

                  M140,-180C190,-150,220,-100,220,-40C220,20,200,80,160,120C120,160,60,190,0,200C-60,210,-120,200,-160,160C-200,120,-230,60,-230,0C-230,-60,-200,-120,-160,-160C-120,-200,-60,-220,0,-220C60,-220,120,-210,140,-180Z;

                  M120,-160C160,-140,200,-100,210,-50C220,0,200,60,170,100C140,140,100,170,50,190C0,210,-50,210,-100,190C-150,170,-200,140,-220,90C-240,40,-240,-20,-210,-70C-180,-120,-120,-160,-60,-180C0,-200,60,-180,120,-160Z
                "
              />
            </path>
          </g>
        </svg>
      </div>

      <div className="slide-container">
        <div className="slider-wrapper">
          <div className="slider-content">
            <div
              className="slider-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: 'transform 0.5s ease-in-out'
              }}
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
                    <p className="description">{project.description || "No description available."}</p>
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
        </div>

        <section className="slider-controls">
          <button className="slider-btn prev-btn" onClick={prevSlide}>
            <i className="fa-solid fa-arrow-left" style={{ color: '#faf3de' }}></i>
          </button>
          <div className="slider-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <button className="slider-btn next-btn" onClick={nextSlide}>
            <i className="fa-solid fa-arrow-right" style={{ color: '#faf3de' }}></i>
          </button>
        </section>
      </div>
    </section>
  );
}
