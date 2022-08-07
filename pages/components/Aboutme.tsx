import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import aboutme from "../../public/database/aboutme";
import { FONT_FAMILY } from "../../public/theme/theme";

function Aboutme(): JSX.Element {
  return (
    <>
      {aboutme?.map((am) => (
        <>
          <Grid container sx={{ display: "flex", flexDirection: "row" }}>
            {am.left && (
              <Grid item sm={1} xs={1} lg={1} xl={1} md={1}>
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
                >
                  <Avatar
                    sx={{
                      width: 92,
                      height: 92,
                      ml: -6,
                      bgcolor: am.color,
                      fontSize: "16px",
                      textAlign: "center",
                      fontFamily: FONT_FAMILY,
                    }}
                  >
                    {am.title}
                  </Avatar>
                </Box>
              </Grid>
            )}
            <Grid item sm={8} xl={8} lg={8} md={8} xs={8} sx={{ ml: 8 }}>
              <Typography color="white" fontFamily={FONT_FAMILY}>
                {am.description}
              </Typography>
            </Grid>
            {am.right && (
              <Grid item sm={1} xs={1} lg={1} xl={1} md={1}>
                <Box
                  sx={{
                    color: "white",
                    borderRight: "1px solid white",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    ml: 3,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 92,
                      height: 92,
                      ml: 3,
                      bgcolor: am.color,
                      fontSize: "16px",
                      textAlign: "center",
                      fontFamily: FONT_FAMILY,
                    }}
                  >
                    {am.title}
                  </Avatar>
                </Box>
              </Grid>
            )}
          </Grid>
          <br />
          <br />
        </>
      ))}
    </>
  );
}

export default Aboutme;
