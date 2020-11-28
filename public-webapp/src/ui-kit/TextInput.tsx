import React, { useState } from "react";
import { ITextInputProps } from "./props.inteface";
import Styles from "./TextInput.module.scss";

const TextInput = ({
  children,
  value = "",
  onChange = () => {},
  label = "label",
  icon,
  type = "text",
}: ITextInputProps) => {
  const [label_classes, set_label_classes] = useState(
    `${Styles.label} ${Styles.labelOnFocus}`
  );
  const [input_classes, set_input_classes] = useState(
    `${Styles.input} ${Styles.inputOnFocus}`
  );
  const [icon_classes, set_icon_classes] = useState(
    `${Styles.icon} ${Styles.iconOnFocus}`
  );
  const [container_classes, set_container_classes] = useState(
    `${Styles.container} ${Styles.containerOnFocus}`
  );
  const [focused, set_focused] = useState(false);

  if (focused) {
    if (label_classes !== `${Styles.label} ${Styles.labelOnFocus}`) {
      set_label_classes(`${Styles.label} ${Styles.labelOnFocus}`);
    }
    if (input_classes !== `${Styles.input} ${Styles.inputOnFocus}`) {
      set_input_classes(`${Styles.input} ${Styles.inputOnFocus}`);
    }
    if (icon_classes !== `${Styles.icon} ${Styles.iconOnFocus}`) {
      set_icon_classes(`${Styles.icon} ${Styles.iconOnFocus}`);
    }
    if (
      container_classes !== `${Styles.container} ${Styles.containerOnFocus}`
    ) {
      set_container_classes(`${Styles.container} ${Styles.containerOnFocus}`);
    }
  } else {
    if (value === "") {
      if (label_classes !== `${Styles.label}`) {
        set_label_classes(`${Styles.label}`);
      }
      if (input_classes !== `${Styles.input}`) {
        set_input_classes(`${Styles.input}`);
      }
      if (icon_classes !== `${Styles.icon}`) {
        set_icon_classes(`${Styles.icon}`);
      }
      if (container_classes !== `${Styles.container}`) {
        set_container_classes(`${Styles.container}`);
      }
    } else if (value !== "") {
      if (label_classes !== `${Styles.label} ${Styles.labelOnFocus}`) {
        set_label_classes(`${Styles.label} ${Styles.labelOnFocus}`);
      }
      if (input_classes !== `${Styles.input} ${Styles.inputOnFocus}`) {
        set_input_classes(`${Styles.input} ${Styles.inputOnFocus}`);
      }
      if (icon_classes !== `${Styles.icon} ${Styles.iconOnFocus}`) {
        set_icon_classes(`${Styles.icon} ${Styles.iconOnFocus}`);
      }
      if (
        container_classes !== `${Styles.container} ${Styles.containerOnFocus}`
      ) {
        set_container_classes(`${Styles.container} ${Styles.containerOnFocus}`);
      }
    }
  }
  return (
    <div className={container_classes}>
      <input
        className={input_classes}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => {
          set_focused(true);
        }}
        onBlur={() => {
          set_focused(false);
        }}
        type={type}
      />
      <label className={label_classes}>{label}</label>
      <div className={icon_classes}>{icon}</div>
    </div>
  );
};
export default TextInput;
