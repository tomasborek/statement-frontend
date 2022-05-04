import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlowingButton from "../components/GlowingButton";
import InfoLayout from "../layouts/InfoLayout";

const Web = () => {
  const content = {
    sections: [
      {
        heading: "Webové stránky",
        description: `Věděli jste, že až 75 % lidí soudí kvalitu služeb dané firmy podle
                jejich webových stránek? Často se setkáváme s názory, že menší
                podnik nepotřebuje vlastní webové stránky. V dnešní době je to však
                velmi důležitá a nezpochybnitelná vizitka, která Vám pomůže získat
                nové zákazníky a zájemce o Váš podnik. Zaměřujeme se převázně na
                malé podniky a start-upy, jejichž energie nás baví. Nastartujte svůj
                byznys s námi.`,
      },
      {
        heading: "Co vám můžeme nabídnout?",
        description:
          "Vyberte si službu, který nejvíce odpovídá potřebám Vašeho byznysu.",
      },
    ],
    bannerItems: [
      {
        svg: "/img/code-circle.svg",
        icon: null,
        heading: "Malý web",
        description: "Perfketní pro živnostníky a malé firmy",
      },

      {
        svg: null,
        icon: "fas fa-globe",
        heading: "Web na míru",
        description: "Web pro náročnější projekty a individuální řešení",
      },
      {
        svg: null,
        icon: "fa-brands fa-wordpress",
        heading: "Wordpress",
        description: "Nechte správu webu na nás",
      },
    ],
    checkList: {
      heading: "Jak probíhá tvorba webových stránek?",
      items: [
        "Konzultace a probrání společných cílů",
        "Vypracování návrhů (UI/UX)",
        "Kódování a programování",
        "Společné dolazení cílů",
        "Dohoda o správě webu",
      ],
      description:
        "Po dokončení webu s Vámi probereme i zvážení doplňkových služeb jako je SEO a Marketing, které jsou nedílnou součásti úspěchu Vašeho byznysu. ",
    },
    expert: "Tomáš Bořek",
  };
  return <InfoLayout content={content} />;
};

export default Web;
