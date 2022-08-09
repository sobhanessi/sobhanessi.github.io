import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import news from "../../public/database/news";
import { FONT_FAMILY, MAIN_COLOR } from "../../public/theme/theme";
import { createTheme, styled } from "@mui/material/styles";

// I need to move to graphql

const NewsTiles = (): JSX.Element => {
  const newsDivert = (href: string): void => {
    console.log(href);
    // inja bayad redirect konam be page morede nazar.
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  const Root = styled("div")(() => ({
    [theme.breakpoints.up("xl")]: {
      height: 225,
      width: 225,
    },
    [theme.breakpoints.up("lg")]: {
      height: 225,
      width: 225,
    },
    [theme.breakpoints.up("md")]: {
      height: 225,
      width: 225,
    },
    [theme.breakpoints.up("sm")]: {
      height: 225,
      width: 225,
    },
    [theme.breakpoints.down("xs")]: {
      height: 225,
      width: 225,
    },
  }));

  return (
    <>
      {news.map((n) => (
        <>
          <Card
            sx={{
              bgcolor: MAIN_COLOR,
              boxShadow: 0,
              width: "100%",
            }}
            onClick={() => newsDivert(n.href)}
          >
            <Grid container xs={12} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={5} md={4} lg={4} xl={4}>
                <CardMedia
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    src={n.headerImage}
                    alt={n.title}
                    variant="square"
                    sx={[
                      {
                        height: 225,
                        width: 225,
                        borderRadius: 5,
                        mb: 2,
                      },
                    ]}
                  />
                </CardMedia>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
                xl={8}
                lg={8}
                md={8}
                sm={6}
                xs={12}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    color="#ff6266"
                    gutterBottom
                    sx={{ fontFamily: FONT_FAMILY, fontWeight: "bold" }}
                  >
                    {n.title}
                  </Typography>
                  <Typography
                    component="div"
                    color="#f79d2e"
                    gutterBottom
                    sx={{ fontFamily: FONT_FAMILY }}
                  >
                    {n.date}
                  </Typography>
                  <Typography
                    component="div"
                    color="#2e5aeb"
                    gutterBottom
                    sx={{ fontFamily: FONT_FAMILY }}
                  >
                    <span style={{ color: "white" }}>Author : </span>
                    {n.author}
                  </Typography>
                  <Typography
                    gutterBottom
                    sx={{ color: "white", fontFamily: FONT_FAMILY }}
                  >
                    {n.brief}
                  </Typography>
                </CardContent>
              </Grid>
              <hr style={{ color: "white", width: "100%" }} />
            </Grid>
          </Card>
        </>
      ))}
    </>
  );
};

export default NewsTiles;
