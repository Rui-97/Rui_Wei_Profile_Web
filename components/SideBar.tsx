"use client";
import React, { useState } from "react";
import Image from "next/image";
import avatar from "@/public/avatar.png";
import { NavId } from "@/types/navigation";
import NavItem from "./NavItem";

const NAV_IDS: NavId[] = ["about", "experiences", "projects"];

const SideBar = ({ activeSection }: { activeSection: NavId }) => {
  const [hovered, setHovered] = useState<NavId>("");

  return (
    <div className="max-w-[500px] h-screen py-16 px-6 flex flex-col justify-between">
      <Image
        src={avatar}
        alt=""
        width={180}
        height={220}
        className="rounded-xl"
      />
      <div className="mt-6">
        <p className="text-title font-bold text-highlight">Rui Wei</p>
        <p className="text-subtitle font-semibold text-highlight mb-4">
          Frontend Developer
        </p>
        <p>
          I build interactive, user-friendly web applications with modern
          technologies.
        </p>
      </div>

      <nav className="flex-1 mt-20 flex flex-col gap-6">
        {NAV_IDS.map((id, index) => (
          <NavItem
            key={index}
            navId={id}
            setHovered={setHovered}
            hovered={hovered}
            activeSection={activeSection}
          />
        ))}
      </nav>

      {/* social medium */}
      <div className="flex gap-4">
        <a href="https://github.com/Rui-97" target="_blank">
          <Image
            src="gitHubIcon.svg"
            alt="github icon"
            width={40}
            height={40}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/rui-wei-973536193/"
          target="_blank"
        >
          <Image
            src="linkedInIcon.svg"
            alt="linkedIn icon"
            width={40}
            height={40}
          />
        </a>
      </div>
    </div>
  );
};

export default SideBar;
