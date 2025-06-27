"use client";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  MenuItem,
  Button,
  Typography,
  Drawer,
  Link,
  IconButton,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
// import Link from "next/link";

const menuItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleMenuClick = (href) => {
    setOpen(false);
    if (href.startsWith('/')) {
      // External page navigation
      window.location.href = href;
    } else {
      // Smooth scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid",
        borderColor: "rgba(29, 39, 134, 0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.98)",
        },
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          variant="regular"
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            minHeight: { xs: "64px", md: "80px" },
            px: { xs: 1, sm: 2 },
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              href="/"
              sx={{
                p: 0,
                minWidth: "auto",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <img
                src="/Logo/Tarkasya Logo Blue.png"
                alt="Tarkasya Logo"
                style={{
                  height: "40px",
                  width: "auto",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              />
            </Button>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            {menuItems.map((item) => (
              <MenuItem key={item.label} sx={{ py: 1 }}>
                <Typography
                  component="button"
                  onClick={() => handleMenuClick(item.href)}
                  sx={{
                    color: "text.primary",
                    fontSize: "1rem",
                    fontWeight: 500,
                    textTransform: "none",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {item.label}
                </Typography>
              </MenuItem>
            ))}
            <Button
              variant="contained"
              component="a"
              href="#contact"
              sx={{
                ml: 2,
                px: 3,
                py: 1.5,
                borderRadius: "25px",
                fontWeight: 600,
                textTransform: "none",
                background: "linear-gradient(135deg, #1d2786 0%, #3b4bc8 100%)",
                boxShadow: "0 4px 12px rgba(29, 39, 134, 0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(29, 39, 134, 0.4)",
                  background: "linear-gradient(135deg, #3b4bc8 0%, #1d2786 100%)",
                },
              }}
            >
              Get Started
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              onClick={toggleDrawer(true)}
              sx={{
                color: "primary.main",
                p: 1,
                "&:hover": {
                  backgroundColor: "rgba(29, 39, 134, 0.1)",
                },
              }}
              aria-label="Open menu"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>

          {/* Mobile Drawer */}
          <Drawer
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
            PaperProps={{
              sx: {
                width: { xs: "100vw", sm: "320px" },
                backgroundColor: "background.paper",
                borderLeft: "1px solid",
                borderColor: "divider",
              },
            }}
          >
            <Box
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              {/* Close Button */}
              <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3 }}>
                <IconButton
                  onClick={toggleDrawer(false)}
                  sx={{
                    color: "text.primary",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                    },
                  }}
                  aria-label="Close menu"
                >
                  <CloseIcon />
                </IconButton>
              </Box>

              {/* Mobile Menu Items */}
              <Box sx={{ flex: 1 }}>
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.label}
                    onClick={() => handleMenuClick(item.href)}
                    sx={{
                      py: 2,
                      borderBottom: "1px solid",
                      borderColor: "divider",
                      "&:last-child": {
                        borderBottom: "none",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1.125rem",
                        fontWeight: 500,
                        color: "text.primary",
                        textTransform: "none",
                      }}
                    >
                      {item.label}
                    </Typography>
                  </MenuItem>
                ))}
              </Box>

              {/* Mobile CTA Button */}
              <Box sx={{ mt: 3 }}>
                <Button
                  variant="contained"
                  component="a"
                  href="#contact"
                  fullWidth
                  sx={{
                    py: 2,
                    borderRadius: "25px",
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "1.125rem",
                    background: "linear-gradient(135deg, #1d2786 0%, #3b4bc8 100%)",
                    boxShadow: "0 4px 12px rgba(29, 39, 134, 0.3)",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 20px rgba(29, 39, 134, 0.4)",
                      background: "linear-gradient(135deg, #3b4bc8 0%, #1d2786 100%)",
                    },
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
