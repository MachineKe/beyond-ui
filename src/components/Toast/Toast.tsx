import * as React from "react";
import toast, { Toaster, ToastBar } from "react-hot-toast";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const toastVariants = cva(
  "flex items-center gap-2 p-4 rounded-lg shadow-lg border max-w-md",
  {
    variants: {
      variant: {
        default: "bg-white border-gray-200 text-gray-900",
        success: "bg-success-50 border-success-200 text-success-800",
        error: "bg-danger-50 border-danger-200 text-danger-800",
        warning: "bg-warning-50 border-warning-200 text-warning-800",
        info: "bg-primary-50 border-primary-200 text-primary-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface ToastOptions {
  variant?: VariantProps<typeof toastVariants>["variant"];
  duration?: number;
}

const getIcon = (variant: string) => {
  switch (variant) {
    case "success":
      return <CheckCircle className="h-5 w-5 text-success-600" />;
    case "error":
      return <AlertCircle className="h-5 w-5 text-danger-600" />;
    case "warning":
      return <AlertTriangle className="h-5 w-5 text-warning-600" />;
    case "info":
      return <Info className="h-5 w-5 text-primary-600" />;
    default:
      return null;
  }
};

const showToast = {
  success: (message: string, options?: ToastOptions) =>
    toast.success(message, {
      duration: options?.duration || 4000,
    }),
  error: (message: string, options?: ToastOptions) =>
    toast.error(message, {
      duration: options?.duration || 5000,
    }),
  warning: (message: string, options?: ToastOptions) =>
    toast(message, {
      icon: "⚠️",
      duration: options?.duration || 4000,
    }),
  info: (message: string, options?: ToastOptions) =>
    toast(message, {
      icon: "ℹ️",
      duration: options?.duration || 4000,
    }),
  default: (message: string, options?: ToastOptions) =>
    toast(message, {
      duration: options?.duration || 4000,
    }),
};

const Toast: React.FC = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        className: "",
        style: {
          background: "transparent",
          boxShadow: "none",
          padding: 0,
        },
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <div
              className={cn(
                toastVariants({
                  variant: t.type === "success" ? "success" : 
                           t.type === "error" ? "error" : "default"
                })
              )}
            >
              {getIcon(t.type === "success" ? "success" : 
                      t.type === "error" ? "error" : "default") || icon}
              <div className="flex-1 text-sm font-medium">{message}</div>
              <button
                onClick={() => toast.dismiss(t.id)}
                className="inline-flex h-5 w-5 items-center justify-center rounded-full hover:bg-black/10"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};

export { Toast, showToast, toastVariants };