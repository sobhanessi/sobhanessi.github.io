import React from "react";
import { Container, Typography } from "@mui/material";
import { FONT_FAMILY, MAIN_COLOR } from "../public/theme/theme";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function contact(): JSX.Element {
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
          pb: 10,
        }}
      >
        <Typography
          pt={10}
          gutterBottom
          sx={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: FONT_FAMILY,
            fontWeight: "bold",
          }}
        >
          this page is under construction.
        </Typography>
      </Container>
      <Footer />
    </>
  );
}
