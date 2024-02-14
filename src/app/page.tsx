"use client";
import Panel from "@/app/[user]/dashboard/panel/panel";
import Dashboard from "@/app/[user]/dashboard/dashboard";
import { Sidebar } from "@/components/SideBar";

export default function DashboardHome() {
  return (
    <div className="flex justify-center h-full bg-[#ECF0F1] ">
      <div className="container ">
        <div className="grid grid-cols-3 h-full ">
          <div className=" col-span-1 hidden md:block">
            <Panel />
          </div>
          <div className="col-span-3 md:col-span-2">
            <Sidebar>
              <Panel />
            </Sidebar>
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
}
