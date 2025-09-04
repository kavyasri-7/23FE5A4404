import React, { useState } from "react";
import { Container, Typography, Paper, Box } from "@mui/material";
import UrlShortenerForm from "./components/UrlShortenerForm";
import UrlList from "./components/UrlList";
import "./App.css"; // if you want external css

export default function App() {
  const [urls, setUrls] = useState([]);

  const handleAdd = (newLink) => {
    setUrls([...urls, newLink]);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
          background: "linear-gradient(135deg, #f0f4ff, #ffffff)",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#1976d2" }}
        >
          🔗 URL Shortener
        </Typography>

        <UrlShortenerForm onAdd={handleAdd} />

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            Your Shortened Links
          </Typography>
          <UrlList urls={urls} />
        </Box>
      </Paper>
    </Container>
  );
}
