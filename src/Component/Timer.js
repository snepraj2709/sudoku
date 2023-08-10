import React, { useEffect, useState } from "react";

function Timer() {
  const [currentTime, setCurrentTime] = useState(0);
  const [pageLoadTime, setPageLoadTime] = useState(Date.now());
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isActive) {
        setCurrentTime(Date.now() - pageLoadTime);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isActive, pageLoadTime]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsActive(!document.hidden);
      if (!document.hidden) {
        setPageLoadTime(Date.now() - currentTime);
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
    <span className="p-2 bg-orange-200 w-44 justify-evenly flex rounded-lg mt-4 my-auto mx-auto">
      <p className="font-medium text-lg ">Time Spent:</p>
      <p className="text-lg font-light">{formattedTime}</p>
    </span>
  );
}

export default Timer;
