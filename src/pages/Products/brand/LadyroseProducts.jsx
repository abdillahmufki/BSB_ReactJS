/* eslint-disable react/prop-types */
import React, { useState } from "react";

import banner from "../../../assets/banner/16.jpg";
import imageLogo from "../../../assets/brand-logo/ladyrose2.png";

import pillow from "../../../assets/category/pillow.png";
import bedCover from "../../../assets/category/sprei1.png";
import singlebed from "../../../assets/category/singlebed.png";
import blanket from "../../../assets/category/blanket1.png";
import carpets from "../../../assets/category/carpets.png";
import twoinone from "../../../assets/category/single-bed.png";
import sprei from "../../../assets/category/bed1.png";
import spreiRumbay from "../../../assets/category/rumbai.png";
import spreisingle from "../../../assets/category/sprei-single.png";
import rbb from "../../../assets/category/rbb.png";

import { BalmutProduct } from "./catalog/ladyrose";

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
      case "Balmut":
        return (
          <>
            <BalmutProduct />
          </>
        );
      default:
        return null;
    }
  };

  const products = [
    { name: "Balmut", image: pillow },
    { name: "Bed Cover", image: bedCover },
    { name: "Bed Cover Single", image: singlebed },
    { name: "Blanket", image: blanket },
    { name: "Karpet", image: carpets },
    { name: "Sprei", image: sprei },
    { name: "Sprei 2 in 1", image: twoinone },
    { name: "Sprei Rumbay", image: spreiRumbay },
    { name: "Sprei Single", image: spreisingle },
    { name: "RBB", image: rbb },
  ];

  return (
    <div className="mt-90 overflow-hidden">
      <Banner bannerImage={banner} logoImage={imageLogo} />
      <div className="flex justify-center gap-x-5 my-24 text-center font-bold">
        <div className="grid grid-cols-2 px-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-8 justify-center items-center">
          {products.map((product, index) => (
            <div
              key={index}
              className="lg:col-span-1 bg-[#f5f5f5] shadow-md rounded-xl lg:p-5 p-3 ml-5 hover:scale-110 ease-in duration-200 cursor-pointer"
              onClick={() => handleProductClick(product.name)}
            >
              <img
                src={product.image}
                alt="icon"
                className="w-14 lg:ml-10 mb-3 max-[600px]:w-10 max-[600px]:ml-9"
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
