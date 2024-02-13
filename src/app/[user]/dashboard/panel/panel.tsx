import React from "react";
import Image from "next/image";
import { MyPlan } from "@/app/[user]/dashboard/panel/components";
//Media
import logoImg from "@/assets/logo.png";
import gridImg from "@/assets/grid.png";
import folderImg from "@/assets/folder.png";
import playerImg from "@/assets/player.png";
import chartImg from "@/assets/chart.png";
import settingsImg from "@/assets/settings.png";
import helpImg from "@/assets/help.png";
const Panel = () => {
  return (
    <div className="flex justify-center items-center h-full ">
      <div className="bg-white flex justify-center items-center w-[90%] h-[95%] rounded-xl">
        <div className="grid grid-rows-3 h-full">
          <div className="row-span-1 flex justify-center items-center">
            <Image src={logoImg} alt="folder" width={80} height={80} />
          </div>
          <div className="row-span-2 flex flex-col justify-around pl-[15px]">
            <div className="flex items-center">
              <Image src={gridImg} alt="grid" width={30} height={30} />
              <p className="ml-[10px]">Dashboard</p>
            </div>
            <div className="flex items-center">
              <Image src={folderImg} alt="folder" width={30} height={30} />
              <p className="ml-[10px]">Videos</p>
            </div>
            <div className="flex items-center">
              <Image src={playerImg} alt="player" width={30} height={30} />
              <p className="ml-[10px]">Player</p>
            </div>
            <div className="flex items-center">
              <Image src={chartImg} alt="chart" width={30} height={30} />
              <p className="ml-[10px]">Analytics</p>
            </div>
            <h4 className="text-[#263238] opacity-50">Others</h4>
            <div className="flex items-center">
              <Image src={settingsImg} alt="Settings" width={30} height={30} />
              <p className="ml-[10px]">Settings</p>
            </div>
            <div className="flex items-center">
              <Image src={helpImg} alt="Help" width={30} height={30} />
              <p className="ml-[10px]">Help</p>
            </div>
          </div>

          <div className="row-span-1">
            <MyPlan />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
