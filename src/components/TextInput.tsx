import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  children: ReactNode;
}

const TextInputRoot = ({ children }: TextInputRootProps) => {
  return (
    <div className="flex h-12 p-4 items-center gap-3 w-full focus-within:ring-2 ring-cyan-500 rounded bg-gray-800">
      {children}
    </div>
  );
};

TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: ReactNode;
}

const TextInputIcon = ({ children }: TextInputIconProps) => {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
};

TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputInput = ({ ...rest }: TextInputInputProps) => {
  return (
    <input
      className="bg-transparent outline-none flex-1 text-gray-100 text-xs placeholder:text-gray-400"
      {...rest}
    />
  );
};

TextInputInput.displayName = "TextInput.Input";

export default {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
