import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bottom-0 py-4 bg-gray-600 text-white w-full">
      <div className="mx-2 sm:mx-6 leading-5 items-center justify-center sm:justify-around xl:items-start xl:justify-center flex flex-col sm:flex-row gap-6 sm:gap-16 text-[16px] xl:max-w-[80%] 2xl-max-w-[50%] xl:mx-auto">
        <div className="flex flex-col sm:gap-3 xl:flex-row">
          <b>Leave news tips:</b>
          <div className="flex flex-col">
            <p>
              <b>Phone:</b> 010-112231
            </p>
            <p className="italic">
              <b>Email:</b> tips@chasnews.se
            </p>
            <p className="pt-8 sm:pt-4 pb-2">
              <Link className="border rounded-full py-2 px-4 bg-[#4C64FF] text-[#fefefe]" href="/">Work with us</Link>
            </p>
          </div>
        </div>
        <div className=" flex flex-col sm:gap-3 xl:flex-row">
          <b>Responsible publishers:</b>
          <div className="grid sm:grid-cols-2 pt-2 xl:pt-0">
            <div className="mr-4 italic">
              <p>Rebecka Gamble</p>
              <p>Amanda Jonört</p>
              <p>Elias Burhan</p>
            </div>
            <div className="italic">
              <p>Qasim Khan</p>
              <p>Yaser E</p>
              <p>Rodrigo Sebastian</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
