"use client";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Button,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
} from "@mui/material";
import {
  Inventory as InventoryIcon,
  Code as CodeIcon,
  DataUsage as DataIcon,
  Analytics as AnalyticsIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  Support as SupportIcon,
  TrendingUp as TrendingUpIcon,
  ArrowForward as ArrowForwardIcon,
  CheckCircle as CheckCircleIcon,
  Business as BusinessIcon,
  AutoAwesome as AutoAwesomeIcon,
} from "@mui/icons-material";
import React from "react";

const services = [
  {
    icon: <InventoryIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Inventory Management",
    description: "Streamline your business operations with intelligent inventory tracking and management solutions.",
    features: [
      "Real-time stock monitoring",
      "Automated reorder alerts",
      "Multi-location support",
      "Analytics and reporting"
    ],
    color: "primary.main"
  },
  {
    icon: <CodeIcon sx={{ fontSize: 40, color: "secondary.main" }} />,
    title: "Website Development",
    description: "Create stunning, responsive websites that convert visitors into customers with modern technologies.",
    features: [
      "Custom responsive design",
      "SEO optimization",
      "E-commerce integration",
      "Content management system"
    ],
    color: "secondary.main"
  },
  {
    icon: <DataIcon sx={{ fontSize: 40, color: "#10b981" }} />,
    title: "Data Extraction",
    description: "Automate data collection from websites and transform raw information into actionable insights.",
    features: [
      "Web scraping automation",
      "API integration",
      "Data cleaning & processing",
      "Custom reporting"
    ],
    color: "#10b981"
  }
];

const features = [
  {
    icon: <AnalyticsIcon sx={{ fontSize: 28, color: "white" }} />,
    title: "Advanced Analytics",
    description: "Get deep insights into your business performance"
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 28, color: "white" }} />,
    title: "Enterprise Security",
    description: "Bank-level security protocols to protect your data"
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 28, color: "white" }} />,
    title: "Lightning Fast",
    description: "Optimized performance ensures smooth operations"
  },
  {
    icon: <SupportIcon sx={{ fontSize: 28, color: "white" }} />,
    title: "24/7 Support",
    description: "Round-the-clock technical support"
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 28, color: "white" }} />,
    title: "Scalable Solutions",
    description: "Our solutions grow with your business"
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 28, color: "white" }} />,
    title: "Innovation First",
    description: "Cutting-edge technology and innovative approaches"
  }
];

export default function Features() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      id="services"
      sx={{
        py: { xs: 8, md: 8 },
        backgroundColor: "background.light",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Fade in timeout={800}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                background: "linear-gradient(135deg, #1d2786 0%, #3b4bc8 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Our Solutions
            </Typography>
          </Fade>
          <Fade in timeout={1000}>
            <Typography
              variant="h5"
              sx={{
                color: "text.secondary",
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              From inventory management to website development and data extraction - 
              we provide comprehensive business solutions that solve real problems.
            </Typography>
          </Fade>
        </Box>

        {/* Main Services */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Slide direction="up" in timeout={800 + index * 200}>
                  <Card
                    sx={{
                      height: "100%",
                      p: 4,
                      borderRadius: 3,
                      border: "1px solid",
                      borderColor: "border.light",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                        borderColor: service.color,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 0 }}>
                      <Box sx={{ textAlign: "center", mb: 3 }}>
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: "50%",
                            backgroundColor: `${service.color}15`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mx: "auto",
                            mb: 2,
                          }}
                        >
                          {service.icon}
                        </Box>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 600,
                            mb: 2,
                          }}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "text.secondary",
                            lineHeight: 1.6,
                            mb: 3,
                          }}
                        >
                          {service.description}
                        </Typography>
                      </Box>

                      <Stack spacing={2}>
                        {service.features.map((feature, featureIndex) => (
                          <Box key={featureIndex} sx={{ display: "flex", alignItems: "center" }}>
                            <CheckCircleIcon 
                              sx={{ 
                                color: service.color, 
                                mr: 2, 
                                fontSize: 20,
                                flexShrink: 0,
                              }} 
                            />
                            <Typography variant="body2">{feature}</Typography>
                          </Box>
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </Slide>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Features Grid */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 6,
              fontWeight: 600,
              color: "text.primary",
            }}
          >
            Why Choose Tarkasya?
          </Typography>
          
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Fade in timeout={600 + index * 100}>
                  <Card
                    sx={{
                      p: 3,
                      height: "100%",
                      textAlign: "center",
                      borderRadius: 3,
                      border: "1px solid",
                      borderColor: "border.light",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                        borderColor: "primary.main",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        backgroundColor: "primary.main",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 2,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        color: "text.primary",
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.5,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            textAlign: "center",
            p: { xs: 4, md: 6 },
            borderRadius: 3,
            background: "linear-gradient(135deg, #1d2786 0%, #3b4bc8 100%)",
            color: "white",
            mt: 4,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              mb: 3,
              fontWeight: 600,
              color: "white",
            }}
          >
            Ready to Transform Your Business?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              opacity: 0.9,
              maxWidth: "600px",
              mx: "auto",
              color: "white",
            }}
          >
            Let&apos;s discuss how our solutions can solve your specific business challenges 
            and help you achieve your goals.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ justifyContent: "center" }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={handleContactClick}
              endIcon={<ArrowForwardIcon />}
              sx={{
                py: 2,
                px: 4,
                borderRadius: "25px",
                backgroundColor: "white",
                color: "primary.main",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/careers"
              sx={{
                py: 2,
                px: 4,
                borderRadius: "25px",
                borderColor: "white",
                color: "white",
                textTransform: "none",
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Join Our Team
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
