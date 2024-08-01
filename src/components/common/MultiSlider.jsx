import React, { useState, useEffect, useRef } from "react";
export default function MultiSlider() {
  const [params, setParams] = useState({
    ageGoe: 20,
    ageLoe: 60,
  });

  const rangeRef = useRef(null);
  const leftThumbRef = useRef(null);
  const rightThumbRef = useRef(null);

  const handleRangeChange = (type, value, rangeType) => {
    setParams((prev) => {
      if (type === "age") {
        return {
          ...prev,
          ageGoe: rangeType === "min" ? value : prev.ageGoe,
          ageLoe: rangeType === "max" ? value : prev.ageLoe,
        };
      }
      return prev;
    });
  };

  useEffect(() => {
    const updateThumbs = () => {
      const { ageGoe, ageLoe } = params;
      const min = 0;
      const max = 100;

      const leftPercent = ((ageGoe - min) / (max - min)) * 100;
      const rightPercent = ((ageLoe - min) / (max - min)) * 100;

      if (leftThumbRef.current && rightThumbRef.current && rangeRef.current) {
        leftThumbRef.current.style.left = leftPercent + "%";
        rightThumbRef.current.style.left = rightPercent + "%";
        rangeRef.current.style.left = leftPercent + "%";
        rangeRef.current.style.width = `${rightPercent - leftPercent}%`;
      }
    };

    updateThumbs();
  }, [params.ageGoe, params.ageLoe]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-full max-w-lg">
        <div className="multi-range-slider relative">
          {/* Hidden Range Inputs */}
          <input
            type="range"
            min="0"
            max="100"
            value={params.ageGoe}
            onChange={(e) =>
              handleRangeChange("age", parseInt(e.target.value), "min")
            }
            className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none"
          />
          <input
            type="range"
            min="0"
            max="100"
            value={params.ageLoe}
            onChange={(e) =>
              handleRangeChange("age", parseInt(e.target.value), "max")
            }
            className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none"
          />

          {/* Custom Slider Track */}
          <div className="slider relative z-10 h-2 bg-gray-300 rounded">
            <div
              ref={rangeRef}
              className="absolute bg-purple-600 h-full rounded"
            ></div>
            <div
              ref={leftThumbRef}
              className="absolute w-4 h-4 bg-purple-600 rounded-full transform -translate-x-1/2 top-1/2 -translate-y-1/2"
            ></div>
            <div
              ref={rightThumbRef}
              className="absolute w-4 h-4 bg-purple-600 rounded-full transform -translate-x-1/2 top-1/2 -translate-y-1/2"
            ></div>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <span>
            Age Range: {params.ageGoe} - {params.ageLoe}
          </span>
        </div>
      </div>
    </div>
  );
}
