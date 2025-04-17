import React from "react";

export default function Banner({
    title,
    description,
}) {
  return (
    <div className="relative banner w-full text-center py-7 text-white ">
      <span className="absolute inset-0 bg-black/70"></span>
      <h1 className="relative text-[30px] font-semibold">{title}</h1>
      <p className="relative">
        {description}
      </p>
    </div>
  );
}
