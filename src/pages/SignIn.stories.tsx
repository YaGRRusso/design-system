import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { SignIn } from "./SignIn";
import { rest } from "msw";

export default {
  title: "Components/SignIn",
  component: SignIn,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/signin",
    },
    msw: {
      handlers: [
        rest.post("/sessions", (req, res, ctx) => {
          return res(
            ctx.json({
              message: "success",
            })
          );
        }),
      ],
    },
  },
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText("example@email.com"),
      "yagrrusso@gmail.com"
    );
    userEvent.type(canvas.getByPlaceholderText("********"), "senha123segura");

    userEvent.click(canvas.getByRole("button"));

    await waitFor(() => {
      return expect(canvas.getByText("Logado!")).toBeInTheDocument();
    });
  },
};
