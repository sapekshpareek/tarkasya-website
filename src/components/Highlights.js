"use client";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
} from "@mui/material";
import {
  TrendingUp as TrendingUpIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  Support as SupportIcon,
  Business as BusinessIcon,
  Code as CodeIcon,
  DataUsage as DataIcon,
  Inventory as InventoryIcon,
} from "@mui/icons-material";
import React from "react";

const stats = [
  {
    icon: <BusinessIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    number: "500+",
    label: "Businesses Served",
    description: "From startups to enterprises",
    color: "primary.main"
  },
  {
    icon: <CodeIcon sx={{ fontSize: 40, color: "secondary.main" }} />,
    number: "200+",
    label: "Websites Built",
    description: "Modern, responsive solutions",
    color: "secondary.main"
  },
  {
    icon: <DataIcon sx={{ fontSize: 40, color: "accent.mint" }} />,
    number: "1M+",
    label: "Data Points Extracted",
    description: "Automated data collection",
    color: "accent.mint"
  },
  {
    icon: <InventoryIcon sx={{ fontSize: 40, color: "accent.yellow" }} />,
    number: "50+",
    label: "Inventory Systems",
    description: "Streamlined operations",
    color: "accent.yellow"
  }
];

const benefits = [
  {
    icon: <TrendingUpIcon sx={{ fontSize: 32, color: "primary.main" }} />,
    title: "Increased Efficiency",
    description: "Our solutions help businesses save up to 40% of operational time through automation and streamlined processes.",
    metric: "40%"
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 32, color: "primary.main" }} />,
    title: "Faster Implementation",
    description: "Get your solutions up and running in weeks, not months, with our rapid deployment approach.",
    metric: "2-4 weeks"
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 32, color: "primary.main" }} />,
    title: "Enterprise Security",
    description: "Bank-level security protocols ensure your data is always protected and compliant with industry standards.",
    metric: "99.9%"
  },
  {
    icon: <SupportIcon sx={{ fontSize: 32, color: "primary.main" }} />,
    title: "24/7 Support",
    description: "Round-the-clock technical support ensures you never face challenges alone in your digital transformation journey.",
    metric: "24/7"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Operations Manager",
    company: "TechStart Inc.",
    content: "Tarkasya's inventory management solution transformed our operations. We reduced stockouts by 60% and improved our order fulfillment time significantly.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "E-Commerce Plus",
    content: "The website they built for us increased our conversion rate by 35%. The team was professional, responsive, and delivered exactly what we needed.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Data Analyst",
    company: "Market Insights Co.",
    content: "Their data extraction service saved us countless hours of manual work. The automated reports are accurate and delivered on time, every time.",
    rating: 5
  }
];

export default function Highlights() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        {/* Stats Section */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Fade in timeout={800}>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                fontWeight: 700,
                mb: 6,
                background: "linear-gradient(135deg, #1d2786 0%, #3b4bc8 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Our Impact
            </Typography>
          </Fade>
          
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Slide direction="up" in timeout={600 + index * 200}>
                  <Card
                    sx={{
                      textAlign: "center",
                      p: 4,
                      height: "100%",
                      borderRadius: 3,
                      border: "1px solid",
                      borderColor: "border.light",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                        borderColor: stat.color,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        backgroundColor: `${stat.color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 3,
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: 700,
                        color: stat.color,
                        mb: 1,
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        color: "text.primary",
                      }}
                    >
                      {stat.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                      }}
                    >
                      {stat.description}
                    </Typography>
                  </Card>
                </Slide>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Benefits Section */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 6,
              fontWeight: 600,
              color: "text.primary",
            }}
          >
            Why Businesses Choose Us
          </Typography>
          
          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Fade in timeout={600 + index * 200}>
                  <Card
                    sx={{
                      p: 4,
                      height: "100%",
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
                    <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          backgroundColor: "primary.main",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mr: 3,
                          flexShrink: 0,
                        }}
                      >
                        {benefit.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 600,
                            mb: 1,
                            color: "text.primary",
                          }}
                        >
                          {benefit.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "text.secondary",
                            lineHeight: 1.6,
                          }}
                        >
                          {benefit.description}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "inline-block",
                        px: 3,
                        py: 1,
                        backgroundColor: "primary.main",
                        color: "white",
                        borderRadius: "20px",
                        fontWeight: 600,
                      }}
                    >
                      {benefit.metric}
                    </Box>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Testimonials Section */}
        <Box>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 6,
              fontWeight: 600,
              color: "text.primary",
            }}
          >
            What Our Clients Say
          </Typography>
          
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Slide direction="up" in timeout={600 + index * 200}>
                  <Card
                    sx={{
                      p: 4,
                      height: "100%",
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
                    <Box sx={{ mb: 3 }}>
                      <Stack direction="row" spacing={0.5}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Box
                            key={i}
                            sx={{
                              color: "#ffd700",
                              fontSize: "1.2rem",
                            }}
                          >
                            ⭐
                          </Box>
                        ))}
                      </Stack>
                    </Box>
                    
                    <Typography
                      variant="body1"
                      sx={{
                        fontStyle: "italic",
                        lineHeight: 1.6,
                        mb: 3,
                        color: "text.secondary",
                      }}
                    >
                      "{testimonial.content}"
                    </Typography>
                    
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 0.5,
                          color: "text.primary",
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          fontWeight: 500,
                        }}
                      >
                        {testimonial.role}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "primary.main",
                          fontWeight: 600,
                        }}
                      >
                        {testimonial.company}
                      </Typography>
                    </Box>
                  </Card>
                </Slide>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
