import { ReactNode } from "react";
import { IconButton } from "ui/Buttons/IconButton";
import { IconClose } from "ui/icons";
import { DialogContent } from "./DialogContent";
import { DialogActions } from "./DialogActions";
import "./dialog.css";

type DialogProps = {
  /**
   * Controls whether the dialog should be rendered. If false, nothing is rendered.
   * Defaults to true to keep backward-compatibility with usages that don’t pass it.
   */
  open?: boolean;
  /**
   * Callback fired when the close button is clicked.
   */
  onClose?: () => void;
  /**
   * Headline text/node displayed at the top of the dialog.
   */
  title?: ReactNode;
  /**
   * React node displayed in the dialog actions area (typically buttons).
   */
  actions?: ReactNode;
  /**
   * Main content of the dialog.
   */
  children: ReactNode;
};

export const Dialog = ({
  open = true,
  onClose,
  title,
  actions,
  children,
}: DialogProps) => {
  // Do not render anything if `open` is false
  if (!open) {
    return null;
  }

  return (
    <div className="dialog" role="dialog">
      {/* Content */}
      <DialogContent headline={title ?? null} content={children} />

      {/* Actions */}
      {actions && <DialogActions>{actions}</DialogActions>}

      {/* Close button shown only if onClose provided */}
      {onClose && (
        <IconButton
          icon={<IconClose />}
          variant="inverse"
          onClick={onClose}
          ariaLabel="Close dialog"
        />
      )}
    </div>
  );
};
