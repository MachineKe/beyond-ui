import React from "react";
import { NightModeSwitch } from "../src/components/NightModeSwitch";

export default {
  title: "Components/NightModeSwitch",
  component: NightModeSwitch,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "ghost"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    iconStyle: {
      control: { type: "select" },
      options: ["filled", "outline"],
    },
    className: { control: "text" },
    ariaLabel: { control: "text" },
  },
};

const Template = (args) => <NightModeSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "ghost",
  size: "md",
  iconStyle: "filled",
  ariaLabel: "Toggle dark mode",
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  size: "md",
  iconStyle: "filled",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  size: "md",
  iconStyle: "outline",
};

export const Large = Template.bind({});
Large.args = {
  variant: "primary",
  size: "lg",
  iconStyle: "filled",
};

export const Accessible = Template.bind({});
Accessible.args = {
  variant: "ghost",
  size: "md",
  iconStyle: "outline",
  ariaLabel: "Switch between dark and light mode",
};