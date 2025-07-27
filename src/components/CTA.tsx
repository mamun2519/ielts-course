import { FavoriteBorder } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";

const CTA = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 2,
          flexWrap: "wrap",
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h4"}
          component="span"
          sx={{ fontWeight: "bold" }}
        >
          ৳১,০০০
        </Typography>
        <Typography
          variant="h6"
          component="span"
          sx={{
            textDecoration: "line-through",
            color: "text.secondary",
          }}
        >
          ৳৩,৫০০
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#4caf50", fontWeight: "bold" }}
        >
          29% off!
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#e91e63",
            "&:hover": { bgcolor: "#c2185b" },
            py: 1.5,
          }}
        >
          কোর্সটি কিনুন
        </Button>
        <IconButton sx={{ border: 1, borderColor: "divider" }}>
          <FavoriteBorder />
        </IconButton>
      </Box>
      <Typography variant="body2" color="text.secondary">
        🛡️ 14 day money back guarantee
      </Typography>
    </Box>
  );
};

export default CTA;
