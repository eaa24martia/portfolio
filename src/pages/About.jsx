import Top from "../components/Top";
import Section from "../components/Section";
import Work from "../components/Work";

export default function About() {
  return (
   <section>
     <Top />
      <Section
       title="Who am I?"
       tagline="A danish Multimedia Design student passionate about improving outdated digital experiences and building new ones. Specialized in UX and visual design, while sharpening my frontend programming skills."
       image="https://placehold.co/600x400/faf3de/4b694e?text=Placeholder+Image"
       className="who-am-i"
     />
      <Work />
   </section>
  );
}