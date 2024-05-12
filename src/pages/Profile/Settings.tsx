import React from "react";
import Account from "./Account";
import ChangePassword from "./ChangePassword";

const Settings = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-[#1D2026] text-[24px] font-semibold">
        Account settings
      </h1>
      <Account />
      <ChangePassword />
    </div>
  );
};

export default Settings;
