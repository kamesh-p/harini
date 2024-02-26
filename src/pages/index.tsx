/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import "../app/globals.css";
import Image from "next/image";
import Heropic from "../../public/Harini.png";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Academic from "./Academic";
import Projects from "./Projects";
import Footer from "./Footer";

export default function Home() {
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
    }, 100);

    return () => clearInterval(interval);
  }, [typedText, currentIndex, isTyping]);
  return (
    <div>
      <div className="h-screen w-full bg-orange-50 flex flex-col  px-6">
        <div className="text-sm font-medium text-center mt-5 text-gray-500 dark:text-gray-400">
          <ul className="flex flex-wrap -mb-px">
            <li className="me-2">
              <a className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300">
                Profile
              </a>
            </li>
            <Link href="/contact">
              <li className="me-2">
                <p className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300">
                  Contacts
                </p>
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-12">
          <div className="w-full md:w-3/4">
            <h1 className="text-4xl md:text-5xl font-bold  text-yellow-800 text-center md:text-left">
              "Hi, This is Harini ,
            </h1>
            <h3 className="text-xl md:text-2xl font-medium text-yellow-700 text-center md:text-left my-10">
              {typedText}
            </h3>
            <div className="flex justify-center md:justify-start mt-40  space-x-4 ">
              {/* <button className="bg-yellow-700 rounded-xl text-white p-2">
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>

              <a
                href="/Harini_resume_updated.pdf"
                download="Harini_resume_updated.pdf"
              >
                Download Resume
              </a>
            </button> */}
              <button className="bg-yellow-700 rounded-xl  p-2 hover:bg-yellow-600 text-white font-bold py-2 px-4  inline-flex items-center">
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <a
                  href="/Harini_resume_updated.pdf"
                  download="Harini_resume_updated.pdf"
                >
                  Resume
                </a>
              </button>
              <button className="bg-orange-400 rounded-xl  p-2 hover:bg-orange-700 text-white font-bold py-2 px-4  inline-flex items-center">
                Contact
              </button>
            </div>
          </div>
          <div className="relative my-5 md:my-0 w-full md:w-2/4 flex   justify-end">
            <div className=" pt-5 h-96 rounded-3xl  ">
              <div className=" relative w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-2xl border-2 border-transparent">
                <Image
                  src={Heropic}
                  alt=""
                  layout="fill"
                  className="shadow-2xl  "
                  style={{
                    filter: "drop-shadow(10px 10px 25px teal)",
                    clipPath:
                      "polygon(0% 0%, 100% 0%, 100% 70%, 50% 100%, 0% 70%)",
                  }}
                />
              </div>

              <div className="justify-center mt-10 rounded-xl px-10 bg-orange-400 flex gap-5">
                <div>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2x"
                    style={{ color: "white" }}
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                    fill="red"
                    style={{ color: "white" }}
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2x"
                    style={{ color: "white" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Academic />
      <Projects />
      <Footer />
    </div>
  );
}
