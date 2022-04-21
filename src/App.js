import { GlobalStyle } from "./assets/globalStyles";
import styled from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
