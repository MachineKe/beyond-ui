import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const tabsListVariants = cva(
  "inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500",
  {
    variants: {
      variant: {
        default: "bg-gray-100",
        pills: "bg-transparent gap-2",
        underline: "bg-transparent border-b border-gray-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "data-[state=active]:bg-white data-[state=active]:text-gray-950 data-[state=active]:shadow-sm",
        pills: "data-[state=active]:bg-primary-100 data-[state=active]:text-primary-700 hover:bg-gray-100",
        underline: "data-[state=active]:border-b-2 data-[state=active]:border-primary-600 data-[state=active]:text-primary-600 hover:text-gray-900 rounded-none border-b-2 border-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface TabsContextValue {
  value: string;
  onValueChange: (value: string) => void;
  variant?: VariantProps<typeof tabsListVariants>["variant"];
}

const TabsContext = React.createContext<TabsContextValue | undefined>(undefined);

interface TabsProps extends VariantProps<typeof tabsListVariants> {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ value, onValueChange, variant, children, className }) => {
  return (
    <TabsContext.Provider value={{ value, onValueChange, variant }}>
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
};

const TabsList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error("TabsList must be used within Tabs");

  return (
    <div
      ref={ref}
      className={cn(tabsListVariants({ variant: context.variant }), className)}
      {...props}
    />
  );
});
TabsList.displayName = "TabsList";

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, ...props }, ref) => {
    const context = React.useContext(TabsContext);
    if (!context) throw new Error("TabsTrigger must be used within Tabs");

    const isActive = context.value === value;

    return (
      <button
        ref={ref}
        className={cn(
          tabsTriggerVariants({ variant: context.variant }),
          className
        )}
        data-state={isActive ? "active" : "inactive"}
        onClick={() => context.onValueChange(value)}
        {...props}
      />
    );
  }
);
TabsTrigger.displayName = "TabsTrigger";

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, ...props }, ref) => {
    const context = React.useContext(TabsContext);
    if (!context) throw new Error("TabsContent must be used within Tabs");

    if (context.value !== value) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
          className
        )}
        {...props}
      />
    );
  }
);
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants, tabsTriggerVariants };