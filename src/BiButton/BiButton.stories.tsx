import React from "react";
import Icon from "@ant-design/icons";
import { Story } from "@storybook/react";
import { BiButton } from "./BiButton";
import { BiButtonProps } from "./BiButton.types";
import styles from "./BiButton.module.scss";

export default {
  title: "BiButton",
  argTypes: {
    children: {
      type: { summary: "string | React.ReactNode" }
    }
  }
};

const Template: Story<BiButtonProps> = args => (
  <BiButton type="primary" {...args}>
    {args.children}
  </BiButton>
);

export const Default = Template.bind({});

Default.args = {
  children: "BiButton"
} as BiButtonProps;

Default.storyName = "BiButton";

export const primary = Template.bind({});

primary.args = {
  children: "BiButton",
  bicolor: "primary"
} as BiButtonProps;

primary.storyName = "Primary";

export const secondary = Template.bind({});

secondary.args = {
  children: "BiButton",
  bicolor: "secondary"
} as BiButtonProps;

secondary.storyName = "Secondary";

export const tertiary = Template.bind({});

tertiary.args = {
  children: "BiButton",
  bicolor: "tertiary"
} as BiButtonProps;

tertiary.storyName = "Tertiary";

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414z" />
  </svg>
);

export const IconButton = Template.bind({});

IconButton.args = {
  children: "Icon Button",
  icon: <Icon component={SvgComponent} className={styles.buttonIcon} />,
  className: styles.iconButton
} as BiButtonProps;

IconButton.storyName = "IconButton";
