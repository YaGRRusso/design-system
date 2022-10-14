import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export const Button = ({ children, asChild }: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp className="p-4 w-full focus:ring-2 ring-white font-semibold rounded bg-cyan-500 hover:bg-cyan-300 transition-colors text-sm">
      {children}
    </Comp>
  );
};
