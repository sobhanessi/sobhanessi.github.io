import React from "react";
import Fahimeh from "./pages/Fahimeh";
import News from "./pages/News";
import Portfolio from "./pages/Portfolio";
import { Routes, Route } from "react-router-dom";

// TODO: have already started my job.
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
