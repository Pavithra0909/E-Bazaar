import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import banner1 from "../Assets/Images/banner1.jpg"; // Ensure this path is correct

const Banner = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 6 },
        backgroundImage: `url(${banner1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        boxShadow: "0px 10px 25px rgba(0,0,0,0.15)", // Soft glow effect
        animation: "fadeIn 1.2s ease-in-out",
        "@keyframes fadeIn": {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      {/* Dark overlay for better readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)", // Dark overlay
          zIndex: 1,
        }}
      />

      <Container sx={{ position: "relative", zIndex: 2, textAlign: "left", maxWidth: "lg" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "2px",
            mb: 2,
          }}
        >
          Welcome to <span style={{ color: "#F14C25" }}>E-Bazaar</span>
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 3,
            fontSize: { xs: "32px", md: "42px" },
            textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
          }}
        >
          The Future of <span style={{ color: "#F14C25" }}>Online Shopping</span>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: "18px",
            maxWidth: "700px",
            lineHeight: "1.8",
            mb: 4,
          }}
        >
          Explore the best deals in fashion, electronics, and more. Shop with ease and 
          enjoy exclusive discounts like never before!
        </Typography>

        {/* Call to Action Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#F14C25",
            color: "#fff",
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            textTransform: "uppercase",
            "&:hover": {
              backgroundColor: "#E65100",
              color: "#fff",
            },
          }}
          onClick={() => navigate("/shop")} // Navigate to Shop Page
        >
          Start Shopping
        </Button>
      </Container>
    </Box>
  );
};

export default Banner;
