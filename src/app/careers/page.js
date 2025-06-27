"use client";
import { Box, Container, Typography } from "@mui/material";

export default function CareersComingSoon() {
  return (
    <Container maxWidth="md" sx={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Box
        sx={{
          width: "100%",
          bgcolor: "#f5f7fa",
          color: "#1d2786",
          borderRadius: 4,
          boxShadow: 2,
          p: { xs: 4, md: 8 },
          textAlign: "center",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          Careers at Tarkasya
        </Typography>
        <Typography variant="h5" sx={{ color: "#3b4bc8", mb: 3 }}>
          Coming Soon
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          We&apos;re working on exciting opportunities for you to join our team.<br />
          Please check back soon!
        </Typography>
      </Box>
    </Container>
  );
} 