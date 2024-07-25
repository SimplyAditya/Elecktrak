import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const LogOutBox = ({ handleClick }) => {
  const navigator = useNavigate();
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current || !ref.current.contains(event.target)) {
        handleClick(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClick]);

  return (
    <div
      ref={ref}
      className="w-screen h-screen z-40 fixed bg-black bg-opacity-45 flex items-center justify-center"
    >
      <div className="z-50 w-fit bg-white rounded-lg text-black h-1/4 py-4 px-6 text-2xl outfit-font flex flex-col justify-between">
        <div>Are you sure you want to Log Out ?</div>
        <div className="flex w-full items-center justify-end gap-8">
          <button onClick={() => navigator("")}>Yes</button>
          <button onClick={() => handleClick(false)}>No</button>
        </div>
      </div>
    </div>
  );
};

export default LogOutBox;
