import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useCakeContext } from "../contexts/cakeContext";
import "../index.css";

const SliceDesign: React.FC = () => {
  const { amount, setSlices } = useCakeContext();

  const [chosenColors, setChosenColors] = useState<string[]>(
    new Array(amount).fill("grey")
  );
  const [percentages, setPercentages] = useState<number[]>(
    new Array(amount).fill(0)
  );

  const [error, setError] = useState(false);

  const handleButtonClick = (index: number) => {
    //går igenom colors för varje klick och uppdaterar till chosencolors arrayen med korrekt index för den knappen
    const nextColorIndex =
      (colors.indexOf(chosenColors[index]) + 1) % colors.length;
    const nextColor = colors[nextColorIndex];
    setChosenColors((prevColors) => [
      ...prevColors.slice(0, index),
      nextColor,
      ...prevColors.slice(index + 1),
    ]);
  };

  const handleRenderSlices = () => {
    //här skapas slices om det är 100% sammanlagt
    const totalPercentage = percentages.reduce((sum, r) => sum + r, 0);

    if (totalPercentage == 100) {
      setError(false);
      const slicesArray = chosenColors.map((color, index) => ({
        id: index,
        color: color,
        percentage: percentages[index],
      }));
      setSlices(slicesArray);
    } else {
      setError(true);
    }
  };

  const colors = [
    "red",
    "yellow",
    "green",
    "blue",
    "lightblue",
    "lightgreen",
    "pink",
    "purple",
    "black",
    "white",
  ];

  return (
    <div className="flex flex-col items-center">
      {error ? (
        <Box>
          <Typography>Total percentage must be 100%</Typography>
        </Box>
      ) : null}
      {Array.from({ length: amount }, (_, index) => (
        <Box>
          <TextField
            id="outlined-basic"
            label="Percentage"
            variant="outlined"
            onChange={(e) => {
              const newPercentages = [...percentages];
              newPercentages[index] = parseInt(e.target.value, 10) || 0;
              setPercentages(newPercentages);
            }}
          />
          <Button
            key={index}
            variant="contained"
            onClick={() => handleButtonClick(index)}
            sx={{
              margin: 2,
              backgroundColor: chosenColors[index],
              "&:hover": {
                backgroundColor: chosenColors[index],
              },
            }}
          >
            Slice {index + 1}
          </Button>
        </Box>
      ))}
      <Button
        variant="contained"
        onClick={() => handleRenderSlices()}
        sx={{
          margin: 2,
        }}
      >
        GO
      </Button>
    </div>
  );
};

export default SliceDesign;
