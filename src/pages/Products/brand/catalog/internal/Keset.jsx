import React from "react";
import KesetData from "./KesetData";
import { Container, Row } from "react-grid-system";
import CardProducts from "../../../../../components/CardProducts";

const Keset = () => {
  return (
    <Container fluid className="my-10">
      <div className="my-10 bg-blue-800 text-white p-10">
        <h2 className="text-2xl font-semibold text-center">Keset Bihun</h2>
      </div>
      <Row className="gap-x-10 gap-y-8 md:pl-28 pl-16">
        {KesetData.map((image, index) => (
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

export default Keset;
