import Section from "../components/Section";
import Slider from "../components/Slider";
import Competencies from "../components/Competencies";
import ScrollText from "../components/Scroll-text";
import Footer from "../components/Footer";

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
  subtitle="Want to know more"
  title="About me?"
  image="./public/img/logo.png"
  className="more-about-me"
  link={{ text: "Learn More", href: "/about" }}
/>
  <ScrollText />
<Section
  title="Let's work together!"
  image="./public/img/logo.png"
  className="work-together"
  link={{ text: "Learn More", href: "/contact" }}
/>

</main>


  );
}

