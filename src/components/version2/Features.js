"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Features() {
  return (
    <Container sx={{minWidth:'80%'}}>
      <Box sx={{ minHeight: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ alignContent: "center", minHeight: "20vh", mt: "2vh" }}>
            <Typography
              variant="h4"
              fontSize="5vh"
              fontWeight={"bold"}
              sx={{ mt: "2vh" }}
            >
              Essential Features for
            </Typography>
            <Typography
              variant="h4"
              fontSize="5vh"
              fontWeight={"bold"}
              sx={{ mt: "2vh" }}
            >
              Financial SaaS Solution
            </Typography>
          </Box>
          <Box sx={{ mt: "12vh" }}>
            <Button
              variant="contained"
              component="a"
              //   href="#"
              target="_blank"
              sx={[
                {
                  color: "#ffffff",
                  bgcolor: "#063b26",
                  borderRadius: "50px",
                  padding: " 2vh 1vh",
                  marginRight: "2.5vh",
                },
                (theme) => ({
                  "&:hover": {
                    bgcolor: "#063b26",
                  },
                }),
              ]}
            >
              <Typography>
                <ArrowBackIcon />
              </Typography>
            </Button>
            <Button
              variant="contained"
              component="a"
              //   href="#"
              target="_blank"
              sx={[
                {
                  color: "#ffffff",
                  bgcolor: "#063b26",
                  borderRadius: "50px",
                  padding: "2vh 1vh",
                  marginRight: "2.5vh",
                },
                (theme) => ({
                  "&:hover": {
                    bgcolor: "#063b26",
                  },
                }),
              ]}
            >
              <Typography>
                <ArrowForwardIcon />
              </Typography>
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            minHeight: "70vh",
            bgcolor: "#f5f6f4",
            p: "6vh",
            marginTop: "6vh",
            borderRadius: "2vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              alignContent: "center",
            //   textAlign: "center",
              justifyContent: "center",
              maxWidth: '50%'
            }}
          >
            <Typography variant="h4" fontWeight={'bold'
            } sx={{mt: 4}}>Slider New Text</Typography>
            <Typography sx={{mt: 4}}>Here is the sample test of the website to be placed here for the same type of data to be implmented.</Typography>
            <Typography sx={{mt: 4}}>helo</Typography>
          </Box>
          <Box
            sx={{
              alignContent: "center",
              textAlign: "center",
              justifyContent: "center",
              bgcolor: "#063b26",
              minWidth: "40%",
              maxWidth: "40%",
              borderRadius: "20px",
            }}
          >
            <Typography variant="h3" sx={{ color: "#ffffff", p: "2vh" }}>
              Image to be Placed Here!
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
