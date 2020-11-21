import React, { useState } from "react";
import { ITextInputProps } from "./props.inteface";
import Styles from "./TextInput.module.scss";

const TextInput = ({
  children,
  value = "",
  onChange = () => {},
  label = "label",
}: ITextInputProps) => {
  const [label_classes, set_label_classes] = useState(
    `${Styles.label} ${Styles.labelOnFocus}`
  );
  const [focused, set_focused] = useState(false);

  if (focused) {
    if (label_classes !== `${Styles.label} ${Styles.labelOnFocus}`) {
      set_label_classes(`${Styles.label} ${Styles.labelOnFocus}`);
    }
  } else {
    if (value === "") {
      if (label_classes !== `${Styles.label}`) {
        set_label_classes(`${Styles.label}`);
      }
    } else if (value !== "") {
      if (label_classes !== `${Styles.label} ${Styles.labelOnFocus}`) {
        set_label_classes(`${Styles.label} ${Styles.labelOnFocus}`);
      }
    }
  }
  return (
    <div className={Styles.container}>
      <input
        className={Styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => {
          set_focused(true);
        }}
        onBlur={() => {
          set_focused(false);
        }}
      />
      <label className={label_classes}>{label}</label>
    </div>
  );
};
export default TextInput;
