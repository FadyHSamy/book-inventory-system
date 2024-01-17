import { Button, ButtonProps } from "@mui/material";
import React, { ReactEventHandler, ReactNode } from "react";

interface ButtonFieldProps extends ButtonProps {
  buttonName: ReactNode;
  onClick?: ReactEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
}

const ButtonField: React.FC<ButtonFieldProps> = ({ onClick, buttonName, style, ...rest }) => {
  const buttonStyle: React.CSSProperties = {
    borderRadius: "0.625rem",
    height: "2.8125rem",
    borderColor: "transparent",
    background: "#20DF7F",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.30)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    ...style,
  };

  return (
    <Button onClick={onClick} style={buttonStyle} fullWidth size="large" {...rest}>
      {buttonName}
    </Button>
  );
};

export default ButtonField;
