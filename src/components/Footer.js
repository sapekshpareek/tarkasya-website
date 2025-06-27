"use client";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  Button,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import React from "react";

const footerLinks = {
  services: [
    { name: "Inventory Management", href: "#services" },
    { name: "Website Development", href: "#services" },
    { name: "Data Extraction", href: "#services" },
    { name: "Business Automation", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Status", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR", href: "#" },
  ],
};

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <LinkedInIcon />,
    href: "https://linkedin.com/company/tarkasya",
    color: "#0077b5",
  },
  {
    name: "Twitter",
    icon: <TwitterIcon />,
    href: "https://twitter.com/tarkasya",
    color: "#1da1f2",
  },
  {
    name: "GitHub",
    icon: <GitHubIcon />,
    href: "https://github.com/tarkasya",
    color: "#333",
  },
];

export default function Footer() {
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
      id="contact"
      sx={{
        backgroundColor: "background.dark",
        color: "white",
        pt: { xs: 6, md: 8 },
        pb: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Grid container spacing={4} sx={{ mb: { xs: 4, md: 6 } }}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: { xs: 3, md: 0 } }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: "white",
                }}
              >
                Tarkasya
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  mb: 3,
                  fontStyle: "italic",
                }}
              >
                Your Problem, Our Product
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  lineHeight: 1.6,
                  mb: 3,
                }}
              >
                We transform business challenges into opportunities with comprehensive 
                solutions in inventory management, website development, and data extraction.
              </Typography>
              
              {/* Contact Info */}
              <Stack spacing={2}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <EmailIcon sx={{ mr: 2, color: "#ff6b35" }} />
                  <Link
                    href="mailto:hello@tarkasya.com"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      textDecoration: "none",
                      "&:hover": {
                        color: "#ff6b35",
                      },
                    }}
                  >
                    hello@tarkasya.com
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <PhoneIcon sx={{ mr: 2, color: "#ff6b35" }} />
                  <Link
                    href="tel:+1234567890"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      textDecoration: "none",
                      "&:hover": {
                        color: "#ff6b35",
                      },
                    }}
                  >
                    +1 (234) 567-890
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocationIcon sx={{ mr: 2, color: "#ff6b35" }} />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    Global - Remote First
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>

          {/* Footer Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: "white",
              }}
            >
              Services
            </Typography>
            <Stack spacing={2}>
              {footerLinks.services.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#ff6b35",
                    },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: "white",
              }}
            >
              Company
            </Typography>
            <Stack spacing={2}>
              {footerLinks.company.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#ff6b35",
                    },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: "white",
              }}
            >
              Support
            </Typography>
            <Stack spacing={2}>
              {footerLinks.support.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#ff6b35",
                    },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: "white",
              }}
            >
              Legal
            </Typography>
            <Stack spacing={2}>
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#ff6b35",
                    },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* CTA Section */}
        <Box
          sx={{
            textAlign: "center",
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            background: "linear-gradient(135deg, rgba(29, 39, 134, 0.1) 0%, rgba(59, 75, 200, 0.1) 100%)",
            border: "1px solid rgba(29, 39, 134, 0.2)",
            mb: { xs: 4, md: 6 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: "white",
            }}
          >
            Ready to Transform Your Business?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              mb: 3,
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Let's discuss how our solutions can solve your specific challenges and drive your business forward.
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
                background: "linear-gradient(135deg, #ff6b35 0%, #ff8a5c 100%)",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  background: "linear-gradient(135deg, #ff8a5c 0%, #ff6b35 100%)",
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
                borderColor: "rgba(255, 255, 255, 0.3)",
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

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)", mb: 4 }} />

        {/* Bottom Footer */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 2,
          }}
        >
          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255, 255, 255, 0.6)",
            }}
          >
            © {new Date().getFullYear()} Tarkasya. All rights reserved.
          </Typography>

          {/* Social Links */}
          <Stack direction="row" spacing={2}>
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "rgba(255, 255, 255, 0.8)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: social.color,
                    color: "white",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {social.icon}
              </Link>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
