import { useTheme } from "@mui/material";
import React, { forwardRef, SVGProps } from "react";

export const EditIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    const { height, width, color } = props;
    const theme = useTheme();
    return (
      <svg
        ref={ref}
        width={16 || width}
        height={16 || height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          clipRule="evenodd"
          d="M10.667 2 14 5.333 5.333 14H2v-3.333L10.667 2Z"
          stroke={color || theme.palette.grey[700]}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
