import React from "react";
import { IIconButtonProps } from "./props.inteface";
import Styles from "./IconButton.module.scss";

const IconButton = ({ children }: IIconButtonProps) => {
  return <div className={Styles.button}>{children}</div>;
};
export default IconButton;
