import { Container } from "@mui/material";
import React from "react";
import { FONT_FAMILY, MAIN_COLOR } from "../public/theme/theme";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WritingsTiles from "./components/WritingsTiles";

// also for here I just need to put some information on the database file.

function writings(): JSX.Element {
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
        <WritingsTiles />
      </Container>

      <Footer />
    </>
  );
}

export default writings;
