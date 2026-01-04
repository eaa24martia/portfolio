import Fade from "../components/Fade";

export default function Praktikblog() {
  // Store all your daily entries here - just add new objects to this array
  const blogEntries = [
    {
      day: 1,
      date: "6. januar 2026",
      spontanlog: [
        //"Jeg følte mig velkommen og fik hurtigt en forståelse for projektets mål. Det var spændende at se, hvordan teamet arbejder sammen, og jeg ser frem til at bidrage.",
        //"Det var interessant at observere arbejdskulturen. Jeg bemærkede, at kommunikationen var meget åben og direkte.",
        //"Jeg glæder mig til at lære mere i de kommende dage."
      ],
      // Use array for multiple paragraphs with space between them
      refleksionslog: [
        //"Jeg følte mig velkommen og fik hurtigt en forståelse for projektets mål. Det var spændende at se, hvordan teamet arbejder sammen, og jeg ser frem til at bidrage.",
        //"Det var interessant at observere arbejdskulturen. Jeg bemærkede, at kommunikationen var meget åben og direkte.",
        //"Jeg glæder mig til at lære mere i de kommende dage."
      ]
    },

      {
      day: 1,
      date: "7. januar 2026",
      spontanlog: [
        //"Jeg følte mig velkommen og fik hurtigt en forståelse for projektets mål. Det var spændende at se, hvordan teamet arbejder sammen, og jeg ser frem til at bidrage.",
        //"Det var interessant at observere arbejdskulturen. Jeg bemærkede, at kommunikationen var meget åben og direkte.",
        //"Jeg glæder mig til at lære mere i de kommende dage."
      ],
      // Use array for multiple paragraphs with space between them
      refleksionslog: [
        //"Jeg følte mig velkommen og fik hurtigt en forståelse for projektets mål. Det var spændende at se, hvordan teamet arbejder sammen, og jeg ser frem til at bidrage.",
        //"Det var interessant at observere arbejdskulturen. Jeg bemærkede, at kommunikationen var meget åben og direkte.",
        //"Jeg glæder mig til at lære mere i de kommende dage."
      ]
    },
   
    // Add more days here as needed
  ];

  return (
    <Fade>
      <section className="praktikblog-container">
        <h1>Praktikblog</h1>
        <p>
          Denne blog bruges som refleksions- og logbog i forbindelse med mit praktikophold.
        </p>
        <hr />
        
        {/* Automatically render all blog entries */}
        {blogEntries.map((entry) => (
          <article key={entry.day}>
            <h2>Dag {entry.day} – {entry.date}</h2>
            <table className="blog-table">
              <thead>
                <tr>
                  <th scope="col">Spontanlog – Hvad der skete</th>
                  <th scope="col">Refleksionslog – Hvad jeg tænker om det</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* Left column: paragraphs from array */}
                  <td data-label="Spontanlog – hvad der skete">
                    {entry.spontanlog.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </td>
                  {/* Right column: reflective text */}
                  <td data-label="Refleksionslog – hvad jeg tænker om det">
                    {/* Support both string and array formats */}
                    {Array.isArray(entry.refleksionslog) ? (
                      entry.refleksionslog.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))
                    ) : (
                      <p>{entry.refleksionslog}</p>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        ))}
        
      </section>
    </Fade>
  );
}