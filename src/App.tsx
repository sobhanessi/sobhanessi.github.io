import React from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";

// TODO: have already started my job.
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
