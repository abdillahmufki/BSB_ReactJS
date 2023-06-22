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
      className="min-h-screen w-screen bg-cover bg-no-repeat relative mt-20"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="pt-36 flex justify-center">
        <div className="bg-white p-5 rounded-md shadow-md absolute bottom-10">
          <img src={logoImage} alt="logo brand" className="w-auto max-w-16" />
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
      <div className="flex justify-center gap-x-5 my-24 px-10 text-center font-bold">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 justify-center items-center">
          {products.map((product, index) => (
            <div
              key={index}
              className="lg:col-span-1 bg-[#f5f5f5] shadow-md rounded-xl p-6 hover:scale-110 ease-in duration-200 cursor-pointer"
              onClick={() => handleProductClick(product.name)}
            >
              <img
                src={product.image}
                alt="icon"
                className="w-14 lg:ml-7 mb-3 max-[600px]:w-16 max-[600px]:ml-6"
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
