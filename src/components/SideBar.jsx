import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="left-0 w-[30%] bg-slate-400 h-screen">
      <Link to="/" className="block p-4 hover:bg-slate-500 cursor-pointer">
        Registration
      </Link>
      <Link
        to="/deposit"
        className="block p-4 hover:bg-slate-500 cursor-pointer"
      >
        Deposit
      </Link>
      <Link
        to="/withdrawal"
        className="block p-4 hover:bg-slate-500 cursor-pointer"
      >
        Withdrawal
      </Link>
      <Link
        to="/check-deposit"
        className="block p-4 hover:bg-slate-500 cursor-pointer"
      >
        Check Deposit
      </Link>
      <Link
        to="/check-balance"
        className="block p-4 hover:bg-slate-500 cursor-pointer"
      >
        Check Balance
      </Link>
    </div>
  );
}
