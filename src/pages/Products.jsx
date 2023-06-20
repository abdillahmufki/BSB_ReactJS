import React from "react";
import HeroProducts from "./Products/HeroProducts";
import AllBrandProducts from "./Products/AllBrandProducts";
const Products = () => {
  return (
    <div className="mt-[80px]">
      <HeroProducts />
      <AllBrandProducts />
    </div>
  );
};

export default Products;
