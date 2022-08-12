import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import aboutme from "../../public/database/aboutme";
import { FONT_FAMILY } from "../../public/theme/theme";

function Aboutme(): JSX.Element {
  return (
    <>
      {aboutme?.map((am) => (
        <div key={am.title}>
          <Grid
            container
            sx={{ display: "flex", flexDirection: "row" }}
            key={am.title}
          >
            {am.left && (
              <Grid item sm={1} xs={1} lg={1} xl={1} md={1} key={am.title}>
                <Box
                  sx={{
                    color: "white",
                    borderLeft: "1px solid white",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    ml: 3,
                  }}
                  key={am.title}
                >
                  <Avatar
                    sx={{
                      width: 75,
                      height: 75,
                      ml: -5,
                      bgcolor: am.color,
                      fontSize: "14px",
                      textAlign: "center",
                      fontFamily: FONT_FAMILY,
                    }}
                    key={am.title}
                  >
                    {am.title}
                  </Avatar>
                </Box>
              </Grid>
            )}
            <Grid item sm={9} xl={9} lg={9} md={9} xs={9} sx={{ ml: 6 }}>
              <Typography
                color="white"
                variant="body1"
                paragraph={true}
                fontFamily={FONT_FAMILY}
                whiteSpace="pre-line"
              >
                {am.description}
              </Typography>
            </Grid>
            {/* {am.right && (
              <Grid
                item
                sm={1}
                xs={1}
                lg={1}
                xl={1}
                md={1}
                key={am.title}
                ml={0}
                sx={{ right: 5 }}
              >
                <Box
                  sx={{
                    color: "white",
                    borderRight: "1px solid white",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    left: 95,
                  }}
                  key={am.title}
                >
                  <Avatar
                    sx={{
                      width: 75,
                      height: 75,
                      left: 20,
                      bgcolor: am.color,
                      fontSize: "14px",
                      textAlign: "center",
                      fontFamily: FONT_FAMILY,
                    }}
                    key={am.title}
                  >
                    {am.title}
                  </Avatar>
                </Box>
              </Grid>
            )} */}
          </Grid>
          <br />
          <br />
        </div>
      ))}
    </>
  );
}

export default Aboutme;
