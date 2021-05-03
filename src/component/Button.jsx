import React from "react";
import "./Button.css";
const COLORS = ["default", "primary", "secondary", "danger"];
const SIZES = ["sm", "md", "lg"];
const VARIANTS = ["text", "outline", "fill"];
const Button = (
  {
    children,
    type,
    size,
    onClick,
    buttonStyle,
    color,
    startIcon,
    endIcon,
    variant,
    disableShadow,
    disabled,
  },
  props
) => {
  const buttonColor = COLORS.includes(color) ? color : "default";
  const buttonSize = SIZES.includes(size) ? size : "md";
  const buttonShadow = disableShadow ? "" : "btn-disable-shadow";
  const buttonVariant = VARIANTS.includes(variant) ? variant : "fill";
  const buttonDisabled = disabled ? "btn-disabled" : "";
  return (
    <button
      className={`btn-${buttonColor} btn-${buttonSize} btn-${buttonShadow}  btn-${buttonVariant} ${buttonDisabled}`}
      onClick={onClick}
      type="button"
    >
      <span>
        {startIcon ? (
          <i className="material-icons my-icon">{startIcon}</i>
        ) : null}
        {children}
        {endIcon ? <i className="material-icons my-icon">{endIcon}</i> : null}
      </span>
    </button>
  );
};

export default Button;
