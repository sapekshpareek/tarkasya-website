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
  People as PeopleIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
} from "@mui/icons-material";
import React from "react";

const stats = [
  {
    icon: <TrendingUpIcon sx={{ fontSize: 40, color: "white" }} />,
    value: "500+",
    label: "Projects Completed",
    description: "Successfully delivered solutions across various industries",
    color: "#1d2786"
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 40, color: "white" }} />,
    value: "50+",
    label: "Happy Clients",
    description: "Businesses that trust us with their digital transformation",
    color: "#3b4bc8"
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 40, color: "white" }} />,
    value: "99.9%",
    label: "Uptime",
    description: "Reliable infrastructure ensuring your business continuity",
    color: "#ff6b35"
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40, color: "white" }} />,
    value: "100%",
    label: "Secure",
    description: "Bank-level security protocols protecting your data",
    color: "#10b981"
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
    icon: <SecurityIcon sx={{ fontSize: 32, color: "primary.main" }} />,
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
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
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
              Our Impact
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
              Numbers that speak for themselves. We've helped businesses achieve 
              remarkable results through our innovative solutions.
            </Typography>
          </Fade>
        </Box>

        {/* Stats Grid */}
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Slide direction="up" in timeout={600 + index * 200}>
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
                      borderColor: stat.color,
                    },
                  }}
                >
                  <CardContent sx={{ p: 0, textAlign: "center" }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        backgroundColor: stat.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 3,
                        boxShadow: `0 8px 25px ${stat.color}40`,
                      }}
                    >
                      {stat.icon}
                    </Box>
                    
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: 800,
                        mb: 1,
                        color: "text.primary",
                        fontSize: { xs: "2.5rem", md: "3rem" },
                      }}
                    >
                      {stat.value}
                    </Typography>
                    
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: stat.color,
                      }}
                    >
                      {stat.label}
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.6,
                      }}
                    >
                      {stat.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>

        {/* Additional Info */}
        <Box sx={{ mt: { xs: 4, md: 6 }, textAlign: "center" }}>
          <Fade in timeout={1200}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: "text.primary",
              }}
            >
              Ready to Join Our Success Stories?
            </Typography>
          </Fade>
          <Fade in timeout={1400}>
            <Typography
              variant="h6"
              sx={{
                color: "text.secondary",
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Let's discuss how we can help you achieve similar results and 
              transform your business challenges into opportunities.
            </Typography>
          </Fade>
        </Box>
      </Container>
    </Box>
  );
}
