import React from "react";
//next
import Link from "next/link";
//Components
import Service from "./Service";

const Services = ({ servicesRef }) => {
  return (
    <div ref={servicesRef} className="mt-8">
      <div className="main-container text-white">
        <h3 className="text-2xl font-bold">Co vám můžeme nabídnout</h3>
        <div className="flex flex-col items-stretch md:grid md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 mt-8">
          <Service
            icon="fas fa-globe"
            name="Webové aplikace"
            link="/web"
            description="Vytvoříme Vám rychlou a moderní stránku. Ať už se jedná o malou webovou vizitku či složitý projekt, rádi Vám pomůžeme a ujmeme se tvorby webu od samotného začátku do úplného konce."
          />
          <Service
            icon="fas fa-chart-column"
            name="Socialní sítě"
            link={"/socialni-site"}
            description="Kdo není na sockách, jako by dnes nebyl. A my to víme nejlíp. Pomůžeme s nastavením sociálních sítí a navýšíme dosah Vašeho byznysu v onlinovém světě."
          />
          <Service
            icon="fas fa-photo-film"
            name="Multimédia a audiovizuálí úpravy"
            link={"/multimedia"}
            description="Zlobí Vás kvalita zvuku nebo jen chcete upravit barvy Vašich fotografií? Svěřte nám Vaše soubory a proměňte je do nové podoby."
          />
          <Service
            icon="fas fa-palette"
            name="Grafický design"
            link={"/"}
            description="Navrhneme Vám moderní propagační materiály, webové komponenty nebo třeba i obal Vašeho produktu tak, aby po něm sáhl každý."
          />
          <Service
            icon="fas fa-computer"
            name="Správa IT a HW"
            link={"/"}
            description="Hardware známe jako svoje boty. Složíme a nainstalujeme Vám počítač na míru - ať už jste architekt, hráč nebo jen běžný uživatel. Nainstalujeme a připravíme do Vašich kanceláří OS."
          />
          <Service
            icon="fas fa-stethoscope"
            name="Diagnóza nápadu"
            link={"/"}
            description="Máte nápad a nevíte kde začít? Tak tuhle fázi známe moc dobře. Rádi Vám nabídneme bezplatnou konzultaci a poté sami 
            uvidíte, jakou cestou se vydat."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
