/* eslint-disable react/prop-types */
import React from "react";

function Button(props) {
  return (
    <button
      type={props.type}
      className="btn bg-[#0100E0] text-white hover:bg-blue-500 rounded-xl border-none"
    >
      {props.children}
    </button>
  );
}

export default Button;
