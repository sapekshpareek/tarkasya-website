"use client";
import { Box, Container, Typography, Grid, Card, CardContent, Button, Stack, Fade, Slide, Divider } from "@mui/material";
import { Work as WorkIcon, People as PeopleIcon, TrendingUp as TrendingUpIcon, AutoAwesome as AutoAwesomeIcon, Support as SupportIcon, ArrowForward as ArrowForwardIcon } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState } from "react";
import Skeleton from "@mui/material/Skeleton";

export default function Careers() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [formLoaded, setFormLoaded] = useState(false);

  return (
    <Box sx={{ backgroundColor: "background.default", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        {/* Page Title */}
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: "#1d2786", letterSpacing: 1 }}>
          Careers at Tarkasya
        </Typography>
        <Typography variant="h5" sx={{ color: "#3b4bc8", mb: 3, fontWeight: 500 }}>
          Join our team and help us build the future of business solutions.
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
          At Tarkasya, we believe in empowering our people to solve real-world problems with creativity and technology. We foster a collaborative, growth-oriented environment where your ideas matter and your work makes a difference. Whether you are a developer, designer, analyst, or strategist, you will find opportunities to learn, grow, and make an impact.
        </Typography>
        <Divider sx={{ my: 4 }} />

        {/* Benefits Section */}
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: "#1d2786" }}>
          Why Work With Us?
        </Typography>
        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6}>
            <Card sx={{ p: 3, borderRadius: 3, border: "1px solid", borderColor: "border.light", height: "100%" }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <PeopleIcon sx={{ fontSize: 40, color: "#1d2786", mr: 2 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>Inclusive Culture</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>We value diversity, open communication, and teamwork.</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ p: 3, borderRadius: 3, border: "1px solid", borderColor: "border.light", height: "100%" }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <TrendingUpIcon sx={{ fontSize: 40, color: "#ff6b35", mr: 2 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>Growth & Learning</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>Continuous learning, mentorship, and career advancement opportunities.</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ p: 3, borderRadius: 3, border: "1px solid", borderColor: "border.light", height: "100%" }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <AutoAwesomeIcon sx={{ fontSize: 40, color: "#3b4bc8", mr: 2 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>Innovation First</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>Work on cutting-edge projects and bring your ideas to life.</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ p: 3, borderRadius: 3, border: "1px solid", borderColor: "border.light", height: "100%" }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <SupportIcon sx={{ fontSize: 40, color: "#10b981", mr: 2 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>Supportive Team</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>We support each other and celebrate our successes together.</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Open Positions Section */}

        {/* <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: "#1d2786" }} id="positions">
          Open Positions
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
          We&apos;re working on exciting opportunities for you to join our team. Please check back soon for job postings!
        </Typography> */}

        {/* Example for future job cards:
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 4, borderRadius: 3, border: "1px solid", borderColor: "border.light" }}>
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                  Frontend Developer
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
                  React, Next.js, MUI
                </Typography>
                <Button variant="contained" color="primary">Apply Now</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid> */}

        <Divider sx={{ my: 4 }} />

        {/* Google Form Section */}
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: "#1d2786" }}>
          Apply Now
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
          Fill out the form below to express your interest in joining Tarkasya. We look forward to hearing from you!
        </Typography>
        {!formLoaded && (
          <Skeleton
            variant="rectangular"
            width="100%"
            height={isMobile ? 2560 : 2160}
            sx={{ borderRadius: 2, mb: 2 }}
            animation="wave"
          />
        )}
        <iframe
          title="Tarkasya Careers Application Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdyKdDBorBDN_xhmuLJCHfWgaCNjPf9CHugPaV-OeJAmc1V-w/viewform?embedded=true"
          width="100%"
          height={isMobile ? 2560 : 2160}
          style={{ border: 0, width: '100%', overflow: 'visible' }}
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          allowFullScreen
          onLoad={() => setFormLoaded(true)}
        >
          Loading…
        </iframe>
      </Container>
    </Box>
  );
} 