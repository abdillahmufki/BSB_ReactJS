/* eslint-disable react/prop-types */
import React, { useState } from "react";

import banner from "../../../assets/banner/11.jpg";
import imageLogo from "../../../assets/brand-logo/illusions1.png";

import bedCover from "../../../assets/category/sprei1.png";
import rumbai from "../../../assets/category/rumbai.png";
import sprei from "../../../assets/category/bed1.png";
import sarungkasur from "../../../assets/category/sarungkasur1.png";

import {
  BedCoverProduct,
  SarungKasurProduct,
  SpreiProduct,
  BedCoverNewProduct,
  SarungKasurNewProduct,
  SpreiNewProduct,
  SpreiRumbayProduct,
  SpreiRumbayNew,
  SpreiSingleProduct,
} from "./catalog/illuisions";

const Banner = ({ bannerImage, logoImage }) => {
  return (
    <div
      className="relative mt-20 min-h-screen w-screen bg-cover bg-no-repeat py-10"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="flex justify-start ps-10 pt-10">
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

const InternalProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const renderProductComponent = () => {
    switch (selectedProduct) {
      case "Bed Cover":
        return (
          <>
            <BedCoverNewProduct />
            <BedCoverProduct />
          </>
        );
      case "Sarung Kasur":
        return (
          <>
            <SarungKasurNewProduct />
            <SarungKasurProduct />
          </>
        );
      case "Sprei":
        return (
          <>
            <SpreiNewProduct />
            <SpreiProduct />
            <SpreiSingleProduct />
          </>
        );
      case "Sprei Rumbai":
        return (
          <>
            <SpreiRumbayNew />
            <SpreiRumbayProduct />
          </>
        );
      default:
        return null;
    }
  };

  const products = [
    { name: "Bed Cover", image: bedCover },
    { name: "Sarung Kasur", image: sarungkasur },
    { name: "Sprei", image: sprei },
    { name: "Sprei Rumbai", image: rumbai },
  ];

  return (
    <div className="mt-90 overflow-hidden">
      <Banner bannerImage={banner} logoImage={imageLogo} />
      <div className="my-24 flex justify-center gap-x-5 px-10 text-center font-bold">
        <div className="grid grid-cols-1 items-center justify-center gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="cursor-pointer rounded-xl bg-[#f5f5f5] p-6 shadow-md duration-200 ease-in hover:scale-110 lg:col-span-1"
              onClick={() => handleProductClick(product.name)}
            >
              <img
                src={product.image}
                alt="icon"
                className="mb-3 w-14 max-[600px]:ml-6 max-[600px]:w-16 lg:ml-7"
              />
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

export default InternalProducts;
