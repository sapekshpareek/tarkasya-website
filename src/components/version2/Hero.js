"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

export default function Hero() {
  return (
    <Box id="hero">
      <Container
        sx={{
          minHeight: "100vh",
          bgcolor: "#020202",
          color: "#ffffff",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          // pt: { xs: 14, sm: 20 },
          // pb: { xs: 8, sm: 12 },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h1">This is HERO Section</Typography>
          <Typography variant="h3">This is Under Development!</Typography>
          {/* <Typography>Empower Your Finances with Precision & Ease.</Typography> */}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {/* <Typography>sdf</Typography> */}
        </Box>
      </Container>
    </Box>
  );
}
