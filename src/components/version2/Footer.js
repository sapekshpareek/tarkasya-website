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
          backgroundColor: "#cfff92",
          maxHeight: "100vh",
          borderRadius: "20px 20px 0px 0px",
        }}
      >
        <Container
          sx={{
            backgroundColor: "#063b26",
            minHeight: "50vh",
            borderRadius: "20px",
            color: "#ffffff",
          }}
        >
          sdfsdfsdfsddf
        </Container>
      </Box>
      <Box
        id="footer"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: { xs: 10, sm: 8 },
          gap: { xs: 4, sm: 8 },
          // position: "fixed",
          // bottom: 0,
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
