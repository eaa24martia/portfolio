import { useState } from "react";

export default function Praktikblog() {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [lightboxImage, setLightboxImage] = useState(null);
  
  // Organize all your daily entries by week
  const weekData = {
    1: {
      title: "Uge 1",
      dateRange: "6. januar - 9. januar 2026",
      entries: [
        {
          day: 1,
          date: "6. januar 2026",
          image: "",
          spontanlog: [
            "Hej, ",
            "Så er den hårdeste dag overstået. En nervepirrende dag fyldt med nervøsitet og sommerfugle i maven. Dog har det alligevel været en god dag og jeg er SÅ stolt af mig selv.",
            "Jeg ankommer til praktikstedet kl. 9.30. Jeg er meget nervøs og kulden udenfor hjælper ikke ligefrem, men det sker. Jeg træder ind i det lille rum og bliver mødt af mennesker jeg aldrig har set. Men jeg får heldigvis øjenkontakt med Noa, som er min kontaktperson i Rotterzwam. Det er en lille virksomhed, men en hyggelig en. Jeg er glad for, at jeg har fået muligheden for at være med i et cirkulært firma som Rotterzwam. ",
            "Til at starte med får jeg en lille præsentation af hele holdet. Sjovt nok, så er de alle samlet i dag. Jeg bliver præsenteret for alle, men jeg må indrømme at jeg er forvirret over alle de navne, men det kommer nok. Herefter snakker Noa og jeg lidt sammen og her får jeg en rundvisning af hele Rotterzwam og alle de forskellige svampe og produkter som de har. Det var meget interessant og kan godt mærke, at jeg lige selv skal have lavet min research på svampe. Derefter sætter vi os i bygningen ved siden af, da Noa og jeg primært skal arbejde sammen, men selvfølgelig også med de andre. Men hun står for det grafiske. Hun giver mig en introduktion igen og her får vi snakket om mit skema og hvad jeg eventuelt kunne tænke mig at lave, men selvfølgelig så jeg kan tilkoble mig det til mine læringsmål. Senere på dagen går vi tilbage. Jeg får lov til at sidde lidt for mig selv, da resten af teamet skal til et møde, hvilket ikke var interessant for mig. Imens laver jeg en opgave, hvor jeg skal sidde og kigge på nogle emails som Rotterzwam sender ud til deres growkit, hvor man selv kan dyrke svampe. De vil nemlig gerne redesigne det. ",
            "Teamet kommer tilbage senere, hvorefter Noa og jeg sparrer med hinanden omkring idéer og hvad jeg kunne hjælpe Rotterzwam med i de kommende uger. Vi bliver enige om, at det ville være en god idé, at jeg står hovedsageligt for growkits og deres redesign, så det passer til deres nye visuelle identitet. ",
            "Det var stort set dagen. Jeg har brugt dagen på at være spændt og nervøs, men alligevel så gik det. Det gik bedre end jeg forventede og er faktisk spændt på i morgen. "
          ],
          refleksionslog: [
           
          ]
        },

         {
          day: 2,
          date: "7. januar 2026",
          image: "/img/dag-2.png",
          spontanlog: [
           "Hej igen, ", 
           "Selvom at det kun er min anden dag I Rotterzwam, så har hele Holland desværre været så uheldig, at det har stort set været lukket ned. ", 
           "Offentlig transport har ikke fungeret optimalt, hvilket har gjort at hele Rotterzwams team har arbejdet hjemmefra.", 
           "Men trods, at vi har arbejdet hjemme og at det ikke er optimalt for en praktikant som mig, der lige er startet, så har det alligevel gået godt. ", 
           "Jeg har fået flere opgaver af Noa, som jeg skal have lavet og opfyldt inden ugen er omme. I dag har jeg brugt dagen på, at researche. Min første opgave var at finde inspiration til Growkit-supportsiden. Jeg skulle kigge på forskellige hjemmesider, manualer, instruktioner, animationer og andre visuelle elementer, som kunne give idéer til layout, funktionalitet og visuel stil. Hertil lavede jeg en oversigt I Figma over de forskellige kilder og forsøgte at formulere, hvad jeg præcist kunne lide ved dem. Her fandt jeg frem til, at jeg virkelig godt kan lide “playful minimalist illustrations”, da det allerede passer til den nye eksisterende visuelle identitet, som Noa arbejder på. ", 
           "I morgen skal jeg vise hende, hvad jeg har fået researchet og så kan vi gå videre ud fra det. Glæder mig til at høre, hvad hun har at sige og hvad jeg eventuelt kan forbedre :) "
          ],
          refleksionslog: [
           
          ]
        },

         {
          day: 3,
          date: "8. januar 2026",
          image: "/img/dag-3.png",
          spontanlog: [
           "Så er det blevet dag 3. ", 
           "I dag bliver det bare en kort spontanlog. Jeg har brugt ret meget energi foran computeren, hvor min primære opgave har været at lave research på Rotterzwam og deres grow kit emails. Selvom jeg allerede havde undersøgt virksomheden inden praktikstart, har meget af det alligevel overrasket mig. Især Rotterzwams mission om cirkulær økonomi og hele deres historie. Deres mission går meget ud på den cirkulære økonomi, men også samarbejdet med andre og hele deres netværk. ",
           "Efter I dag er jeg faktisk blevet ret taknemmelig for, at jeg har fået muligheden for at være I praktik I Rotterzwam. En virksomhed, der tror på en fremtid med cirkulær økonomi, mens de samarbejder med andre I deres omkreds og netværk. "
          ],
          refleksionslog: [
           
          ]
        },

         {
          day: 4,
          date: "9. januar 2026",
          image: "/img/dag-4.png",
          spontanlog: [
            "Hej igen, ",
            "Så er den første uge overstået! Det har virkelig været en spændende uge, men også en, der har drænet min energi. Men ikke fordi det er dårligt, men bare fordi jeg har skulle vænne mig til så meget nyt.",
            "I dag har jeg brugt dagen på, at køre rundt med Noa. De leverer varer ud til forskellige firmaer og butikker. I dag var vi ude og levere nogle af vores “Grow Kits” til “Niewe Instituut”, som egentlig er et slags museum. Lige nu har de nemlig udstillinger, der har meget af gøre med svampe og fungi. Så jeg fik også lige en rundvisning og fik lov til at gå rundt der, meget spændende. På den måde kunne vi også få lidt inspiration til projekter og opgaver.",
            "Derefter tog vi tilbage til “Farmen”, som de kalder det. Her gik jeg I gang med, at lave forskellige koncepter til grow kit support siden I figma. Jeg fokuserede især meget på, hvordan home page siden til grow kit skal se ud, da det skal informere kunderne om meget. ",
            "Ellers har jeg ikke lavet så meget andet I dag. Synes det har været en hyggelig dag og jeg er glad for, at jeg lærer Rotterdam og deres offentlige transport bedre at kende hver dag. ",
            "Hej hej!"
          ],
          refleksionslog: [
           "I min første uge hos Rotterzwam har jeg primært haft fokus på at finde mig til rette i virksomheden. Jeg har skulle forstå arbejdskulturen, opgaverne og virksomhedens værdier og mission. Det har været en uge med mange nye indtryk, og jeg har oplevet, hvordan det er at starte i en international og mindre virksomhed, hvor samarbejde og fleksibilitet spiller en stor rolle. ",
           "(Læringsmål 2) I forhold til mine læringsmål om at arbejde i en international arbejdskultur, så har jeg allerede fået en bedre forståelse for, hvordan samarbejdet på tværs af sprog og arbejdsvaner fungerer i praksis. Dele af ugen har været hjemmearbejde på grund af for meget sne i Holland, så allerede her er jeg blevet udsat for selvstændigt arbejde, hvor kommunikation foregik digitalt, og hvor jeg selv skal tage ansvar for at få opfyldt mine opgaver. ",
           "Det har været en udfordring, men samtidig har det gjort mig mere tryg ved at arbejde selvstændigt og samtidig skulle strukturere min tid. ",
           "(Læringsmål 3) I forhold til mit mål om at planlægge og strukturere kreative projekter har jeg især arbejdet med research og idéudvikling. I løbet af ugen har jeg researchet forskellige hjemmesider og step-by-step guides, så jeg er forberedt til at arbejde med grow kit support-siden. Jeg har analyseret de forskellige emails som brugerne får tilsendt, når de har købt et grow kit, samt fundet frem til hvilke visuelle og funktionelle elementer, der kunne fungere godt. Jeg har arbejdet med at omsætte teorien fra studiet til praksis ved at samle inspiration, identificere visuelle elementer og begynde at udvikle konkrete koncepter i Figma. ",
           "(Læringsmål 5) Jeg har også arbejdet med at forstå, hvordan en bæredygtig virksomhed arbejder med kommunikation, produktion og branding. Gennem rundvisning, research og samtaler med Noa har jeg fået en større forståelse for Rotterzwams fokus på cirkulær økonomi, deres mission og hvordan deres produkter, kommunikation og visuelle identitet hænger sammen. Jeg har fået meget ud af min research og det er inspirerende at se, hvordan bæredygtighed ikke blot er et budskab, men faktisk en del af hele virksomhedens arbejde. ",
           "Samlet set har første uge været både udfordrende og lærerig. Jeg har været nervøs, men også oplevet, at jeg hurtigt er faldet mere til ro og føler mig mere tryg i mine opgaver. Jeg ser frem til de kommende uger, hvor jeg kan arbejde mere konkret med grow kit support-siden og generelt deres visuelle redesign og fortsætte med at udvikle mine faglige og personlige kompetencer!"
          ]
        }
      ]
    },

    2: {
      title: "Uge 2",
      dateRange: "13. januar - 16. januar 2026",
      entries: [
        {
          day: 5,
          date: "13. januar 2026",
          image: "/img/dag-5.png",
          spontanlog: [
            "Så er det starten på den anden uge af mit praktikforløb! Det har været en god dag I dag. Jeg er blevet sat mere ind I tingene og vores plan har ændret sig. ",
            "I dag har teamet brugt dagen på at få diskuteret, hvad fremtiden skal være for Rotterzwam. Vi er I gang med en rebranding af hele den visuelle identitet, hvilket også er derfor jeg er blevet sat til omgangen af at lave en ny growkit support side. Planen var, at jeg allerede nu skulle gå I gang med illustrationer og hele design delen af support-siden, men efter møder I dag, så er Noa og jeg blevet enige om, at jeg burde hjælpe med selve det label, der er rundt om Grow kit’et. Der skal nemlig bestilles nye growkits hjem og vi vil gerne have, at det bliver med den nye rebranding. ",
            "Selve mødet var rart at være en del af. Jeg følte mig mere en del af hele holdet, fordi jeg også fik lov til at komme med min mening. Men også generelt bare, at være med til et møde med teamet. Her fik vi også snakket om marketing osv. ",
            "Senere på dagen skulle Noa og jeg også have et møde sammen med Mark, som jeg kalder “the boss”. Vi skulle sætte ham ind I, hvad planen helt præcist er med growkit support siden og hvad den skal bruges til. Her havde han også sine meninger, så det tog vi selvfølgelig til os. ",
            "Men det var rart at være en del af, fordi Mark forstår ikke helt, hvor lang tid hele processen med at lave en rebranding af growkit’et kan tage. Så Noa hjalp mig til at give en tidsestimering af, hvor lang tid det ville tage. På den måde fik jeg et indblik I, hvordan man altså skal komme med en tidsestimering, da kunderne ofte ikke ved, hvor lang tid det faktisk kan tage. ",
            "Men resten af dagen brugte jeg på at komme med idéer og forslag til, hvordan forskellige illustrationer kunne se ud. "
          ],
          refleksionslog: [
           
          ]
        },

         {
          day: 6,
          date: "14. januar 2026",
          image: "",
          spontanlog: [
           "I dag har været en stille og rolig dag. Strømmen var gået allerede da jeg mødte ind, så der var lidt problemer der. Men heldigvis var var strøm og internet I den anden bygning, som de kalder “de kroon”. Det er blandt andet der, hvor de laver de forskellige labels og grow kits. ",
           "Her sad vi I noget tid og jeg arbejdede på de nye forskellige sketches og illustrationer til growkit labelet. Noa og jeg havde snakket om, at det ville være en god idé, at hun satte mig ind I hele den visuelle identitet’s rebranding. Så hun havde et helt powerpoint, som hun gerne ville vise mig. Det brugte hun ret lang tid på, men jeg er glad for det, fordi nu forstår jeg meget bedre hele den visuelle identitet. ",
           "Herefter var strømmen heldigvis kommet tilbage. Jeg fortsatte med mit arbejde med illustrationer og senere tog jeg med ud og afleverede nogle svampe til en restaurant I Rotterdam. ",
           "Men stort set hele dagen har gået på at forstå den visuelle identitet og lave illustrationer til det nye growkit. "
          ],
          refleksionslog: [
           
          ]
        },

         {
          day: 7,
          date: "15. januar 2026",
          image: "/img/dag-7.png",
          spontanlog: [
           "I dag har været en stille dag. Der er ikke sket så meget udover, at jeg har været I gang med illustrationer af growkit. Jeg fik lavede de forskellige illustrationer af forskellige faser, der er. "
          ],
          refleksionslog: [
           
          ]
        },

         {
          day: 8,
          date: "16. januar 2026",
          image: "/img/dag-8.png",
          spontanlog: [
            "Hej. I dag er det slutningen på ugen. Det var lidt sjovt, fordi jeg var den første der mødte ind, men heldigvis havde jeg fået en nøgle. ",
            "Men ellers har jeg bare lavet illustrationer I dag. Jeg kiggede også til det growkit, som jeg holder øje med. På den måde er jeg faktisk med I hele processen og kan bedre forholde mig til, hvordan hele processen foregår. ",
            "Jeg fik lavet en del videre på growkit illustrationerne og jeg startede også på nogle kaffe maskine illustrationer. Det er en lang process, fordi jeg vil gerne lave flere forskellige illustrationer, så holdet har noget at vælge af. "
          ],
          refleksionslog: [
           "I løbet af uge 2 har jeg fået mulighed for at arbejde mere selvstændigt og også fordybe mig i opgaver som at illustrere illustrationer til growkit’et. Det har givet mig en bedre forståelse af, hvad min rolle er i virksomheden. ",
           "(Læringsmål 2) I forhold til mit læringsmål om at arbejde i en international arbejdskultur, så har jeg oplevet, hvordan samarbejde ofte foregår fleksibelt og digitalt. Da jeg i denne her uge har arbejdet hjemme om torsdagen, så har jeg kunne udvikle min evne til at kommunikere tydeligt og samtidig tage ansvar for mine egne opgaver og hvad der skal være færdigt til næste dag. ",
           "(Læringsmål 3) I den her uge (uge 2) har jeg især arbejdet med mit læringsmål om at planlægge og strukturere kreative projekter. Jeg har arbejdet med idéudvikling, skitsering og gentagelser for at skabe flere forskellige visuelle forslag, som teamet kan vælge imellem. Samtidig har jeg også fået indblik i, hvordan tidsestimering spiller en stor rolle i designprocesser, især når man skal forklare sit arbejde til personer, der måske ikke nødvendigvis har en designfaglig baggrund.  ",
           "Samlet set har uge 2 styrket min faglige selvtillid og givet mig en klarere forståelse for, hvad mit ansvar er, men også generelt en forståelse for, hvordan Rotterzwam arbejder. Jeg føler mig mere tryg og er glad for, at jeg får gode og vigtige opgaver givet til mig. Jeg ser frem til at arbejde videre med illustrationerne og den visuelle udvikling af grow kits i de kommende uger!",
          ]
        }
      ]
    },

    3: {
      title: "Uge 3",
      dateRange: "20. januar - 23. januar 2026",
      entries: [
        {
          day: 9,
          date: "20. januar 2026",
          image: "/img/dag-9.png",
          spontanlog: [
           "Så er det starten på min tredje uge hos Rotterzwam! Jeg er overrasket over, hvor hurtigt dagene faktisk går. Jeg kan godt mærke, at det er anderledes at arbejde med projekter I praksis end hvad jeg har været vant til I undervisningen. ",
           "Vi startede dagen ud med, at få holdt et møde. Det havde egentlig ikke så meget med mig at gøre, men jeg havde fri mulighed for at komme med inputs. Det var I forhold til, hvordan de forskellige produkter skulle udstilles I andre butikker som små landbrugs butikker. Vi vil nemlig gerne udtrykke den nye visuelle identitet mere, så folk er klar over, når produkter kommer fra Rotterzwam. ",
           "Efter mødet besluttede Noa og jeg os for, at vi skulle have et møde eller en sparrings session sammen omkring den nye growkit support side, da jeg stort set er færdig med illustrationerne til growkit labelet. Mødet var ret langt, men også vigtigt. Det blev gjort klart for mig, hvordan support siden skulle opstilles, så det bliver tydeligt for brugerne, hvordan de skal navigere rundt I siden. ",
           "Vi fik brugt et par timer på mødet og bagefter gik jeg videre med at designe, hvordan growkit siden skulle se ud. Vi blev enige om, at det ville være en god idé, at jeg lavede lo-fi prototyper, så jeg I næste uge kan vise det til resten af Rotterzwam teamet.  "
          ],
          refleksionslog: [
           
          ]
        },

         {
          day: 10,
          date: "21. januar 2026",
          image: "/img/dag-10.png",
          spontanlog: [
           "I dag har været en dag, der stort set har bestået af det samme. Efter mødet med Noa I går, så har jeg kunne fortsætte med at lave videre på lo-fi skitsen I Figma. ",
           "Jeg fik implementeret de forskellige sektioner, som Noa gerne ville have, der skulle være på growkit support homepagen. Da jeg var færdig med den, så kunne jeg gå videre med step 1 I growkit processen. Rotterzwam har haft en emailer, som er blevet lavet for mange år tilbage. Den passer ikke til den nye visuelle identitet og samtidig, så er den også forældet. Så vi har skulle lave informationerne om og samtidig sat strukturen anderledes. ",
           "Så jeg har taget højde for, at når man går gennem de forskellige steps, så skal brugerne også kunne få svar på problemer, der eventuelt ville kunne opstå under growkit processen. ",
           "Jeg nåede stort set at blive færdig med step 1 I dag, men jeg mangler stadig lidt, så den kan blive ordentlig færdig, men det må jeg nå I morgen :)",
          ],
          refleksionslog: [
           
          ]
        },

         {
          day: 11,
          date: "22. januar 2026",
          image: "/img/dag-11.png",
          spontanlog: [
           "I dag har jeg stort set bare arbejdet videre på lo-fi prototypen I Figma. Jeg brugte rimelig lang tid på, at finde frem til, hvordan de forskellige sektioners layout skulle se ud. ",
           "Jeg begyndte også at starte på step 2, som handler mere om, hvordan de forskellige lag skal være I growkit’et. Men jeg tænker at jeg må nå resten af step 2 I morgen. "
          ],
          refleksionslog: [
           
          ]
        },

         {
          day: 12,
          date: "23. januar 2026",
          image: "/img/dag-12.png",
          spontanlog: [
            "I dag er det slutningen på uge 3. Jeg har arbejdet videre på lo-fi prototypen og fået lavet meget af step 2, men jeg mangler dog stadig nogle få sektioner til sidst. Jeg har lidt problemer, da jeg gerne vil lave en forbedret udgave af Rotterzwams timeline af deres growkit. Så brugeren hurtigt kan se, hvor lang tid de skal bruge på hver step, så Rotterzwam slipper for at få mails og opkald, hvor folk spørg, hvordan de skal lave growkit’et korrekt. ",
            "Jeg regner med, at jeg vil arbejde lidt videre I weekenden, da jeg allerede I næste uge skal præsentere lo-fi prototypen til resten af teamet.",
            "Men jeg glæder mig til, at se, hvordan de andre steps kommer til at se ud. Jeg synes egentlig det er ret fedt at arbejde med og at jeg får lov til at sidde med noget så vigtigt som en support side!"
          ],
          refleksionslog: [
            "Så har jeg været i gang med tredje uge. I den her uge har jeg arbejdet med lo-fi growkit prototypen som et konkret projekt og det har krævet, at jeg både kan tænke i brugerens brugeroplevelse, struktur og selvfølgelig den visuelle sammenhæng med Rotterzwams nye visuelle identitet. ",
            "(Læringsmål 3) Jeg vil sige, at jeg i denne her uge har arbejdet med læringsmålet om at planlægge og strukturere kreative projekter. Jeg har skulle arbejde sammen med Noa omkring strukturen og teksten, der skal være på support-siden, men samtidig har jeg selv skulle finde hoved og hale i, hvordan det ville blive visuelt bedst præsenteret.",
            "Jeg har hele tiden skulle arbejde ud fra brugernes perspektiv. Ved at gentænke, hvordan growkit processens forskellige steps og informationer ville give bedst muligt, så Rotterzwam i fremtiden ikke skal svare på alle mulige mails og opkald. ",
            "(Læringsmål 2)I forhold til mit læringsmål om at arbejde i en international og professionel arbejdskultur har jeg igen oplevet, at jeg bliver inddraget i beslutninger og får ansvar for vigtige dele af projektet. Det er virkelig motiverende at de giver mig tillid til at arbejde med en central support side, som har stor betydning for Rotterzwams kunder.",
            "Jeg vil sige at uge 3 har styrket min forståelse for brugervenlighed og hvordan jeg skal kommunikere virksomhedens identitet. Jeg føler at jeg udvikler mine figma færdigheder og generelt, hvordan jeg træffer designvalg. Jeg ser frem til at præsentere lo-fi prototypen for resten af teamet og få feedback, som kan bruges til at videreudvikle løsningen i de kommende uger!"
           
          ]
        }
      ]
    },
    4: {
      title: "Uge 4",
      dateRange: "27. januar - 30. januar 2026",
      entries: [
        {
          day: 13,
          date: "27. januar 2026",
          image: "/img/dag-13.png",
          spontanlog: [
           "Det er I dag allerede den fjerde ugen af min praktik. Jeg er overrasket over, hvor hurtigt tiden faktisk går. Men det er I den her uge, hvor jeg skal præsentere lo-fi prototypen af growkit support siden.",
           "Jeg synes at det har været en virkelig god dag I dag. På trods af at jeg er I en virksomhed, hvor de fleste snakker Hollandsk, så kan jeg mærke at folk gerne vil have at jeg er en del af fællesskabet også selvom, at jeg bare er en “praktikant”. ",
           "Jeg har egentlig ikke lavet så meget end at få styr på lo-fi skitserne. Jeg har også haft brugt tid på dem henover weekenden, men jeg er stadig ikke helt tilfreds. Jeg kan mærke, at jeg synes faktisk det er en virkelig stor opgave, som jeg er blevet sat I gang med. Jeg er både glad for det, men det er også lidt hårdt. Jeg er bange for at jeg gør noget forkert, men det er jo hele pointen med lo-fi prototypen. At man fanger fejlene tidligt. Jeg er spændt på, hvad resten af teamet siger I morgen til min såkaldte “præsentation”. ",
           "Jeg synes egentlig det går meget godt. Jeg skal nok nå at blive færdig til I morgen. Der er bare meget information, der skal fortælles på kort plads, da jeg ikke vil have at brugerne skal bruge alt for meget tid på at scrolle, hvis de bare gerne vil I gang med deres growkit. ",
           "Men ja. Stort set hele dagen har jeg arbejdet videre på prototypen. Det kan hurtigt blive tungt, men heldigvis er det ikke alle dage, der er så tunge. Jeg tror jeg har fundet ud af, at jeg egentlig godt kan lide en hverdag, hvor der sker lidt forskelligt. Der skal ske noget andet end bare at sidde foran computeren, så jeg vil sige at jeg egentlig er rimelig heldig med at arbejde I en lille virksomhed, så jeg står for flere opgaver. ",
           "Det var alt for I dag! Hej hej. "
          ],
          refleksionslog: [
           
          ]
        },

         {
          day: 14,
          date: "28. januar 2026",
          image: "/img/dag-14.png",
          spontanlog: [
           "I dag har været en spændende dag. Det har været dagen, hvor jeg har skulle præsentere min lo-fi prototype af growkit support hjemmesiden. ",
           "Til at starte med gik Noa og jeg over, hvad der kunne være vigtigt, at jeg lige fortalte til mødet. Det var egentlig rart nok, fordi hun er vant til at have med teamet at gøre, men også erfaring med at håndtere møder med andre kunder, der måske ikke har den samme grafiske erfaring. ",
           "Mødet var først kl. 12, så jeg havde lige nogle timer inden at jeg skulle være klar. Jeg brugte tiden på at gøre lo-fi prototypen færdig og til min egen overraskelse blev jeg faktisk færdig. ",
           "Til mødet var jeg spændt på, at fortælle teamet, hvad jeg havde brugt den sidste uge på at arbejde på. Jeg gennemgik figma prototypen og de forskellige steps, som brugeren bliver guidet igennem. Herefter kom de så med noget feedback på, hvordan de forskellige illustrationer kunne se ud, samt de forskellige sektioner. Jeg noterede det selvfølgelig, men de var mest af alt faktisk imponerede og jeg tror I hvert fald at de godt kunne lide det. Det var faktisk mest af alt Noa, der kom med nogle kommentare på designet, men hun er selvfølgelig også mere design orienteret. ",
           "Efter mødet kunne jeg gå I gang med at redesigne dele af prototypen, som jeg havde fået feedback på."
          ],
          refleksionslog: [
           
          ]
        },

         {
          day: 15,
          date: "29. januar 2026",
          image: "",
          spontanlog: [
           "I dag har jeg brugt dagen på, at få styr på alt den feedback som jeg har fået til mødet og så implementere det på selve designet. ",
           "Jeg har også brugt tiden på at finde nogle templates på webflow, der eventuelt ville kunne hjælpe med at skabe hele support hjemmesiden. Hele teamet og jeg er blevet enige om, at de gerne vil køre deres hjemmeside over webflow, så det er jeg gået med til. Det giver mig også en udfordring eftersom, at jeg aldrig rigtig har arbejdet med hjemmeside builders. Så jeg er spændt på det, men også lidt bange. Men tænker at det nok skal gå nu, hvor jeg allerede har rimelig godt styr på, hvordan man sætter en hjemmeside op med kode!"
          ],
          refleksionslog: [
           
          ]
        },

         {
          day: 16,
          date: "30. januar 2026",
          image: "/img/dag-16.png",
          spontanlog: [
           "Sidste dag af fjerde uge! Tiden går stærkt. Dagen har egentlig været ret stille og rolig. Jeg viste Noa de forskellige templates jeg havde fundet, men det har været ret svært, da mange af de templates der findes er mere til ecommerce osv, mens vi har brug for en template der skal fungere som en slags storytelling. ",
           "Men vi endte med at finde en endelig template og jeg er spændt på, at arbejde ud fra den og kunne implementere min lo-fi prototype over til en mere officiel struktur. ",
           "I dag spiste hele teamet også frokost sammen. Det var hyggeligt, men jeg kan godt mærke at jeg lige skal vænne mig til, at jeg ikke kan være med I alle samtaler, når de snakker Hollandsk. Men jeg vil sige, at de gør deres bedste for at inkludere mig. ",
           "Resten af dagen brugte jeg egentlig på, at starte på et figma mockup, så jeg er klar til næste uge. Det skal nok blive godt, selvom jeg er faktisk ved at være lidt nervøs på om jeg har tid nok til at blive færdig med hele support hjemmesiden. "
          ],
          refleksionslog: [
            "Jeg synes at fjerde uge har været vigtig for mit praktikforløb, da jeg for første gang faktisk skulle præsentere noget af mit arbejde for hele teamet. Jeg har skulle præsentere lo-fi prototypen af growkit support-siden, som jeg har arbejdet lang tid på og den har samtidig fyldt meget. ",
            "(Læringsmål 2) I forhold til mit læringsmål om at arbejde i en international arbejdskultur har jeg oplevet, at jeg mere og mere føler mig inkluderet i fællesskabet hos Rotterzwam. Selvom sproget ofte er hollandsk, så oplever jeg, at teamet aktivt gør en indsats for at inkludere mig. ",
            "I forhold til præsentationen af lo-fi prototypen, så følte jeg at det var en udfordring for mig, da jeg i hvert fald følte, at der var et stort ansvar for, at løsningen fungerede og gav mening for teamet. Feedbacken fra teamet var positiv og konstruktiv, og det gav mig større selvtillid i mine designvalg. Især sparringen med Noa har hjulpet mig til at udtrykke mine tanker mere klart og forklare designbeslutninger til personer uden samme designfaglige baggrund. ",
            "(Læringsmål 3) Denne uge har igen styrket mit læringsmål om at planlægge og strukturere kreative projekter. Overgangen fra lo-fi prototype til næste fase har også gjort det klart for mig, hvor vigtigt det er at arbejde iterativt, hvilket er også derfor at jeg er glad for at jeg arbejder med lo-fi først. Desuden er jeg spændt på at arbejde videre i webflow, da det er en ny faglig udfordring for mig, da jeg ikke har arbejdet i website builders før. ",
            "Samlet set har uge 4 været både krævende og lærerig. Jeg kan mærke, at opgaven er stor, men samtidig giver det mig motivation at arbejde med noget, der har reel betydning for virksomheden. "
           
          ]
        }
      ]
    },
     5: {
      title: "Uge 5",
      dateRange: "3. februar - 6. februar 2026",
      entries: [
        {
          day: 17,
          date: "3. februar 2026",
          image: "/img/dag-17.png",
          spontanlog: [
         "Hej. I dag er det starten på den femte uge. Jeg har I dag startet på webflow filen, som growkit support hjemmesiden skal bygges og hostes over. ",
         "Jeg er spændt på at komme længere ind I webflow, men lige nu kan jeg godt mærke at det er noget anderledes at sidde med end bare kode. Men jeg tror godt, at jeg kan lide det. Det er mere design orienteret og føles egentlig lidt mere som figma, men bare som en website builder. ",
         "Men grundlæggende så har jeg rodet rundt med de forskellige funktioner, som webflow tilbyder og så er jeg begyndt på homepagen. Jeg er dog ikke nået særlig langt, da jeg lige skal I gang med, hvordan det fungere. ",
         "Kan godt mærke at alle de interaktioner og animationer, som man kan lave er lidt overvældende. Jeg sad I hvert fald I lang tid og tænkte: “Det kommer til at tage noget tid at lære de her animationer at kende”. Men det skal nok gå! Jeg er positiv overfor det og håber bare at jeg bliver endnu bedre til det. "
          ],
          refleksionslog: [
           
          ]
        },

         {
          day: 18,
          date: "4. februar 2026",
          image: "",
          spontanlog: [
          "I dag har faktisk været en spændende dag. Noa og jeg havde et møde med en, der hedder Lisa som arbejder for Sporo, som er et firma der producere circulært substrat til blandt andet svampe. ",
          "De har lige lavet en ny hjemmeside, men Lisa spurgte efter noget feedback på hjemmesiden, da hun er helt ny til at bygge hjemmesider. Så hun spurgte os om vi kunen give hende noget feedback. Det var faktisk rart at være med til det møde og at jeg fik lov til at være en del af det og komme med noget feedback. ",
          "Derefter skulle Noa og jeg have et “halfway meeting” af min praktik. Hun spurgte ind til, hvordan jeg indtil videre har haft det med praktik og også bare generelt, hvordan jeg havde det. Det var virkelig rart at have den samtale og også bare I forhold til, hvordan jeg opfylder mine læringsmål osv.  Hvortil at jeg egentlig har opfyldt mange af mine læringsmål og at jeg endelig bare skal sige til, hvis jeg vil lave noget mere med animation eller produktion af produkter. Men indtil videre tænker jeg, at jeg har nok at se til med support growkit hjemmesiden.",
          "Efter mødet gik vi tilbage til “farmen” og så kunne jeg lave videre på webflow hjemmesiden. Jeg kan godt mærke at det er noget andet end kode. Det er ikke fordi at det er svært som sådan, men jeg har godt nok svært ved lige at finde hoved og hale I, hvordan interaktionerne og animationerne fungere. Jeg vil virkelig gerne lære det og jeg tænker da også I morgen, at jeg helt sikkert skal dykke endnu dybere ned I det. ",
          "Men det var alt for I dag :)"
          ],
          refleksionslog: [
           
          ]
        },

         {
          day: 19,
          date: "5. februar 2026",
          image: "/img/dag-19.png",
          spontanlog: [
            "I dag har været en god dag, hvor jeg primært har arbejdet på webflow. Jeg kan mærke at jeg faktisk er lidt frustreret over, hvordan webflow virker og alle deres animationer. Det får mig til at tvivle og samtidig gør det at jeg bliver mere nervøs for, at jeg ikke når deadline af hjemmesiden inden min praktik er ovre. ",
            "Men jeg vil gøre mit bedste for at få hjemmesiden færdig og uanset hvad, så skal det nok gå. ",
            "Jeg er stadig I gang med forsiden og den er også stort set færdigt, men jeg skal stadig have sat mig ordentlig ind I animationerne og hvordan de lige fungere. Samtidig skal jeg også have lavet flere illustrationer, da den mere eller mindre skal bestå af illustrationer frem for billder. Men ja, jeg har stort set fokuseret på forsiden/homepagen I dag. "
          ],
          refleksionslog: [
           
          ]
        },

         {
          day: 20,
          date: "6. februar 2026",
          image: "/img/dag-20.png",
          spontanlog: [
           "I dag har jeg valgt, at jeg slet ikke vil fokusere på hjemmesiden. Jeg må få kigget noget mere på illustrationerne I weekenden eller næste uge. Men jeg kan mærke, at jeg har brug for at lave noget andet end at arbejde med hjemmesiden hele tiden, så derfor besluttede jeg mig for at arbejde på en illustration, der skal vise brugeren hele growkit tidslinjen, så de har en idé om, hvor lang tid hele processen kommer til at tage. ",
           "Jeg startede dagen ud med at levere nogle svampe til et museum her I Rotterdam, sammen med Noa. Det var egentlig rart nok lige at få startet dagen ud sådan. Da vi kom tilbage gik jeg egentlig bare I gang med at lave en sketch af, hvordan illustrationen skal se ud. ",
           "Bagefter kunne jeg så begynde at lave den ovre I illustrator og på trods af at jeg har siddet virkelig længe med illustrationen, så er jeg stadig ikke færdig. Tror det er fordi jeg virkelig gerne vil have at brugeren skal forstå tidslinjen med det samme uden at stille spørgsmålstegn. ",
           "Men jeg mangler at få lavet nogle flere illustrationer af ikoner til den og desuden skal jeg have rettet den lidt til, så de rigtige tider også bliver vist på den. Men jeg glæder mig til at den er færdig :)",
           "Men det var alt for I dag og egentlig også den her uge? Hej hej!"
          ],
          refleksionslog: [
           "Uge 5 har været mit halvvejs-punkt af mit praktikforløb og det har også været skiftet, hvor jeg er gået fra primært at arbejde med design og prototyper til at begynde den endelige implementering af grow kit support-siden i Webflow. Det har været en uge, som har været udfordrende og samtidig selvfølgelig lærerig, da jeg har skulle lære nye værktøjer at kende. ",
           "(Læringsmål 3) I forhold til mit læringsmål om at planlægge og strukturere kreative projekter har arbejdet i Webflow gjort at jeg har fundet ud af, hvor anderledes det er at bygge en løsning frem for bare at designe den i Figma. Selvom jeg har erfaring med kode, har Webflow været en ny udfordring for mig. Især interaktioner og animationer har virket overvældende, og jeg har oplevet frustration og tvivl om, om jeg kan nå i mål inden praktikperioden slutter. Samtidig har det gjort mig mere bevidst om vigtigheden af at tage tingene skridt for skridt og acceptere, at sådan et projekt godt kan skabe usikkerhed, men så længe jeg arbejder hårdt, så skal det nok gå. ",
           "I løbet af ugen havde jeg et møde med Lisa fra Sporo, samt halway mødet med Noa, som har givet mig refleksion over min egen faglige udvikling. Jeg har fået lov til at give feedback på en andens hjemmeside og det har styrket min selvtillid og gjort at jeg stoler på mine egne kompetencer. Samtalen med Noa har desuden hjulpet mig med at få overblik over mine læringsmål og gjort det tydeligt, at jeg allerede har opnået meget i mit praktikforløb. ",
           "I slutningen af ugen valgte jeg bevidst at skifte fokus væk fra Webflow og arbejde med illustrationer og gjort det klart for mig at det er vigtigt også at have noget variation i sit arbejde, så man ikke går død. ",
           "Samlet set har uge 5 været mentalt krævende, men også spænende og jeg synes jeg udvikler mig. Jeg har fået forståelse for, hvordan det føles at stå med et ansvar for et projekt. Samtidig har ugen gjort mig mere bevidst om mine egne styrker og grænser. I næste uge håber jeg at jeg har større motivation for at fortsætte arbejdet med både webflow og illustrationerne!"

           
          ]
        }
      ]
    }



    
  };
  
  // Get available weeks and current week data
  const availableWeeks = Object.keys(weekData).map(Number).sort((a, b) => a - b);
  const currentWeekData = weekData[selectedWeek];

  return (
    <section className="praktikblog-container">
      <div className="praktikblog-header">
        <h1>Praktikblog</h1>
        <p>
          Denne blog bruges som refleksions- og logbog i forbindelse med mit praktikophold.
        </p>
        <hr />
        
        {/* Week navigation */}
        <div className="week-navigation">
          {availableWeeks.map((weekNum) => (
            <button
              key={weekNum}
              className={`week-button ${selectedWeek === weekNum ? 'active' : ''}`}
              onClick={() => setSelectedWeek(weekNum)}
            >
              Uge {weekNum}
            </button>
          ))}
        </div>
        
        {/* Current week info */}
        <div className="week-info">
          <h2>{currentWeekData.title}</h2>
          <p>{currentWeekData.dateRange}</p>
        </div>
      </div>
        
        {/* Automatically render blog entries for selected week */}
        {currentWeekData.entries.map((entry, index) => (
          <article key={entry.day} className={`blog-entry blog-entry-${(index % 2) + 1}`}>
            <h2>Dag {entry.day} – {entry.date}</h2>
            
            <table className="blog-table">
              <thead>
                <tr>
                  <th scope="col">Billeder</th>
                  <th scope="col">Spontanlog – Hvad der skete</th>
                  <th scope="col">Refleksionslog – Hvad jeg tænker om det</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* Image column */}
                  <td data-label="Billede" className="image-cell">
                    {entry.image ? (
                      <img 
                        src={entry.image} 
                        alt={`Dag ${entry.day}`}
                        onClick={() => setLightboxImage(entry.image)}
                        style={{ cursor: "pointer" }}
                      />
                    ) : (
                      <p>Intet billede</p>
                    )}
                  </td>
                  
                  {/* Spontanlog column */}
                  <td data-label="Spontanlog – hvad der skete">
                    {entry.spontanlog.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </td>
                  
                  {/* Refleksionslog column */}
                  <td data-label="Refleksionslog – hvad jeg tænker om det">
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
        
        {/* Lightbox for viewing images */}
        {lightboxImage && (
          <div className="lightbox" onClick={() => setLightboxImage(null)}>
            <div className="lightbox-content">
              <img src={lightboxImage} alt="Enlarged view" />
              <button className="lightbox-close" onClick={() => setLightboxImage(null)}>
                ✕
              </button>
            </div>
          </div>
        )}
      </section>
  );
}