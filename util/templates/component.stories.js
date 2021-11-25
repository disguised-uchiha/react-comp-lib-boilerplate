module.exports = componentName => ({
  content: `import React from "react";
import { Meta, Story } from "@storybook/react";
import { ${componentName} } from "./${componentName}";
import { ${componentName}Props } from "./${componentName}.types";

export default {
  title: "${componentName}",
  argTypes: {
    children: {
      type: { summary: "string | React.ReactNode" }
    }
  }
} as Meta;

const Template: Story<${componentName}Props> = args => <${componentName} {...args}>{args.children}</${componentName}>;

export const Default = Template.bind({});

Default.args = {
  children: "${componentName}",
} as ${componentName}Props;

Default.storyName="${componentName}"
`,
  extension: ".stories.tsx"
});
