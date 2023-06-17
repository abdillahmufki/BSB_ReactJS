import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import { Button } from "../components";
import HomeContact from "./Home/HomeContact";
const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [noPhone, setNoPhone] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!noPhone.trim()) {
      errors.noPhone = "Phone Number is required";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
    setNoPhone("");
    setErrors({});
  };

  const data = {
    headline: "Terhubunglah dengan Kami",
    Subheadline:
      "Bicarakan ide-ide Anda, tanyakan pertanyaan, atau sapa kami. Kami di sini untuk membantu dan memberikan informasi yang Anda perlukan. Isi formulir di bawah ini, dan kami akan merespons dengan cepat.",
    description:
      "Hubungi kami untuk membahas ide-ide Anda, mengajukan pertanyaan, atau hanya sekadar menyapa. Kami siap membantu dan memberikan informasi yang Anda butuhkan. Isi formulir di bawah ini, dan kami akan segera merespons Anda.",
    img: "https://images.unsplash.com/photo-1601056639638-c53c50e13ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
  };

  return (
    <>
      <Container className="mt-[120px] my-[50px]">
        <Row className="p-5 gap-y-10">
          <Col lg={6}>
            <div className="bg-gradient-to-r from-indigo-900 to-blue-500 py-20 px-10 rounded-md">
              <h1 className="text-2xl text-white font-semibold">
                {data.headline}
              </h1>
              <h2 className="text-xl text-white my-3">{data.Subheadline}</h2>
              <p className="text-white">{data.description}</p>
            </div>
          </Col>
          <Col lg={6}>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className={`w-full px-3 py-2 placeholder-gray-400 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className={`w-full px-3 py-2 placeholder-gray-400 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  className={`w-full px-3 py-2 placeholder-gray-400 border ${
                    errors.noPhone ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
                  placeholder="Phone Number"
                  value={noPhone}
                  onChange={(e) => setNoPhone(e.target.value)}
                />
                {errors.noPhone && (
                  <p className="text-red-500 text-xs mt-1">{errors.noPhone}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  rows="4"
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </Col>
          <Col lg={12} md={12} sm={12}>
            <HomeContact />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contacts;
