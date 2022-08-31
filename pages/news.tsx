import React from "react";
import { Grid } from "@mui/material";
import { MAIN_COLOR } from "../public/theme/theme";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NewsTiles from "./components/NewsTiles";

// here I just need to put some informations on the database file

function news() {
  return (
    <>
      <Navbar />
      <Grid
        container
        sx={{
          display: "flex",
          backgroundColor: MAIN_COLOR,
          width: "100%",
          pt: 10,
        }}
      >
        <NewsTiles />
      </Grid>
      <Footer />
    </>
  );
}

export default news;
