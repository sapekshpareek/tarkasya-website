"use client";
import { 
  Box, 
  Container, 
  Stack, 
  Typography, 
  Button, 
  Grid,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
} from "@mui/material";
import { 
  Business as BusinessIcon,
  Inventory as InventoryIcon,
  Code as CodeIcon,
  DataUsage as DataIcon,
  ArrowForward as ArrowForwardIcon,
  PlayArrow as PlayArrowIcon,
} from "@mui/icons-material";
import React from "react";

const services = [
  {
    icon: <InventoryIcon sx={{ fontSize: 24, color: "secondary.main" }} />,
    title: "Inventory Management",
    description: "Streamline your business operations"
  },
  {
    icon: <CodeIcon sx={{ fontSize: 24, color: "secondary.main" }} />,
    title: "Website Development",
    description: "Modern, responsive web solutions"
  },
  {
    icon: <DataIcon sx={{ fontSize: 24, color: "secondary.main" }} />,
    title: "Data Extraction",
    description: "Automated data collection & analysis"
  }
];

export default function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleGetStarted = () => {
    // Scroll to services section
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWatchDemo = () => {
    // Open demo video or modal
    console.log("Watch demo clicked");
  };

  return (
    <Box 
      id="hero"
      sx={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
        color: "text.primary",
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          minHeight: "80vh",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Content */}
          <Grid item xs={12} md={6}>
            <Fade in timeout={1000}>
              <Stack spacing={4}>
                {/* Badge */}
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    px: 2,
                    py: 1,
                    backgroundColor: "rgba(255, 107, 53, 0.1)",
                    border: "1px solid rgba(255, 107, 53, 0.3)",
                    borderRadius: "20px",
                    width: "fit-content",
                  }}
                >
                  <BusinessIcon sx={{ color: "#ff6b35", fontSize: 20 }} />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#ff6b35",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Business Solutions
                  </Typography>
                </Box>

                {/* Main Heading */}
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem", lg: "4rem" },
                    fontWeight: 700,
                    lineHeight: 1.1,
                    color: "text.primary",
                    mb: 2,
                  }}
                >
                  Your Problem,
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem", lg: "4rem" },
                    fontWeight: 700,
                    lineHeight: 1.1,
                    background: "linear-gradient(135deg, #1d2786 0%, #ff6b35 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 2,
                  }}
                >
                  Our Product
                </Typography>

                {/* Subtitle */}
                <Typography
                  variant="h5"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 400,
                    lineHeight: 1.5,
                    maxWidth: "600px",
                  }}
                >
                  Transform your business challenges into opportunities with our comprehensive solutions.
                </Typography>

                {/* CTA Buttons */}
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ mt: 4 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleGetStarted}
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      py: 2,
                      px: 4,
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      borderRadius: "25px",
                      background: "linear-gradient(135deg, #1d2786 0%, #3b4bc8 100%)",
                      boxShadow: "0 8px 25px rgba(29, 39, 134, 0.3)",
                      textTransform: "none",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 35px rgba(29, 39, 134, 0.4)",
                        background: "linear-gradient(135deg, #3b4bc8 0%, #1d2786 100%)",
                      },
                    }}
                  >
                    Get Started
                  </Button>
                  
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={handleWatchDemo}
                    startIcon={<PlayArrowIcon />}
                    sx={{
                      py: 2,
                      px: 4,
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      borderRadius: "25px",
                      borderColor: "primary.main",
                      color: "primary.main",
                      textTransform: "none",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "primary.dark",
                        backgroundColor: "rgba(29, 39, 134, 0.1)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Watch Demo
                  </Button>
                </Stack>
              </Stack>
            </Fade>
          </Grid>

          {/* Visual/Image */}
          <Grid item xs={12} md={6}>
            <Slide direction="left" in timeout={1200}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                {/* Hero Visual */}
                <Box
                  sx={{
                    width: { xs: "100%", md: "500px" },
                    height: { xs: "300px", md: "400px" },
                    backgroundColor: "white",
                    borderRadius: "20px",
                    border: "2px solid",
                    borderColor: "border.light",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Box sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                    <Box
                      sx={{
                        fontSize: "4rem",
                        mb: 2,
                        opacity: 0.8,
                        color: "primary.main",
                      }}
                    >
                      🚀
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 600,
                        color: "text.primary",
                        mb: 2,
                      }}
                    >
                      Business Solutions
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        maxWidth: "300px",
                        mx: "auto",
                      }}
                    >
                      Interactive demo and case studies coming soon
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Slide>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
