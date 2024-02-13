"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface PanelItemProps {
  text: string;
  imgSrc: any;
  isActive: boolean;
  onClick: () => void;
}

export const ItemPanel: React.FC<PanelItemProps> = ({
  text,
  imgSrc,
  isActive,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
      className={`flex items-center hover:bg-[#dbdbdb] py-[10px] rounded-xl px-[10px] cursor-pointer focus:bg-[#4702ff] `}
      onClick={onClick}
    >
      <Image src={imgSrc} alt={text} width={30} height={30} />
      <p className={`ml-[10px] ${isActive ? "text-white" : ""}`}>{text}</p>
    </motion.div>
  );
};
