import Section from "../components/Section";
import Slider from "../components/Slider";
import Competencies from "../components/Competencies";

export default function Home() {
  return (
<main>
  <Section
  subtitle="Hej, I'm Martin"
  title="Multimedia Designer"
  tagline="A danish Multimedia Design student passionate about improving outdated digital experiences and building new ones. Specialized in UX and visual design, while sharpening my frontend programming skills."
  image="./public/img/logo.png"
  className="home-hero"
/>
  <Slider /> 
  <Competencies />
   <Section
  subtitle="Hej, I'm Martin"
  title="Multimedia Designer"
  tagline="A danish Multimedia Design student passionate about improving outdated digital experiences and building new ones. Specialized in UX and visual design, while sharpening my frontend programming skills."
  image="./public/img/logo.png"
  className="home-hero"
/>
</main>


  );
}

