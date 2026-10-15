import { useState } from "react";

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "BVC";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

interface AlumniAvatarProps {
  src?: string;
  name: string;
  className?: string;
  textClassName?: string;
}

export function AlumniAvatar({
  src,
  name,
  className = "h-16 w-16 rounded-full",
  textClassName = "text-base font-bold",
}: AlumniAvatarProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className={`shrink-0 flex items-center justify-center bg-gradient-to-br from-saffron to-saffron-deep text-primary-foreground font-display select-none shadow-sm ${className}`}
        title={name}
        aria-label={name}
      >
        <span className={textClassName}>{getInitials(name)}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      loading="lazy"
      onError={() => setHasError(true)}
      className={`shrink-0 object-cover bg-muted ${className}`}
    />
  );
}
