"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MyPlan } from "@/app/[user]/dashboard/panel/components";
import { motion } from "framer-motion";
import { ItemPanel } from "@/app/[user]/dashboard/panel/components";

// Media
import logoImg from "@/assets/logo.png";
import gridImg from "@/assets/grid.png";
import folderImg from "@/assets/folder.png";
import playerImg from "@/assets/player.png";
import chartImg from "@/assets/chart.png";
import settingsImg from "@/assets/settings.png";
import helpImg from "@/assets/help.png";

const Panel = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeIndex !== null) {
        const target = event.target as HTMLElement;
        const isOutsidePanelItem = !target.closest(".panel-item");
        if (isOutsidePanelItem) {
          setActiveIndex(null);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [activeIndex]);

  return (
    <motion.div
      initial={{ x: -900 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="flex justify-center items-center h-full"
    >
      <div className="bg-white flex justify-center items-center w-[90%] h-[95%] rounded-xl">
        <div className="grid grid-rows-3 h-full w-full">
          <div className="row-span-1 flex justify-center items-center">
            <Image src={logoImg} alt="folder" width={80} height={80} />
          </div>
          <div className="row-span-2 flex flex-col justify-around px-[25px]">
            <ItemPanel
              text="Dashboard"
              imgSrc={gridImg}
              isActive={activeIndex === 0}
              onClick={() => handleClick(0)}
            />
            <ItemPanel
              text="Videos"
              imgSrc={folderImg}
              isActive={activeIndex === 1}
              onClick={() => handleClick(1)}
            />
            <ItemPanel
              text="Player"
              imgSrc={playerImg}
              isActive={activeIndex === 2}
              onClick={() => handleClick(2)}
            />
            <ItemPanel
              text="Analytics"
              imgSrc={chartImg}
              isActive={activeIndex === 3}
              onClick={() => handleClick(3)}
            />
            <h4 className="text-[#263238] opacity-50 my-[10px] ">Others</h4>

            <ItemPanel
              text="Settings"
              imgSrc={settingsImg}
              isActive={activeIndex === 4}
              onClick={() => handleClick(4)}
            />
            <ItemPanel
              text="Help"
              imgSrc={helpImg}
              isActive={activeIndex === 5}
              onClick={() => handleClick(5)}
            />
          </div>
          <div className="row-span-1 p-[15px]">
            <MyPlan />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Panel;
