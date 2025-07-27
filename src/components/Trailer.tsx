import { PlayArrow } from "@mui/icons-material";
import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";

const Trailer = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <CardMedia
        component="img"
        height={isMobile ? "180" : "200"}
        image="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
        alt="Course trailer"
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(0, 0, 0, 0.3)",
          cursor: "pointer",
          "&:hover": {
            bgcolor: "rgba(0, 0, 0, 0.4)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "white",
          }}
        >
          <Box
            sx={{
              width: 48,
              height: 48,
              bgcolor: "rgba(255, 255, 255, 0.2)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PlayArrow />
          </Box>
          <Typography variant="body1" sx={{ fontWeight: "medium" }}>
            Watch Trailer
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Trailer;
