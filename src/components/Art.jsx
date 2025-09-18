import Fade from "./Fade.jsx";

export default function Art () {
  
  return (
    <Fade>
<section className="art-section-container">
        <h2>My digital art</h2>

        <section className="art-sections">

     <Fade>
   <section className="art-section">
        <section>
            <img src="/img/blub.webp" alt="Digital Art 1" />
        </section>
    </section>
    </Fade>

  <Fade>
     <section className="art-section2">
        <section>
            <img src="/img/jinx-watercolor.webp" alt="Digital Art 1" />
        </section>
    </section>
    </Fade>

    <Fade>
     <section className="art-section3">
        <section>
            <img src="/img/lifeweaver.webp" alt="Digital Art 1" />
        </section>
    </section>
    </Fade>

    <Fade>
     <section className="art-section4">
        <section>
            <img src="/img/avatar.webp" alt="Digital Art 1" />
        </section>
    </section>
    </Fade>

        </section>

</section>
</Fade>
  );
}