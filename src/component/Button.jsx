import React from "react";
import "./Button.css";
const COLORS = ["default", "primary", "secondary", "danger"];
const SIZES = ["sm", "md", "lg"];
const Button = ({
  children,
  type,
  size,
  onClick,
  buttonStyle,
  color,
  startIcon,
  endIcon,
}) => {
  const buttonColor = COLORS.includes(color) ? color : "default";
  const buttonSize = SIZES.includes(size) ? size : "md";
  return (
    <button
      className={`btn ${buttonColor} ${buttonSize}`}
      onClick={onClick}
      type={type}
    >
      <span>
        {startIcon ? <i class="material-icons my-icon">{startIcon}</i> : null}
        {children}
        {endIcon ? <i class="material-icons my-icon">{endIcon}</i> : null}
      </span>
    </button>
  );
};

export default Button;
