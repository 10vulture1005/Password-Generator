import { useState, useEffect, useCallback } from "react";
import "./App.css";
import "./index.css"
import SliderComp from "./slidercomp";
import SwitchLabels from "./switch";
import { Snippet } from "@heroui/react";


export const CopyIcon = ({ size, height, width, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height || 20}
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width={size || width || 20}
      {...props}
    >
      <path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z" />
    </svg>
  );
};


function App() {
  const [length, setLength] = useState(6);
  const [addNum, setAddNum] = useState(false);
  const [addSchar, setAddSchar] = useState(false);
  const [password, setPassword] = useState("");

  const passgen = useCallback(() => {
    let pass = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (addNum) characters += "0123456789";
    if (addSchar) characters += "!@#$%^&*()_+=/*~`;:'<>/?";

    for (let i = 0; i < length; i++) {
      pass += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    setPassword(pass);
  }, [length, addNum, addSchar]);


  useEffect(() => {
    passgen();
  }, [length, addNum, addSchar, passgen]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>Password Generator</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", background: "#383838", borderRadius: "30px", padding: "10px", width: "500px", boxShadow: "3px 3px 1px 0px #1a1a1a",justifyContent:"center",alignContent:"center" }}>
        <Snippet
          checkIcon={<CopyIcon />} 
            onCopy={() => {
            navigator.clipboard.writeText(password);
            alert(`Copied password: ${password}`);

          }}
          copyIcon={null}
          style={{ display: "flex", flexDirection: "row",justifyContent:"space-between",alignItems:"center",gap:"10px",margin:"10px" }} 
          size="sm" 
          value={password}
          hideSymbol={true} 
        >

          {password}
        </Snippet>
      </div>

      <SliderComp setLength={setLength} length={length} />
      <SwitchLabels setAddNum={setAddNum} setAddSchar={setAddSchar} />
    </div>
  );
}

export default App;
