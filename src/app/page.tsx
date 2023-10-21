"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Grid, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import sobhanessi from "../../public/pics/sobhanessi cropped.png";
import { FONT_FAMILY } from "../../public/theme/theme";

export default function Page(): JSX.Element {
    const positions = [
        "Full-Stack Developer",
        "Software Developer",
        "Cloud Engineer",
        "Software Engineer",
        "IT Manager",
    ];

    return (
        <>
            <Grid container>
                <Grid
                    item
                    xl={3.5}
                    lg={3.5}
                    md={3.5}
                    sm={3.5}
                    xs={10}
                    fontSize={"4rem"}
                    fontFamily={FONT_FAMILY}
                    sx={{ overflow: "visible" }}
                    mt={20}
                    ml={5}
                    // className="mx-auto"
                >
                    <Grid item>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Cloud Engineer")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Software Engineer")
                                    .pauseFor(500)
                                    .deleteAll()
                                    .typeString("Full-Stack Developer")
                                    .pauseFor(500)
                                    .deleteAll()
                                    .typeString("Software Developer")
                                    .pauseFor(500)
                                    .start();
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid
                    item
                    md={8}
                    lg={8}
                    xl={8}
                    sm={8}
                    xs={10}
                    sx={{ position: "relative" }}
                >
                    <Image
                        src={sobhanessi}
                        alt="sobhan esfandyari picture"
                        style={{
                            width: "100%",
                            height: "auto",
                            position: "absolute",
                            paddingTop: 100,
                            zIndex: 2,
                        }}
                    />
                    <Image
                        src={sobhanessi}
                        alt="sobhan esfandyari picture"
                        style={{
                            width: "100%",
                            height: "auto",
                            transform: "translate(-12px,80px)",
                            zIndex: 1,
                            position: "absolute",
                            opacity: 0.2,
                        }}
                    />
                </Grid>
            </Grid>
        </>
    );
}
