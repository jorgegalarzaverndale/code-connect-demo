import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { IconButton } from "../Buttons";
import { IconClose } from "../icons";

export type DialogProps = {
  /** Controls visibility */
  open: boolean;
  /** Called when the user clicks the scrim or the close icon */
  onClose: () => void;
  /** Dialog headline */
  title?: ReactNode;
  /** Main content */
  children: ReactNode;
  /** React nodes rendered in the footer (e.g., Buttons) */
  actions?: ReactNode;
};

/**
 * Dialog modal component
 * @figma component https://www.figma.com/design/gwUXHin1RmkA8RFBVe1K8U/Code-Connect-Demo--Community--KS?node-id=9215-9336
 */
export const Dialog = ({ open, onClose, title, children, actions }: DialogProps) => {
  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-[rgba(0,0,0,0.7)] p-32"
      onClick={onClose}
    >
      {/* Stop propagation so inner clicks don't close */}
      <div
        className="relative flex w-full flex-col rounded-24 border border-solid border-mono-300 bg-mono-100 min-w-dialog max-w-dialog dark:bg-mono-500"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-12 right-12">
          <IconButton icon={<IconClose />} ariaLabel="Close dialog" onClick={onClose} />
        </div>
        {title && (
          <h3 className="pt-32 px-24 pb-12 text-mono-500 dark:text-mono-100 text-heading-03 leading-none">
            {title}
          </h3>
        )}
        <div className="px-24 pb-24 text-mono-500 dark:text-mono-100 text-body-01 leading-normal">
          {children}
        </div>
        {actions && (
          <div className="flex justify-end gap-12 border-t border-solid border-mono-300 pt-16 px-16 pb-24">
            {actions}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}; 