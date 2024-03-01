import React from "react";
import Image from "next/image";

function Ads({src, alt, adContent, children}) {
  return (
    <div>
      <div className="flex flex-col my-10 gap-14 pt-2 items-center justify-center w-full">
        <div className="">
          <p className="text-slate-400">Ad</p>
    
          <Image
            src={src}
            alt={alt}
            height={200}
            width={200}
            className="object-cover"
          />
          <p className="text-slate-600 text-center font-medium">
            {adContent}
          </p>
          <h3 className="text-center">{children}</h3>
        </div>
      </div>
    </div>
  );
}

export default Ads;
