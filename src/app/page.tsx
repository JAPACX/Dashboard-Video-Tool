import Dashboard from "@/app/[user]/(dashboard)/page";
export default function Home() {
  return (
    <div className="flex justify-center h-full bg-[#ECF0F1]">
      <div className="container">
        <div className="grid grid-cols-3 h-full">
          <div className=" col-span-1">
            <div className="flex  justify-center  items-center h-full ">
              <div className="bg-white flex justify-center items-center w-[90%] h-[95%] rounded-xl">
                <Dashboard />
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex justify-center  items-center h-full ">
              <div className="bg-white flex justify-center items-center w-[90%] h-[95%] rounded-xl">
                <p>example</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
