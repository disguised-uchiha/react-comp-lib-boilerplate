import React from "react";

import { Button } from "antd";
import classNames from "classnames";
import { BiButtonProps } from "./BiButton.types";

import styles from "./BiButton.module.scss";

export const BiButton: React.FC<BiButtonProps> = ({ children, containerClass, bicolor = "", ...props }) => (
  <div
    className={classNames(containerClass, styles.container, {
      [styles[bicolor]]: bicolor
    })}
  >
    <Button {...props}>{children}</Button>
  </div>
);
