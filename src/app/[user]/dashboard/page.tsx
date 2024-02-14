"use client";
import React from "react";
import { SearchBar } from "@/components";
import Videos from "@/app/[user]/dashboard/components/Videos";
import Image from "next/image";
import { motion } from "framer-motion";
import folderImg from "@/assets/folder.png";
import playerImg from "@/assets/player.png";
import bookImg from "@/assets/books.png";
import trashImg from "@/assets/trash.png";

const Dashboard = () => {
  return (
    <motion.div
      initial={{ x: 1200 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="flex justify-center w-full items-center h-full  px-[10px]"
    >
      <div className="bg-white flex justify-center items-center w-full h-[95%] rounded-xl">
        <div className="flex w-full h-full">
          <div className="flex flex-col w-full">
            <div className="grid grid-cols-2 w-full mt-[40px] p-[20px]">
              <div className="flex justify-around ">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.8 }}
                  className="flex cursor-pointer hover:bg-[#e9e8e8] focus:bg-[#dbdbdb] p-[10px] rounded-xl items-center"
                >
                  <Image
                    src={bookImg}
                    alt="folder"
                    className="h-[30px] w-[30px]"
                  />
                  <p className="hidden xl:block text-sm">Biblioteca</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.8 }}
                  className="flex cursor-pointer hover:bg-[#e9e8e8] focus:bg-[#dbdbdb] p-[10px] rounded-xl items-center"
                >
                  <Image
                    src={trashImg}
                    alt="folder"
                    className="h-[30px] w-[30px]"
                  />
                  <p className="hidden xl:block text-sm">Papelera</p>
                </motion.div>
              </div>
              <div className="flex justify-around">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.8 }}
                  className="flex  justify-center items-center cursor-pointer  hover:bg-[#e9e8e8] focus:bg-[#dbdbdb] p-[10px] rounded-xl"
                >
                  <Image
                    src={folderImg}
                    alt="folder"
                    className="h-[30px] w-[30px]"
                  />
                  <p className="hidden xl:block text-sm">Nueva carpeta</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.8 }}
                  className="flex  justify-center items-center cursor-pointer hover:bg-[#e9e8e8] focus:bg-[#dbdbdb] p-[10px] rounded-xl"
                >
                  <Image
                    src={playerImg}
                    alt="folder"
                    className="h-[30px] w-[30px]"
                  />
                  <p className="hidden xl:block text-sm">Nuevo video</p>
                </motion.div>
              </div>
            </div>
            <div>
              <SearchBar />
            </div>
            <div className="justify-center grid grid-cols-5 border-b-[1px] mt-[30px] px-[10px]">
              <p className="col-span-2 font-semibold">Nombre</p>
              <p className="col-span-1 font-semibold">Video</p>
              <p className="col-span-1 font-semibold">Tamaño</p>
              <p className="col-span-1 md:hidden font-semibold">U. Mod...</p>
              <p className="col-span-1 hidden md:block font-semibold">
                Ultima Modificación
              </p>
            </div>

            <div className="max-h-[600px] overflow-y-auto">
              {data.map((data, index) => (
                <Videos
                  key={index}
                  icon={data.icon}
                  title={data.title}
                  amount={data.amount}
                  size={data.size}
                  lastModified={data.lastModified}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;

const data = [
  {
    icon: folderImg,
    title: "Video 1",
    amount: 8,
    size: "23.5 GB",
    lastModified: "3-may-23",
  },
  {
    icon: folderImg,
    title: "Video 2",
    amount: 8,
    size: "23.5 GB",
    lastModified: "3-may-23",
  },
  {
    icon: folderImg,
    title: "Video 3",
    amount: 8,
    size: "23.5 GB",
    lastModified: "3-may-23",
  },
  {
    icon: folderImg,
    title: "Video 4",
    amount: 8,
    size: "23.5 GB",
    lastModified: "3-may-23",
  },
  {
    icon: folderImg,
    title: "Video 5",
    amount: 8,
    size: "23.5 GB",
    lastModified: "3-may-23",
  },
  {
    icon: folderImg,
    title: "Video 6",
    amount: 8,
    size: "23.5 GB",
    lastModified: "3-may-23",
  },
  {
    icon: folderImg,
    title: "Video 7",
    amount: 8,
    size: "23.5 GB",
    lastModified: "3-may-23",
  },
  {
    icon: folderImg,
    title: "Video 8",
    amount: 8,
    size: "23.5 GB",
    lastModified: "3-may-23",
  },
  {
    icon: folderImg,
    title: "Video 9",
    amount: 8,
    size: "23.5 GB",
    lastModified: "3-may-23",
  },
  {
    icon: folderImg,
    title: "Video 7",
    amount: 8,
    size: "23.5 GB",
    lastModified: "3-may-23",
  },
  {
    icon: folderImg,
    title: "Video 8",
    amount: 8,
    size: "23.5 GB",
    lastModified: "3-may-23",
  },
  {
    icon: folderImg,
    title: "Video 9",
    amount: 8,
    size: "23.5 GB",
    lastModified: "3-may-23",
  },
  {
    icon: folderImg,
    title: "Video 7",
    amount: 8,
    size: "23.5 GB",
    lastModified: "3-may-23",
  },
  {
    icon: folderImg,
    title: "Video 8",
    amount: 8,
    size: "23.5 GB",
    lastModified: "3-may-23",
  },
  {
    icon: folderImg,
    title: "Video 9",
    amount: 8,
    size: "23.5 GB",
    lastModified: "3-may-23",
  },
];
