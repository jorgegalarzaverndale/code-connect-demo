import { ButtonBase, ButtonBaseElementProps } from "./ButtonBase";
import { ReactNode } from "react";

// Map Figma properties to the Button component props.
// The Button component is a wrapper around ButtonBase, adapting the props from Figma
// to the existing implementation.
type ButtonProps = {
  variant?: "Primary" | "Secondary" | "Inverse";
  size?: "Medium" | "Small";
  state?: "Default" | "Hover" | "Active" | "Focus" | "Disabled";
  label: ReactNode;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  disabled?: boolean;
} & ButtonBaseElementProps;

/**
 * Button component for most tap and click actions
 * @figma component https://www.figma.com/design/gwUXHin1RmkA8RFBVe1K8U/Code-Connect-Demo--Community--KS?node-id=9215-9074&m=dev
 */
export const Button = ({
  variant = "Primary",
  size = "Medium",
  state = "Default",
  label,
  iconStart,
  iconEnd,
  disabled,
  ...props
}: ButtonProps) => {
  const buttonBaseVariant = variant.toLowerCase() as
    | "primary"
    | "secondary"
    | "inverse";
  const buttonBaseSize = size.toLowerCase() as "medium" | "small";

  // The "Disabled" state from Figma maps to the `disabled` prop on the ButtonBase component.
  const isDisabled = state === "Disabled" || disabled;

  // Other states (Hover, Active, Focus) are handled by Tailwind CSS utility classes in ButtonBase.tsx.

  return (
    <ButtonBase
      // The rest of the props are passed through to ButtonBase.
      {...props}
      variant={buttonBaseVariant}
      size={buttonBaseSize}
      disabled={isDisabled}
      iconStart={iconStart}
      iconEnd={iconEnd}
    >
      {label}
    </ButtonBase>
  );
};
