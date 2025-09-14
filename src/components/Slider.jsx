import { useState, useEffect, useRef } from 'react';

export default function Slider() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const swiperRef = useRef(null);

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

  // Initialize Swiper after projects are loaded
  useEffect(() => {
    if (projects.length > 0 && window.Swiper) {
      const swiper = new window.Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlide: true,
        fade: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          520: {
            slidesPerView: 2,
          },
          950: {
            slidesPerView: 3,
          },
        },
      });

      swiperRef.current = swiper;

      return () => {
        if (swiperRef.current) {
          swiperRef.current.destroy();
        }
      };
    }
  }, [projects]);

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

  return (
    <section>
      <div className="slide-container swiper">
        <div className="slide-content">
          <div className="card-wrapper swiper-wrapper">
            {projects.map((project, index) => (
              <div key={index} className="card swiper-slide">
                <div className="image-content">
                  <span className="overlay"></span>
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
                  <button className="button">View More</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="swiper-button-next swiper-navBtn"></div>
        <div className="swiper-button-prev swiper-navBtn"></div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}