import {
  Assignment,
  EmojiEvents,
  Language,
  Schedule,
} from "@mui/icons-material";
import { Paper, Typography } from "@mui/material";
import React from "react";

const Features = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <Paper sx={{ p: 3, mt: 4 }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{ fontWeight: "bold", mb: 2 }}
      >
        Features
      </Typography>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "24px",
        }}
      >
        <div style={{ textAlign: "center", padding: "16px" }}>
          <Language sx={{ fontSize: 40, color: "#1976d2", mb: 1 }} />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Multi-Language
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Available in Bengali & English
          </Typography>
        </div>
        <div style={{ textAlign: "center", padding: "16px" }}>
          <EmojiEvents sx={{ fontSize: 40, color: "#ff9800", mb: 1 }} />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Certificate
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Industry recognized certificate
          </Typography>
        </div>
        <div style={{ textAlign: "center", padding: "16px" }}>
          <Schedule sx={{ fontSize: 40, color: "#4caf50", mb: 1 }} />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Lifetime Access
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Learn at your own pace
          </Typography>
        </div>
        <div style={{ textAlign: "center", padding: "16px" }}>
          <Assignment sx={{ fontSize: 40, color: "#e91e63", mb: 1 }} />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Mock Tests
          </Typography>
          <Typography variant="body2" color="text.secondary">
            20 practice tests included
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default Features;
