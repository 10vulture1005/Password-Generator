import React from "react";
import { FormControlLabel, Switch } from "@mui/material";

function SwitchLabels({ setAddNum, setAddSchar }) {
  return (
    <div>
      <FormControlLabel
        control={<Switch onChange={(e) => setAddNum(e.target.checked)} />}
        label="Numbers"
      />
      <FormControlLabel
        control={<Switch onChange={(e) => setAddSchar(e.target.checked)} />}
        label="Special Characters"
      />
    </div>
  );
}

export default SwitchLabels;
