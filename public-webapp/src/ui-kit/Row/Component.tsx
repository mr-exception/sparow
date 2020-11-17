import React from "react";
import Styles from "./style.module.scss";
import { IProps } from "./interfaces";

const Component = ({ children, flex = 1, style = {} }: IProps) => {
  return (
    <div className={Styles.row} style={{ flex, ...style }}>
      {children}
    </div>
  );
};

export default Component;
