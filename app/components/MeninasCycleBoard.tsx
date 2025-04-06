"use client";

import { useState, useEffect, useRef } from "react";

export default function MeninasCycleBoard() {
  const [isKaloFull, setIsKaloFull] = useState(true);
  const [isNathFull, setIsNathFull] = useState(false);
  const [isMayuFull, setIsMayuFull] = useState(false);
  const [isIzuFull, setIsIzuFull] = useState(false);
  const [isPansheeFull, setIsPansheeFull] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const girlStates = useRef([
    setIsKaloFull,
    setIsNathFull,
    setIsMayuFull,
    setIsIzuFull,
    setIsPansheeFull,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      girlStates.current[currentIndex](false);
      const nextIndex = (currentIndex + 1) % girlStates.current.length;
      girlStates.current[nextIndex](true);
      setCurrentIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const girls = [
    { className: "kalo", isFull: isKaloFull, bgColor: "bg-yellow" },
    { className: "nath", isFull: isNathFull, bgColor: "bg-pink" },
    { className: "mayu", isFull: isMayuFull, bgColor: "bg-blue" },
    { className: "izu", isFull: isIzuFull, bgColor: "bg-yellow" },
    { className: "panshee", isFull: isPansheeFull, bgColor: "bg-pink" },
  ];

  const reorderedGirls = [
    ...girls.slice(currentIndex),
    ...girls.slice(0, currentIndex),
  ];

  return (
    <div className="meninas h-screen md:h-[60vh] flex flex-wrap w-full">
      {reorderedGirls.map((girl, index) => (
        <div
          key={index}
          className={`menina ${girl.className} ${
            girl.isFull ? "w-full" : "w-1/2"
          } transition-all duration-1000 md:w-auto md:flex-auto ${girl.bgColor}`}
        ></div>
      ))}
    </div>
  );
}
