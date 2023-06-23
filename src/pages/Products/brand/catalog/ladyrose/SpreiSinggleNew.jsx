import React from "react";
import SpreiSingleNewData from "./SpreiSinggleNewData";

import { Container, Row } from "react-grid-system";
import CardProducts from "../../../../../components/CardProducts";

const SpreiSinggleNew = () => {
  return (
    <Container fluid className="my-10">
      <div className="my-10 bg-blue-800 p-10 text-white">
        <h2 className="text-center text-2xl font-semibold">
          Sprei Single New Motif
        </h2>
      </div>
      <Row className="gap-x-10 gap-y-8 pl-16 md:pl-28">
        {SpreiSingleNewData.map((image, index) => (
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

export default SpreiSinggleNew;
