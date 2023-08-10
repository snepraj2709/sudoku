import React, { useEffect, useState } from "react";
import { useData } from "../context/DataContext";

function Timer() {
  const { state, dispatch } = useData();
  const currentTime = state.currentTime;
  const [pageLoadTime, setPageLoadTime] = useState(Date.now());
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isActive) {
        dispatch({
          type: "SetCurrentTime",
          payload: Date.now() - pageLoadTime,
        });
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [isActive, pageLoadTime]);
  //console.log(state.solved);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsActive(!document.hidden);
      if (!document.hidden) {
        setPageLoadTime(Date.now() - currentTime);
      } else if (!state?.solved) {
        setPageLoadTime(Date.now() - Date.now());
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [currentTime]);

  const formattedTime = React.useMemo(() => {
    const minutes = Math.floor(currentTime / 60000);
    const seconds = ((currentTime % 60000) / 1000).toFixed(0).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }, [currentTime]);

  return (
    <span className="p-2 bg-orange-200 w-44 justify-evenly flex rounded-lg mt-4 my-auto ">
      <p className="font-medium text-lg ">Time Spent:</p>
      <p className="text-lg font-light">{formattedTime}</p>
    </span>
  );
}

export default Timer;
