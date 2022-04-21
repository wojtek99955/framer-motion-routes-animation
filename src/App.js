import { GlobalStyle } from "./assets/globalStyles";
import styled from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
