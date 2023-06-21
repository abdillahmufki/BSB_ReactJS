import React from "react";
import BlanketData from "./BlanketData";
import { Container, Row } from "react-grid-system";
import CardProducts from "../../../../../components/CardProducts";

const Blanket = () => {
  return (
    <Container fluid className="my-10">
      <div className="my-10 bg-blue-800 text-white p-10">
        <h2 className="text-2xl font-semibold text-center">Blanket</h2>
      </div>
      <Row className="gap-x-10 gap-y-8 md:pl-28 pl-16">
        {BlanketData.map((image, index) => (
          <CardProducts
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

export default Blanket;