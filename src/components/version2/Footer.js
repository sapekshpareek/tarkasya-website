import {
  Container,
  Typography,
  Box,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import { McLaren } from "next/font/google";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const logoStyle = {
  width: "140px",
  height: "auto",
};

export default function Footer() {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          minHeight: {
            xs: "55rem",
            sm: "60rem",
            md: "50rem",
            lg: "50rem",
            xl: "50rem",
          },
          // bgcolor: "red",
          top: { xs: "18rem", xl: "5rem", lg: "0rem" },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#cfff92",
            // maxHeight: "50vh",
            borderRadius: "20px 20px 0px 0px",
            zIndex: 1,
            position: "absolute",
            top: {
              xs: "20rem",
              sm: "20rem",
              xl: "18rem",
              lg: "18rem",
              md: "18rem",
            },
            // left: '50px',
            width: "100%",
            minHeight: { xs: "22rem", sm: "24rem", md: '200px' },
          }}
        >
          <Box
            sx={{
              backgroundColor: "#063b26",
              // minHeight: "60vh",
              borderRadius: "20px",
              color: "#ffffff",
              zIndex: 2,
              position: "absolute",
              top: { sm: "-35vh", xs: "-18rem", xl: "-15rem", lg: "-14rem" },
              left: "10%",
              width: "80%",
              minHeight: "200px",
            }}
          >
            <Box
              sx={{
                p: "3rem",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  minWidth: { xs: "100%", sm: "60%" },
                  // maxWidth: { lg: "50%" },
                }}
              >
                <Box>
                  <Typography mb={4}>Analytics and Reporting</Typography>
                  <Typography variant="h3" sx={{ fontWeight: 550 }}>
                    Grow Business With <br />
                    Just Few Clicks!
                  </Typography>
                  <Typography sx={{ mt: 4 }}>
                    Grow Business With <br />
                    Just Few Clicks!
                  </Typography>
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    component="a"
                    href="#"
                    target="_blank"
                    sx={{
                      color: "#063b26",
                      bgcolor: "#ffffff",
                      borderRadius: "20px",
                      padding: "8px 15px",
                      fontWeight: "500",
                    }}
                  >
                    Book a Demo
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  // flexDirection: "column",
                  minHeight: "80%",
                  minWidth: "40%",
                  bgcolor: "#afafaf",
                  borderRadius: "20px",
                  textAlign: "center",
                  color: "#000000",
                  alignItems: "center",
                }}
              >
                <Typography variant="h3">Image to be placed here!</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        id="footer"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: { xs: 10, sm: 8 },
          gap: { xs: 4, sm: 8 },
          position: "absolute",
          bottom: {
            sm: "-50rem",
            xs: "-45rem",
            xl: "-28rem",
            lg: "-28rem",
            md: "-45rem",
          },
          zIndex: 0,
          width: "100%",
          backgroundColor: "#cfff92",
          // borderRadius: "20px 20px 0px 0px",
          // textAlign: { sm: "center", md: "left" },
          textAlign: "left",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            // width: "72%",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              // alignItems: { xs: "center" },
              // alignSelf: "center",
              color: "#063b26",
              minWidth: { xs: "100%", sm: "60%" },
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "60%" },
                // ml: "14px",
                // alignContent: "center",
                // alignItems: "center",
                // alignSelf: "center",
                // justifyContent: "center",
                // justifyItems: "center",
              }}
            >
              <Box>
                <img
                  src={
                    "https://res.cloudinary.com/daw4ojh5s/image/upload/v1718300801/logo-no-background_kzosvv.png"
                  }
                  style={logoStyle}
                  alt="logo of company"
                />
              </Box>
              <Typography
                variant="body2"
                fontWeight={500}
                gutterBottom
                sx={{ mt: 2 }}
              >
                Transforming Conversations into Conversions.
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 2 }}>
                <IconButton color="inherit" href="#" aria-label="Facebook">
                  <FacebookIcon />
                </IconButton>

                <IconButton
                  color="inherit"
                  href="https://linkedin.com/company/yardsticklive"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </IconButton>

                <IconButton color="inherit" href="#" aria-label="Instagram">
                  <InstagramIcon />
                </IconButton>

                <IconButton color="inherit" href="#" aria-label="X">
                  <XIcon />
                </IconButton>
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="body2" fontWeight={600}>
              Product
            </Typography>
            <Typography sx={{ mt: 2 }}>Featuers</Typography>
            <Typography sx={{ mt: 2 }}>Integrations</Typography>
            <Typography sx={{ mt: 2 }}>Pricing</Typography>
            <Typography sx={{ mt: 2 }}>Contact</Typography>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="body2" fontWeight={600}>
              Company
            </Typography>
            <Typography sx={{ mt: 2 }}>About</Typography>
            <Typography sx={{ mt: 2 }}>Blogs</Typography>
            <Typography sx={{ mt: 2 }}>Contact 02</Typography>
            <Typography sx={{ mt: 2 }}>Blog Details</Typography>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="body2" fontWeight={600}>
              Company
            </Typography>
            <Typography sx={{ mt: 2 }}>Privacy</Typography>
            <Typography sx={{ mt: 2 }}>Condition</Typography>
            <Typography sx={{ mt: 2 }}>FAQs</Typography>
            <Typography sx={{ mt: 2 }}>Terms</Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
