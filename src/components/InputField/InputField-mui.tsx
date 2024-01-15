import { TextField } from "@mui/material";
import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";

interface InputFieldProps {
  placeholder: string;
  value: string;
  type: HTMLInputTypeAttribute;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties; // Use React.CSSProperties for the style prop
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange, type, placeholder, style }) => {
  const inputStyle: React.CSSProperties = {
    borderRadius: "0.625rem",
  };

  return (
    <TextField
      type={type}
      style={{ ...style }}
      InputProps={{
        style: { ...inputStyle, color: "white" },
      }}
      fullWidth
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
