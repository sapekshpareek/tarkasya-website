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
  colors,
  ThemeProvider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
// import Link from "next/link";

const logoStyle = {
  width: "140px",
  height: "auto",
  cursor: "pointer",
};

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        color: "black",
        mt: 2,
        // ml: 2,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          variant="regular"
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              ml: "-30px",
              px: 0,
            }}
          >
            <Button href="/">
            <img
              src={
                "https://res.cloudinary.com/daw4ojh5s/image/upload/v1718300801/logo-no-background_kzosvv.png"
              }
              style={logoStyle}
              />
              </Button>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <MenuItem>
              <Typography>About</Typography>
            </MenuItem>
            <MenuItem>
              <Typography>Contact</Typography>
            </MenuItem>
            <Button
              variant="contained"
              component="a"
              href="https://yardstick.live"
              target="_blank"
              sx={[
                {
                  bgcolor: "#063b26",
                  borderRadius: "20px",
                  padding: "8px 15px",
                },
                (theme) => ({
                  "&:hover": {
                    bgcolor: "#1e4e3b",
                  },
                }),
              ]}
            >
              Yardstick
            </Button>
          </Box>
          <Box sx={{ display: { sm: "", md: "none" } }}>
            <Button
              variant="text"
              size="large"
              onClick={toggleDrawer(true)}
              sx={{ minWidth: "0px", p: "0px", mt: "-20px", color: "#063b26" }}
            >
              <MenuIcon fontSize="large" />
            </Button>
            <Drawer
              anchor="right"
              open={open}
              onClose={toggleDrawer(false)}
              sx={{ color: "success" }}
            >
              <Box
                alignContent="center"
                alignItems="center"
                sx={{
                  minWidth: "80dvw",
                  p: 2,
                  color: "#000000",
                }}
              >
                <MenuItem>
                  <Button sx={{ color: "#000000", fontSize: "18px" }}>
                    about
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button sx={{ color: "#000000", fontSize: "18px" }}>
                    Contact
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    variant="contained"
                    component="a"
                    href="https://yardstick.live"
                    target="_blank"
                    sx={[
                      {
                        bgcolor: "#063b26",
                        //   borderRadius: "20px",

                        padding: "8px 15px",
                      },
                      (theme) => ({
                        "&:hover": {
                          bgcolor: "#1e4e3b",
                        },
                      }),
                    ]}
                  >
                    Yardstick
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
