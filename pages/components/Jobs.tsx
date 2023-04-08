import React from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import { FONT_FAMILY } from "../../public/theme/theme";
import jobs from "../../public/database/jobs";

function Jobs(): JSX.Element {
  return (
    <>
      {jobs.map((job) => (
        <Grid container sx={{ mb: 4 }} key={job.company + job.title + 1}>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            key={job.company + job.title + 2}
          >
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
              key={job.title + job.company + "pic"}
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
            key={job.company + job.title + 3}
          >
            <Typography
              variant="h5"
              // component="div"
              color="#ff6266"
              gutterBottom
              sx={{ fontFamily: FONT_FAMILY, fontWeight: "bold" }}
              key={job.title + " in " + job.company}
            >
              {job.title}
            </Typography>
            <Typography
              // component="div"
              color="#f79d2e"
              gutterBottom
              sx={{ fontFamily: FONT_FAMILY }}
              key={job.company + job.period}
            >
              {job.period}
            </Typography>
            <Typography
              // component="div"
              color="#2e5aeb"
              gutterBottom
              sx={{ fontFamily: FONT_FAMILY }}
              key={job.company + job.title + job.period}
            >
              Type of contract : {job.contractType}
            </Typography>
            <Typography
              gutterBottom
              sx={{ color: "white", fontFamily: FONT_FAMILY }}
              key={job.title + job.period + job.contractType + job.period}
            >
              {job.description}
            </Typography>
            {job?.skills?.length > 0 && (
              <Typography
                gutterBottom
                sx={{ color: "white", fontFamily: FONT_FAMILY, mt: 4 }}
                key={job.title + job.period + job.contractType + 2}
              >
                Skills that I used or gain in this experience that I had :
              </Typography>
            )}

            <Grid key={job.company + job.title + 4}>
              {job.skills?.map((skill) => {
                return (
                  <Grid
                    item
                    xl={2}
                    lg={1.5}
                    md={2}
                    sm={4}
                    xs={4}
                    sx={{
                      display: "inline-block",
                      mr: 1,
                    }}
                    key={skill.pic}
                  >
                    <Avatar
                      src={skill.pic}
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "20px",
                        backgroundColor:
                          skill.name.length > 0 ? "white" : "relative",
                      }}
                      key={skill.pic + 1}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <hr style={{ color: "white", width: "100%" }} />
        </Grid>
      ))}
    </>
  );
}

export default Jobs;
