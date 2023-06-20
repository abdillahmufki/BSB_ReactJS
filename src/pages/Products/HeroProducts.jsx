import React from "react";
import heroImage from "../../assets/banner/03.jpg";
const HeroProducts = () => {
  return (
    <>
      <div
        className="hero min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="mt-10 hero-content text-center text-neutral-content">
          <h2 className="text-3xl font-bold">
            &quot;Koleksi Produk Tekstil Buana Selaras Berjaya. Nyaman dan
            Berkualitas Tinggi&quot;
          </h2>
        </div>
      </div>
    </>
  );
};

export default HeroProducts;
