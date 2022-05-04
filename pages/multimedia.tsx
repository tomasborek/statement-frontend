import React from "react";
import InfoLayout from "../layouts/InfoLayout";

const Multimedia = () => {
  const content = {
    sections: [
      {
        heading: "Multimédia a audiovizuální úpravy",
        description: `Máte videa či fotky, které chcete dostat do slušné podoby? Dle průzkumů špatně upravené či nafocené fotky získávají
         až o 90 % horší odezvu. Svěřte nám Vaše materiály do ruky a my Vám pomůžeme vytvořit skvělé video či upravené fotky na míru.
          Poradíme Vám také s kompresí a optimalizací multimédií na webové stránky či sociální sítě. Zabýváme se i úpravou zvuku a mix-masteringem. 
          Vaše nahrávky s námi budou znít moderně a čistě.`,
      },
      {
        heading: "Co vám můžeme nabídnout?",
        description: "Zlepšte kvalitu vašich fotek, videí a zvukových stop.",
      },
    ],
    bannerItems: [
      {
        svg: null,
        icon: "fas fa-file-image",
        heading: "Úprava fotek",
        description: "Získejte lepší odezvu skrze kvalitní fotky",
      },

      {
        svg: null,
        icon: "fas fa-video",
        heading: "Úprava a střih videa",
        description: "Podpořtr byznys kvalitně zpracovaným videem",
      },
      {
        svg: null,
        icon: "fas fa-photo-film",
        heading: "Optamilazece médií",
        description: "Poradíme se všemi problémovými soubory",
      },
      {
        svg: null,
        icon: "fas fa-file-audio",
        heading: "Úprava zvukových stop",
        description: "Moderní a čistý zvuk pro Vaše audionahrávky",
      },
    ],
  };
  return <InfoLayout content={content} />;
};

export default Multimedia;
