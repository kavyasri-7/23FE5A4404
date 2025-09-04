import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function UrlList({ urls }) {
  const handleCopy = (shortUrl) => {
    navigator.clipboard.writeText(shortUrl);
    alert("Copied to clipboard!");
  };

  if (urls.length === 0) {
    return <Typography>No URLs yet. Add one above!</Typography>;
  }

  return (
    <List sx={{ mt: 2, bgcolor: "#f9f9f9", borderRadius: 2, p: 2 }}>
      {urls.map((link) => {
        const shortUrl = `${window.location.origin}/${link.shortCode}`;
        return (
          <ListItem
            key={link.id}
            divider
            sx={{
              borderRadius: 2,
              mb: 1,
              backgroundColor: "#fff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            }}
          >
            <ListItemText
              primary={
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "#1976d2" }}
                >
                  {shortUrl}
                </Typography>
              }
              secondary={`Original: ${link.originalUrl} | Validity: ${
                link.validity ? link.validity + " mins" : "Unlimited"
              }`}
            />
            <IconButton onClick={() => handleCopy(shortUrl)}>
              <ContentCopyIcon />
            </IconButton>
          </ListItem>
        );
      })}
    </List>
  );
}
