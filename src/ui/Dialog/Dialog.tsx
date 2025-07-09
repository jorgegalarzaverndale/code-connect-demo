import React, { type ReactNode, type MouseEvent } from "react";
import { IconButton } from "../Buttons";
import { IconClose } from "../icons";

interface DialogProps {
  title: string;
  children: ReactNode;
  actions: ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

export const Dialog = ({
  isOpen,
  onClose,
  title,
  children,
  actions,
}: DialogProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="relative bg-mono-100 rounded-3xl shadow-lg w-full max-w-dialog min-w-dialog m-4"
        onClick={(e: MouseEvent) => e.stopPropagation()}
      >
        <div className="absolute top-12 right-12">
          <IconButton
            onClick={onClose}
            icon={<IconClose />}
            ariaLabel="Close dialog"
          />
        </div>
        <div className="pt-32 px-24 pb-24">
          <h2 className="text-heading-03 mb-12 text-mono-500">{title}</h2>
          <div className="text-body-01 text-mono-500">{children}</div>
        </div>
        <div className="px-16 pt-16 pb-24 flex justify-end gap-12 border-t border-mono-300">
          {actions}
        </div>
      </div>
    </div>
  );
};
