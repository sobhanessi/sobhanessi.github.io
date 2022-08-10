import React from "react";
import { Container, Typography } from "@mui/material";
import Footer from "./components/Footer";
import { FONT_FAMILY, MAIN_COLOR } from "../public/theme/theme";
import Navbar from "./components/Navbar";
import NewsTiles from "./components/NewsTiles";

export default function news(): JSX.Element {
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
        {/* <NewsTiles /> */}
        <p>hello world.</p>
      </Container>
      <Footer />
    </>
  );
}
