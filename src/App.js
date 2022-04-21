import { GlobalStyle } from "./assets/globalStyles";
import styled from "styled-components";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
    </div>
  );
}

export default App;
