import React, { useRef } from "react";
import Footer from "../components/Footer";
//Components
import Header from "../components/Header";
import NormalButton from "../components/NormalButton";
import WhyUs from "../components/WhyUs";
import SocialIcon from "../components/SocialIcon";
import { useForm, ValidationError } from "@formspree/react";

const Kontakt = () => {
  const formRef = useRef(null);
  return (
    <div className="relative bg-bg text-white min-h-screen">
      <div className="absolute top-0 bottom-0 w-full green-gradient"></div>
      <Header />
      <div className="main-container relative mt-12">
        <div className="relative py-14 mb-8">
          <img
            src="/img/logo/osmicka.svg"
            alt="eight"
            className="max-w-[300px] w-full opacity-40 mb-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          />
          <h1 className="relative text-5xl text-center z-20">Kontakt</h1>
        </div>
        <div className="bg-grayBg rounded-lg p-8 flex flex-col items-center mb-8">
          <i className="far fa-comment text-lightGreen text-5xl mb-2"></i>
          <h2 className="text-3xl text-center mb-4">Spojte se s námi</h2>
          <div className="space-y-2 flex flex-col items-center mb-4">
            <div className="flex items-center space-x-4">
              <i className="fas fa-phone"></i>
              <p className="text-lightGreen">(+420) 737 951 560</p>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fas fa-envelope"></i>
              <p className="text-lightGreen underline">info@statements.cz</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-8 text-2xl mb-8">
            <SocialIcon
              type={"instagram"}
              size={"2xl"}
              link="https://www.instagram.com/statements.cz/"
            />
            <SocialIcon type={"facebook"} size={"2xl"} />
            <SocialIcon type={"linkedin"} size={"2xl"} />
          </div>

          <NormalButton
            handleClick={() => {
              formRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Chci se sejít!
          </NormalButton>
        </div>
        <div
          ref={formRef}
          className="bg-grayBg rounded-lg p-8 flex flex-col items-center"
        >
          <i className="far fa-envelope-open text-lightGreen text-5xl mb-2"></i>
          <h2 className="text-3xl mb-4">Napište nám</h2>
          <ContactForm />
        </div>
        <WhyUs />
      </div>
      <Footer />
    </div>
  );
};

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xnqwovow");
  if (state.succeeded) {
    return (
      <div>
        <h4 className="text-xl mt-4 text-lightGreen">
          Děkujeme za zaslání! Co nejdříve se vám ozveme!
        </h4>
      </div>
    );
  }
  return (
    <>
      {state.errors && (
        <div className="text-red-700 mb-4">
          <ValidationError errors={state.errors} />
          <ValidationError field="name" prefix="Name" errors={state.errors} />
          <ValidationError field="email" prefix="Email" errors={state.errors} />
          <ValidationError
            field="message"
            prefix="Message"
            errors={state.errors}
          />
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col items-center ${
          state.submitting ? "opacity-50" : ""
        }`}
      >
        <div className="grid grid-cols-2 grid-rows-5 gap-x-4 gap-y-2 mb-4">
          <div className="mb-2 ">
            <p className="text-sm mb-1">Jméno*</p>
            <input
              className="bg-bg rounded-md p-2 outline-none"
              type="text"
              placeholder="Jan Novák"
              name="name"
              required
            />
          </div>
          <div className="mb-2">
            <p className="text-sm mb-1">E-mail*</p>
            <input
              className="bg-bg rounded-md p-2 outline-none"
              type="email"
              placeholder="priklad@email.com"
              name="email"
              required
            />
          </div>
          <div className="mb-2">
            <p className="text-sm mb-1">Telefon</p>
            <input
              className="bg-bg rounded-md p-2 outline-none"
              type="phone"
              placeholder="+420"
              name="phone"
            />
          </div>
          <div className="mb-2">
            <p className="text-sm mb-1">Firma</p>
            <input
              className="bg-bg rounded-md py-2 px-2 outline-none"
              type="text"
              name="company"
            />
          </div>
          <div className="row-span-3 col-span-full">
            <p className="mb-1">Vaše zpráva*</p>
            <textarea
              required
              name="message"
              className="h-[200px] w-full bg-bg rounded-md resize-none outline-none p-2"
            ></textarea>
          </div>
        </div>

        <NormalButton>Odeslat</NormalButton>
      </form>
    </>
  );
};

export default Kontakt;
