import React from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FONT_FAMILY, MAIN_COLOR } from "../../public/theme/theme";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <>
      <Divider />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: MAIN_COLOR,
          bottom: 0,
          pt: 2,
          //   position: "static",
        }}
        maxWidth="xl"
      >
        <Typography
          color="white"
          gutterBottom
          sx={{ fontFamily: FONT_FAMILY, fontWeight: "bold" }}
        >
          SOBHAN ESFANDYARI | SOBHANESSI | DAWSHESSI 2018 - 2022
        </Typography>
        <Box sx={{ mb: 1 }}>
          <Typography
            component="a"
            href="https://linkedin.com/in/sobhanesfandyari/"
            color="white"
            sx={{ mr: 1 }}
            key="1"
          >
            <LinkedInIcon />
          </Typography>
          <Typography
            component="a"
            href="https://github.com/sobhanessi"
            color="white"
            key="2"
          >
            <GitHubIcon />
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default Footer;
