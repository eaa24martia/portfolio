

import Fade from "../components/Fade";

export default function ComingSoon() {

  return (
    <Fade>
        <section className="soon-container">
            <h1>Coming Soon</h1>
            <h4>This page is under construction. Please check back later!</h4>
            <img src="./img/logo.webp" alt="Coming Soon" />

        <section className="go-back">
            <a href="/">GO BACK</a>
        </section>
     </section>
    </Fade>
  );
}