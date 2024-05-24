"use client";
import React from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import BottomInputBar from "@/components/BottomInputBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  function toggleSidebar() {
    setIsSidebarOpen((prev) => !prev);
  }

  return (
    <main className="h-[calc(100svh)]   flex">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="w-full relative">
        <Topbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {children}
      </div>
    </main>
  );
};

export default Layout;
