import React from "react";
import { Container } from "react-grid-system";
import motto from "../../assets/icon/motto.png";
import mision from "../../assets/icon/mision.png";
import vision from "../../assets/icon/vision.png";

const AboutContact = () => {
  const visionContent = `
    Menjadi perusahaan distribusi produk INTERNAL GRUP yang terbesar
    dan terluas jangkauan penjualan di Indonesia.
  `;

  const missionItems = [
    "Melakukan pemasaran produk secara luas dan merata ke semua kota yang ada di Indonesia.",
    "Menyediakan produk INTERNAL GRUP secara lengkap dengan model yang up to date.",
    "Memberikan pelayanan terbaik kepada semua pelanggan.",
  ];

  const mottoItems = [
    "Integritas",
    "Responsif",
    "Komunikatif",
    "Komunikatif",
    "Terpercaya",
  ];

  const cardData = [
    {
      image: vision,
      title: "Visi",
      content: visionContent,
    },
    {
      image: mision,
      title: "Misi",
      content: missionItems,
    },
    {
      image: motto,
      title: "Motto",
      content: mottoItems,
    },
  ];

  return (
    <>
      <div className="px-3">
        <h2 className="text-3xl max-[600px]:text-xl text-center font-semibold">
          Melayani Masyarakat dengan Kualitas dan Pelayanan Terbaik
        </h2>
      </div>
      <Container className="flex justify-center min-h-full my-10">
        <div className="flex flex-col lg:flex-row lg:space-x-4 gap-y-5">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="card bg-[#f5f5f5] p-3 rounded-md shadow-md w-full lg:w-1/3"
            >
              <div className="card-body">
                <img src={card.image} alt={`${card.title} image`} width={30} />
                <h2 className="text-xl font-bold">{card.title}</h2>
                {Array.isArray(card.content) ? (
                  <ul className="list-disc list-outside">
                    {card.content.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{card.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default AboutContact;
