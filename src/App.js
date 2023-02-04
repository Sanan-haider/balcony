import React from "react";
import Header from "./components/Header";
import Chat from "./pages/chat";
import Mobilemodule from "./pages/mobile-module";
import Bottomsection from "./components/Bottom-section";
import GlobalStyle from "./components/Globalstyle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/mobile-module" element={<Mobilemodule />} />
        </Routes>
        <Bottomsection />
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
