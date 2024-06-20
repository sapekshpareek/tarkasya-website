"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import React, { Component } from "react";
import ErrorIcon from "@mui/icons-material/Error";

export default function pageNotFound() {
  return (
    <Container>
      <Box
        sx={{
          minHeight: "30rem",
          minWidth: "100%",
          bgcolor: "#ffeb69",
          color: "#532e07",
          borderRadius: "20px",
          mt: 4,
          p: "3rem",
          textAlign: "center",
          alignContent: "center",
          // left: '10%',
          // width: "80%",
        }}
      >
        {/* <Box>
          <Typography>
            <ErrorIcon fontSize="large" />
          </Typography>
        </Box> */}
        <Typography variant="h1" sx={{fontWeight:{xs: '600', sm: '500'}}}>
          404 <br />
          Not Found
        </Typography>
        <Typography variant="h5">
          The page you are looking for could not be found.
          <br />
          Please check the URL and try again.
        </Typography>
        <Button
          variant="contained"
          component="a"
          href="/"
          target="_blank"
          sx={[
            {
              mt: 4,
              color: "#ffeb69",
              bgcolor: "#532e07",
              borderRadius: "20px",
              padding: "8px 15px",
              fontWeight: "500",
            },
            (theme) => ({
              "&:hover": {
                bgcolor: "#532e07",
              },
            }),
          ]}
        >
          Go To Home
        </Button>
      </Box>
    </Container>
  );
}
