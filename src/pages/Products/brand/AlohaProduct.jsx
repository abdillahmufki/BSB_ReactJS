import React, { useState } from "react";
import imageLogo from "../../../assets/brand-logo/aloha.png";
import { Container, Row, Col } from "react-grid-system";
import bedCover from "../../../assets/category/bc.png";
import sprei from "../../../assets/category/sprei.png";
import spreiSinggle from "../../../assets/category/spsingle.png";
import bedCoverImageMotif from "../../../assets/category/motif.png";
import bedCoverImageEmbos from "../../../assets/category/emboss.png";

import banner from "../../../assets/banner/01.jpg";
/* Component */
import BedCoverMotif from "./catalog/aloha/BedCoverMotif";
import BedCoverEmbos from "./catalog/aloha/BedCoverEmbos";
import SpreiMotif from "./catalog/aloha/SpreiMotif";
import SpreiEmboss from "./catalog/aloha/SpreiEmboss";
import SpreiSinggleMotif from "./catalog/aloha/SpreiSinggleMotif";
import SpreiSinggleEmboss from "./catalog/aloha/SpreiSinggleEmboss";

const AlohaProduct = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedSubType, setSelectedSubType] = useState(null);

  const category = [
    {
      name: "Bed Cover",
      image: bedCover,
      subTypes: ["Bed Cover Motif", "Bed Cover Emboss"],
      imageTypes: [bedCoverImageMotif, bedCoverImageEmbos],
    },
    {
      name: "Sprei",
      image: sprei,
      subTypes: ["Sprei Motif", "Sprei Emboss"],
      imageTypes: [bedCoverImageMotif, bedCoverImageEmbos],
    },
    {
      name: "Sprei Single",
      image: spreiSinggle,
      subTypes: ["Sprei Single Motif", "Sprei Single Emboss"],
      imageTypes: [bedCoverImageMotif, bedCoverImageEmbos],
    },
  ];

  const handleCategoryClick = (name) => {
    setSelectedType(name);
    setSelectedSubType(null);
  };

  const handleSubTypeClick = (subType) => {
    setSelectedSubType(subType);
  };

  return (
    <Container fluid className="mt-[90px] ">
      <div
        className="md:min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {" "}
        <div className="flex justify-center pt-28">
          <img
            src={imageLogo}
            alt="logo brand"
            className="w-auto max-[600px]:w-16"
          />
        </div>
      </div>
      <Row className="py-10">
        <Col
          lg={12}
          md={12}
          sm={12}
          className="bg-cover bg-center bg-no-repeat"
        ></Col>
        <Col lg={12} md={12} sm={12}>
          {/* {selectedType && (
            <div className="flex justify-center py-10 text-center">
              <h2 className="text-2xl font-bold">{selectedType}</h2>
            </div>
          )} */}
          {selectedType && selectedSubType === "Bed Cover Motif" && (
            <BedCoverMotif />
          )}
          {selectedType && selectedSubType === "Bed Cover Emboss" && (
            <BedCoverEmbos />
          )}
          {selectedType && selectedSubType === "Sprei Motif" && <SpreiMotif />}
          {selectedType && selectedSubType === "Sprei Emboss" && (
            <SpreiEmboss />
          )}
          {selectedType && selectedSubType === "Sprei Single Motif" && (
            <SpreiSinggleMotif />
          )}
          {selectedType && selectedSubType === "Sprei Single Emboss" && (
            <SpreiSinggleEmboss />
          )}
          {selectedType && !selectedSubType && (
            <div className="flex justify-center py-10 gap-x-5 text-center">
              {category
                .find((item) => item.name === selectedType)
                .subTypes.map((subType, index) => (
                  <div
                    key={index}
                    className="bg-[#fff] lg:w-56 rounded-lg shadow-xl p-5"
                    onClick={() => handleSubTypeClick(subType)}
                  >
                    <img
                      src={
                        category.find((item) => item.name === selectedType)
                          .imageTypes[index]
                      }
                      alt={subType}
                    />
                    <p>{subType}</p>
                  </div>
                ))}
            </div>
          )}
          {!selectedType && (
            <div className="flex justify-center py-10 gap-x-5 text-center">
              {category.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#fff] lg:w-56 rounded-lg shadow-xl p-5 hover:scale-110 ease-in duration-150 font-semibold text-gray-700"
                  onClick={() => handleCategoryClick(item.name)}
                >
                  <img
                    src={item.image}
                    width={100}
                    alt="category image"
                    className="lg:ml-10"
                  />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AlohaProduct;
