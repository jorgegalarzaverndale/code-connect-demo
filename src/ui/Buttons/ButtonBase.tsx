import { ReactEventHandler, ReactNode } from "react";
import cn from "clsx";

type ButtonBasePropsSize = "small" | "medium";
type ButtonBasePropsVariant = "primary" | "secondary" | "inverse";

export interface ButtonBaseIconOnlyProps {
  /**
   * A descriptive aria-label is required when there is no text
   */
  ariaLabel: string;
  /**
   * The icon for the button
   */
  icon: ReactNode;
}

export interface ButtonBaseIconsProps {
  /**
   * A descriptive aria-label is only recommended when the button text is not descriptive of the action
   */
  ariaLabel?: string;
  /**
   * React children
   */
  children: ReactNode;
  /**
   * The icon following the text
   */
  iconEnd?: ReactNode;
  /**
   * The icon preceeding the text
   */
  iconStart?: ReactNode;
  /**
   * The size of the button
   * @default medium
   */
  size?: ButtonBasePropsSize;
}

interface ButtonBaseElementAnchorProps {
  /**
   * html "anchor" element
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
   */
  element: "a";
  /**
   * The destination url
   */
  href: string;
  /**
   * Optional click handler, href should provide destination, click handler can be used for analytics or secondary click events
   */
  onClick?: ReactEventHandler<HTMLAnchorElement>;
}

interface ButtonBaseElementButtonSharedProps {
  /**
   * html "button" element.
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
   */
  element?: "button";
  href?: undefined;
}

interface ButtonBaseElementButtonTypeButtonProps {
  /**
   * Required click handler for buttons
   */
  onClick: ReactEventHandler<HTMLButtonElement>;
  /**
   * html type for button element. defaults to "button"
   * Only use "submit" when is descendant of form and action is to submit the form
   */
  type?: "button";
}
interface ButtonBaseElementButtonTypeSubmitProps {
  /**
   * Optional click handler for buttons
   */
  onClick?: ReactEventHandler<HTMLButtonElement>;
  /**
   * html type for button element.
   * Only use "submit" when is descendant of form and action is to submit the form
   */
  type: "submit";
}

type ButtonBaseElementButtonProps = ButtonBaseElementButtonSharedProps &
  (
    | ButtonBaseElementButtonTypeButtonProps
    | ButtonBaseElementButtonTypeSubmitProps
  );

export interface ButtonBaseSharedProps {
  /**
   * Whether or not the button is disabled
   */
  disabled?: boolean;
  /**
   * The visual style of the button
   * @default primary
   */
  variant?: ButtonBasePropsVariant;
}

export type ButtonBaseElementProps =
  | ButtonBaseElementAnchorProps
  | ButtonBaseElementButtonProps;

type ButtonBaseProps = ButtonBaseSharedProps &
  (ButtonBaseIconOnlyProps | ButtonBaseIconsProps) &
  ButtonBaseElementProps;

function isIconOnlyProps(
  props: Partial<ButtonBaseProps>
): props is ButtonBaseIconOnlyProps {
  return "icon" in props;
}
function isIconsProps(
  props: Partial<ButtonBaseProps>
): props is ButtonBaseIconsProps {
  return !isIconOnlyProps(props);
}
function isElementAnchorProps(
  props: Partial<ButtonBaseProps>
): props is ButtonBaseElementAnchorProps {
  return props.element === "a";
}
function isElementButtonProps(
  props: Partial<ButtonBaseProps>
): props is ButtonBaseElementButtonProps {
  return props.element !== "a";
}

/**
 * ButtonBase component for most tap and click actions
 * @figma component ee6aa9fc246d76871f580719412b4ce839add9d2
 */
export const ButtonBase = ({
  ariaLabel,
  disabled = false,
  variant = "primary",
  ...props
}: ButtonBaseProps) => {
  const contents: ReactNode[] = [];

  const variantClasses = {
    primary:
      "bg-blue-400 text-mono-100 hover:bg-blue-500 active:bg-blue-300 dark:bg-blue-200 dark:text-mono-500 dark:hover:bg-blue-300 dark:active:bg-blue-100",
    secondary:
      "bg-purple-400 text-mono-100 hover:bg-purple-500 active:bg-purple-300 dark:bg-purple-200 dark:text-mono-500 dark:hover:bg-purple-300 dark:active:bg-purple-100",
    inverse:
      "bg-mono-100 text-mono-500 hover:bg-mono-200 active:bg-mono-300 dark:bg-mono-500 dark:text-mono-100 dark:hover:bg-mono-400 dark:active:bg-mono-300",
  };

  const classNames = [
    "cursor-pointer flex relative items-center justify-center rounded-24 focus:outline-none focus:ring-2 focus:ring-blue-300",
    variantClasses[variant],
    "disabled:cursor-not-allowed disabled:pointer-events-none disabled:bg-mono-300 disabled:text-mono-400",
  ];

  if (isIconOnlyProps(props)) {
    classNames.push("w-24 h-24 p-12");
    contents.push(props.icon);
  } else if (isIconsProps(props)) {
    if (props.size === "small") {
      classNames.push(
        "text-base leading-[1.75rem] tracking-[-0.01rem] py-4 px-16"
      );
    } else {
      classNames.push(
        "text-[1.125rem] leading-[2rem] tracking-[-0.01125rem] py-8 px-24"
      );
    }

    if (props.iconStart) {
      classNames.push("gap-8");
      if (props.size !== "small") {
        classNames.push("pl-16");
      }
    }
    if (props.iconEnd) {
      classNames.push("gap-8");
      if (props.size !== "small") {
        classNames.push("pr-16");
      }
    }
    if (props.iconStart) {
      contents.push(props.iconStart);
    }
    contents.push(props.children);
    if (props.iconEnd) {
      contents.push(props.iconEnd);
    }
  }

  if (isElementAnchorProps(props)) {
    if (disabled) {
      // "disabled" attribute does not exist on anchor elements.
      // We need to prevent click events and add disabled styles manually.
      classNames.push("pointer-events-none bg-mono-300 text-mono-400");
    }
    return (
      <a
        aria-label={ariaLabel}
        className={cn(classNames)}
        href={!disabled ? props.href : undefined}
        onClick={!disabled ? props.onClick : (e) => e.preventDefault()}
      >
        {contents}
      </a>
    );
  }
  if (isElementButtonProps(props))
    return (
      <button
        aria-label={ariaLabel}
        className={cn(classNames)}
        disabled={disabled}
        onClick={props.onClick}
        type={props.type || "button"}
      >
        {contents}
      </button>
    );
};
