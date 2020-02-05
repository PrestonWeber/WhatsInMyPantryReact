import React from "react";

export function Container({ fluid, children, style, className}) {
  return <div className={`container${fluid ? "-fluid" : "" + className}`}
  style={style}
  >
  {children}
  </div>;
}

export function Row({ fluid, children, style, className}) {
  return <div className={`row${fluid ? "-fluid" : ""}` }
  style={style}
  >

  {children}
  </div>;
}

export function Col({ size, children, style, className }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ") + " " + className}
        style={style}
    >
      {children}
    </div>
  );
}
