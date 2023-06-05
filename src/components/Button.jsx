/* eslint-disable react/prop-types */
import React from "react";

function Button(props) {
  return (
    <button className="btn bg-[#0100E0] text-white hover:bg-blue-500 rounded-2xl border-none">
      {props.text}
    </button>
  );
}

export default Button;
