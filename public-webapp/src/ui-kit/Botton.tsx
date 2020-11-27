import React from "react";
import { IButtonProps } from "./props.inteface";
import Styles from "./Button.module.scss";

const Button = ({ children }: IButtonProps) => {
  return <div className={Styles.button}>{children}</div>;
};
export default Button;
