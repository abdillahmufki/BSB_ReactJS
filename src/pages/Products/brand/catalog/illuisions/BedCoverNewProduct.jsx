import React from "react";
import { Container, Row } from "react-grid-system";
import CardProducts from "../../../../../components/CardProducts";
import BedCoverfData from "./BedCoverNewData";

const BedCoverNewProduct = () => {
  return (
    <Container fluid className="my-10">
      <div className="my-10 bg-blue-800 text-white p-10">
        <h2 className="text-2xl font-semibold text-center">Bed Cover New</h2>
      </div>
      <Row className="gap-x-10 gap-y-8 md:pl-28 pl-16">
        {BedCoverfData.map((image, index) => (
          <CardProducts
            badge="NEW"
            key={index}
            src={image.src}
            alt={image.alt}
            name={image.name}
            type={image.type}
          />
        ))}
      </Row>
    </Container>
  );
};

export default BedCoverNewProduct;
