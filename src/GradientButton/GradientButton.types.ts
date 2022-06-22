import { ButtonProps } from "antd";

export interface GradientButtonProps extends ButtonProps {
  children: string | React.ReactNode;
  className?: string;
}
