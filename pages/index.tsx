import React from "react";
import Aboutme from "./components/Aboutme";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { FONT_FAMILY, MAIN_COLOR } from "../public/theme/theme.js";
import Footer from "./components/Footer";
import Head from "next/head";
import Jobs from "./components/Jobs";
import Navbar from "./components/Navbar";

// hanooz hich kari nakardam.
// bayad vaght bezaram ta database ro update konam.
// va baad az un benevisam faghat. hamin.
// ghesmate sub news ro ham bayad dorost konam.

export default function Index(): JSX.Element {
  return (
    <>
      <Head>
        <title>Sobhan Esfandyari Portfolio</title>
        <meta name="description" content="sobhan esfandyari portfolio" />
        <meta name="author" content="Sobhan Esfandyari" />
        <meta
          name="keywords"
          content="sobhan esfandyari porfolio, sobhan esfandyari resume, sobhan esfandyari cv"
        />
        <meta charSet="UTF-8" />
      </Head>
      <Navbar />
      <Divider />

      <Grid
        container
        sx={{
          backgroundColor: MAIN_COLOR,
          pt: 15,
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar
            alt="Sobhan Esfandyari"
            src="/pics/sobhanessi.jpg"
            sx={{ width: 186, height: 186, mr: 1 }}
          />
          <Box>
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
          </Box>
        </Container>

        <Container
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
        </Container>
        <Container
          sx={{
            mb: 6,
          }}
        >
          <Aboutme />
        </Container>
        <hr style={{ color: "white", width: "100%" }} />
        <Container sx={{ pt: 3, pb: 3 }}>
          <Jobs />
        </Container>
      </Grid>
      <Footer />
    </>
  );
}
