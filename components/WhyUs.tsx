import Link from "next/link";
import React from "react";
import GlowingButton from "./GlowingButton";
import NormalButton from "./NormalButton";

const WhyUs = () => {
  return (
    <section className="my-12">
      <h2 className="font-bold text-3xl text-center mb-4">
        Proč zrovna statements?
      </h2>
      <p className="text-center mb-8 text-proseText">
        Víme, jaké to je, stát v krušných začátcích a tvrdě pracovat na svých
        cílech. Náš přístup není v žádném případě korporátní a cokoliv s Vámi
        rádi probereme v naprosto přátelské rovině. Máme zkušenosti jak z
        větších, tak i menších firem, přičemž většina z nich měla svůj unikátní
        záměr. Naše práce je zároveň i náš koníček, proto se vše snažíme
        dotáhnout do detailu a hlavně tak, abyste Vy byli maximálně spokojeni.
        Jsme mladí kluci a na vše se díváme moderním a trendy stylem - z on-line
        světa nám nic neunikne! S náročnějšími problémy se radíme s experty
        napříč celým profesním polem. Zkuste nám dát šanci a můžeme si společně
        a nezavázně promluvit o Vašich ambicích a cílech. <br /> <br /> Budeme
        se moc těšit.
      </p>
      <div className="flex justify-center">
        <Link href="/kontakt">
          <div>
            <NormalButton>Spojte se s námi</NormalButton>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default WhyUs;
