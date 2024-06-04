"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "./assets/image/Oasis Final Logo.png";
export default function Home() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(5);
  const [before, setBefore] = useState(1);

  useEffect(() => {
    let intervalId;
    const incrementCounter = () => {
      setCurrent((prevCurrent) => (prevCurrent - 1 + 6) % 6);
      setNext((prevNext) => (prevNext - 1 + 6) % 6);
      setBefore((prevBefore) => (prevBefore - 1 + 6) % 6);
    };
    intervalId = setInterval(incrementCounter, 2000);
    return () => clearInterval(intervalId);
  }, []);

  const backgroundImages = [
    { url: "url('/img/background/oasis_exterior2.jpeg')" },
    { url: "url('/img/background/img4.jpg')" },
    { url: "url('/img/background/img1.jpg')" },
    { url: "url('/img/background/img6.jpg')" },
    { url: "url('/img/background/img2.jpg')" },
    { url: "url('/img/background/oasis_exterior1.jpeg')" },
  ];
  return (
    <>
      <div className="slide-container absolute top-0 left-0 bottom-0 right-0">
        <div className="slider">
          <div
            className="slide"
            style={{ backgroundImage: backgroundImages[0].url }}
          ></div>
          <div
            className="slide"
            style={{ backgroundImage: backgroundImages[1].url }}
          ></div>
          <div
            className="slide"
            style={{ backgroundImage: backgroundImages[2].url }}
          ></div>
          <div
            className="slide"
            style={{ backgroundImage: backgroundImages[3].url }}
          ></div>
          <div
            className="slide"
            style={{ backgroundImage: backgroundImages[4].url }}
          ></div>
          <div
            className="slide"
            style={{ backgroundImage: backgroundImages[5].url }}
          ></div>
        </div>
      </div>
      <div className="fixed w-full right-0 left-0 bottom-0 top-0 bg-white opacity-70 sm:opacity-60 z-[101]"></div>
      <div className="fixed w-full top-0 right-0 left-0 bottom-0 z-[102]">
        <div className="w-full max-w-[1440px] mx-auto flex">
          <div className="text-left px-5">
            <a
              href="/"
              className="relative after:bg-none hover:after:h-0 after:h-0"
            >
              <Image src={logo} alt="" width={200} className="mx-auto" />
            </a>
          </div>
          <div className="item-center content-center text-right w-full px-6">
            <a
              href="/contact"
              className="relative font-bold font-spartan cursor-pointer"
            >
              contact
            </a>
          </div>
        </div>
        <div className="mt-[16vh]">
          <Image src={logo} alt="" width={300} className="mx-auto" />

          <p className="text-xl font-ivy-mode text-center font-bold mt-4 mb-5">
            One to Two Bedroom Condominiums from $708,500
          </p>
          <p className="text-4xl font-ivy-mode text-center uppercase font-bold">
            coming soon
          </p>
          <div className="mx-auto w-[250px] text-center mt-12 sm:mt-16 ">
            <a
              href="/contact"
              className="relative after:bg-none hover:after:h-0 after:h-0 duration-700 border-black border-[2px] rounded-full px-6 py-4 uppercase text-center text-xl hover:bg-black hover:text-white cursor-pointer"
            >
              Find Out More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
