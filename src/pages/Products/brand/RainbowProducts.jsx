/* eslint-disable react/prop-types */
import React, { useState } from "react";

import banner from "../../../assets/banner/19.jpg";
import imageLogo from "../../../assets/brand-logo/rainbow.png";
import sprei from "../../../assets/category/bed1.png";
import SpreiProduct from "./catalog/rainbow/SpreiProduct";

const Banner = ({ bannerImage, logoImage }) => {
  return (
    <div
      className="relative mt-20 min-h-screen w-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="flex justify-start ps-10 pt-28">
        <div className="bottom-10 rounded-md bg-white p-5 shadow-md">
          <img
            src={logoImage}
            alt="logo brand"
            className="max-w-16 w-[250px]"
          />
        </div>
      </div>
    </div>
  );
};

const RainbowProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const renderProductComponent = () => {
    switch (selectedProduct) {
      case "Sprei":
        return (
          <>
            <SpreiProduct />
          </>
        );

      default:
        return null;
    }
  };

  const products = [{ name: "Sprei", image: sprei }];

  return (
    <div className="min-h-screen overflow-hidden">
      <Banner bannerImage={banner} logoImage={imageLogo} />
      <div className="my-24 flex justify-center gap-x-5 text-center font-bold">
        <div className="grid grid-cols-1 items-center justify-center gap-8 px-5 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
          {products.map((product, index) => (
            <div
              key={index}
              className="ml-5 w-36 cursor-pointer rounded-xl bg-[#f5f5f5] p-5 shadow-md duration-200 ease-in hover:scale-110 lg:col-span-1 lg:p-5"
              onClick={() => handleProductClick(product.name)}
            >
              <img src={product.image} alt="icon" className="mb-3 ml-6" />
              <h2>{product.name}</h2>
            </div>
          ))}
        </div>
      </div>
      {selectedProduct && (
        <div className="product-component">{renderProductComponent()}</div>
      )}
    </div>
  );
};

export default RainbowProducts;
