import { useState, useEffect } from 'react';
import Fade from './Fade.jsx';
import { NavLink } from 'react-router-dom';

// Importere useState og useEffect fra React
// Importere NavLink fra react-router for navigation
// Importere Fade komponenten for fade-in effekt

export default function Slider() { //Definerer en React komponent med navnet Slider

  //Opretter tilstande til at håndtere projekter, nuværende indeks, indlæsningstilstand og fejltilstand med Reats useState hook
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Når slider-komponenten loades første gang, hentes projektdata fra en JSON-fil ved hjælp af useEffect hook
  useEffect(() => {
    const loadProjects = async () => { // Asynkron funktion til at hente projektdata
      try { // Forsøger at hente data
        const response = await fetch('/projects.json'); // Henter data fra projects.json
        if (!response.ok) { // Hvis svaret ikke er ok, kastes en fejl
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Hvis data hentes korrekt, opdateres projekttilstanden og det nuværende indeks sættes til 0
        const data = await response.json();
        setProjects(data); // Antager at data er et array af projekter
        setCurrentIndex(0); // Starter slideren ved det første projekt
      } catch (err) { // Hvis der opstår en fejl under hentning, opdateres fejltilstanden
        setError(err.message); 
      } finally { // Uanset om hentningen lykkes eller fejler, sættes indlæsningstilstanden til false
        setLoading(false); // Indlæsning er færdig
      }
    };

    loadProjects(); // Kalder funktionen til at hente projekter, når komponenten loades
  }, []);

  const nextSlide = () => { // Funktion til at gå til næste slide
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => { // Funktion til at gå til forrige slide
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length); // Sikrer at indekset forbliver inden for grænserne
  };

  if (loading) {
    return <div className="slide-container">Loading projects...</div>; // Viser en indlæsningsmeddelelse, mens projekterne hentes
  }

  if (error) {
    return <div className="slide-container">Error loading projects: {error}</div>; // Viser en fejlmeddelelse, hvis der opstår en fejl under hentning
  }

  if (projects.length === 0) {
    return <div className="slide-container">No projects found.</div>; // Viser en besked, hvis der ikke findes nogen projekter
  }

  return (
    <section className="slider-section">
        <Fade>
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
                      <div>
                        <NavLink to={`/projects/${project.id}`} className="project-link" target="_blank" style={{ marginRight: '1rem' }}>
                          DETAILS
                        </NavLink>
                        <a
                          href={project.links[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          style={{ marginRight: '1rem' }}
                        >
                          {project.links[0].text}
                        </a>
                      </div>
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
      </Fade>
    </section>
  );
}
