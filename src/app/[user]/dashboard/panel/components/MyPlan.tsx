import React from "react";
import { ProgressBar } from "@/components";
import { motion } from "framer-motion";

export const MyPlan = () => {
  return (
    <div className="bg-[#ECF0F1]  rounded-xl  py-[10px] px-[15px] ">
      <div>
        <p className="my-[10px] text-lg">My plan - Plus</p>
        <p className="text-sm">El uso se renueva el: 3-may-23</p>
        <div className="mt-[10px]">
          <ProgressBar title="Almacenamiento 23.5 GB / 1 TB" percent={80} />
        </div>
        <div className="mt-[10px]">
          <ProgressBar title="Almacenamiento 23.5 GB / 1 TB" percent={60} />
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          className="bg-[#4702FF] h-[35px]  mt-[40px] p-[3px] rounded-3xl flex justify-center items-center"
        >
          <p className="text-white cursor-pointer">Administrar plan</p>
        </motion.div>
      </div>
    </div>
  );
};
