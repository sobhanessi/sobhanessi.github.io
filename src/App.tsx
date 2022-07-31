import React from "react";
import Fahimeh from "./pages/Fahimeh";
import News from "./pages/News";
import Portfolio from "./pages/Portfolio";
import { Routes, Route } from "react-router-dom";

// TODO: I haven't started yet!
function App() {
  return (
    <>
      <Routes>
        <Route path="/fahimeh" element={<Fahimeh />} />
        <Route path="/news" element={<News />} />
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
