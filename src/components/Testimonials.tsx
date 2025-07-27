import { EmojiEvents } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Paper,
  Rating,
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
    //     <Paper sx={{ p: 3, mt: 4, mb: 4 }}>
    //       <Typography
    //         variant="h5"
    //         component="h2"
    //         sx={{ fontWeight: "bold", mb: 3 }}
    //       >
    //         শিক্ষার্থীরা যা বলছে
    //       </Typography>
    //       <div
    //         style={{
    //           display: "grid",
    //           gridTemplateColumns: isMobile
    //             ? "1fr"
    //             : "repeat(auto-fit, minmax(300px, 1fr))",
    //           gap: "24px",
    //         }}
    //       >
    //         {courseData.testimonials.map((testimonial, index) => (
    //           <Card key={index} sx={{ p: 2 }}>
    //             <CardContent>
    //               <Box
    //                 sx={{
    //                   display: "flex",
    //                   alignItems: "center",
    //                   gap: 2,
    //                   mb: 2,
    //                 }}
    //               >
    //                 <Avatar
    //                   src={testimonial.profile_image}
    //                   sx={{ width: 40, height: 40 }}
    //                 >
    //                   {testimonial.name.charAt(0)}
    //                 </Avatar>
    //                 <Box>
    //                   <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
    //                     {testimonial.name}
    //                   </Typography>
    //                   <Typography variant="caption" color="primary">
    //                     {testimonial.description}
    //                   </Typography>
    //                 </Box>
    //               </Box>
    //               <Typography
    //                 variant="body2"
    //                 color="text.secondary"
    //                 sx={{ fontStyle: "italic" }}
    //               >
    //                 {testimonial.testimonial}
    //               </Typography>
    //             </CardContent>
    //           </Card>
    //         ))}
    //       </div>
    //     </Paper>
    <Paper
      sx={{
        p: 4,
        mt: 4,
        mb: 4,
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", mb: 2, color: "#1976d2" }}
        >
          শিক্ষার্থীরা যা বলছে
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: "600px", mx: "auto" }}
        >
          আমাদের কোর্সে অংশগ্রহণকারী শিক্ষার্থীদের সফলতার গল্প এবং অভিজ্ঞতা
        </Typography>
      </Box>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "24px",
        }}
      >
        {courseData.testimonials.map((testimonial, index) => (
          <Card
            key={index}
            sx={{
              p: 3,
              height: "100%",
              background: "white",
              borderRadius: "16px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "visible",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.15)",
              },
            }}
          >
            {/* Quote Icon */}
            <Box
              sx={{
                position: "absolute",
                top: -12,
                right: 20,
                width: 40,
                height: 40,
                bgcolor: "#4caf50",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(76, 175, 80, 0.3)",
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: "white", fontFamily: "serif", mt: -0.5 }}
              >
                "
              </Typography>
            </Box>

            <CardContent sx={{ p: 0 }}>
              {/* Header with Avatar and Info */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 3,
                  mt: 2,
                }}
              >
                <Avatar
                  src={testimonial.profile_image}
                  sx={{
                    width: 60,
                    height: 60,
                    border: "3px solid #e3f2fd",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                >
                  {testimonial.name.charAt(0)}
                </Avatar>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#1976d2" }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 0.5,
                    }}
                  >
                    <Rating
                      value={5}
                      size="small"
                      readOnly
                      sx={{ color: "#ff9800" }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "bold", color: "#ff9800" }}
                    >
                      5.0
                    </Typography>
                  </Box>
                  <Chip
                    label={testimonial.description}
                    size="small"
                    sx={{
                      bgcolor: "#e8f5e8",
                      color: "#2e7d32",
                      fontWeight: "bold",
                      fontSize: "0.75rem",
                    }}
                  />
                </Box>
              </Box>

              {/* Testimonial Text */}
              <Box sx={{ position: "relative" }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontStyle: "italic",
                    lineHeight: 1.6,
                    color: "#424242",
                    fontSize: "1rem",
                    textAlign: "justify",
                  }}
                >
                  {testimonial.testimonial}
                </Typography>
              </Box>

              {/* Success Badge */}
              <Box sx={{ mt: 3, textAlign: "center" }}>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    bgcolor: "#fff3e0",
                    color: "#e65100",
                    px: 2,
                    py: 1,
                    borderRadius: "20px",
                    border: "2px solid #ffcc02",
                  }}
                >
                  <EmojiEvents sx={{ fontSize: 20 }} />
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    IELTS Success Story
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="body1" sx={{ mb: 2, color: "#666" }}>
          আপনিও হতে পারেন পরবর্তী সফল শিক্ষার্থী!
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: "#4caf50",
            color: "white",
            px: 4,
            py: 1.5,
            borderRadius: "25px",
            textTransform: "none",
            fontSize: "1.1rem",
            fontWeight: "bold",
            "&:hover": {
              bgcolor: "#45a049",
              transform: "translateY(-2px)",
              boxShadow: "0 8px 24px rgba(76, 175, 80, 0.3)",
            },
            transition: "all 0.3s ease",
          }}
        >
          এখনই কোর্সে যোগ দিন
        </Button>
      </Box>
    </Paper>
  );
};

export default Testimonials;
