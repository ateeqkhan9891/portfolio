import React from "react";
import {
  widthStyles,
  spaceStyles,
  heightStyles,
  directionStyles,
} from "../assets/lib/data";

interface DividerProps {
  direction:
    | "outer-right-to-inner-left"
    | "outer-left-to-inner-right"
    | "inner-right-to-middle"
    | "inner-left-to-middle"
    | "middle-to-inner-right"
    | "middle-to-inner-left"
    | "middle";
  color: string;           // CSS variable color name, e.g. "orange"
  thickness: string;       // e.g. "3px", "0.2rem"
  height: "small" | "middle" | "large" | "extraLarge";
  dividerStyle: string;    // e.g. "solid", "dashed"
}

const Divider: React.FC<DividerProps> = ({
  direction,
  color,
  thickness,
  height,
  dividerStyle,
}) => {
  const borderStyle = {
    borderColor: `var(--${color})`,
    borderStyle: dividerStyle,
  };

  const heightStyle = heightStyles[height];
  const directionStyle = directionStyles[direction];
  const spaceStyle = spaceStyles[direction];
  const widthStyle = widthStyles[direction];

  return (
    <div
      style={directionStyle}
      className="relative transition-all duration-300 ease-in-out"
    >
      {/* Top/Right part of the angled line */}
      <div
        className="flex justify-end mb-10"
        style={{ height: heightStyle?.heights[0], ...spaceStyle }}
      >
        <div
          className="h-full rounded-tr-lg shadow-sm"
          style={{
            ...borderStyle,
            borderRightWidth: thickness,
            borderBottomWidth: thickness,
            width: widthStyle?.widths[0],
            transition: "border-color 0.3s ease",
          }}
        />
      </div>

      {/* Bottom/Left part of the angled line */}
      <div
        className="flex justify-end -mt-10"
        style={{ height: heightStyle?.heights[1] }}
      >
        <div
          className="h-full rounded-bl-lg shadow-sm"
          style={{
            ...borderStyle,
            borderLeftWidth: thickness,
            width: widthStyle?.widths[1],
            transition: "border-color 0.3s ease",
          }}
        />
      </div>
    </div>
  );
};

export default Divider;
