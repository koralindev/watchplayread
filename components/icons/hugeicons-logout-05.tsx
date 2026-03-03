import * as React from "react";

export function Logout05Icon({
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
      <path d="M7 3c-.93 0-1.395 0-1.776.102a3 3 0 0 0-2.122 2.122C3 5.605 3 6.07 3 7v10c0 .93 0 1.395.102 1.776a3 3 0 0 0 2.122 2.122C5.605 21 6.07 21 7 21m9.5-4.5S21 13.186 21 12s-4.5-4.5-4.5-4.5M20 12H8"/>
    </svg>
  );
}
