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

import {
  BalmutProduct,
  BalmutNewProduct,
  BedCover,
  BedCoverNewProduct,
  BedCoverSingle,
  BedCoverSingleNew,
  BlanketProduct,
  BlanketProductNew,
  KarpetProduct,
  SpreiProduct,
  SpreiProductNew,
  SpreiTwoInOneProduct,
  SpreiTwoInOneProductNew,
  SpreiRumbayProduct,
  SpreiRumbayProductNew,
  SpreiSingleProduct,
  SpreiSinggleNew,
  RbbProduct,
} from "./catalog/ladyrose";

const Banner = ({ bannerImage, logoImage }) => {
  return (
    <div
      className="relative mt-20 min-h-screen w-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="flex justify-start ps-10 pt-36">
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
      case "Balmut":
        return (
          <>
            <BalmutNewProduct />
            <BalmutProduct />
          </>
        );
      case "Bed Cover":
        return (
          <>
            <BedCoverNewProduct />
            <BedCover />
          </>
        );
      case "Bed Cover Single":
        return (
          <>
            <BedCoverSingleNew />
            <BedCoverSingle />
          </>
        );
      case "Blanket":
        return (
          <>
            <BlanketProductNew />
            <BlanketProduct />
          </>
        );
      case "Karpet":
        return (
          <>
            <KarpetProduct />
          </>
        );
      case "Sprei":
        return (
          <>
            <SpreiProductNew />
            <SpreiProduct />
          </>
        );
      case "Sprei 2 in 1":
        return (
          <>
            <SpreiTwoInOneProductNew />
            <SpreiTwoInOneProduct />
          </>
        );
      case "Sprei Rumbay":
        return (
          <>
            <SpreiRumbayProductNew />
            <SpreiRumbayProduct />
          </>
        );
      case "Sprei Single":
        return (
          <>
            <SpreiSinggleNew />
            <SpreiSingleProduct />
          </>
        );
      case "RBB":
        return (
          <>
            <RbbProduct />
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
      <div className="my-24 flex justify-center gap-x-5 text-center font-bold">
        <div className="grid grid-cols-2 items-center justify-center gap-8 px-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5">
          {products.map((product, index) => (
            <div
              key={index}
              className="ml-5 cursor-pointer rounded-xl bg-[#f5f5f5] p-3 shadow-md duration-200 ease-in hover:scale-110 lg:col-span-1 lg:p-5"
              onClick={() => handleProductClick(product.name)}
            >
              <img
                src={product.image}
                alt="icon"
                className="mb-3 w-14 max-[600px]:ml-9 max-[600px]:w-10 lg:ml-10"
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
