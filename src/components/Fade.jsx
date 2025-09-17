
import { useEffect, useRef, useState } from "react";

export default function FadeInSection({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); // kun animere én gang
        }
      },
      { threshold: 0.2 } // 20% af elementet skal være synligt
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-section ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
}