

import Sidebar from "@/components/Custom/Sidebar";
import React from "react";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoExtensionPuzzle, IoSearch } from "react-icons/io5";
import { RiHome4Fill } from "react-icons/ri";

const ClientOptions = [
    {
      name: "Home",
      icon: <RiHome4Fill size={20} />,
      link: "/client/home"
    },
    {
      name: "Search Job",
      icon: <IoSearch size={20} />,
      link: "/client/jobs"
    },
    {
      name: "Applications",
      icon: <IoExtensionPuzzle size={20} />,
      link: "/client/applications"
    },
    {
      name: "Message",
      icon: <BiSolidMessageSquareDetail size={20} />,
      link: "/client/messages"
    },
  ]


const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar Options={ClientOptions} />

      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
};

export default ClientLayout;
