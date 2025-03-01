import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorImage from "../Assets/Images/404.png";

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
        backgroundColor: "#f5f5f5",
        px: 3,
      }}
    >
      {/* Error Illustration */}
      <img
        src={ErrorImage}
        alt="Error"
        style={{ maxWidth: "400px", width: "80%", marginBottom: "20px" }}
      />

      {/* Error Message */}
      <Typography variant="h2" sx={{ fontWeight: "bold", color: "#F14C25" }}>
        Oops! Page Not Found
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
