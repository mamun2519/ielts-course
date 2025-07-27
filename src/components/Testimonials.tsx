import {
  Avatar,
  Box,
  Card,
  CardContent,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

const Testimonials = ({
  courseData,
  isMobile,
}: {
  courseData: {
    testimonials: {
      name: string;
      profile_image: string;
      description: string;
      testimonial: string;
    }[];
  };
  isMobile: boolean;
}) => {
  return (
    <Paper sx={{ p: 3, mt: 4, mb: 4 }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{ fontWeight: "bold", mb: 3 }}
      >
        শিক্ষার্থীরা যা বলছে
      </Typography>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
        }}
      >
        {courseData.testimonials.map((testimonial, index) => (
          <Card key={index} sx={{ p: 2 }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 2,
                }}
              >
                <Avatar
                  src={testimonial.profile_image}
                  sx={{ width: 40, height: 40 }}
                >
                  {testimonial.name.charAt(0)}
                </Avatar>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="caption" color="primary">
                    {testimonial.description}
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontStyle: "italic" }}
              >
                {testimonial.testimonial}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </Paper>
  );
};

export default Testimonials;
