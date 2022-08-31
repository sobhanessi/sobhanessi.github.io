import React from "react";
import { Grid, Typography } from "@mui/material";
import { FONT_FAMILY, MAIN_COLOR } from "../public/theme/theme";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function contact(): JSX.Element {
  // have to work on this file in order to make this page
  // accessible for others to contact me.
  // one option could be to just put some information that
  // user can interact with, I mean like putting number and emails and etc
  // or I can just fulfill it with a form but for that I need to have a
  // backend service
  return (
    <>
      <Navbar />
      <Grid
        container
        sx={{
          backgroundColor: MAIN_COLOR,
          width: "100%",
          pt: 10,
          pb: 10,
          pr: "5%",
          pl: "5%",
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
      </Grid>
      <Footer />
    </>
  );
}
