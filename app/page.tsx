"use client";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import SideBar from "@/components/SideBar";
import Project from "@/components/Project";
import Cursor from "@/components/Cursor";
import Experience from "@/components/Experience";
import { EXPERIENCES, PROJECTS } from "@/data/data";
import { NavId } from "@/types/navigation";

export default function Home() {
  const [activeSection, setActiveSection] = useState<NavId>("about");
  const mainRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const mainElement = mainRef.current;
    if (!mainElement) return;

    const sections = mainElement.querySelectorAll("section");
    const options = {
      root: mainElement,
      rootMargin: "0px",
      threshold: [0.9],
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as NavId);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="w-screen h-screen" id="root">
      <Cursor />
      <div className="flex flex-col md:flex-row gap-32 max-w-screen-xl mx-auto h-screen">
        <SideBar activeSection={activeSection} />
        {/* main content */}
        <main
          ref={mainRef}
          className="flex-1 py-16 px-6 scrollbar overflow-auto"
        >
          <section id="about">
            <p className="mb-4">
              Hi, I’m Cindy (Rui) Wei – a passionate front-end developer
              dedicated to creating visually compelling and interactive web
              experiences. I specialize in transforming innovative ideas into
              dynamic digital solutions using modern technologies like React,
              Next.js, Typescript, and Tailwind CSS.
            </p>
            <p className="mb-4">
              Currently, I’m working at an AI startup, where I played a key role
              in launching an LLM-based math tutor chat app that now serves over
              1000 daily active users. I built interactive UI components with
              React Hooks, ensured seamless page transitions and SEO with
              Next.js, and integrated advanced features like dynamic LaTeX
              rendering and secure user authentication with Firebase and Redux.
            </p>
            <p className="mb-4">
              My diverse project experience—from responsive music school
              websites to full-stack restaurant ordering systems and a task
              management mobile app enhanced with NLP—showcases my ability to
              blend creativity with technical expertise. I’m driven by a
              commitment to clean, maintainable code and a passion for pushing
              the boundaries of user experience.
            </p>
            <p className="mb-4">Let’s build something amazing together!</p>
            <p className="mb-4"></p>

            <div className="group text-highlight mt-8 hover:text-green cursor-pointer">
              <a
                href="/ruiWeiResume.pdf"
                target="_blank"
                className="flex flex-row gap-2"
              >
                <p className="text-subtitle">View Résumé</p>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:ease-in-out group-hover:duration-300"
                />
              </a>
            </div>
          </section>

          <section id="experiences" className="py-40 min-h-[60vh]">
            {EXPERIENCES.map((experience, index) => (
              <Experience
                key={index}
                duration={experience.duration}
                title={experience.title}
                description={experience.description}
                tags={experience.tags}
                link={experience.link}
              />
            ))}
          </section>

          <section id="projects">
            {PROJECTS.map((p, i) => (
              <Project
                key={i}
                title={p.title}
                description={p.description}
                tags={p.tags}
                imgSrc={p.imgSrc}
                link={p.link}
              />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
