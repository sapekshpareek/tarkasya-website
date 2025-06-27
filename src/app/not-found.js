"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function NotFound() {
  return (
    <Container maxWidth="md" sx={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Box
        sx={{
          width: "100%",
          bgcolor: "#f5f7fa",
          color: "#1d2786",
          borderRadius: 4,
          boxShadow: 3,
          p: { xs: 4, md: 8 },
          textAlign: "center",
        }}
      >
        <ErrorOutlineIcon sx={{ fontSize: 64, color: "#1d2786", mb: 2 }} />
        <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
          404 - Page Not Found
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, color: "#3b4bc8" }}>
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.<br />
          Let&apos;s get you back to something awesome.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="/"
          sx={{
            borderRadius: 3,
            px: 4,
            py: 1.5,
            fontWeight: 600,
            fontSize: "1.1rem",
            boxShadow: 2,
          }}
        >
          Go to Home
        </Button>
      </Box>
    </Container>
  );
}
