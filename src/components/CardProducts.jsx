/* eslint-disable react/prop-types */
import React from "react";

const CardProducts = (props) => {
  return (
    <div className="card bg-base-100 w-[16rem] shadow-xl">
      <figure>
        <img
          src={props.src}
          className="duration-200 ease-in hover:scale-110"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {props.name}
          {props.badge && (
            <div className="badge bg-[#0605DC] text-[#fff]">{props.badge}</div>
          )}
        </h2>
        <div className="card-actions mt-3 justify-end">
          <div className="badge badge-outline">{props.type}</div>
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
