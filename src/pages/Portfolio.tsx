import React from "react";
import { Avatar, Box, Container, Divider, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Sobhanessi from "../pics/sobhanessi.jpg";
import { FONT_FAMILY, MAIN_COLOR } from "../theme/theme";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Divider />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: MAIN_COLOR,
          pt: 15,
          fontFamily: FONT_FAMILY,
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
            src={Sobhanessi}
            sx={{ width: 192, height: 192, mr: 5 }}
          />
          <Box>
            <Typography
              variant="h4"
              color="#f79d2e"
              sx={{ fontFamily: FONT_FAMILY, fontWeight: 700 }}
            >
              <i>
                "This is Sobhan Esfandyari or in shorten you can call me Sobi!"
              </i>
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
            variant="h4"
            component="div"
            color="#ff6266"
            gutterBottom
            sx={{ fontFamily: FONT_FAMILY, fontWeight: 600, mb: 8 }}
          >
            Here, I briefly explain who I am and what happened to me that I
            became such a person with these ideas!
          </Typography>
        </Container>
        <Divider />
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            fontFamily: FONT_FAMILY,
          }}
        >
          <Typography
            variant="h5"
            component="div"
            color="#ff6266"
            gutterBottom
            sx={{ fontFamily: FONT_FAMILY }}
          >
            The Begining :
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            color="white"
            sx={{ fontFamily: FONT_FAMILY }}
          >
            blah blah
          </Typography>
          <Typography
            variant="h5"
            component="div"
            color="#ff6266"
            gutterBottom
            sx={{ fontFamily: FONT_FAMILY }}
          >
            The Begining :
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            color="white"
            sx={{ fontFamily: FONT_FAMILY }}
          >
            blah blah
          </Typography>
          <Typography
            variant="h5"
            component="div"
            color="#ff6266"
            gutterBottom
            sx={{ fontFamily: FONT_FAMILY }}
          >
            The Begining :
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            color="white"
            sx={{ fontFamily: FONT_FAMILY }}
          >
            blah blah
          </Typography>
        </Container>
      </Container>
      <Footer />
    </>
  );
}
