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
    <div id="about" className="flex w-full h-full  items-center justify-center relative gap-14">
      <Image
        src={avatar}
        alt="me"
        width={354}
        height={354}
        className="rounded"
      />
      <div className="my-32 z-10">
        <h1 className="text-3xl">
          Hello! i'm <span ref={el} className="text-blue-400"></span>{" "}
        </h1>
        <p className="font-thin text-sm max-w-[320px]">
          <g id="Frame"></g>
          Software engineer, coding more than 1 years as freelancer and working
          to ONGs to help people in Africa as Front-end developer at therapy.
        </p>
        <div className="info flex">
          <button
            onClick={scrollToContact}
            className="bg-gray-700 text-slate-200 text-sm p-2 ease-out hover:bg-slate-800 rounded my-4"
          >
            Contact
          </button>
          <button className="mx-2 bg-gray-700 text-slate-200 text-sm p-2 ease-out hover:bg-slate-800 rounded my-4">
            <a href="">Follow Me</a>
          </button>
        </div>
      </div>
      <div className="absolute top-20 right-0 z-0">
        <Image src={skills} alt="rocket company" className="cursor-pointer" />
      </div>
    </div>
  );
}
