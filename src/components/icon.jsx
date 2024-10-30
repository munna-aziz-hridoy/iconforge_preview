import React from "react";

const Icon = ({ name, size = "24px", color = "black", style = {} }) => {
  return (
    <span
      className={`icon-${name}`}
      style={{ fontSize: size, color, ...style }}
      aria-hidden="true"
    ></span>
  );
};

export default Icon;
