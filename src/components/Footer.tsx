import React from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FONT_FAMILY, MAIN_COLOR } from "../theme/theme";

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
      >
        <Typography color="white" gutterBottom sx={{ fontFamily: FONT_FAMILY }}>
          SOBHAN ESFANDYARI | SOBHANESSI | DAWSHESSI 2018 - 2022
        </Typography>
        <Box sx={{ mb: 1 }}>
          <Typography component="a" href="" color="white">
            <LinkedInIcon />
          </Typography>
          <Typography component="a" href="" color="white">
            <GitHubIcon />
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default Footer;
