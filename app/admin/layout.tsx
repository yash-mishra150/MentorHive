

import Sidebar from "@/components/Custom/Sidebar";
import React from "react";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaUserTie } from "react-icons/fa";
import { IoExtensionPuzzle } from "react-icons/io5";
import { RiHome4Fill } from "react-icons/ri";

const AdminOptions = [
  {
    name: "Dashboard",
    icon: <RiHome4Fill size={20} />,
    link: "/admin/dashboard"
  },
  {
    name: "Manage Jobs",
    icon: <FaUserTie size={20} />,
    link: "/admin/jobs"
  },
  {
    name: "Applications",
    icon: <IoExtensionPuzzle size={20} />,
    link: "/admin/applications"
  },
  {
    name: "Message",
    icon: <BiSolidMessageSquareDetail size={20} />,
    link: "/admin/messages"
  },
]


const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar Options={AdminOptions} />

      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
};

export default AdminLayout;
