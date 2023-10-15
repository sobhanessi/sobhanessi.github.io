"use client";
import React from "react";
import dynamic from "next/dynamic";
const Jobs = dynamic(() => import("../components/Jobs"), { ssr: true });
// const Aboutme = dynamic(() => import("../components/Aboutme.jsx"), {
//     ssr: true,
// });
import { Avatar, Container, Divider, Grid, Typography } from "@mui/material";
import { FONT_FAMILY, MAIN_COLOR } from "../../public/theme/theme.js";
// import Head from "next/head";

// sub news ro dorost konam va link ro bezaram ke bere too
// safheye khodesh.
// va inke neveshte ha ro bezaram too database.

export default function Page(): JSX.Element {
    return (
        <>
            <Divider />

            <Grid
                container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: MAIN_COLOR,
                    pt: 15,
                }}
            >
                <Grid item sx={{ width: 185, height: 185 }}>
                    <Avatar
                        alt="Sobhan Esfandyari"
                        src="/pics/sobhanessi.jpg"
                        sx={{ width: "100%", height: "100%" }}
                    />
                </Grid>
                <Grid item>
                    <Typography
                        color="#f79d2e"
                        sx={{
                            fontFamily: FONT_FAMILY,
                            fontWeight: 700,
                            fontSize: "1.75rem",
                            mr: 3,
                            ml: 3,
                        }}
                    >
                        This is "Sobhan Esfandyari" (sobi){" "}
                        <span style={{ color: "white" }}>| </span>
                        <span
                            style={{
                                textDecoration: "underline #ff6266 5px",
                                color: "#2e5aeb",
                            }}
                        >
                            A Computer Engineer
                        </span>
                    </Typography>
                </Grid>

                <hr style={{ color: "white", width: "100%" }} />
                <Container sx={{ pt: 3, pb: 3 }}>
                    <Jobs />
                </Container>
            </Grid>
        </>
    );
}
