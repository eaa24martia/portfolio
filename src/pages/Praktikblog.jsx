import Fade from "../components/Fade";

export default function Praktikblog() {
  // Store all your daily entries here - just add new objects to this array
  const blogEntries = [
    {
      day: 1,
      date: "6. januar 2026",
      spontanlog: [
        "Hej, ",
        "Så er den hårdeste dag overstået. En nervepirrende dag fyldt med nervøsitet og sommerfugle i maven. Dog har det alligevel været en god dag og jeg er SÅ stolt af mig selv.",
        "Jeg ankommer til praktikstedet kl. 9.30. Jeg er meget nervøs og kulden udenfor hjælper ikke ligefrem, men det sker. Jeg træder ind i det lille rum og bliver mødt af mennesker jeg aldrig har set. Men jeg får heldigvis øjenkontakt med Noa, som er min kontaktperson i Rotterzwam. Det er en lille virksomhed, men en hyggelig en. Jeg er glad for, at jeg har fået muligheden for at være med i et cirkulært firma som Rotterzwam. ",
        "Til at starte med får jeg en lille præsentation af hele holdet. Sjovt nok, så er de alle samlet i dag. Jeg bliver præsenteret for alle, men jeg må indrømme at jeg er forvirret over alle de navne, men det kommer nok. Herefter snakker Noa og jeg lidt sammen og her får jeg en rundvisning af hele Rotterzwam og alle de forskellige svampe og produkter som de har. Det var meget interessant og kan godt mærke, at jeg lige selv skal have lavet min research på svampe. Derefter sætter vi os i bygningen ved siden af, da Noa og jeg primært skal arbejde sammen, men selvfølgelig også med de andre. Men hun står for det grafiske. Hun giver mig en introduktion igen og her får vi snakket om mit skema og hvad jeg eventuelt kunne tænke mig at lave, men selvfølgelig så jeg kan tilkoble mig det til mine læringsmål. Senere på dagen går vi tilbage. Jeg får lov til at sidde lidt for mig selv, da resten af teamet skal til et møde, hvilket ikke var interessant for mig. Imens laver jeg en opgave, hvor jeg skal sidde og kigge på nogle emails som Rotterzwam sender ud til deres growkit, hvor man selv kan dyrke svampe. De vil nemlig gerne redesigne det. ",
        "Teamet kommer tilbage senere, hvorefter Noa og jeg sparrer med hinanden omkring idéer og hvad jeg kunne hjælpe Rotterzwam med i de kommende uger. Vi bliver enige om, at det ville være en god idé, at jeg står hovedsageligt for growkits og deres redesign, så det passer til deres nye visuelle identitet. ",
        "Det var stort set dagen. Jeg har brugt dagen på at være spændt og nervøs, men alligevel så gik det. Det gik bedre end jeg forventede og er faktisk spændt på i morgen. "
      ],
      // Use array for multiple paragraphs with space between them
      refleksionslog: [
       
      ]
    },

     {
      day: 2,
      date: "7. januar 2026",
      spontanlog: [
       "Hej igen, ", 
       "Selvom at det kun er min anden dag I Rotterzwam, så har hele Holland desværre været så uheldig, at det har stort set været lukket ned. ", 
       "Offentlig transport har ikke fungeret optimalt, hvilket har gjort at hele Rotterzwams team har arbejdet hjemmefra.", 
       "Men trods, at vi har arbejdet hjemme og at det ikke er optimalt for en praktikant som mig, der lige er startet, så har det alligevel gået godt. ", 
       "Jeg har fået flere opgaver af Noa, som jeg skal have lavet og opfyldt inden ugen er omme. I dag har jeg brugt dagen på, at researche. Min første opgave var at finde inspiration til Growkit-supportsiden. Jeg skulle kigge på forskellige hjemmesider, manualer, instruktioner, animationer og andre visuelle elementer, som kunne give idéer til layout, funktionalitet og visuel stil. Hertil lavede jeg en oversigt I Figma over de forskellige kilder og forsøgte at formulere, hvad jeg præcist kunne lide ved dem. Her fandt jeg frem til, at jeg virkelig godt kan lide “playful minimalist illustrations”, da det allerede passer til den nye eksisterende visuelle identitet, som Noa arbejder på. ", 
       "I morgen skal jeg vise hende, hvad jeg har fået researchet og så kan vi gå videre ud fra det. Glæder mig til at høre, hvad hun har at sige og hvad jeg eventuelt kan forbedre :) "
      ],
      // Use array for multiple paragraphs with space between them
      refleksionslog: [
       
      ]
    },

     {
      day: 3,
      date: "8. januar 2026",
      spontanlog: [
       "Så er det blevet dag 3. ", 
       "I dag bliver det bare en kort spontanlog. Jeg har brugt ret meget energi foran computeren, hvor min primære opgave har været at lave research på Rotterzwam og deres grow kit emails. Selvom jeg allerede havde undersøgt virksomheden inden praktikstart, har meget af det alligevel overrasket mig. Især Rotterzwams mission om cirkulær økonomi og hele deres historie. Deres mission går meget ud på den cirkulære økonomi, men også samarbejdet med andre og hele deres netværk. ",
       "Efter I dag er jeg faktisk blevet ret taknemmelig for, at jeg har fået muligheden for at være I praktik I Rotterzwam. En virksomhed, der tror på en fremtid med cirkulær økonomi, mens de samarbejder med andre I deres omkreds og netværk. "
      ],
      // Use array for multiple paragraphs with space between them
      refleksionslog: [
       
      ]
    },

   

    
   
    // Add more days here as needed
  ];

  return (
    <Fade>
      <section className="praktikblog-container">
        <div className="praktikblog-header">
          <h1>Praktikblog</h1>
          <p>
            Denne blog bruges som refleksions- og logbog i forbindelse med mit praktikophold.
          </p>
          <hr />
        </div>
        
        {/* Automatically render all blog entries */}
        {blogEntries.map((entry, index) => (
          <article key={entry.day} className={`blog-entry blog-entry-${(index % 2) + 1}`}>
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