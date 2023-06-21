/* eslint-disable react/prop-types */
import React from "react";

const CardProducts = (props) => {
  return (
    <div className="card w-[16rem] bg-base-100 shadow-xl">
      <figure>
        <img
          src={props.src}
          className="hover:scale-110 ease-in duration-200"
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
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{props.type}</div>
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
