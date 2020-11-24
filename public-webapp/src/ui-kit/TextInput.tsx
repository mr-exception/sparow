import React, { useState } from "react";
import { ITextInputProps } from "./props.inteface";
import Styles from "./TextInput.module.scss";

const TextInput = ({
  value = "",
  onChange = () => {},
  label = "label",
  disabled = false,
}: ITextInputProps) => {
  const [container_classes, set_container_classes] = useState<string[]>([
    Styles.container,
  ]);
  const [focused, set_focused] = useState(false);

  if (focused) {
    if (!container_classes.includes(Styles.containerOnFocus)) {
      set_container_classes(
        container_classes.concat([Styles.containerOnFocus])
      );
    }
  } else {
    if (value !== "") {
      if (!container_classes.includes(Styles.containerOnFocus)) {
        set_container_classes(
          container_classes.concat([Styles.containerOnFocus])
        );
      }
    } else {
      if (container_classes.includes(Styles.containerOnFocus)) {
        set_container_classes(
          container_classes.filter((className) =>
            className === Styles.containerOnFocus ? null : className
          )
        );
      }
    }
  }
  if (disabled) {
    if (!container_classes.includes(Styles.containerDisabled)) {
      set_container_classes(
        container_classes.concat([Styles.containerDisabled])
      );
    }
  } else if (container_classes.includes(Styles.containerDisabled)) {
    set_container_classes(
      container_classes.filter((className) =>
        className === Styles.containerDisabled ? null : className
      )
    );
  }
  return (
    <div className={container_classes.join(" ")}>
      <input
        className={Styles.input}
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
      <label className={Styles.label}>{label}</label>
    </div>
  );
};
export default TextInput;
