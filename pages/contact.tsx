import React from "react";
import { Grid, Typography } from "@mui/material";
import { FONT_FAMILY, MAIN_COLOR } from "../public/theme/theme";
import Footer from "./components/Footer";
import Head from "next/head";
import Link from "next/link";
import MailIcon from "@mui/icons-material/Mail";
import Navbar from "./components/Navbar";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function contact(): JSX.Element {
  // have to work on this file in order to make this page
  // accessible for others to contact me.
  // one option could be to just put some information that
  // user can interact with, I mean like putting number and emails and etc
  // or I can just fulfill it with a form but for that I need to have a
  // backend service
  return (
    <>
      <Head>
        <title>Sobhan Esfandyari Contact Info</title>
        <meta name="description" content="sobhan esfandyari contact info" />
        <meta name="author" content="Sobhan Esfandyari" />
        <meta
          name="keywords"
          content="sobhan esfandyari email, sobhan esfandyari whatsapp number"
        />
        <meta charSet="UTF-8" />
      </Head>
      <Navbar />
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
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
          <span
            style={{ display: "flex", flexDirection: "row", marginRight: 8 }}
          >
            My <MailIcon sx={{ mr: 0.5, ml: 1 }} /> Email address is{" "}
          </span>
          <span>
            <Link href="mailto:sobhan@esfandyari.org">
              sobhan@esfandayri.org
            </Link>
          </span>
        </Typography>
        <Typography
          pt={5}
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
          <span
            style={{ display: "flex", flexDirection: "row", marginRight: 8 }}
          >
            My <WhatsAppIcon sx={{ ml: 1, mr: 0.5 }} /> WhatsApp number is
            {"  "}
          </span>
          <span style={{ color: "green", textDecoration: "none" }}>
            <Link
              href="https://wa.me/306979664536"
              style={{ textDecoration: "none" }}
            >
              +306979664536
            </Link>
          </span>
        </Typography>
      </Grid>
      <Footer />
    </>
  );
}
