import Top from "../components/Top";
import Section from "../components/Section";
import Work from "../components/Work";
import Art from "../components/Art";

export default function About() {
  return (
   <section>
     <Top />
      <Section
       title="Who am I?"
       tagline="I’m Martin Andersen, a 21-year-old Multimedia Design student from Denmark, currently studying at Business Academy Aarhus. I’ve always loved being creative, which is why I chose Multimedia Design in the first place."
       tagline2="I’m especially passionate about UX & Design, as it allows me to craft digital experiences where creativity meets functionality. Along the way, I also discovered an interest in programming, which allows me to bring my designs to life."
       tagline3="I also like a good team where you can spark new ideas together and even come with different perspectives. This motivates me and inspires me to push even further with the next project."
       image="https://placehold.co/600x400/faf3de/4b694e?text=Placeholder+Image"
       className="who-am-i"
     />
      <Work />
      <Section
       title="Fun facts"
       tagline="I create under the alias “Tvebak”. The name goes back to my childhood, when my parents used to call me “Tvebak”, which is the Danish word for crispy, double-baked bun. It stuck with me, and now I use it as my creative identity, which you can see in my logo. "
       tagline2="I’m currently learning Dutch and exploring Dutch culture, which is one of the reasons I’m excited about internship opportunities in the Netherlands."
       image="https://placehold.co/600x400/faf3de/4b694e?text=Placeholder+Image"
       className="fun-facts"
     />
      <Art />
   </section>
  );
}