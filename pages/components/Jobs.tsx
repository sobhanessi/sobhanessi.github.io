import React from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import { FONT_FAMILY } from "../../public/theme/theme";
import jobs from "../../public/database/jobs";

function Jobs(): JSX.Element {
  return (
    <>
      {jobs.map((job) => (
        <Grid container sx={{ mb: 4 }} key={job.title}>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4} key={job.period}>
            <Avatar
              src={`/pics/${job.image}`}
              alt={job.company}
              variant="square"
              sx={{
                height: 225,
                width: 225,
                borderRadius: "25px",
                display: "flex",
                mb: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
              key={job.title}
            />
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
            xl={8}
            lg={8}
            md={8}
            sm={8}
            xs={12}
            key={job.contractType}
          >
            <Typography
              variant="h5"
              component="div"
              color="#ff6266"
              gutterBottom
              sx={{ fontFamily: FONT_FAMILY }}
              key={job.title}
            >
              {job.title}
            </Typography>
            <Typography
              component="div"
              color="#f79d2e"
              gutterBottom
              sx={{ fontFamily: FONT_FAMILY }}
              key={job.period}
            >
              {job.period}
            </Typography>
            <Typography
              component="div"
              color="#2e5aeb"
              gutterBottom
              sx={{ fontFamily: FONT_FAMILY }}
              key={job.title + job.period}
            >
              Type of contract : {job.contractType}
            </Typography>
            <Typography
              gutterBottom
              sx={{ color: "white" }}
              title={job.title + job.period + job.contractType}
            >
              {job.description}
            </Typography>
          </Grid>
          <hr style={{ color: "white", width: "100%" }} />
        </Grid>
      ))}
    </>
  );
}

export default Jobs;
