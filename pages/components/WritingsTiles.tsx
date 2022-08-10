import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { FONT_FAMILY, MAIN_COLOR } from "../../public/theme/theme";
import writings from "../../public/database/writings";

function WritingsTiles(): JSX.Element {
  const writingsDivert = (href: string): void => {
    console.log(href);
  };

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
      ))}
    </>
  );
}

export default WritingsTiles;
