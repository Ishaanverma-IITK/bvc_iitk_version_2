import React from "react";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  unoptimized?: boolean;
}

export function Image({
  src,
  alt,
  fill,
  priority,
  unoptimized,
  className = "",
  style = {},
  ...props
}: ImageProps) {
  if (fill) {
    return (
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover ${className}`}
        style={style}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        {...props}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      {...props}
    />
  );
}

export default Image;
