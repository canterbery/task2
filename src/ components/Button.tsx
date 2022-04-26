import React from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  onclick?: React.MouseEventHandler;
}

export const Button = ({ children, onclick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onclick}
      className="py-2 ml-2 px-2 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  w-12 h-12 rounded-lg "
    >
      {children}
    </button>
  );
};
