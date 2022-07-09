import React from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";

// TODO: trying to work on the project as soon as possible. but the work stuff first

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
