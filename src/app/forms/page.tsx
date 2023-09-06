"use client";
import React from "react";
import { object, string, number, InferType } from "yup";
import { Button, Container, TextField } from "@mui/material";
import { useFormik } from "formik";

const validationSchema = object({
    name: string().required(),
    nachname: string().required(),
    email: string().email().required(),
    mobil: number().positive(),
    geschaeftAdresse: string(),
    url: string().url(),
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

export default function forms(): JSX.Element {
    const formik = useFormik({
        initialValues: {
            name: "",
            nachname: "",
            email: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => handleSubmit(values),
    });

    const handleSubmit = (e: InferType<typeof validationSchema>) => {
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
                </div>
                <div>
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
                </div>
                <Button variant="contained">Submit</Button>
            </form>
        </Container>
    );
}
