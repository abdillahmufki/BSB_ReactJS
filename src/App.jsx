import React, { useState, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer, WhatsAppShareButton } from "./components";
import logo from "./assets/logo/bsbBlue.png";
import "./App.css";

const CustomLoadingSpinner = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <img
        src={logo}
        alt="Loading Spinner"
        className="mb-4 w-36 animate-spin"
      />
    </div>
  );
};

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contacts = React.lazy(() => import("./pages/Contacts"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Products = React.lazy(() => import("./pages/Products"));
const AlohaProduct = React.lazy(() =>
  import("./pages/Products/brand/AlohaProduct")
);
const IllusionsProduct = React.lazy(() =>
  import("./pages/Products/brand/IllusionsProducts")
);
const InternalProduct = React.lazy(() =>
  import("./pages/Products/brand/InternalProducts")
);
const LadyRoseProduct = React.lazy(() =>
  import("./pages/Products/brand/LadyroseProducts")
);
const ValleryquicyProducts = React.lazy(() =>
  import("./pages/Products/brand/ValleryquicyProducts")
);
const RainbowProducts = React.lazy(() =>
  import("./pages/Products/brand/RainbowProducts")
);

const App = () => {
  const [isLoading, setLoading] = useState(true);

  // Simulating a delay for the loading state
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <Router>
      <header>
        {!isLoading && <Navbar />} {/* Render navbar if not loading */}
      </header>
      <main>
        <Suspense fallback={<CustomLoadingSpinner />}>
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
            <Route path="/valeryquincy" element={<ValleryquicyProducts />} />
            <Route path="/rainbow" element={<RainbowProducts />} />
          </Routes>
          <WhatsAppShareButton />
        </Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
};

export default App;
