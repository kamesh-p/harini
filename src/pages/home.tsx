import React, { useState, useEffect } from "react";

const Hero = () => {
  const fullText: string[] = [
    "Frontend developer",
    "Web Designer",
    "Data Aspirant",
    "Love Towards Teaching",
  ];
  const [typedText, setTypedText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        if (typedText.length === fullText[currentIndex].length) {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % fullText.length);
            setTypedText("");
          }, 1000); // Delay before starting to erase
        } else {
          setTypedText(
            (prevText) => prevText + fullText[currentIndex][prevText.length]
          );
        }
      } else {
        if (typedText.length === 0) {
          clearInterval(interval);
        } else {
          setTypedText((prevText) => prevText.slice(0, -1));
        }
      }
    }, 100); // Adjust typing speed here (milliseconds)

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typedText, currentIndex, isTyping]);

  return (
    <>
      <div className="flex items-center ">
        <div className="w-1/3 p-12 mt-20 ml-20">
          <h1 className=" text-white text-8xl font-effect-neon font-league-spartan font-bold">
            Hi, my <br></br> name is Nithiyaraj
          </h1>
          <br></br>
          <h3 className="text-white text-4xl ">{typedText}</h3>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default Hero;
