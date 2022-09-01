import React from "react";
import { FONT_FAMILY, MAIN_COLOR } from "../public/theme/theme";
import Footer from "./components/Footer";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Head from "next/head";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import Navbar from "./components/Navbar";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function contact(): JSX.Element {
  type availability = {
    day: string;
    hours: string;
  };
  const rows: availability[] = [
    { day: "Monday", hours: "10 - 18" },
    { day: "Tuesday", hours: "10 - 21" },
    { day: "Wednesday", hours: "10 - 18" },
    { day: "Thursday", hours: "10 - 21" },
    { day: "Friday", hours: "10 - 18" },
    { day: "Saturday", hours: "12 - 18" },
  ];
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
          pt: 20,
          pb: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item>
          <Typography
            component="a"
            mb={2}
            sx={{
              color: "white",
              fontFamily: FONT_FAMILY,
              display: "flex",
              flexDirection: "row",
              textDecoration: "none",
            }}
            href="https://wa.me/306979664536"
          >
            <WhatsAppIcon sx={{ mr: 1 }} /> +306979664536
          </Typography>

          <Typography
            component="a"
            mb={2}
            sx={{
              color: "white",
              fontFamily: FONT_FAMILY,
              display: "flex",
              flexDirection: "row",
              textDecoration: "none",
            }}
            href="https://t.me/sobhanessi"
          >
            <TelegramIcon sx={{ mr: 1 }} /> +306979664536
          </Typography>
          <Typography
            component="a"
            mb={2}
            sx={{
              color: "white",
              fontFamily: FONT_FAMILY,
              display: "flex",
              flexDirection: "row",
              textDecoration: "none",
            }}
            href="mailto:sobhan@esfandyari.org"
          >
            <MailIcon sx={{ mr: 1 }} /> sobhan@esfandyari.org
          </Typography>
          <Typography
            component="a"
            mb={2}
            sx={{
              color: "white",
              fontFamily: FONT_FAMILY,
              display: "flex",
              flexDirection: "row",
              textDecoration: "none",
            }}
            href="https://linkedin.com/in/sobhanesfandyari"
          >
            <LinkedInIcon sx={{ mr: 1 }} /> Sobhan Esfandyari
          </Typography>
          <Typography
            component="a"
            mb={2}
            sx={{
              color: "white",
              fontFamily: FONT_FAMILY,
              display: "flex",
              flexDirection: "row",
              textDecoration: "none",
            }}
            href="https://github.com/sobhanessi"
          >
            <GitHubIcon sx={{ mr: 1 }} /> sobhanessi
          </Typography>
          <Divider color="white" />
          <Typography
            mb={2}
            sx={{
              color: "white",
              fontFamily: FONT_FAMILY,
              display: "flex",
              flexDirection: "row",
              textDecoration: "none",
              pt: 1,
            }}
          >
            Available Hours :
          </Typography>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Week Day</TableCell>
                  <TableCell>Available Hours</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.day}>
                    <TableCell>{row.day}</TableCell>
                    <TableCell>{row.hours}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
