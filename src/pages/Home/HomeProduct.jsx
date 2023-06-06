import React from "react";
import { Container } from "react-grid-system";

const HomeProduct = () => {
  const imagesLeft = [
    {
      src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
      widthClass: "w-full",
    },
    {
      src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
      widthClass: "w-1/2",
    },
    {
      src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp",
      widthClass: "w-1/2",
    },
  ];
  const imagesRight = [
    {
      src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
      widthClass: "w-1/2",
    },
    {
      src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp",
      widthClass: "w-1/2",
    },
    {
      src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
      widthClass: "w-full",
    },
  ];

  return (
    <Container className="flex justify-center">
      <div className="flex w-1/2 flex-wrap">
        {imagesLeft.map((image, index) => (
          <div key={index} className={`p-1 md:p-2 ${image.widthClass}`}>
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={image.src}
            />
          </div>
        ))}
      </div>
      <div className="flex w-1/2 flex-wrap">
        {imagesRight.map((image, index) => (
          <div key={index} className={`p-1 md:p-2 ${image.widthClass}`}>
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={image.src}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default HomeProduct;
