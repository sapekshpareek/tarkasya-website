"use client";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function Highlights() {
  return (
    <Container
      sx={{
        minHeight: "100vh",
        bgcolor: "#063b26",
        minWidth: "96%",
        // left: "2%",
        position: "relative",
        borderRadius: "20px",
        p: { xs: "10vh 4vh", lg: "20vh 10vh" },
      }}
    >
      <Box>
        <Typography variant="h3" color={"#ffffff"} fontWeight={"bold"}>
          Developing company values
        </Typography>
        <Typography variant="h3" color={"#ffffff"} fontWeight={600}>
          for a financial Software
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 6,
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: 'space-evenly',
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: "#ffffff",
            // minWidth: "31%",
            minHeight: "45vh",
            p: "6vh",
            borderRadius: "20px",
            margin: "2vh",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              bgcolor: "#cfff92",
              minHeight: "12.5vh",
              borderRadius: "20px",
              minWidth: "12.5vh",
              alignItems: "center",
              textAlign: "center",
              alignContent: "center",
            }}
          >
            <Typography>IMG</Typography>
          </Box>
          <Typography variant="h4" sx={{ mt: 2 }}>
            Header
          </Typography>
          <Typography sx={{ mt: 2 }}>
            SubHeader is a need of everything that here i am writing anything
            becasue i have to complete everything
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: "#ffffff",
            // minWidth: "31%",
            minHeight: "45vh",
            p: "6vh",
            borderRadius: "20px",
            margin: "2vh",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              bgcolor: "#cfff92",
              minHeight: "12.5vh",
              borderRadius: "20px",
              minWidth: "12.5vh",
              alignItems: "center",
              textAlign: "center",
              alignContent: "center",
            }}
          >
            <Typography>IMG</Typography>
          </Box>
          <Typography variant="h4" sx={{ mt: 2 }}>
            Header
          </Typography>
          <Typography sx={{ mt: 2 }}>
            SubHeader is a need of everything that here i am writing anything
            becasue i have to complete everything
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: "#ffffff",
            // minWidth: "31%",
            minHeight: "45vh",
            p: "6vh",
            borderRadius: "20px",
            margin: "2vh",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              bgcolor: "#cfff92",
              minHeight: "12.5vh",
              borderRadius: "20px",
              minWidth: "12.5vh",
              alignItems: "center",
              textAlign: "center",
              alignContent: "center",
            }}
          >
            <Typography>IMG</Typography>
          </Box>
          <Typography variant="h4" sx={{ mt: 2 }}>
            Header
          </Typography>
          <Typography sx={{ mt: 2 }}>
            SubHeader is a need of everything that here i am writing anything
            becasue i have to complete everything
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
