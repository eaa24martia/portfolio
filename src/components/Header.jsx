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
          <i className="fa-brands fa-linkedin" style={{ color: "#4b694e" }}></i>
          <i className="fa-brands fa-square-instagram" style={{ color: "#4b694e" }}></i>
          <i className="fa-brands fa-square-facebook" style={{ color: "#4b694e" }}></i>
        </section>
        </Fade>
        <img
          src="/img/tvebak-green.png"
          alt="Portfolio Logo"
          className="header-logo"
        />
      </section>
    </header>
  
  );
}