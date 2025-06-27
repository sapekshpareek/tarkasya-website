"use client";
import { 
  Box, 
  Container, 
  Grid,
  Typography, 
  Button, 
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { 
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import React from "react";

export default function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleGetStarted = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box 
      id="hero"
      sx={{
        backgroundColor: "#1d2786",
        color: "white",
        minHeight: "89vh",
        display: "flex",
        alignItems: "center",
        pt: { xs: 8, md: 0 },
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Side - Content */}
          <Grid item xs={12} md={6}>
            <Box>
              {/* Main Heading */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "3rem", sm: "4rem", md: "5rem", lg: "6rem" },
                  fontWeight: 900,
                  lineHeight: 0.9,
                  color: "white",
                  mb: 3,
                }}
              >
                Your Problem,
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "3rem", sm: "4rem", md: "5rem", lg: "6rem" },
                  fontWeight: 900,
                  lineHeight: 0.9,
                  color: "#ff6b35",
                  mb: 4,
                }}
              >
                Our Product
              </Typography>

              {/* Subtitle */}
              <Typography
                variant="h5"
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontWeight: 400,
                  lineHeight: 1.4,
                  mb: 4,
                }}
              >
                Transform your business with our comprehensive solutions in inventory management, 
                website development, and data extraction.
              </Typography>

              {/* CTA Button */}
              <Button
                variant="contained"
                size="large"
                onClick={handleGetStarted}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  py: 2.5,
                  px: 5,
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  borderRadius: "8px",
                  backgroundColor: "#ff6b35",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#e55a2b",
                  },
                }}
              >
                Get Started
              </Button>
            </Box>
          </Grid>

          {/* Right Side - Visual Element */}
          <Grid item xs={12} md={6}>
            <Box 
              sx={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                height: { xs: "300px", md: "500px" },
              }}
            >
              {/* Simple Visual Element */}
              <Box
                sx={{
                  width: { xs: "250px", md: "400px" },
                  height: { xs: "250px", md: "400px" },
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #ff6b35 0%, #ff8a5c 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 20px 60px rgba(255, 107, 53, 0.3)",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: "white",
                    fontWeight: 900,
                    fontSize: { xs: "2rem", md: "3rem" },
                    textAlign: "center",
                  }}
                >
                  TARKASYA
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
