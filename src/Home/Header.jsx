import React from "react";

export default function Header() {
  return (
    <header className="header-home bg-right md:bg-top h-[500px] bg-cover">
        <div className="w-[90%] m-auto">
            <div className="grid grid-cols-2">
                <div>
                    <h2 className="bg-[#61a48d] text-white p-10 md:w-[80%] m-auto mt-20 text-[20px] md:text-[28px] lg:text-[35px] rounded-2xl pl-10">Always laugh<br /> when you can,<br />it is free<br />medicine</h2>
                </div>
            </div>
        </div>
    </header>
  );
}
