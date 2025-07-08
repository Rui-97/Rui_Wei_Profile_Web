import React from "react";

const NavItemMobile = ({ navText }: { navText: string }) => {
  return (
    <div className="flex flex-col justify-center sticky top-0 bg-darkblue mb-6 h-16">
      <p className="text-lg text-highlight font-semibold ">
        {navText.toUpperCase()}
      </p>
    </div>
  );
};

export default NavItemMobile;
