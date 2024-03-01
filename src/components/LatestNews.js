import React from "react";

function LatestNews({ title, location }) {
  return (
    <>
      <div>
        <div className="flex flex-row pt-2 items-center">
          <div className="w-3 h-3 rounded-full bg-[#4C64FF] ml-[-5px]"></div>
          <h3 className="text-[#4C64FF] pl-2 uppercase">{location}</h3>
        </div>
        <div className="border-b border-l-2 border-l-[#4C64FF] pl-2 py-1.5">
          <p className="font-semibold leading-5">{title}</p>
        </div>
      </div>
    </>
  );
}

export default LatestNews;
