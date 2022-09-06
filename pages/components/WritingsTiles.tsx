import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { MAIN_COLOR, PERSIAN_FONT_FAMILY } from "../../public/theme/theme";
import writings from "../../public/database/writings";

function WritingsTiles(): JSX.Element {
  const writingsDivert = (href: string): void => {
    console.log(href);
  };

  // const FONT_FAMILY = PERSIAN_FONT_FAMILY;

  return (
    <>
      {writings.map((n) => (
        <Card
          sx={{
            bgcolor: MAIN_COLOR,
            boxShadow: 0,
            width: "100%",
          }}
          onClick={() => writingsDivert(n.href)}
          key={n.title}
          dir="rtl"
        >
          <Grid container sx={{ mb: 4 }}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
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
              sm={12}
              xs={12}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  color="#ff6266"
                  gutterBottom
                  sx={{ fontWeight: "bold", fontFamily: PERSIAN_FONT_FAMILY }}
                >
                  {n.title}
                </Typography>
                <Typography
                  component="div"
                  color="#f79d2e"
                  gutterBottom
                  sx={{ fontWeight: "bold", fontFamily: PERSIAN_FONT_FAMILY }}
                >
                  {n.date().getUTCFullYear()}
                  {" / "}
                  {n.date().getUTCMonth() + 1}
                  {" / "}
                  {n.date().getUTCDate()}
                  {"   "}
                  <span
                    style={{ color: "white", fontFamily: PERSIAN_FONT_FAMILY }}
                  >
                    نویسنده :{" "}
                  </span>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontFamily: PERSIAN_FONT_FAMILY,
                      color: "#2e5aeb",
                    }}
                  >
                    {n.author}
                  </span>
                </Typography>
                <Typography
                  gutterBottom
                  sx={{ color: "white", fontFamily: PERSIAN_FONT_FAMILY }}
                  whiteSpace="pre-line"
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
}

export default WritingsTiles;
