"use client";
import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { FONT_FAMILY, MAIN_COLOR } from "../../public/theme/theme";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer(): JSX.Element {
    return (
        <>
            <Divider />
            <Grid
                sx={{
                    backgroundColor: MAIN_COLOR,
                    bottom: 0,
                    pt: 2,
                    width: "100%",
                }}
                container
            >
                <Grid
                    item
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "80%",
                        ml: "10%",
                    }}
                >
                    <Typography
                        color="white"
                        gutterBottom
                        sx={{ fontFamily: FONT_FAMILY, fontWeight: "bold" }}
                    >
                        SOBHAN ESFANDYARI | SOBHANESSI | DAWSHESSI (2018 -
                        present)
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
                </Grid>
            </Grid>
        </>
    );
}

export default Footer;
