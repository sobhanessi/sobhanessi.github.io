"use client";
import React from "react";
import { object, string, number, InferType, boolean } from "yup";
import { Button, Container, TextField } from "@mui/material";
import { useFormik } from "formik";

const validationSchema = object({
    name: string().required(),
    nachname: string().required(),
    email: string().email().required(),
    mobil: number().positive(),
    markenName: string().required(),
    geschaeftAdresse: string(),
    onlineShop: string().url(),
    amazonUrl: string().url(),
    produkt: string().required(),
    produktspezifikationen: string().required(),
    varianten: string().required(),
    probleme: string().required(),
    usp: string().required(),
    konkurrenz: string().required(),
    zielgruppe: string().required(),
    kundenAvatar: string().required(),
    bedenkenUndFragen: string().required(),
    patent: boolean().required(),
    zertifikate: string().required(),
    topsellers: string().required(),
    launchDatum: string().required(),
    liveShooting: boolean().required(),
    hauptKeywoerter: string().required(),
    anmerkungen: string().required(),
});

type Data = InferType<typeof validationSchema>;
// {
//     name: string;
//     nachname: string;
//     email: string;
//     mobil: number;
//     markenName: string;
//     geschaeftAdresse: string;
//     url: string;
// };

const initialValues: Data = {
    name: "",
    nachname: "",
    email: "",
    mobil: 0,
    markenName: "",
    geschaeftAdresse: "",
    onlineShop: "",
    amazonUrl: "",
    produkt: "",
    produktspezifikationen: "",
    varianten: "",
    probleme: "",
    usp: "",
    konkurrenz: "",
    zielgruppe: "",
    kundenAvatar: "",
    bedenkenUndFragen: "",
    patent: false,
    zertifikate: "",
    topsellers: "",
    launchDatum: "",
    liveShooting: false,
    hauptKeywoerter: "",
    anmerkungen: "",
};

export default function forms(): JSX.Element {
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values: Data) => handleSubmit(values),
    });

    const handleSubmit = (e: Data) => {
        console.log(e);
    };
    return (
        <Container sx={{ mt: 15 }}>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <TextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        required
                        margin="normal"
                        value={formik.values.name || ""}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.name && Boolean(formik.errors.name)
                        }
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                        id="nachname"
                        label="Nachname"
                        variant="outlined"
                        required
                        margin="normal"
                        value={formik.values.nachname || ""}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.nachname &&
                            Boolean(formik.errors.nachname)
                        }
                        helperText={
                            formik.touched.nachname && formik.errors.nachname
                        }
                    />
                </div>
                <div>
                    <TextField
                        id="email"
                        label="email"
                        variant="outlined"
                        required
                        margin="normal"
                        type="email"
                        value={formik.values.email || ""}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        id="mobil"
                        label="Mobil"
                        variant="outlined"
                        required
                        margin="normal"
                        type="number"
                        value={formik.values.mobil || 0}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.mobil && Boolean(formik.errors.mobil)
                        }
                        helperText={formik.touched.mobil && formik.errors.mobil}
                    />
                </div>
                <Button variant="contained">Submit</Button>
            </form>
        </Container>
    );
}
