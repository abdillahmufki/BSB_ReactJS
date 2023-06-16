import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const HomeContact = () => {
  return (
    <div className="my-20 lg:my-32">
      <Container>
        <Row className="px-3">
          <Col>
            <div className="lg:mt-24">
              <div className="header">
                <h2 className="text-2xl font-semibold">Kontak Informasi</h2>
              </div>
              <div>
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td className="py-2 px-4">
                        <FontAwesomeIcon icon={faPhone} className="text-2xl" />
                      </td>
                      <td className="py-2 px-4">Call</td>
                      <td className="py-2 px-4">
                        <Link to="tel:0226044469" className="hover:underline">
                          022-6044469
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">
                        <FontAwesomeIcon
                          icon={faWhatsapp}
                          className="text-2xl"
                        />
                      </td>
                      <td className="py-2 px-4">Whatsapp</td>
                      <td className="py-2 px-4">
                        <Link
                          to="tel:+62 811 2270 1207"
                          className="hover:underline"
                        >
                          0811-2270-1207
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="text-2xl"
                        />
                      </td>
                      <td className="py-2 px-4">Email</td>
                      <td className="py-2 px-4">
                        <Link
                          to="admsales.bdg@buanaselarasberjaya.com"
                          className="hover:underline"
                        >
                          admsales.bdg@buanaselarasberjaya.com
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6186254281897!2d107.59000511414499!3d-6.936101669822349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e8a3865e6439%3A0xbfed468fd51fcf96!2sJl.%20Sukamulya%20Dalam%20No.9%2C%20Suka%20Asih%2C%20Kec.%20Bojongloa%20Kaler%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040231!5e0!3m2!1sid!2sid!4v1666165562606!5m2!1sid!2sid"
                width="600"
                height="420"
                className="w-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeContact;
