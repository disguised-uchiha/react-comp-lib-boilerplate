import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { GradientButton } from "./GradientButton";
import { GradientButtonProps } from "./GradientButton.types";

export default {
  title: "components/Buttons/GradientButton",
  component: GradientButton
} as ComponentMeta<typeof GradientButton>;

const Template: Story<GradientButtonProps> = args => <GradientButton {...args}>{args.children}</GradientButton>;

export const Default = Template.bind({});

Default.args = {
  children: "GradientButton"
} as GradientButtonProps;

Default.parameters = {
  backgrounds: { default: "dark" }
};

Default.storyName = "GradientButton";
