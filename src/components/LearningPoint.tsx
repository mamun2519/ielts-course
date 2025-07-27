/* eslint-disable @typescript-eslint/no-explicit-any */
import { CheckCircle } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const LearningPoint = ({
  data,
}: {
  data:
    | {
        values: Array<{
          id: string;
          text: string;
        }>;
      }
    | any;
}) => {
  console.log("LearningPoint component rendered with data:", data);
  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        কোর্সটি করে যা শিখবেন
      </Typography>
      <div>
        {data?.values?.map((point: { id: string; text: string }) => (
          <Box
            key={point.id}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 2,
              mb: 2,
            }}
          >
            <CheckCircle
              sx={{
                color: "#4caf50",
                fontSize: 20,
                mt: 0.5,
                flexShrink: 0,
              }}
            />
            <Typography variant="body2" color="text.secondary">
              {point.text}
            </Typography>
          </Box>
        ))}
      </div>
    </Paper>
  );
};

export default LearningPoint;
