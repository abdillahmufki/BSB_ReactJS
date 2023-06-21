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
      className="min-h-screen w-screen bg-cover bg-center bg-no-repeat relative"
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
      <div className="flex justify-center gap-x-5 my-24 px-10 text-center font-bold">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="col-span-1">
            {products
              .filter((product) => product.name === "Bed Cover")
              .map((product, index) => (
                <div
                  key={index}
                  className="bg-[#f5f5f5] shadow-md rounded-xl p-6 hover:scale-110 ease-in duration-200"
                  onClick={() => handleProductClick(product.name)}
                >
                  <img
                    src={product.image}
                    alt="icon"
                    width={64}
                    className="ml-5 mb-3"
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
                  className="bg-[#f5f5f5] shadow-md rounded-xl p-6 hover:scale-110 ease-in duration-200"
                  onClick={() => handleProductClick(product.name)}
                >
                  <img
                    src={product.image}
                    alt="icon"
                    width={64}
                    className="ml-5 mb-3"
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
                  className="bg-[#f5f5f5] shadow-md rounded-xl p-6 hover:scale-110 ease-in duration-200"
                  onClick={() => handleProductClick(product.name)}
                >
                  <img
                    src={product.image}
                    alt="icon"
                    width={64}
                    className="ml-5 mb-3"
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
                  className="bg-[#f5f5f5] shadow-md rounded-xl p-6 hover:scale-110 ease-in duration-200"
                  onClick={() => handleProductClick(product.name)}
                >
                  <img
                    src={product.image}
                    alt="icon"
                    width={64}
                    className="ml-5 mb-3"
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
                  className="bg-[#f5f5f5] shadow-md rounded-xl p-6 hover:scale-110 ease-in duration-200"
                  onClick={() => handleProductClick(product.name)}
                >
                  <img
                    src={product.image}
                    alt="icon"
                    width={64}
                    className="ml-5 mb-3"
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
