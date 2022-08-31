import React from "react";
import Footer from "./components/Footer";
import { Grid } from "@mui/material";
import Head from "next/head";
import { MAIN_COLOR } from "../public/theme/theme";
import Navbar from "./components/Navbar";
import NewsTiles from "./components/NewsTiles";

// here I just need to put some informations on the database file

function news() {
  return (
    <>
      <Head>
        <title>Sobhan Esfandyari Journals</title>
      </Head>
      <Navbar />
      <Grid
        container
        sx={{
          display: "flex",
          backgroundColor: MAIN_COLOR,
          width: "100%",
          pr: "5%",
          pl: "5%",
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
