import React from "react";
type ColorName = "white" | "black";
interface ButtonProps {
  color: ColorName;
  text: string;
}
export default function Button({ color, text }: ButtonProps) {
  const colorClass = {
    white:
      "bg-white text-[#EC6131] hover:bg-[#EC6131] hover:text-white border-[#EC6131]",
    black: "bg-black text-white hover:bg-white hover:text-black",
  }

  return (
    <button
      className={`font-semibold text-[14px] px-[15px] py-[5px] border-[1px] rounded-md drop-shadow-[15px_3px_20px_rgba(236,134,99,0.5)] w-fit h-fit ${colorClass[color]}`}
    >
      {text}
    </button>
  );
}
