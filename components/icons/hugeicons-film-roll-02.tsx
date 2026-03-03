import * as React from "react";

export function FilmRoll02Icon({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="10.5" cy="10.5" r="8.5"/><path d="M10.5 10.5h.008M14 7l-1 1m-5 5l-1 1m7 0l-1-1M8 8L7 7"/><path d="m13.5 18.5l5.823-.965C20.719 17.292 22 18.35 22 19.75c0 1.243-1.021 2.25-2.281 2.25H18.7"/>
    </svg>
  );
}
