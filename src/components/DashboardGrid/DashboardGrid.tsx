import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const gridVariants = cva(
  "grid gap-6",
  {
    variants: {
      columns: {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        6: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
        12: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-12",
      },
    },
    defaultVariants: {
      columns: 12,
    },
  }
);

const gridItemVariants = cva(
  "min-h-0", // Prevents grid items from growing unnecessarily
  {
    variants: {
      colSpan: {
        1: "col-span-1",
        2: "col-span-1 md:col-span-2",
        3: "col-span-1 md:col-span-2 lg:col-span-3",
        4: "col-span-1 md:col-span-2 lg:col-span-4",
        6: "col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-6",
        12: "col-span-full",
      },
      rowSpan: {
        1: "row-span-1",
        2: "row-span-2",
        3: "row-span-3",
        4: "row-span-4",
      },
    },
    defaultVariants: {
      colSpan: 1,
      rowSpan: 1,
    },
  }
);

interface DashboardGridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {}

interface DashboardGridItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridItemVariants> {}

const DashboardGrid = React.forwardRef<HTMLDivElement, DashboardGridProps>(
  ({ className, columns, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(gridVariants({ columns }), className)}
        {...props}
      />
    );
  }
);

const DashboardGridItem = React.forwardRef<HTMLDivElement, DashboardGridItemProps>(
  ({ className, colSpan, rowSpan, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(gridItemVariants({ colSpan, rowSpan }), className)}
        {...props}
      />
    );
  }
);

DashboardGrid.displayName = "DashboardGrid";
DashboardGridItem.displayName = "DashboardGridItem";

export { 
  DashboardGrid, 
  DashboardGridItem, 
  gridVariants, 
  gridItemVariants 
};