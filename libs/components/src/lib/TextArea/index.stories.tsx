import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { TextArea } from ".";

export default {
  component: TextArea,
  title: "TextArea",
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => {
  const [value, setValue] = useState<string | undefined>();
  return (
    <div id="theme-blue">
      <TextArea
        {...args}
        value={value}
        defaultValue="Position"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export const headingOne = Template.bind({});
headingOne.args = {
  variant: "h1",
};

export const headingTwo = Template.bind({});
headingTwo.args = {
  variant: "h2",
};

export const medium = Template.bind({});
medium.args = {};