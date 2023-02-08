import React from "react";
// import Aboutme from "./components/Aboutme";
import { Avatar, Container, Divider, Grid, Typography } from "@mui/material";
import { FONT_FAMILY, MAIN_COLOR } from "../public/theme/theme.js";
import Footer from "./components/Footer";
import Head from "next/head";
import Jobs from "./components/Jobs";
import Navbar from "./components/Navbar";

// sub news ro dorost konam va link ro bezaram ke bere too
// safheye khodesh.
// va inke neveshte ha ro bezaram too database.

export default function Index(): JSX.Element {
  return (
    <>
      <Head>
        <title>Sobhan Esfandyari Portfolio</title>
        <meta
          name="description"
          content="sobhan esfandyari portfolio, about sobhan esfandyari , about sobhanessi, who is sobhanessi, who is dawshessi, sobhanessi, dawshessi"
        />
        <meta name="author" content="Sobhan Esfandyari" />
        <meta
          name="keywords"
          content="sobhan esfandyari porfolio, sobhan esfandyari resume, sobhan esfandyari cv, about sobhan esfandyari , about sobhanessi, who is sobhanessi, who is dawshessi, sobhanessi, dawshessi"
        />
        <meta charSet="UTF-8" />
      </Head>
      <Navbar />
      <Divider />

      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: MAIN_COLOR,
          pt: 15,
        }}
      >
        <Grid item sx={{ width: 185, height: 185, mr: 3 }}>
          <Avatar
            alt="Sobhan Esfandyari"
            src="/pics/sobhanessi.jpg"
            sx={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid item xs={6} lg={6} xl={6}>
          <Typography
            color="#f79d2e"
            sx={{
              fontFamily: FONT_FAMILY,
              fontWeight: 700,
              fontSize: "1.75rem",
            }}
          >
            This is "Sobhan Esfandyari" (sobi){" "}
            <span style={{ color: "white" }}>| </span>
            <span
              style={{
                textDecoration: "underline #ff6266 5px",
                color: "#2e5aeb",
              }}
            >
              A Computer Engineer
            </span>
          </Typography>
        </Grid>

        {/* <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mt: 6,
            fontFamily: FONT_FAMILY,
          }}
        >
          <Typography
            variant="h6"
            component="div"
            // color="#ff6266"
            color="white"
            gutterBottom
            sx={{ fontFamily: FONT_FAMILY, fontWeight: 600, mb: 8 }}
          >
            Here, I briefly explain who I am and what happened to me that I
            became such a person with these ideas!
          </Typography>
        </Container> */}
        {/* <Container
          sx={{
            mb: 6,
          }}
        >
          <Aboutme />
        </Container> */}
        <hr style={{ color: "white", width: "100%" }} />
        <Container sx={{ pt: 3, pb: 3 }}>
          <Jobs />
        </Container>
      </Grid>
      <Footer />
    </>
  );
}
