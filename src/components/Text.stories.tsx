import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from ".";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Texto padrão",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Parágrafo de texto</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
