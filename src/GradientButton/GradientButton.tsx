import React from "react";

import { Button } from "antd";
import classNames from "classnames";
import { GradientButtonProps } from "./GradientButton.types";

import styles from "./GradientButton.module.scss";

export const GradientButton: React.FC<GradientButtonProps> = ({ children, className, ...props }) => (
  <span className={classNames(styles.gradientButton, className)} data-testid="GradientButton">
    <Button type="ghost" size="large" {...props}>
      {children}
    </Button>
  </span>
);
