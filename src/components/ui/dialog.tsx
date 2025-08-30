"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
  showCloseButton?: boolean;
}

interface DialogHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface DialogTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface DialogDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

interface DialogFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const Dialog: React.FC<DialogProps> = ({ open, onOpenChange, children }) => {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  const handleOverlayClick = () => {
    onOpenChange(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={handleOverlayClick}
          />
          
          {/* Dialog Content Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {React.Children.map(children, child => {
              if (React.isValidElement(child) && child.type === DialogContent) {
                return React.cloneElement(child as React.ReactElement<DialogContentProps>, {
                  onClose: () => onOpenChange(false)
                });
              }
              return null;
            })}
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export const DialogContent: React.FC<DialogContentProps> = ({
  children,
  className,
  onClose,
  showCloseButton = true
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ 
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={cn(
        "relative bg-white rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto",
        className
      )}
      onClick={(e) => e.stopPropagation()}
    >
      {showCloseButton && onClose && (
        <button
          onClick={onClose}
          className="absolute right-6 top-6 p-1 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <X className="h-4 w-4 text-gray-500" />
        </button>
      )}
      {children}
    </motion.div>
  );
};

export const DialogHeader: React.FC<DialogHeaderProps> = ({ children, className }) => {
  return (
    <div className={cn("px-8 pt-8 pb-4", className)}>
      {children}
    </div>
  );
};

export const DialogTitle: React.FC<DialogTitleProps> = ({ children, className }) => {
  return (
    <h2 className={cn("text-xl font-semibold text-gray-900", className)}>
      {children}
    </h2>
  );
};

export const DialogDescription: React.FC<DialogDescriptionProps> = ({ children, className }) => {
  return (
    <p className={cn("text-sm text-gray-500 mt-1", className)}>
      {children}
    </p>
  );
};

export const DialogFooter: React.FC<DialogFooterProps> = ({ children, className }) => {
  return (
    <div className={cn("px-8 pb-8 pt-6 flex items-center justify-end gap-3", className)}>
      {children}
    </div>
  );
};

// Export a trigger component for convenience
export const DialogTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({
  children,
  asChild = false
}) => {
  if (asChild && React.isValidElement(children)) {
    return children;
  }
  return <>{children}</>;
};
