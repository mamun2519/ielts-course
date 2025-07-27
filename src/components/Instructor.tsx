import { Person } from "@mui/icons-material";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import React from "react";
import parse from "html-react-parser";

const Instructor = ({
  instructor,
  isMobile,
}: {
  instructor: {
    values: Array<{
      image: string;
      name: string;
      short_description: string;
      description: string;
    }>;
  };
  isMobile: boolean | undefined;
}) => {
  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        কোর্স ইন্সট্রাক্টর
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          flexWrap: isMobile ? "wrap" : "nowrap",
        }}
      >
        <Avatar
          src={instructor?.values[0]?.image}
          sx={{ width: 50, height: 50 }}
        >
          <Person />
        </Avatar>
        <Box>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {instructor?.values[0]?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {instructor?.values[0]?.short_description}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {parse(instructor?.values[0]?.description)}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default Instructor;
