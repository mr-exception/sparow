import React from "react";
import { IButtonProps } from "./props.inteface";
import Styles from "./Button.module.scss";

const Button = ({ children, onClick }: IButtonProps) => {
  return (
    <div className={Styles.button} onClick={onClick}>
      {children}
    </div>
  );
};
export default Button;
