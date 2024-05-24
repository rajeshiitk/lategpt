import React from "react";
import { Icon } from "./Icon";
import { Button } from "./ui/button";
import Image from "next/image";
import ProfileButton from "./ProfileButton";
import ChatgptButton from "./ChatgptButton";
import { MobileSidebar } from "./Sidebar";

interface Props {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Topbar = ({ isSidebarOpen, toggleSidebar }: Props) => {
  return (
    <nav className="h-14 flex p-4 items-center  justify-between ">
      <MobileSidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="flex justify-evenly items-center">
        <button
          onClick={toggleSidebar}
          className={`h-14 w-14 sm:flex hidden items-center justify-center ${
            isSidebarOpen ? "hidden" : "block"
          }`}
        >
          <Icon src="/icons/sidebar.svg" alt="sidebar" />
        </button>
        <button
          onClick={toggleSidebar}
          className={`h-14 w-14 sm:flex hidden items-center justify-center ${
            isSidebarOpen ? "hidden" : "block"
          }`}
        >
          <Icon src="/icons/new-chat.svg" alt="new-chat" />
        </button>

        <ChatgptButton />
      </div>
      <button className="h-14 w-14 flex items-center justify-center sm:hidden ">
        <Icon src="/icons/new-chat.svg" alt="new-chat" />
      </button>
      <div className="hidden sm:block">
        <ProfileButton />
      </div>
    </nav>
  );
};

export default Topbar;
