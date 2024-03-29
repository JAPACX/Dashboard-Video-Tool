"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  title: string;
  icon: any;
  amount: number;
  size: string;
  lastModified: string;
}

const Videos: React.FC<Props> = ({
  title,
  amount,
  icon,
  size,
  lastModified,
}: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.9 }}
      className="justify-center grid grid-cols-5 border-b-[1px] mt-[30px] px-[10px] hover:bg-[#dbdbdb] cursor-pointer"
    >
      <div className="col-span-2 flex justify-start">
        <input
          type="checkbox"
          className="mr-[10px] h-[15px] w-[15px] md:h-[20px] md:w-[20px] cursor-pointer self-center"
        />
        <Image src={icon} alt={title} className="h-[30px] w-[30px]  " />
        <p>{title}</p>
      </div>

      <p className="col-span-1 flex items-center">{amount}</p>
      <p className="col-span-1 flex items-center">{size}</p>
      <p className="col-span-1 flex items-center">{lastModified}</p>
    </motion.div>
  );
};

export default Videos;
