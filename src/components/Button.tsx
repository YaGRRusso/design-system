import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export const Button = ({
  children,
  asChild,
  className,
  ...rest
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "px-4 py-3 w-full focus:ring-2 ring-white font-semibold rounded bg-cyan-500 hover:bg-cyan-300 transition-colors text-sm",
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
};
