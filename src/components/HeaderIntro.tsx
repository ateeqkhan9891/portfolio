import React from "react";
import Button from "./Button";
import RadialGradient from "./RadialGradient";
import { headerIntroData } from "../assets/lib/data";
import { useSectionInView } from "../assets/lib/hooks";
import { useActiveSectionContext } from "../context/active-section-context";
import TypingSubtitle from "../assets/components/introsubtitle";

import { BsMouse } from "react-icons/bs";

const HeaderIntro: React.FC = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();



  // subtitle animation
const phrases = [
  "Machine Learning",
  "Data Science",
  "Web Scraping",
  "Flask + React",
  "Data Visualization",
];

const [text, setText] = React.useState("");
const [phraseIndex, setPhraseIndex] = React.useState(0);.,/
const [isDeleting, setIsDeleting] = React.useState(false);

React.useEffect(() => {
  const currentPhrase = phrases[phraseIndex];
  const timeout = setTimeout(() => {
    if (!isDeleting && text === currentPhrase) {
      setIsDeleting(true);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      const nextText = isDeleting
        ? currentPhrase.slice(0, text.length - 1)
        : currentPhrase.slice(0, text.length + 1);
      setText(nextText);
    }
  }, isDeleting ? 50 : 150);

  return () => clearTimeout(timeout);
}, [text, isDeleting, phraseIndex]);





  return (
    <section
      className="hero flex flex-col justify-center gap-10 items-center h-full max-lg:h-full max-lg:gap-6"
      ref={ref}
      id="home"
    >
      <RadialGradient scale="scale-y-125" opacity="opacity-30" />

      <img
        src={headerIntroData.profilepicture}
        alt={headerIntroData.profilepicture}
        className="w-60 drop-shadow-2xl rounded-full shadow-2xl avatar-img max-lg:w-3/4"
      />
      <h1>
        {headerIntroData.title.en}
        <span className="wave text-7xl">&#128075;&#127997;</span>
      </h1>
      <h2 className="text-4xl font-semibold text-orange-500 border-r-2 border-orange-500 pr-2 whitespace-nowrap overflow-hidden">
  {text}
</h2>

      <p className="w-1/2 text-center max-lg:hidden">
        {headerIntroData.description.en}
      </p>

      <div className="button-container flex items-center justify-center mr-8 gap-10 mb-12 max-lg:flex-col max-lg:items-center">
        {headerIntroData.buttons.map((button, index) => (
          <Button
            key={index}
            label={button.label.en}
            iconSVG={button.icon}
            link={`#${button.name.toLocaleLowerCase()}`}
            buttoncolor={button.color}
            onClick={() => {
              setActiveSection(button.name);
              setTimeOfLastClick(Date.now());
            }}
          />
        ))}
      </div>
      <div className="scroll-down-container animate-bounce flex gap-6">
        <BsMouse className="text-[2.6rem]" />
      </div>
    </section>
  );
};

export default HeaderIntro;
