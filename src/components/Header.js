"use client";
import {
  AppBar,
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import React, { useState } from "react";

const navigation = [
  { name: "HOME", href: "#hero" },
  { name: "SERVICES", href: "#services" },
  { name: "ABOUT", href: "#about" },
  { name: "CAREERS", href: "/careers" },
  { name: "CONTACT", href: "#contact" },
];

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 900, 
            color: "primary.main",
            fontSize: { xs: "1.5rem", sm: "1.75rem" },
            letterSpacing: "1px",
          }}
        >
          TARKASYA
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navigation.map((item) => (
          <ListItem
            key={item.name}
            onClick={() => handleNavClick(item.href)}
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(29, 39, 134, 0.1)",
              },
            }}
          >
            <ListItemText
              primary={item.name}
              sx={{
                "& .MuiListItemText-primary": {
                  fontWeight: 600,
                  color: "text.primary",
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid",
            borderColor: "border.light",
            boxShadow: "0 2px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                py: 2,
              }}
            >
              {/* Logo Text */}
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem" },
                  background: "linear-gradient(135deg, #1d2786 0%, #3b4bc8 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  letterSpacing: "1px",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
                onClick={() => handleNavClick("#hero")}
              >
                TARKASYA
              </Typography>

              {/* Desktop Navigation */}
              {!isMobile && (
                <Stack direction="row" spacing={1}>
                  {navigation.map((item) => (
                    <Button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      sx={{
                        color: "text.primary",
                        fontWeight: 600,
                        textTransform: "none",
                        px: 2,
                        py: 1,
                        borderRadius: "20px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(29, 39, 134, 0.1)",
                          color: "primary.main",
                          transform: "translateY(-1px)",
                        },
                      }}
                    >
                      {item.name}
                    </Button>
                  ))}
                </Stack>
              )}

              {/* Mobile Menu Button */}
              {isMobile && (
                <IconButton
                  onClick={handleDrawerToggle}
                  sx={{
                    color: "text.primary",
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
