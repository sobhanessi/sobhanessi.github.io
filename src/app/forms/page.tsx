"use client";
// @refresh reset
import React from "react";
import { object, string, number, InferType, boolean } from "yup";
import {
    Box,
    Button,
    Container,
    FormControlLabel,
    FormGroup,
    Grid,
    Stack,
    Switch,
    TextField,
    Typography,
} from "@mui/material";
import { useFormik } from "formik";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

const validationSchema = object({
    name: string().required(),
    nachname: string().required(),
    email: string().email().required(),
    mobil: number().positive(),
    markenName: string().required(),
    geschaeftAdresse: string(),
    projektumfang: string(),
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
    topseller: string().required(),
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
    topseller: "",
    launchDatum: "",
    liveShooting: false,
    hauptKeywoerter: "",
    anmerkungen: "",
};

const VisuallyHiddenInput = styled("input")`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    white-space: nowrap;
    width: 1px;
`;

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
        <Grid container justifyContent={"center"} mt={10}>
            <Grid item lg={6}>
                <Box component="form">
                    <form onSubmit={formik.handleSubmit}>
                        <Stack justifyContent={"center"}>
                            <div>
                                <TextField
                                    id="name"
                                    label="Name : "
                                    variant="outlined"
                                    required
                                    margin="normal"
                                    value={formik.values.name || ""}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                        formik.touched.name &&
                                        Boolean(formik.errors.name)
                                    }
                                    helperText={
                                        formik.touched.name &&
                                        formik.errors.name
                                    }
                                    sx={{ width: 300, mr: 8 }}
                                />
                                <TextField
                                    id="nachname"
                                    label="Nachname : "
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
                                        formik.touched.nachname &&
                                        formik.errors.nachname
                                    }
                                    sx={{ width: 300 }}
                                />
                            </div>

                            <div>
                                <TextField
                                    id="email"
                                    label="Email : "
                                    variant="outlined"
                                    required
                                    margin="normal"
                                    type="email"
                                    value={formik.values.email || ""}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                        formik.touched.email &&
                                        Boolean(formik.errors.email)
                                    }
                                    helperText={
                                        formik.touched.email &&
                                        formik.errors.email
                                    }
                                    sx={{ width: 300, mr: 8 }}
                                />
                                <TextField
                                    id="mobil"
                                    label="Mobil : "
                                    variant="outlined"
                                    required
                                    margin="normal"
                                    inputProps={{
                                        inputMode: "numeric",
                                        pattern: "[0-9]*",
                                    }}
                                    value={formik.values.mobil || ""}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                        formik.touched.mobil &&
                                        Boolean(formik.errors.mobil)
                                    }
                                    helperText={
                                        formik.touched.mobil &&
                                        formik.errors.mobil
                                    }
                                    sx={{ width: 300 }}
                                />
                            </div>
                            <div>
                                <TextField
                                    id="markenName"
                                    label="Markenname : "
                                    variant="outlined"
                                    required
                                    margin="normal"
                                    value={formik.values.markenName || ""}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                        formik.touched.markenName &&
                                        Boolean(formik.errors.markenName)
                                    }
                                    helperText={
                                        formik.touched.markenName &&
                                        formik.errors.markenName
                                    }
                                    fullWidth
                                />
                            </div>
                            <div>
                                <TextField
                                    id="geschaeftAdresse"
                                    label="GeschäftAdresse : "
                                    variant="outlined"
                                    required
                                    // margin="normal"
                                    value={formik.values.geschaeftAdresse || ""}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                        formik.touched.geschaeftAdresse &&
                                        Boolean(formik.errors.geschaeftAdresse)
                                    }
                                    helperText={
                                        formik.touched.geschaeftAdresse &&
                                        formik.errors.geschaeftAdresse
                                    }
                                    fullWidth
                                    multiline
                                    rows={8}
                                />
                            </div>
                            <div>
                                <TextField
                                    id="projektumfang"
                                    label="Projektumfang : "
                                    variant="outlined"
                                    required
                                    margin="normal"
                                    value={formik.values.projektumfang || ""}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                        formik.touched.projektumfang &&
                                        Boolean(formik.errors.projektumfang)
                                    }
                                    helperText={
                                        formik.touched.projektumfang &&
                                        formik.errors.projektumfang
                                    }
                                    fullWidth
                                />
                            </div>
                            <div>
                                <TextField
                                    id="onlineShop"
                                    label="Online-Shop (falls vorhanden) : "
                                    variant="outlined"
                                    required
                                    margin="normal"
                                    value={formik.values.onlineShop || ""}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                        formik.touched.onlineShop &&
                                        Boolean(formik.errors.onlineShop)
                                    }
                                    helperText={
                                        formik.touched.onlineShop &&
                                        formik.errors.onlineShop
                                    }
                                    fullWidth
                                    type="url"
                                />
                            </div>
                            <div>
                                <TextField
                                    id="amazonUrl"
                                    label="Amazon URL (falls schon Online): "
                                    variant="outlined"
                                    required
                                    margin="normal"
                                    value={formik.values.amazonUrl || ""}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                        formik.touched.amazonUrl &&
                                        Boolean(formik.errors.amazonUrl)
                                    }
                                    helperText={
                                        formik.touched.amazonUrl &&
                                        formik.errors.amazonUrl
                                    }
                                    fullWidth
                                    type="url"
                                />
                            </div>

                            <Typography>Dein Produkt:</Typography>

                            <div>
                                <TextField
                                    id="produkt"
                                    label="Wie ist dein Produkt : "
                                    variant="outlined"
                                    required
                                    margin="normal"
                                    value={formik.values.produkt || ""}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                        formik.touched.produkt &&
                                        Boolean(formik.errors.produkt)
                                    }
                                    helperText={
                                        formik.touched.produkt &&
                                        formik.errors.produkt
                                    }
                                    fullWidth
                                    multiline
                                    rows={8}
                                    placeholder="Bitte den kompletten Lieferumfang benennen"
                                />
                            </div>
                            <div>
                                <TextField
                                    id="produktspezifikationen"
                                    label="produktspezifikationen : "
                                    variant="outlined"
                                    required
                                    margin="normal"
                                    value={
                                        formik.values.produktspezifikationen ||
                                        ""
                                    }
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                        formik.touched.produktspezifikationen &&
                                        Boolean(
                                            formik.errors.produktspezifikationen
                                        )
                                    }
                                    helperText={
                                        formik.touched.produktspezifikationen &&
                                        formik.errors.produktspezifikationen
                                    }
                                    fullWidth
                                    multiline
                                    rows={8}
                                    placeholder="Größe, Gewicht, Material, ..."
                                />
                            </div>
                            <div>
                                <TextField
                                    id="varianten"
                                    label="Wie viele Varianten gibt es (Farbe, Größe, Material, usw.) : "
                                    variant="outlined"
                                    required
                                    margin="normal"
                                    value={formik.values.varianten || ""}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                        formik.touched.varianten &&
                                        Boolean(formik.errors.varianten)
                                    }
                                    helperText={
                                        formik.touched.varianten &&
                                        formik.errors.varianten
                                    }
                                    fullWidth
                                    multiline
                                    rows={8}
                                    // placeholder="Größe, Gewicht, Material, ..."
                                />
                            </div>
                            <div>
                                <TextField
                                    id="probleme"
                                    label="Was sind die größten Probleme, die du für die Zielgruppe löst? "
                                    variant="outlined"
                                    required
                                    margin="normal"
                                    value={formik.values.probleme || ""}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                        formik.touched.probleme &&
                                        Boolean(formik.errors.probleme)
                                    }
                                    helperText={
                                        formik.touched.probleme &&
                                        formik.errors.probleme
                                    }
                                    fullWidth
                                    multiline
                                    rows={8}
                                    // placeholder="Größe, Gewicht, Material, ..."
                                />
                            </div>
                            <div>
                                <TextField
                                    id="usp"
                                    label="Was ist das wichtigste Alleinstellungsmerkmal (USP) deines Produktes im Vergleich zu den Konkurrenten? "
                                    variant="outlined"
                                    required
                                    margin="normal"
                                    value={formik.values.usp || ""}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                        formik.touched.usp &&
                                        Boolean(formik.errors.usp)
                                    }
                                    helperText={
                                        formik.touched.usp && formik.errors.usp
                                    }
                                    fullWidth
                                    multiline
                                    rows={8}
                                    // placeholder="Größe, Gewicht, Material, ..."
                                />
                            </div>
                            <div>
                                <TextField
                                    id="konkurrenz"
                                    label="Was wird an der Konkurrenz in deiner Nische bemängelt? "
                                    variant="outlined"
                                    required
                                    margin="normal"
                                    value={formik.values.konkurrenz || ""}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                        formik.touched.konkurrenz &&
                                        Boolean(formik.errors.konkurrenz)
                                    }
                                    helperText={
                                        formik.touched.konkurrenz &&
                                        formik.errors.konkurrenz
                                    }
                                    fullWidth
                                    multiline
                                    rows={8}
                                    // placeholder="Größe, Gewicht, Material, ..."
                                />
                            </div>
                            <div>
                                <TextField
                                    id="zielgruppe"
                                    label="Wer ist deine Zielgruppe (bitte beschreiben): "
                                    variant="outlined"
                                    required
                                    margin="normal"
                                    value={formik.values.zielgruppe || ""}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                        formik.touched.zielgruppe &&
                                        Boolean(formik.errors.zielgruppe)
                                    }
                                    helperText={
                                        formik.touched.zielgruppe &&
                                        formik.errors.zielgruppe
                                    }
                                    fullWidth
                                    multiline
                                    rows={8}
                                    // placeholder="Größe, Gewicht, Material, ..."
                                />
                            </div>
                            <div>
                                {/* inja bayad ye label vasash bezanam... */}
                                <Button
                                    component="label"
                                    variant="contained"
                                    startIcon={<CloudUploadIcon />}
                                    href="#file-upload"
                                >
                                    Upload a file
                                    <VisuallyHiddenInput type="file" />
                                </Button>
                            </div>
                            <div>
                                <TextField
                                    id="bedenkenUndFragen"
                                    label="Welche Bedenken und Fragen können bei den Kunden vor dem Kauf auftreten? "
                                    variant="outlined"
                                    required
                                    margin="normal"
                                    value={
                                        formik.values.bedenkenUndFragen || ""
                                    }
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                        formik.touched.bedenkenUndFragen &&
                                        Boolean(formik.errors.bedenkenUndFragen)
                                    }
                                    helperText={
                                        formik.touched.bedenkenUndFragen &&
                                        formik.errors.bedenkenUndFragen
                                    }
                                    fullWidth
                                    multiline
                                    rows={8}
                                    // placeholder="Größe, Gewicht, Material, ..."
                                />
                            </div>

                            <div>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Switch />}
                                        label="Hat dein Produkt ein Patent oder ein geschütztes Design?"
                                    />
                                </FormGroup>
                            </div>
                            <div>
                                <TextField
                                    id="zertifikate"
                                    label="Welche Zertifikate oder Siegel hast du? (z.B. Labortests, TÜV, ÖKO-Tex, FSC usw.) "
                                    variant="outlined"
                                    required
                                    margin="normal"
                                    value={formik.values.zertifikate || ""}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                        formik.touched.zertifikate &&
                                        Boolean(formik.errors.zertifikate)
                                    }
                                    helperText={
                                        formik.touched.zertifikate &&
                                        formik.errors.zertifikate
                                    }
                                    fullWidth
                                    multiline
                                    rows={8}
                                    // placeholder="Größe, Gewicht, Material, ..."
                                />
                            </div>
                            <div>
                                <TextField
                                    id="topseller"
                                    label="Welche topseller oder Siegel hast du? (z.B. Labortests, TÜV, ÖKO-Tex, FSC usw.) "
                                    variant="outlined"
                                    required
                                    margin="normal"
                                    value={formik.values.topseller || ""}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                        formik.touched.topseller &&
                                        Boolean(formik.errors.topseller)
                                    }
                                    helperText={
                                        formik.touched.topseller &&
                                        formik.errors.topseller
                                    }
                                    fullWidth
                                    multiline
                                    rows={8}
                                />
                            </div>

                            <Button variant="contained">Submit</Button>
                        </Stack>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}
