import React, { useEffect, useState } from "react";
import "../index.css";
import { CakeSlice } from "../types/cakeSlice";

interface CakeChartProps {
  slices: CakeSlice[];
}

const Circle: React.FC<CakeChartProps> = ({ slices }) => {
  const [rotation, setRotation] = useState<number[]>([]);

  useEffect(() => {
    const totalPercentage = slices.reduce(
      (sum, slice) => sum + slice.percentage,
      0
    );
    const rotations = slices.map(
      (slice) => (slice.percentage / totalPercentage) * 360
    );

    const totalRotation = rotations.reduce((sum, r) => sum + r, 0);
    console.log("total rotation ska vara 360: ", totalRotation);

    setRotation(rotations);
  }, [slices]);

  return (
    <div
      className="relative w-full h-full"
      style={{ width: "25vw", height: "25vw" }}
    >
      {slices.map((slice, index) => {
        const sliceRotation = rotation
          .slice(0, index + 1)
          .reduce((sum, r) => sum + r, 0);

        // räkna ut conic-gradient färg stoppet
        let colorStops = "";
        let currentPercentage = 0;
        slices.forEach((s) => {
          colorStops += `, ${s.color} ${currentPercentage}%, ${s.color} ${
            currentPercentage + s.percentage
          }%`;
          currentPercentage += s.percentage;
        });

        return (
          <div
            key={slice.id}
            className="absolute w-full h-full transform origin-center"
            style={{
              transformOrigin: "50% 50%",
              transform: `rotate(${sliceRotation}deg)`,
            }}
          >
            <div
              className="absolute w-full h-full"
              style={{
                borderRadius: "50%",
                background: `conic-gradient(from 0deg${colorStops}, transparent ${currentPercentage}%)`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Circle;
