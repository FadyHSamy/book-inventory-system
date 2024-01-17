import { InputAdornment, TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { FaEye } from "react-icons/fa";

interface PasswordProps {
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties; // Use React.CSSProperties for the style prop
}
const PasswordField: React.FC<PasswordProps> = ({ value, onChange, placeholder, style }) => {
  const [inputType, setInputType] = useState("password");
  const passwordStyle: React.CSSProperties = {
    borderRadius: "0.625rem",
    backgroundColor: "transparent",
  };

  const toggleInputType = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };
  return (
    <TextField
      type={inputType}
      autoComplete="new-password"
      style={{ ...style }}
      InputProps={{
        autoComplete:"new-password",
        style: { ...passwordStyle, color: "white" },
        endAdornment: (
          <InputAdornment position="end" style={{ color: "black" }}>
            <FaEye onClick={toggleInputType} />
          </InputAdornment>
        ),
      }}
      fullWidth
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default PasswordField;
