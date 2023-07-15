/* eslint-disable react/prop-types */
import React, { useState } from "react";

import banner from "../../../assets/banner/06.jpg";
import imageLogo from "../../../assets/brand-logo/internal2.png";

import sprei from "../../../assets/category/bed1.png";
import bedCover from "../../../assets/category/sprei1.png";
import blanket from "../../../assets/category/blanket1.png";
import blanketBaby from "../../../assets/category/babyblanket1.png";
import keset from "../../../assets/category/keset1.png";

import {
  BedCover,
  BedCoverNew,
  BedCoverSinggle,
  SpreiNew,
  Sprei,
  SpreiSinggle,
  Blanket,
  BlanketNew,
  BlanketBaby,
  Keset,
  KesetCendol,
} from "../brand/catalog/internal";

const Banner = ({ bannerImage, logoImage }) => {
  return (
    <div
      className="relative min-h-screen w-screen bg-cover bg-center bg-no-repeat"
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
      case "Bed Cover":
        return (
          <>
            <BedCoverNew />
            <BedCover />
            <BedCoverSinggle />
          </>
        );
      case "Sprei":
        return (
          <>
            <SpreiNew />
            <Sprei />
            <SpreiSinggle />
          </>
        );
      case "Blanket":
        return (
          <>
            <BlanketNew />
            <Blanket />
          </>
        );
      case "Blanket Baby":
        return (
          <>
            <BlanketBaby />
          </>
        );
      case "Keset":
        return (
          <>
            <Keset />
            <KesetCendol />
          </>
        );
      default:
        return null;
    }
  };

  const products = [
    { name: "Bed Cover", image: bedCover },
    { name: "Sprei", image: sprei },
    { name: "Blanket", image: blanket },
    { name: "Blanket Baby", image: blanketBaby },
    { name: "Keset", image: keset },
  ];

  return (
    <div className="mt-90 overflow-hidden">
      <Banner bannerImage={banner} logoImage={imageLogo} />
      <div className="my-24 flex justify-center gap-x-5 px-10 text-center font-bold">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-1">
            {products
              .filter((product) => product.name === "Bed Cover")
              .map((product, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-[#f5f5f5] p-6 shadow-md duration-200 ease-in hover:scale-110"
                  onClick={() => handleProductClick(product.name)}
                >
                  <img
                    src={product.image}
                    alt="icon"
                    width={64}
                    className="mb-3 ml-5"
                  />
                  <h2>{product.name}</h2>
                </div>
              ))}
          </div>
          <div className="col-span-1">
            {products
              .filter((product) => product.name === "Sprei")
              .map((product, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-[#f5f5f5] p-6 shadow-md duration-200 ease-in hover:scale-110"
                  onClick={() => handleProductClick(product.name)}
                >
                  <img
                    src={product.image}
                    alt="icon"
                    width={64}
                    className="mb-3 ml-5"
                  />
                  <h2>{product.name}</h2>
                </div>
              ))}
          </div>
          <div className="col-span-1">
            {products
              .filter((product) => product.name === "Blanket")
              .map((product, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-[#f5f5f5] p-6 shadow-md duration-200 ease-in hover:scale-110"
                  onClick={() => handleProductClick(product.name)}
                >
                  <img
                    src={product.image}
                    alt="icon"
                    width={64}
                    className="mb-3 ml-5"
                  />
                  <h2>{product.name}</h2>
                </div>
              ))}
          </div>
          <div className="col-span-1">
            {products
              .filter((product) => product.name === "Blanket Baby")
              .map((product, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-[#f5f5f5] p-6 shadow-md duration-200 ease-in hover:scale-110"
                  onClick={() => handleProductClick(product.name)}
                >
                  <img
                    src={product.image}
                    alt="icon"
                    width={64}
                    className="mb-3 ml-5"
                  />
                  <h2>{product.name}</h2>
                </div>
              ))}
          </div>
          <div className="col-span-1">
            {products
              .filter((product) => product.name === "Keset")
              .map((product, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-[#f5f5f5] p-6 shadow-md duration-200 ease-in hover:scale-110"
                  onClick={() => handleProductClick(product.name)}
                >
                  <img
                    src={product.image}
                    alt="icon"
                    width={64}
                    className="mb-3 ml-5"
                  />
                  <h2>{product.name}</h2>
                </div>
              ))}
          </div>
        </div>
      </div>
      {selectedProduct && (
        <div className="product-component">{renderProductComponent()}</div>
      )}
    </div>
  );
};

export default InternalProducts;
