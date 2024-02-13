"use client";
import React, { useState } from "react";
import Image from "next/image";
import menuImg from "@/assets/menu.png";

interface SidebarProps {
  children: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <div
        onClick={toggleMenu}
        className="bg-[#4702ff] fixed left-0 top-0 p-4 w-full"
      >
        <Image
          className="cursor-pointer"
          src={menuImg}
          alt="grid"
          width={30}
          height={30}
        />
      </div>
      <div
        className={`fixed inset-y-0 left-0 w-[90%] bg-white h-full transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-40`}
      >
        <button className="absolute top-0 right-0 p-4" onClick={toggleMenu}>
          {isOpen && <h1 className="text-3xl opacity-60 cursor-pointer">x</h1>}
        </button>
        <div className="p-4 h-full">
          <div className="h-full">{children}</div>
        </div>
      </div>
    </div>
  );
};
