import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Sobhanessi from "../pics/sobhanessi.jpg";
import { FONT_FAMILY, MAIN_COLOR } from "../theme/theme";
import Footer from "../components/Footer";
import jobs from "../database/jobs";
import { deepOrange } from "@mui/material/colors";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Divider />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: MAIN_COLOR,
          pt: 15,
          fontFamily: FONT_FAMILY,
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar
            alt="Sobhan Esfandyari"
            src={Sobhanessi}
            sx={{ width: 192, height: 192, mr: 5 }}
          />
          <Box>
            <Typography
              variant="h4"
              color="#f79d2e"
              sx={{ fontFamily: FONT_FAMILY, fontWeight: 700 }}
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
          </Box>
        </Container>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mt: 6,
            fontFamily: FONT_FAMILY,
          }}
        >
          <Typography
            variant="h4"
            component="div"
            // color="#ff6266"
            color="white"
            gutterBottom
            sx={{ fontFamily: FONT_FAMILY, fontWeight: 600, mb: 8 }}
          >
            Here, I briefly explain who I am and what happened to me that I
            became such a person with these ideas!
          </Typography>
        </Container>
        {/* <Divider /> */}
        <Container
          sx={{
            // display: "flex",
            // flexDirection: "column",
            mb: 6,
          }}
        >
          <Grid container sx={{ display: "flex", flexDirection: "row" }}>
            <Grid item sm={1} xs={1} lg={1} xl={1} md={1}>
              <Box
                sx={{
                  color: "white",
                  borderLeft: "1px solid white",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  ml: 3,
                }}
              >
                <Avatar
                  sx={{
                    width: 92,
                    height: 92,
                    ml: -6,
                    bgcolor: deepOrange[300],
                    fontSize: "16px",
                    textAlign: "center",
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  The Begining
                </Avatar>
              </Box>
            </Grid>
            <Grid item sm={8} xl={8} lg={8} md={8} xs={8} sx={{ ml: 8 }}>
              <Typography color="white" fontFamily={FONT_FAMILY}>
                I born and raise in a very high political family so there is no
                question about why I'm political activist and seeking freedom
                for my beloved country.
                <br />
                However I'm not nationalist, I just want to have democracy in my
                country which if we have it in Iran, there would be no doubt
                that all the countries around Iran can rise and therefore we
                will have democracy and less fundamentalists and jihadists in
                the middle-east.
                <br />
                I'm not writing this for just people to come every time and see
                who I am, but I'm just writing this for future references.
                <br />
                But let's get back to my childhood.
                <br />
                As I mentioned above, all my families and relatives are
                political activists either in the regime side or against the
                Mullah's regime of Iran. I remember my first impression of
                demonstrations which happened in 1997 in July which my city,
                Tehran, was completely locked down and too many people and
                especially students killed by regime. I was not in the age to
                digest everything that is happening, but I was seeing poeple are
                dying and getting shot by Basijis and Sepahis. Something like a
                lamp was turned on my mind which I was always asking that what
                is going on. but the most important thing here is that, on that
                time due to suppression of regime, we were not allowed to speak
                in the public or even in the school I couldn't able to share my
                feelings and thoughts because then we would be arrested and we
                could be isolated from the society and be put in the Evin
                prison, therefore, I didn't have any kind of friends to share
                all of these things and they couldn't really understand what and
                how do I feel.
                <br />
                But beside all of these political things, my first moment of
                working with computers happened at the age of 3 or 4. My uncle
                had a computer company on that time and he had some computers
                which was running by MS-DOS on that time and the computers had
                Floppy Disks and we had to command them by the shell to do what
                and that was amazing to me and I always wanted to learn about
                computers and be master on that. I need to mention here that I
                have some problems with my eyes, it is called Strabismus and I
                had done 3 times of hard surgery which were very difficult for
                me and due to this issue I had to close my right eye in order to
                strengthen my left eye. I remember I did it for 4 to 5 years.
                Because of this problem, my family was always against me to work
                with computers so you guess what happened! ;)
              </Typography>
            </Grid>
          </Grid>
          <br />
          <br />
          <Grid container sx={{ display: "flex", flexDirection: "row" }}>
            <Grid item sm={8} xl={8} lg={8} md={8} xs={8} sx={{ ml: 8 }}>
              <Typography color="white" fontFamily={FONT_FAMILY}>
                From the age of 7 until 12 was a bit steady and nothing
                especiall happened actually. The only thing that happened which
                changed my life was going to Iraq to the Camp Ashraf when I was
                only 10 to see our relatives there which tragedies happened
                afterwards.
                <br />I actually need to shed light that two of my uncles and
                ony of my aunts ( all from my father's side ) had been killed or
                terrored by the regime of Iran. My father also was a prisoner
                before 2006 for more than 10 years in both regimes of Shah and
                after the 1979's revolution. My mother was also imprisoned when
                she was only 12! My grandmother and grandfather and also my
                uncles and aunts have served some amount of years in the prison
                in Tehran and being tortured by the regime's authorities,
                especially my father!
                <br />
                After we came back from camp of Ashraf, just a year after,
                regime of Iran arrested my father and put him to the prison and
                they sentenced him to 5 years in the prision but not in Tehran,
                they exiled him to another city, Karaj, in the prison of
                Gohardasht which is one of the most terrible ones in Iran.{" "}
                <br />
                Anyways, that was one of the first incidents that I was feeling
                fascism with my blood! I was completely seeing it with my eyes!
                going through the prison to meet my father for 10 to 15 minutes
                every week and don't have any kind of chance to call him. That
                was terrible.
                <br />I really didn't have anybody on my side except my brother
                and my mother and for sure my grandmother. I was not able to
                talk to anybody about what it is going because people could
                abandon us and leave us behind.
                <br />
              </Typography>
            </Grid>
            <Grid item sm={1} xs={1} lg={1} xl={1} md={1}>
              <Box
                sx={{
                  color: "white",
                  borderRight: "1px solid white",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  ml: 3,
                }}
              >
                <Avatar
                  sx={{
                    width: 92,
                    height: 92,
                    ml: 3,
                    bgcolor: deepOrange[300],
                    fontSize: "16px",
                    textAlign: "center",
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  from 11 to 15
                </Avatar>
              </Box>
            </Grid>
          </Grid>
          <br />
          <br />
          {/* the two first */}
          <Grid container sx={{ display: "flex", flexDirection: "row" }}>
            <Grid item sm={1} xs={1} lg={1} xl={1} md={1}>
              <Box
                sx={{
                  color: "white",
                  borderLeft: "1px solid white",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  ml: 3,
                }}
              >
                <Avatar
                  sx={{
                    width: 92,
                    height: 92,
                    ml: -6,
                    bgcolor: deepOrange[300],
                    fontSize: "16px",
                    textAlign: "center",
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  from 15 to 19
                </Avatar>
              </Box>
            </Grid>
            <Grid item sm={8} xl={8} lg={8} md={8} xs={8} sx={{ ml: 8 }}>
              <Typography color="white" fontFamily={FONT_FAMILY}>
                In the age of 15, in 2009 I joined a high school called Roshd
                which at the begining I didn't know what have I done so far but
                I'm going to explain that what happened.
                <br />
                The demonstrations of 2009 against regime.
                <br />I was only 15, which after the election happened and that
                was the moment I could feel that I belong to some group of
                people and I realy wanted to participate on those
                demonstrations. In the city of Tehran, everything and everywhere
                was completely out of control of the regime until Mir Hossein
                came and put the water on the fire. We could really defeat the
                regime because the amount of people who were participating was
                so enough to completely take over the government and make
                democracy however didn't happen anyway!
                <br />I remember I was only 15 I was going to demonstrations
                with my grandmother despite the fact that my family didn't want
                me to participate.
                <br />
                The tragedy happened again that my father was called by the
                regime to come back to the prison because of the chaotic
                situation of the country which last for about a year. In the
                school as I mentioned that I didn't know that I have stepped on
                where, I again was isolated because the school was completely
                rulled by fascist group called the Hezb-e Motalefe Isalmi.
                Everything they were saying was totally against my ideas but I
                had no choice rather than bearing them and not to talk to
                anybody.
                <br />
                My father was in prison, I had no friends. I was completely
                isolated.
                <br />
                On that time I tried to learn some programming things but there
                was one main problem which was the internet which I had no
                access to it and again I opt out of it.
                <br /> This loop was going on until I graduated from high school
                and I admitted for university but this time due to pressure of
                my family I chose the survey engineering instead of computer
                which I wanted to go for it.
              </Typography>
            </Grid>
          </Grid>
          <br />
          <br />
          <Grid container sx={{ display: "flex", flexDirection: "row" }}>
            <Grid item sm={8} xl={8} lg={8} md={8} xs={8} sx={{ ml: 8 }}>
              <Typography color="white" fontFamily={FONT_FAMILY}>
                In the university, at the begining everything was going good but
                again after my friends realized that I political acitivist all
                of them abandon me and left me behind.
                <br />
                There was an incident that came to my mind which I realized that
                I'm wasting my time, that was then I decided to change my
                studies from survey engineering to computer engineering.
                <br />I was learning so fast. I was enjoying my studies but
                something terrible happened again. This time to me.
                <br />
                It was in the December of 2017 and January of 2018 that there
                was so many intense demonstrations against the regime which too
                many were killed by the regime or being arrested. Although I was
                not arrested in the middle of demonstrations but I remember it
                was a snowy night in February of 2018 that I was arrested by the
                agents of ministry of information and not just me, they have
                even arrested my mother which she has so many problems with her
                heart. They have beaten me and they put gun on my leg ( they
                didn't shoot however ) but they punched me and bullied me and
                they brought us to the prison of Evin ( 209 ). I didn't what
                should I do and will be alive there or not!
                <br />
                After being one month in the prison, they have released me for a
                certain amount of time until my trial come up. During the court
                session, the judge's name was Mohammad Mir Moghise who is really
                famous of his actions against political activists that have
                sentenced them to execution especially in 1988 massacare and he
                was also my father's judge during that time, he was completely
                insulting me and telling me bullshit. That was then I decided to
                really think of leaving Iran and saving my life because the
                judge during the trial told that we are gonna kill you in the
                prison and we will never let you breathe.
                <br />
                Just a week after they sentenced to the 7 years of being in
                prison and like my father they have exiled to a very worst place
                out of Tehran.
                <br />
              </Typography>
            </Grid>
            <Grid item sm={1} xs={1} lg={1} xl={1} md={1}>
              <Box
                sx={{
                  color: "white",
                  borderRight: "1px solid white",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  ml: 3,
                }}
              >
                <Avatar
                  sx={{
                    width: 92,
                    height: 92,
                    ml: 3,
                    bgcolor: deepOrange[300],
                    fontSize: "16px",
                    textAlign: "center",
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  from 19 to now
                </Avatar>
              </Box>
            </Grid>
          </Grid>
          <br />
          <br />
        </Container>
        <hr style={{ color: "white", width: "100%" }} />
        <Container sx={{ pt: 3, pb: 3 }}>
          {jobs.map((job) => (
            <Grid container xs={12} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <Avatar
                  src={job.image}
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
              >
                <Typography
                  variant="h5"
                  component="div"
                  color="#ff6266"
                  gutterBottom
                  sx={{ fontFamily: FONT_FAMILY }}
                >
                  {job.title}
                </Typography>
                <Typography
                  component="div"
                  color="#f79d2e"
                  gutterBottom
                  sx={{ fontFamily: FONT_FAMILY }}
                >
                  {job.period}
                </Typography>
                <Typography
                  component="div"
                  color="#2e5aeb"
                  gutterBottom
                  sx={{ fontFamily: FONT_FAMILY }}
                >
                  Type of contract : {job.contractType}
                </Typography>
                <Typography gutterBottom sx={{ color: "white" }}>
                  {job.description}
                </Typography>
              </Grid>
              <hr style={{ color: "white", width: "100%" }} />
            </Grid>
          ))}
        </Container>
      </Container>
      <Footer />
    </>
  );
}
