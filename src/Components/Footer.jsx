import React from "react";
import { Box, Typography, Paper, IconButton, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import bgImage from "../Assets/Images/e-bazaar.png"; // Ensure this image is relevant

const Footer = () => {
  return (
    <Paper
      elevation={10}
      sx={{
        color: "#353543",
        py: 4,
        px: { xs: 3, sm: 6, md: 10 }, // Added balanced padding
        backgroundColor: "#f5f5f5",
      }}
    >
      <Grid container spacing={3} alignItems="center" justifyContent="space-between">
        {/* Left: Logo & Tagline */}
        <Grid item xs={12} md={4} sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "flex-start" } }}>
            <img style={{ width: "80px" }} src={bgImage} alt="E-Bazar Logo" />
            <Typography variant="h6" sx={{ fontWeight: "bold", ml: 1 }}>
              E-Bazar
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ mt: 1, color: "#666" }}>
            Your one-stop online shopping destination.
          </Typography>
        </Grid>

        {/* Center: Quick Links */}
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <Typography variant="h6" fontWeight="bold">
            Quick Links
          </Typography>
          <Box sx={{ mt: 1, display: "flex", flexDirection: "column", gap: 1 }}>
  {[
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shop" },
    { title: "About", path: "/about" },
  ].map((item, index) => (
    <Link
      key={index}
      to={item.path}
      style={{
        textDecoration: "none",
        fontWeight: "600",
        fontSize: "16px",
        color: "#353543",
      }}
    >
      {item.title}
    </Link>
  ))}
</Box>
        </Grid>

        {/* Right: Social Media & Contact Info */}
        <Grid item xs={12} md={4} sx={{ textAlign: { xs: "center", md: "right" } }}>
          <Typography variant="h6" fontWeight="bold">
            Follow Us
          </Typography>
          <Box sx={{ mt: 1, display: "flex", justifyContent: { xs: "center", md: "flex-end" }, gap: 2 }}>
            <IconButton href="https://facebook.com" target="_blank" sx={{ color: "#4267B2" }}>
              <Facebook />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" sx={{ color: "#E4405F" }}>
              <Instagram />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" sx={{ color: "#1DA1F2" }}>
              <Twitter />
            </IconButton>
          </Box>
          <Typography variant="body2" sx={{ mt: 1, color: "#666" }}>
            Contact: support@ebazar.com
          </Typography>
          <Typography variant="body2" sx={{ color: "#666" }}>
            Phone: +1 234 567 890
          </Typography>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Typography
        variant="body2"
        sx={{ mt: 4, textAlign: "center", color: "#aaa" }}
      >
        &copy; {new Date().getFullYear()} E-Bazaar. All Rights Reserved.
      </Typography>
    </Paper>
  );
};

export default Footer;
