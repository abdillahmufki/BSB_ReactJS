/* eslint-disable react/prop-types */
import React, { useState } from "react";

import banner from "../../../assets/banner/10.jpg";
import imageLogo from "../../../assets/brand-logo/vallery1.png";

import bedcoverquilt from "../../../assets/category/bedcoverquilt.png";
import bedCover from "../../../assets/category/sprei1.png";
import singlebed from "../../../assets/category/singlebed.png";
import blanket from "../../../assets/category/blanket1.png";
import carpets from "../../../assets/category/carpets.png";
import babyblanket from "../../../assets/category/babyblanket1.png";
import pillow from "../../../assets/category/pillow1.png";
import sprei from "../../../assets/category/bed1.png";
import spreisingle from "../../../assets/category/sprei-single.png";
import keset1 from "../../../assets/category/keset1.png";
import bigblanket from "../../../assets/category/bigblanket.png";

import {
  BedCover,
  BedCoverEmboss,
  BedCoverSignature,
  BedCoverQuiltProduct,
  BedCoverSingle,
  BedCoverSingleNew,
  BlanketProduct,
  BlanketBabyProduct,
  BlanketJumboProduct,
  KarpetProduct,
  KesetProduct,
  SarungBantalProduct,
  SpreiProduct,
  SpreiEmbosProduct,
  SpreiSignatureProduct,
  SpreiSingleProduct,
  SpreiSingleEmbos,
} from "./catalog/vallery";
const Banner = ({ bannerImage, logoImage }) => {
  return (
    <div
      className="relative mt-20 min-h-screen w-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="flex justify-center pt-36">
        <div className="absolute bottom-10 rounded-md bg-white p-5 shadow-md">
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

const ValleryquicyProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const renderProductComponent = () => {
    switch (selectedProduct) {
      case "Bed Cover":
        return (
          <>
            <BedCoverSignature />
            <BedCover />
            <BedCoverEmboss />
          </>
        );
      case "Bed Cover Quilt":
        return (
          <>
            <BedCoverQuiltProduct />
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
            <BlanketProduct />
          </>
        );
      case "Blanket Baby":
        return (
          <>
            <BlanketBabyProduct />
          </>
        );
      case "Blanket Jumbo":
        return (
          <>
            <BlanketJumboProduct />
          </>
        );
      case "Karpet":
        return (
          <>
            <KarpetProduct />
          </>
        );
      case "Keset":
        return (
          <>
            <KesetProduct />
          </>
        );
      case "Sarung Bantal":
        return (
          <>
            <SarungBantalProduct />
          </>
        );
      case "Sprei":
        return (
          <>
            <SpreiSignatureProduct />
            <SpreiProduct />
            <SpreiEmbosProduct />
          </>
        );
      case "Sprei Single":
        return (
          <>
            <SpreiSingleProduct />
            <SpreiSingleEmbos />
          </>
        );

      default:
        return null;
    }
  };

  const products = [
    { name: "Bed Cover", image: bedCover },
    { name: "Bed Cover Quilt", image: bedcoverquilt },
    { name: "Bed Cover Single", image: singlebed },
    { name: "Blanket", image: blanket },
    { name: "Blanket Baby", image: babyblanket },
    { name: "Blanket Jumbo", image: bigblanket },
    { name: "Karpet", image: carpets },
    { name: "Keset", image: keset1 },
    { name: "Sarung Bantal", image: pillow },
    { name: "Sprei", image: sprei },
    { name: "Sprei Single", image: spreisingle },
  ];

  return (
    <div className="mt-90 overflow-hidden">
      <Banner bannerImage={banner} logoImage={imageLogo} />
      <div className="my-24 flex justify-center gap-x-5 text-center font-bold">
        <div className="grid grid-cols-2 items-center justify-center gap-8 px-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
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

export default ValleryquicyProducts;
