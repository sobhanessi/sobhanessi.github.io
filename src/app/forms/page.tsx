"use client";
import React from "react";
import { object, string, number, InferType } from "yup";

const dataSchema = object({
    name: string().required(),
    nachname: string().required(),
    email: string().email().required(),
    mobil: number().positive(),
    geschaeftAdresse: string(),
    url: string().url(),
});

type Data = InferType<typeof dataSchema>;
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
    return <form></form>;
}
