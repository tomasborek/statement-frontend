import React from "react";
import InfoLayout from "../layouts/InfoLayout";

const Design = () => {
  const content = {
    sections: [
      {
        heading: "Grafický design",
        description: `Comic Sans a propagační materiály vytvořené v malování - to je základ úspěšného byznysu! Uhm, jo, to nejspíš nebude to pravé ořechové. Jsme tu od toho, abychom Vám pomohli vytvořit skvělé a moderní grafické materiály na míru přímo pro Vaše podnikání. U nás žádný zběsilý Comic Sans nenajdete, nýbrž neskonalou paletu fontů, barev, tvarů a dalších aspektů, které oživí Váš byznys. O všem si společně nezávazně popovídáme a nastavíme si výsledný projekt tak, aby maximálně vyhovoval Vašim potřebám a odpovídal dnešním standardům. `,
      },
      {
        heading: "S čím vám můžeme pomoci?",
        description: "Vzbuďte v klientech profesionální dojem",
      },
    ],
    bannerItems: [
      {
        svg: null,
        icon: "fas fa-text-height",
        heading: "Online design",
        description: "Bannery, posty, webové komponenty a další",
      },
      {
        svg: null,
        icon: "fas fa-id-card",
        heading: "Propagační materiály",
        description: "Letáky, brožury, plakáty, nebo třeba vizitky?",
      },
      {
        svg: null,
        icon: "fas fa-box",
        heading: "Produktové obaly",
        description: "Tak, aby zákazník sáhl po Vašem produktu",
      },
      {
        svg: null,
        icon: "fas fa-book-open",
        heading: "Ostatní grafika",
        description: "Od jídelního lístku po polepy aut",
      },
    ],
    checkList: {
      items: [
        "Konzultace a probrání konceptů grafických materiálů",
        "Vytvoření prototypu a společné dolazení do cílové podoby",
        "Export projektu do naší partnerské tiskárny",
        "Odeslání na Vaši adresu",
      ],
      heading: "Jak probíhá tvorba grafických materiálů?",
    },
    expert: "Adriana",
  };
  return <InfoLayout content={content} />;
};

export default Design;
