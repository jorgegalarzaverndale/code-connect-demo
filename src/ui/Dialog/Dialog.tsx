import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { IconButton } from "../Buttons";
import { IconClose } from "../icons";
import "./dialog.css";

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
    <div className="dialog-overlay" onClick={onClose}>
      {/* Stop propagation so inner clicks don't close */}
      <div
        className="dialog"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="dialog-close">
          <IconButton icon={<IconClose />} ariaLabel="Close dialog" onClick={onClose} />
        </div>
        {title && <h3 className="dialog-title">{title}</h3>}
        <div className="dialog-content">{children}</div>
        {actions && <div className="dialog-actions">{actions}</div>}
      </div>
    </div>,
    document.body
  );
}; 