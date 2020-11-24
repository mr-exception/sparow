import React, { useState } from "react";
import { ITextInputProps } from "./props.inteface";
import Styles from "./TextInput.module.scss";

const TextInput = ({
  value = "",
  onChange = () => {},
  label = "label",
  disabled = false,
}: ITextInputProps) => {
  const [label_classes, set_label_classes] = useState(
    `${Styles.label} ${Styles.labelOnFocus}`
  );
  const [input_classes, set_input_classes] = useState(
    `${Styles.input} ${Styles.inputOnFocus}`
  );
  const [focused, set_focused] = useState(false);

  if (focused) {
    if (label_classes !== `${Styles.label} ${Styles.labelOnFocus}`) {
      set_label_classes(`${Styles.label} ${Styles.labelOnFocus}`);
    }
    if (input_classes !== `${Styles.input} ${Styles.inputOnFocus}`) {
      set_input_classes(`${Styles.input} ${Styles.inputOnFocus}`);
    }
  } else {
    if (value === "") {
      if (label_classes !== `${Styles.label}`) {
        set_label_classes(`${Styles.label}`);
      }
      if (input_classes !== `${Styles.input}`) {
        set_input_classes(`${Styles.input}`);
      }
    } else if (value !== "") {
      if (input_classes !== `${Styles.input} ${Styles.inputOnFocus}`) {
        set_input_classes(`${Styles.input} ${Styles.inputOnFocus}`);
      }
    }
  }
  return (
    <div className={Styles.container}>
      <input
        className={input_classes}
        disabled={disabled}
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
