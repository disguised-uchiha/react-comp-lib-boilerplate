import React from "react";
import { Meta, Story } from "@storybook/react";
import { TestComp } from "./TestComp";
import { TestCompProps } from "./TestComp.types";

export default {
  title: "TestComp",
  argTypes: {
    children: {
      type: { summary: "string | React.ReactNode" }
    }
  }
} as Meta;

const Template: Story<TestCompProps> = args => <TestComp {...args}>{args.children}</TestComp>;

export const Default = Template.bind({});

Default.args = {
  children: "TestComp",
} as TestCompProps;

Default.storyName="TestComp"
