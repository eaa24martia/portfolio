import React, { useEffect } from 'react';
import Fade from './Fade.jsx';

export default function Top() {
  useEffect(() => {
    let animationId;
    let lastScrollProgress = 0;
    
    const checkScroll = () => {
      const aboutSection = document.querySelector('.about-me-top');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const scrollProgress = Math.max(0, -rect.top);
        
        if (scrollProgress !== lastScrollProgress) {
          const corners = document.querySelectorAll('.corner');
          corners.forEach((corner, index) => {

            const direction = (index === 0 || index === 1) ? -1 : 1;
            const moveAmount = scrollProgress * direction * 0.3;
            corner.style.setProperty('transform', `translateX(${moveAmount}px)`, 'important');
          });
          
          lastScrollProgress = scrollProgress;
        }
      }
      
      animationId = requestAnimationFrame(checkScroll);
    };
    
    checkScroll();
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="about-me-top">
      <img src="./img/about-me.webp" alt="" className="about-me-bg" />

      <img src="./img/parralax1.webp" alt="" className="corner corner-1" />
      <img src="./img/parralax2.webp" alt="" className="corner corner-2" />
      <img src="./img/parralax3.webp" alt="" className="corner corner-3" />
      <img src="./img/parralax4.webp" alt="" className="corner corner-4" />

        <Fade>
      <section className="about-me-text">
        <h1>Yep, that's me</h1>
        <i className="fa-solid fa-arrow-down" style={{ color: '#4B694E' }}></i>
      </section>
      </Fade>
    </section>
  );
}