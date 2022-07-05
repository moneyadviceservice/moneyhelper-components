import React from "react";

import { Select } from "./Select";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Select",
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Select {...args} />;

export const Required = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Required.args = {
  label: "The Label",
  id: "id1",
  name: "name1",
  // defaultValue,
  emptyItemText: "Please choose an item",
  required: true,
  options: [{ text: "Some text", value: "Some value" }],
};

export const Optional = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Optional.args = {
  label: "The Label",
  id: "id1",
  name: "name1",
  // defaultValue,
  emptyItemText: "Please choose an item",
  options: [{ text: "Some text", value: "Some value" }],
};

export const NoEmptyItem = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoEmptyItem.args = {
  label: "The Label",
  id: "id1",
  name: "name1",
  // defaultValue,
  options: [{ text: "Some text", value: "Some value" }],
};
