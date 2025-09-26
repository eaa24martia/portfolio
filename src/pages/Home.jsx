import Section from "../components/Section";
import Slider from "../components/Slider";
import Competencies from "../components/Competencies";
import ScrollText from "../components/Scroll-text";
import Fade from "../components/Fade";

export default function Home() {
  return (
<main>
  <section className="hero-background-image">
    <Fade>
        <Section
        subtitle="Hej, I'm Martin"
        title="Multimedia Designer"
        tagline="I'm a Danish Multimedia Design student passionate about improving outdated digital experiences and building new ones. Specialized in UX and visual design, while sharpening my frontend programming skills."
        image="./img/about-me.webp"
        className="home-hero"
        />
    </Fade>
  </section>
    <Slider /> 
    <Competencies />
    <Section
    subtitle="Want to know more"
    title="About me?"
    image="./img/about-me.webp"
    className="more-about-me"
    link={{ text: "LEARN MORE", href: "/about" }}
    />
  <ScrollText />
<Section
  title="Let's work together!"
  image="./img/big-me.webp"
  className="work-together"
  link={{ text: "CONTACT ME", href: "/contact" }}
/>

</main>


  );
}

