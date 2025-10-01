import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import { NavLink } from 'react-router-dom';
import Fade from './Fade.jsx';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';

import { EffectCoverflow, Pagination, Navigation, Mousewheel } from 'swiper/modules';

export default function SwiperComponent() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch('./projects.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

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
          <Swiper
            effect={'coverflow'}
            grabCursor={false}
            centeredSlides={true}
            loop={false}
            slidesPerView={3}
            spaceBetween={-50}
            speed={800}
            mousewheel={{
              enabled: true,
              forceToAxis: true,
              sensitivity: 1,
              releaseOnEdges: true,
            }}
            coverflowEffect={{ 
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            navigation={false}
            modules={[EffectCoverflow, Pagination, Navigation, Mousewheel]}
            className="swiper_container"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="card">
                  <div className="image-content">
                    <div className="card-image">
                      <img
                        src={project.image?.startsWith('/') 
                          ? (import.meta.env.DEV ? project.image.replace('/') : project.image)
                          : project.image || "https://tinypic.host/images/2022/12/19/img_avatar.png"}
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
                        <NavLink to={`/projects/${project.id}`} className="project-link" style={{ marginRight: '1rem' }}>
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
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="slider-controler">
            <button 
              className="slider-arrow prev-arrow" 
              onClick={() => {
                if (swiperRef.current) {
                  swiperRef.current.slidePrev();
                }
              }}
              aria-label="Previous slide"
            >
              <i className="fas fa-arrow-left"></i>
            </button>
            <div className="swiper-pagination"></div>
            <button 
              className="slider-arrow next-arrow" 
              onClick={() => {
                if (swiperRef.current) {
                  swiperRef.current.slideNext();
                }
              }}
              aria-label="Next slide"
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </Fade>
    </section>
  );
}