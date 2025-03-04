import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorImage from "../Assets/Images/404Page.png";

export default function Error() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        backgroundColor: "beige",
        px: 3,
      }}
    >
      {/* Error Illustration */}
      <img
        src={ErrorImage}
        alt="Alt message is changed"
        style={{ maxWidth: "400px", width: "100%", marginBottom: "20px" }}
      />

      {/* Error Message */}
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#F14C25" }}>
      This Page is Out of Stock – But Our Homepage Isn’t!
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "#555", fontSize: "18px", mt: 2, mb: 4, maxWidth: "600px" }}
      >
        The page you are looking for doesn’t exist or has been moved.
      </Typography>

      {/* Back to Home Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#F14C25",
          color: "#fff",
          fontWeight: "bold",
          px: 4,
          py: 1.5,
          textTransform: "uppercase",
          "&:hover": { backgroundColor: "#E65100" },
        }}
        onClick={() => navigate("/")}
      >
        Go Home
      </Button>
    </Box>
  );
}
