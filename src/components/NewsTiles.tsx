import { Avatar, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import news from "../database/news";
import { FONT_FAMILY, MAIN_COLOR } from "../theme/theme";

// inja ham in tile ha ro tori bayad tarrahi konam ke agar click kard roosh bere safheye khodesh.
// pas bayad safheye makhsoose un ro ham tarrahi konam.

const NewsTiles = () => {
  const newsDivert = (href: string): void => {
    // console.log(href);
    // inja bayad redirect konam be page morede nazar.
  };
  return (
    <>
      <Container>
        {news.map((n) => (
          <>
            <Card
              sx={{ bgcolor: MAIN_COLOR }}
              onClick={() => newsDivert(n.href)}
            >
              <Grid container xs={12} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                  <Avatar
                    src={n.headerImage}
                    alt={n.title}
                    variant="square"
                    sx={{
                      height: 225,
                      width: 225,
                      borderRadius: "25px",
                      display: "flex",
                      mb: 2,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
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
                  sm={8}
                  xs={12}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    color="#ff6266"
                    gutterBottom
                    sx={{ fontFamily: FONT_FAMILY }}
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
                    Author : {n.author}
                  </Typography>
                  <Typography
                    gutterBottom
                    sx={{ color: "white", fontFamily: FONT_FAMILY }}
                  >
                    {n.brief}
                  </Typography>
                </Grid>
                <hr style={{ color: "white", width: "100%" }} />
              </Grid>
            </Card>
          </>
        ))}
      </Container>
    </>
  );
};

export default NewsTiles;
