import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

export default function Hero() {
  return (
    <Box id="hero">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant="h1"
            sx={{ fontSize: "clamp(3.5rem, 10vw, 4rem)", fontWeight: 550}}
          >
            WhatsApp
          </Typography>
        </Stack>
        {/* <Box> sdf</Box>
        <Box> sdfd</Box>
        <Box> sdf</Box>
        <Box> sdfd</Box>
        <Box> sdf</Box>
        <Box> sdfd</Box>
        <Box> sdf</Box>
        <Box> sdfd</Box> */}
      </Container>
    </Box>
  );
}
