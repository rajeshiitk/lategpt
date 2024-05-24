import React from "react";

interface Props {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Topbar = ({ isSidebarOpen, toggleSidebar }: Props) => {
  return <div className="h-14  ">Topbar</div>;
};

export default Topbar;
