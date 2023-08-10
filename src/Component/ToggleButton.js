import React, { useState } from "react";

function ToggleButton({ onClick, text, toggled }) {
  const [isToggled, setIsToggled] = useState(toggled);

  const callback = () => {
    setIsToggled(!isToggled);
    onClick(!isToggled);
  };

  return (
    <div className="flex flex-col">
      <label className="relative inline-block w-16 h-8">
        <input
          type="checkbox"
          defaultChecked={isToggled}
          onClick={callback}
          className="hidden"
        />
        <span
          className={`block absolute cursor-pointer top-0 left-4 right-0 bottom-0 bg-blue-500 transition duration-300 rounded-full ${
            isToggled ? "bg-green-500" : ""
          }`}></span>
        <span
          className={`block absolute left-3 bottom-2.6 w-8 h-8 rounded-full bg-white transition duration-300 transform ${
            isToggled ? "translate-x-6" : "translate-x-0"
          }`}></span>
      </label>
      <p className=" my-auto">{text}</p>
    </div>
  );
}

export default ToggleButton;
