import React from "react";
import { Container } from "@mui/material";
import Footer from "./components/Footer";
import { FONT_FAMILY, MAIN_COLOR } from "../public/theme/theme";
import Navbar from "./components/Navbar";
import NewsTiles from "./components/NewsTiles";

const News = (): JSX.Element => {
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
};

export default News;
