import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface TitleProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

export const Title = ({ children, size = "md", asChild }: TitleProps) => {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      className={clsx("text-gray-100", {
        "text-lg": size === "sm",
        "text-xl": size === "md",
        "text-2xl": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
};
