import { ButtonProps } from "antd";

export interface BiButtonProps extends ButtonProps {
  containerClass?: string;
  bicolor?: "primary" | "secondary" | "tertiary";
}
