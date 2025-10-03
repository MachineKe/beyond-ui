import React, { useState } from "react";
import { Skeleton } from "../Skeleton";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  skeletonClassName?: string;
}

const DEFAULT_PLACEHOLDER =
  "/images/placeholder-product.png"; // You may want to ensure this exists

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className = "",
  fallbackSrc = DEFAULT_PLACEHOLDER,
  skeletonClassName = "w-full h-full",
  ...imgProps
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!loaded && !error && (
        <Skeleton className={skeletonClassName} />
      )}
      <img
        src={error ? fallbackSrc : src}
        alt={alt}
        loading="lazy"
        style={loaded ? {} : { display: "none" }}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        draggable={imgProps.draggable ?? false}
        {...imgProps}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 ${loaded ? "" : "hidden"}`}
      />
    </div>
  );
};