import React, { useState } from "react";
import { ICheckInputProps } from "./props.inteface";
import Styles from "./CheckInput.module.scss";

const TextInput = ({
  name,
  onChange = () => {},
  label = "label",
  value = "value",
  disabled = false,
  checked = false,
}: ICheckInputProps) => {
  return (
    <div className={Styles.container}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      {label}
    </div>
  );
};
export default TextInput;
