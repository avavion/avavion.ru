import React from "react";

const Circle = ({ color = "#FF67F7", size = 48, ...props }) => {

  return (
    <div
      className='circle'
      style={{
        backgroundColor: color,
        width: size,
        height: size,
      }}
      {...props}
    ></div>
  );
};

export default Circle;
