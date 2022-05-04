import React from "react";
import InfoLayout from "../layouts/InfoLayout";

const SocialniSite = () => {
  const content = {
    sections: [
      {
        heading: "Sociální sítě",
        description: `Naprosto pohltily náš každodenní život. Zná a využívá je témeř každý, jsou tudíž silným nástrojem, bez kterého si dnes dokážeme jen málo představit každodenní fungování. My Vám pomůžeme tuto mediální sílu uchopit a přenést ve prospěch Vás i Vašich klientů a zákazníků. Probereme s Vámi, jaké sociální sítě budou dávat smysl a na co se zaměřit. Nastavíme jednotlivé parametry a nabídneme i tipy v rámci aktuálních trendů.`,
      },
      {
        heading: "Proč řešit sociální sítě?",
        description:
          "Získejte lepší pozici na trhu a zviditelněte své podnikání.",
      },
    ],
    bannerItems: [
      {
        svg: null,
        icon: "fas fa-cart-shopping",
        heading: "Konverze",
        description: "Získejte více objednávek a zákazníků",
      },
      {
        svg: null,
        icon: "fas fa-lightbulb",
        heading: "Povědomí",
        description: "Představte širokému publiku Vaše podnikání",
      },
      {
        svg: null,
        icon: "fas fa-thumbs-up",
        heading: "Zpětná vazba",
        description: "Získejte ohlasy od věrných či nových zákazníků.",
      },
      {
        svg: null,
        icon: "fas fa-shield",
        heading: "Důvěryhodnost",
        description: "Ukažte že to s podnikáním myslíte vážně",
      },
    ],
    checkList: {
      items: [
        "Konzultace a probrání základních prvků pro social media",
        "Založení sociálních sítí a nastavení jednotlivých parametrů",
        "Plánování postů, stories a vysvětlení propagace",
        "Dohoda o správě sociálních sítí",
      ],
      heading: "Jak společně vymyslíme sociální sítě?",
      description:
        "Po založení sociálních sítí s Vámi probereme i zvážení doplňkových služeb jako je analýza a propagace, které jsou nedílnou součásti úspěchu Vašeho byznysu. ",
    },
    expert: "Pavel Hašek",
  };
  return <InfoLayout content={content} />;
};

export default SocialniSite;
