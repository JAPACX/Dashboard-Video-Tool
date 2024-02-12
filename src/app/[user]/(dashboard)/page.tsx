import React from "react";
// import Image from "next/image";
import ProgressBar from "@/components/ProgressBar";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-around h-full w-full p-[15px]">
      <div className="flex justify-center items-center">
        <div className="h-[100px] w-[100px] rounded-full bg-black justify-center items-center flex">
          <p className="text-white">Icono</p>
        </div>
      </div>
      <div className="">
        <Service title="servicio" />
        <Service title="servicio" />
        <Service title="servicio" />
        <Service title="servicio" />

        <p>Otros</p>
        <Service title="servicio" />
        <Service title="servicio" />
      </div>
      <div className="bg-[#ECF0F1]  rounded-xl  py-[20px] px-[5px]">
        <div>
          <p className="mt-[20px]">My plan - Plus</p>
          <p className="text-sm">El uso se renueva el: 3-may-23</p>
          <div className="mt-[10px]">
            <p className="text-sm">Almacenamiento 23.5 GB / 1 TB</p>
            <ProgressBar percent={50} showInfo={false} />
          </div>
          <div className="mt-[10px]">
            <p className="text-sm">Almacenamiento 23.5 GB / 1 TB</p>
            <ProgressBar percent={50} showInfo={false} />
          </div>
          <div className="bg-blue-400 rounded-xl">
            <p>Administrar plan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

const Service = (props: any) => {
  const { image, title } = props;
  return (
    <div className="flex justify-around items-center">
      {/* <Image src={image} alt="" /> */}
      <div className="h-[30px] w-[30px] bg-slate-200"></div>
      <p>{title}</p>
    </div>
  );
};
