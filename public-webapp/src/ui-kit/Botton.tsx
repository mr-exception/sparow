import React from "react";
import { IButtonProps } from "./props.inteface";
import Styles from "./Button.module.scss";

const Button = ({ children, fullWidth }: IButtonProps) => {
  let btn_classes = `${Styles.button}`;
  if (fullWidth) {
    btn_classes += ` ${Styles.btnBlock}`;
  }
  return <div className={btn_classes}>{children}</div>;
};
export default Button;
