import React from "react";
import News from "./pages/News";
import Portfolio from "./pages/Portfolio";
import { Routes, Route } from "react-router-dom";

// TODO: have already started my job.
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  );
}

export default App;
