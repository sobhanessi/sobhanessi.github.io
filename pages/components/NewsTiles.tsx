import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import news from "../../public/database/news";
import { FONT_FAMILY, MAIN_COLOR } from "../../public/theme/theme";

// I need to move to graphql

const NewsTiles = (): JSX.Element => {
  const newsDivert = (href: string): void => {
    console.log(href);
    // inja bayad redirect konam be page morede nazar.
  };

  return (
    <>
      {news.map((n) => (
        <Card
          sx={{
            bgcolor: MAIN_COLOR,
            boxShadow: 0,
            width: "100%",
          }}
          onClick={() => newsDivert(n.href)}
          key={n.title}
        >
          <Grid container sx={{ mb: 4 }}>
            <Grid item xs={12} sm={5} md={4} lg={4} xl={4}>
              <CardMedia
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                key={n.title}
              >
                <Avatar
                  src={n.headerImage}
                  alt={n.title}
                  variant="square"
                  sx={[
                    {
                      height: 225,
                      width: "100%",
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
                  key={n.title + n.date}
                >
                  {n.title}
                </Typography>
                <Typography
                  component="div"
                  color="#f79d2e"
                  gutterBottom
                  sx={{ fontFamily: FONT_FAMILY, fontWeight: "bold" }}
                  key={n.date + n.author}
                >
                  {n.date}
                </Typography>
                <Typography
                  component="div"
                  color="#2e5aeb"
                  gutterBottom
                  sx={{ fontFamily: FONT_FAMILY }}
                  key={n.date + n.title}
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
      ))}
    </>
  );
};

export default NewsTiles;
