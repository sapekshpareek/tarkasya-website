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
            xs: "40rem",
            sm: "50rem",
            md: "50rem",
            lg: "50rem",
            xl: "50rem",
          },
          top: { xs: "18rem", xl: "5rem", lg: '1rem' },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#cfff92",
            // maxHeight: "50vh",
            borderRadius: "20px 20px 0px 0px",
            zIndex: 1,
            position: "absolute",
            top: { xs: "15rem", sm: "20rem", xl: "18rem" , lg:'18rem' , md: '18rem'},
            // left: '50px',
            width: "100%",
            minHeight: "200px",
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
              top: { sm: "-35vh", xs: "-15rem", xl: "-15rem", lg:'-16rem' },
              left: "10%",
              width: "80%",
              minHeight: "200px",
            }}
          >
            <Box sx={{p: '3rem'}}>

              <Typography>Analytics and Reporting</Typography>
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
          bottom: { sm: "-45rem", xs: "-30rem", xl: "-28rem", lg: '-28rem', md: '-45rem' },
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
