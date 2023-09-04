"use client";

import React from "react";
import Footer from "../../components/Footer";
import { Grid } from "@mui/material";
import Head from "next/head";
import { MAIN_COLOR } from "../../../public/theme/theme";
// import Navbar from "../../components/Navbar";
import NewsTiles from "../../components/NewsTiles";

// I have to change the tiling

function news() {
    return (
        <>
            <Head>
                <title>Sobhan Esfandyari Journals</title>
                <meta name="description" content="sobhan esfandyari journals" />
                <meta name="author" content="Sobhan Esfandyari" />
                <meta
                    name="keywords"
                    content="computer, software, hardware, politics, iran"
                />
                <meta charSet="UTF-8" />
            </Head>
            {/* <Navbar /> */}
            <Grid
                container
                sx={{
                    display: "flex",
                    backgroundColor: MAIN_COLOR,
                    width: "100%",
                    pr: "5%",
                    pl: "5%",
                    pt: 10,
                    justifyContent: "center",
                }}
            >
                <Grid item xl={8} lg={8} md={10} sm={8} xs={10}>
                    <NewsTiles />
                </Grid>
            </Grid>
            <Footer />
        </>
    );
}

export default news;
