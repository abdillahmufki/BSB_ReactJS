import React, { useState } from "react";
import { Container } from "react-grid-system";
import bgImg from "../../assets/content/bgImg.svg";

const AboutSince = () => {
  const [tab, setTab] = useState(1);

  const handleTabHover = (tabNumber) => {
    setTab(tabNumber);
  };

  const tabContent = [
    {
      tabNumber: 1,
      title: "2018",
      content:
        "Pada tahun 2018, PT. BSB didirikan sebagai perusahaan distribusi di Bandung, Jawa Barat. Kami berkomitmen untuk menyediakan distribusi produk internal yang efisien dan berkualitas tinggi kepada pelanggan kami. Bandung dipilih sebagai pusat operasional utama kami karena letaknya yang strategis dan kaya akan potensi bisnis.",
    },
    {
      tabNumber: 2,
      title: "2019",
      content:
        "Pada tahun 2019, kami melangkah lebih jauh dengan membuka cabang baru di Jawa Tengah. Cabang tersebut berada di dua lokasi strategis, yaitu Pekalongan dan Yogya. Dengan membuka cabang ini, kami dapat lebih mendekatkan diri dengan pelanggan di wilayah tersebut dan memberikan pelayanan yang lebih cepat dan efisien.",
    },
    {
      tabNumber: 3,
      title: "2022",
      content:
        "Pada tahun 2022, PT. BSB mengambil langkah signifikan dengan membangun gudang besar yang terletak di Ungaran, Jawa Tengah. Gudang ini merupakan upaya kami untuk memperluas kapasitas penyimpanan dan meningkatkan efisiensi pengiriman pesanan dari area Pekalongan dan Yogya. Dengan adanya gudang ini, kami dapat menjaga ketersediaan stok yang optimal dan menghadirkan pengiriman yang lebih cepat kepada pelanggan kami.",
    },
  ];

  const renderTabContent = () => {
    const selectedTab = tabContent.find((item) => item.tabNumber === tab);

    return (
      <Container className="py-10">
        <div
          className={`flex justify-center bg-[#ECECEC] rounded-md shadow-md px-5 my-5 py-10 ${
            tab === selectedTab.tabNumber ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        >
          <p className="text-2xl max-[600px]:text-lg text-black px-10">
            {selectedTab.content}
          </p>
        </div>
      </Container>
    );
  };

  return (
    <Container
      fluid
      className="min-h-full my-20"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="lg:px-[105px] px-2">
        <div className="px-10 py-16 bg-[#ECECEC] shadow-xl rounded-xl">
          <p className="text-xl max-[600px]:text-lg text-black">
            PT. BSB didirikan untuk menjawab kebutuhan pasar agar distribusi
            Produk Internal menjangkau hingga ke outlet kecil, sehingga
            pelanggan akan diuntungkan karena tim pemasaran kami dapat langsung
            datang ke outlet untuk menawarkan produk berdasarkan merek, motif,
            dan ukuran, serta pengirimannya akan langsung kami antarkan ke
            outlet. Berikut adalah sejarah PT. BSB dari pendiriannya hingga kami
            memiliki cabang-cabang sebagai berikut:
          </p>
        </div>
      </div>
      <div className="tabs flex justify-center pt-24">
        {tabContent.map((item) => (
          <a
            key={item.tabNumber}
            className={`tab tab-lg tab-bordered text-white border-orange-500 ${
              tab === item.tabNumber ? "tab-active" : ""
            }`}
            onMouseEnter={() => handleTabHover(item.tabNumber)}
          >
            {item.title}
          </a>
        ))}
      </div>
      <div className="tab-content">{renderTabContent()}</div>
    </Container>
  );
};

export default AboutSince;
