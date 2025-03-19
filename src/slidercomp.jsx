import React from "react";
import { Slider } from "@mui/material";

function SliderComp({ setLength, length }) {
  return (
    <div style={{ width: "300px" }}>
      <p>Password Length: {length}</p>
      <Slider
        value={length}
        min={4}
        max={20}
        step={1}
        onChange={(e, newValue) => setLength(newValue)}
        aria-labelledby="password-length-slider"
      />
    </div>
  );
}

export default SliderComp;
