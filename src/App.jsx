import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, About, Contacts, NotFound, Products } from "./pages";
import AlohaProduct from "./pages/Products/brand/AlohaProduct";
import IllusionsProduct from "./pages/Products/brand/IllusionsProducts";
import InternalProduct from "./pages/Products/brand/InternalProducts";
import LadyRoseProduct from "./pages/Products/brand/LadyroseProducts";
// import ValleryProduct from "./pages/Products/brand/ValleryquicyProducts";

function App() {
  return (
    <>
      <Router>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<NotFound />} />

            {/* Route brand */}
            <Route path="/aloha" element={<AlohaProduct />} />
            <Route path="/illusion" element={<IllusionsProduct />} />
            <Route path="/internal" element={<InternalProduct />} />
            <Route path="/ladyrose" element={<LadyRoseProduct />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </>
  );
}

export default App;
