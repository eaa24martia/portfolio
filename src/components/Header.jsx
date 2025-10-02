import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Fade from "./Fade.jsx";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {

    const setupTrigger = () => {
      const trigger = document.createElement('div');
      trigger.style.width = '100%';
      trigger.style.pointerEvents = 'none';
      trigger.id = 'scroll-trigger';
      
      document.body.insertBefore(trigger, document.body.firstChild);

      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          
          setIsVisible(entry.isIntersecting);
        },
        {
          threshold: 0
        }
      );

      observer.observe(trigger);

      return () => {
        observer.disconnect();
        if (trigger && trigger.parentNode) {
          trigger.parentNode.removeChild(trigger);
        }
      };
    };

    const timer = setTimeout(setupTrigger, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    
    <header className={`header-container ${isVisible ? '' : 'hidden'}`}>
      <Navigation />
      <section className="header">
        <Fade>
        <section className="social-icons">
          <a
                    href="https://www.linkedin.com/in/tvebak"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <i className="fa-brands fa-linkedin" style={{ color: "#4b694e" }}></i>
                </a>
        </section>

        
        </Fade>
        <img
          src="/img/tvebak-green.webp"
          alt="Portfolio Logo"
          className="header-logo"
        />

        <div className="mobile-cv2-container">
          <div className="mobile-cv2">
    <a href="./img/MartinAndersenCV.pdf" target="_blank" rel="noopener noreferrer">
      SHOW CV
    </a>
        </div>
  </div>
      </section>

      
    </header>
  
  );
}