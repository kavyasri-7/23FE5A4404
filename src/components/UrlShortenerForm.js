import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

export default function UrlShortenerForm({ onAdd }) {
  const [url, setUrl] = useState("");
  const [shortCode, setShortCode] = useState("");
  const [validity, setValidity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) return;

    const newLink = {
      id: Date.now(),
      originalUrl: url,
      shortCode: shortCode || Math.random().toString(36).substring(2, 7),
      validity: validity || "Unlimited",
    };

    onAdd(newLink);
    setUrl("");
    setShortCode("");
    setValidity("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        justifyContent: "center",
        mt: 2,
      }}
    >
      <TextField
        label="Enter URL"
        required
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        fullWidth
      />
      <TextField
        label="Custom Short Code (optional)"
        value={shortCode}
        onChange={(e) => setShortCode(e.target.value)}
      />
      <TextField
        label="Validity (minutes)"
        type="number"
        value={validity}
        onChange={(e) => setValidity(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Shorten
      </Button>
    </Box>
  );
}
