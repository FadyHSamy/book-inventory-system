// InputField.tsx
import React, { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";
import { CiUser } from "react-icons/ci";

interface LabelProps {
  labelTexts: string;
  style?: React.CSSProperties;
}
const Label: React.FC<LabelProps> = ({ labelTexts, style }) => {
  const [textColor, setTextColor] = useState<string>("#224957");
  return (
    <div>
      <label style={{ ...style, color: textColor }}>{labelTexts}</label>
    </div>
  );
};

export default Label;
