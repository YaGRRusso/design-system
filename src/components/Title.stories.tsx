import { Meta, StoryObj } from "@storybook/react";
import { Title, TitleProps } from ".";

export default {
  title: "Components/Title",
  component: Title,
  args: {
    children: "Titulo padrão",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TitleProps>;

export const Default: StoryObj<TitleProps> = {};

export const Small: StoryObj<TitleProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<TitleProps> = {
  args: {
    size: "lg",
  },
};

export const CustomTag: StoryObj<TitleProps> = {
  args: {
    asChild: true,
    children: <h1>Titulo principal</h1>,
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
