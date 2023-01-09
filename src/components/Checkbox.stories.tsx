import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from ".";
import { Text } from ".";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    children: "Criar conta",
  },
  decorators: [
    (Story) => {
      return (
        <label className="flex items-center text-gray-400 gap-2 cursor-pointer">
          {Story()}
          <Text size="sm">Lembrar de mim por 30 dias</Text>
        </label>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
