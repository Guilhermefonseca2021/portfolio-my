"use client";
import Image from "next/image";
import skills from "@/_public/skills.png";
import avatar from "@/_public/logo.jpeg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function About() {
  function scrollToContact() {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack", "Guilherme"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      id="about"
      className="flex w-full h-full items-center justify-center relative gap-14 max-sm:flex-col max-sm:my-12"
    >
      <Image
        src={avatar}
        alt="me"
        width={324}
        height={354}
        className="rounded-full max-sm:w-64 max-sm:h-64 max-sm:mb-4 max-sm:mx-auto shadow-lg shadow-gray-500/50 hover:scale-105 duration-200 cursor-pointer"
      />
      <div className="lg:my-32 z-10">
        <h1 className="text-3xl">
          Hello! i'm <span ref={el} className="text-blue-400"></span>{" "}
        </h1>
        <p className="font-thin text-sm max-w-[320px]">
          <g id="Frame"></g>
          Software engineer, coding more than 2 years as freelancer and working
          to ONGs to help people in Africa as Front-end developer planton-land.
        </p>
        <div className="info flex gap-2">
          <button onClick={scrollToContact} className="flex items-center w-1/1 h-10 my-4 gap-1 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-4 py-0 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
            <p>Contact</p>
          </button>
          <button className="flex items-center w-1/1 h-10 my-4 gap-1 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-4 py-0 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
            <a href="https://www.instagram.com/fonsecae.dev/" target="_blank">follow me</a>
          </button>
        </div>
      </div>
      <div className="absolute top-32 right-0 z-0 max-sm:hidden">
        <Image src={skills} alt="rocket company" width={426} className="cursor-pointer" />
      </div>
    </div>
  );
}
