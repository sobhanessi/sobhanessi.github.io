import React from "react";
import { FONT_FAMILY, MAIN_COLOR } from "../public/theme/theme";
import Footer from "./components/Footer";
import { Grid } from "@mui/material";
import Head from "next/head";
import Navbar from "./components/Navbar";
import WritingsTiles from "./components/WritingsTiles";

// I have to change the tilings.

function writings(): JSX.Element {
  return (
    <>
      <Head>
        <title>Sobhan Esfandayri Writings</title>
        <meta name="description" content="sobhan esfandyari writings" />
        <meta name="author" content="Sobhan Esfandyari" />
        <meta
          name="keywords"
          content="writings, articles, refugee, asylum seekers, greece, smuggler"
        />
        <meta charSet="UTF-8" />
      </Head>
      <Navbar />
      <Grid
        container
        sx={{
          backgroundColor: MAIN_COLOR,
          // fontFamily: FONT_FAMILY,
          width: "100%",
          pr: "5%",
          pl: "5%",
          pt: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid item xl={8} lg={8} md={10} sm={8} xs={10}>
          <WritingsTiles />
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

export default writings;
