import * as React from "react";
import { Skeleton } from "./Skeleton";

export const SkeletonExample: React.FC = () => (
  <div className="space-y-4 max-w-md">
    <Skeleton className="h-8 w-1/2" />
    <Skeleton className="h-4 w-3/4" />
    <div className="flex gap-2">
      <Skeleton className="h-8 w-8 rounded-full" />
      <Skeleton className="h-8 w-32" />
    </div>
    <Skeleton className="h-24 w-full" />
  </div>
);