import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import { useCakeContext } from "../contexts/cakeContext";
import "../index.css";

const AmountSelector: React.FC = () => {
  const { setAmount, amount } = useCakeContext();

  return (
    <div className="flex flex-col items-center">
      <text className="text-3xl">Amount of slices</text>

      <FormControl
        fullWidth
        sx={{ backgroundColor: "white", width: 100, margin: 2 }}
      >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={amount}
          label="Age"
          onChange={(event) => setAmount(Number(event.target.value) || 0)}
        >
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default AmountSelector;
