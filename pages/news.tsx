import React from "react";
import { Container } from "@mui/material";
import { FONT_FAMILY, MAIN_COLOR } from "../public/theme/theme";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NewsTiles from "./components/NewsTiles";

// here I just need to put some informations on the database file

function news() {
  return (
    <>
      <Navbar />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: MAIN_COLOR,
          fontFamily: FONT_FAMILY,
          width: "100%",
          pt: 10,
        }}
      >
        <NewsTiles />
      </Container>
      <Footer />
    </>
  );
}

export default news;
