import React from "react";
import { SearchBar } from "@/components";
import Videos from "@/app/[user]/dashboard/components/Videos";

const Dashboard = () => {
  return (
    <div className="flex justify-center  items-center h-full ">
      <div className="bg-white flex justify-center items-center w-full h-[95%] rounded-xl">
        <div className="flex w-full h-full">
          <div className="flex flex-col w-full">
            <div className="grid grid-cols-2 w-full mt-[20px] p-[20px]">
              <div className="flex">
                <div className="flex mr-[20px]">
                  <p>img</p>
                  <p>Biblioteca</p>
                </div>
                <div className="flex">
                  <p>img</p>
                  <p>Papelera</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="flex">
                  <p>img</p>
                  <p>Nueva carpeta</p>
                </div>
                <div className="flex">
                  <p>img</p>
                  <p>Nueva carpeta</p>
                </div>
              </div>
            </div>
            <div>
              <SearchBar />
            </div>
            <div className="grid grid-cols-6 border-b-[1px]">
              <p className="col-span-3">Nombre</p>
              <p className="col-span-1">Video</p>
              <p className="col-span-1">Tamaño</p>
              <p className="col-span-1">Ultima Modificación</p>
            </div>

            {Fakedata.map((data) => (
              <Videos
                key={data.title}
                title={data.title}
                icon={data.icon}
                size={data.size}
                lastModified={data.lastModified}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

const Fakedata = [
  {
    title: "Video 1",
    icon: "img",
    size: "23.5 GB",
    lastModified: "3-may-23",
  },
  {
    title: "Video 2",
    icon: "img",
    size: "23.5 GB",
    lastModified: "3-may-23",
  },
  {
    title: "Video 3",
    icon: "img",
    size: "23.5 GB",
    lastModified: "3-may-23",
  },
  {
    title: "Video 4",
    icon: "img",
    size: "23.5 GB",
    lastModified: "3-may-23",
  },
  {
    title: "Video 5",
    icon: "img",
    size: "23.5 GB",
    lastModified: "3-may-23",
  },
  {
    title: "Video 6",
    icon: "img",
    size: "23.5 GB",
    lastModified: "3-may-23",
  },
];
