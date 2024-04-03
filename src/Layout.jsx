import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import Registration from "./pages/Registration";
import Deposit from "./pages/Deposit";
export default function Layout() {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
      {/* <Registration /> */}
    </div>
  );
}
