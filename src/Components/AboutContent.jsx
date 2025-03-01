import { Box, Typography } from "@mui/material";
import React from "react";
import About1 from "../Assets/Images/bg8.jpg";

export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: { xs: 2, md: 4 } }}>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          overflow: "hidden",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)", // Soft shadow
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            width: { xs: "70%", md: "45%" },
            height: "auto",
          }}
        >
          <img
            src={About1}
            alt="About Us"
            style={{
              width: "70%",
              height: "70%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Text Content Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "55%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: { xs: 3, md: 5 },
          }}
        >
          <Box sx={{ textAlign: "justify", maxWidth: "600px" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "30px", md: "36px" },
                color: "#212121",
                mb: 1,
                textTransform: "uppercase",
              }}
            >
              About <span style={{ color: "#F14C25" }}>Us</span>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "18px", md: "22px" },
                color: "#F14C25",
                mb: 2,
              }}
            >
              Empowering Your Shopping Experience
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                color: "#555",
                lineHeight: "1.6",
                mb: 2,
              }}
            >
              At <strong style={{ color: "#F14C25" }}>E-Bazaar</strong>, we are dedicated to transforming 
              the way you shop online. Our platform offers a <b>wide selection of products,</b> 
              <b>amazing discounts,</b> and <b>lightning-fast delivery.</b>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                color: "#555",
                lineHeight: "1.6",
                fontWeight: "400",
              }}
            >
              Whether it's <strong style={{ color: "#F14C25" }}>fashion</strong>, <strong style={{ color: "#F14C25" }}>electronics</strong>, 
              or <strong style={{ color: "#F14C25" }}>home essentials</strong>, we've got you covered. 
              Enjoy seamless shopping with <b>secure payments</b> and top-tier customer support.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
