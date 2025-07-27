import { ExpandMore, Phone } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import parse from "html-react-parser";

const Faq = ({
  courseData,
}: {
  courseData: {
    values: Array<{
      question: string;
      answer: string;
    }>;
  };
}) => {
  return (
    <Paper sx={{ p: 4, mt: 4, mb: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", mb: 2, color: "#1976d2" }}
        >
          সচরাচর জিজ্ঞাসা
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: "600px", mx: "auto" }}
        >
          কোর্স সম্পর্কে আপনার সকল প্রশ্নের উত্তর এখানে পাবেন
        </Typography>
      </Box>

      <Box sx={{ maxWidth: "800px", mx: "auto" }}>
        {courseData?.values.slice(0, 3)?.map((faqItem, index) => (
          <Accordion
            key={index}
            sx={{
              mb: 2,
              borderRadius: "12px !important",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              border: "1px solid #e0e0e0",
              "&:before": {
                display: "none",
              },
              "&.Mui-expanded": {
                boxShadow: "0 8px 24px rgba(25, 118, 210, 0.15)",
                border: "1px solid #1976d2",
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    bgcolor: "#e3f2fd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    ".Mui-expanded &": {
                      bgcolor: "#1976d2",
                      color: "white",
                      transform: "rotate(180deg)",
                    },
                  }}
                >
                  <ExpandMore />
                </Box>
              }
              sx={{
                py: 2,
                px: 3,
                "& .MuiAccordionSummary-content": {
                  alignItems: "center",
                  gap: 2,
                },
                "&:hover": {
                  bgcolor: "#f8f9fa",
                },
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  bgcolor: "#fff3e0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "#f57c00", fontWeight: "bold" }}
                >
                  {index + 1}
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "600",
                  color: "#1976d2",
                  flex: 1,
                  textAlign: "left",
                }}
              >
                {parse(faqItem?.question)}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 3, pb: 3 }}>
              <Box sx={{ ml: 6 }}>
                <Box
                  sx={{
                    bgcolor: "#f8f9fa",
                    borderRadius: "8px",
                    p: 3,
                    borderLeft: "4px solid #4caf50",
                    position: "relative",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#424242",
                      lineHeight: 1.7,
                      whiteSpace: "pre-line",
                      fontSize: "1rem",
                    }}
                  >
                    {parse(faqItem?.answer)}
                  </Typography>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Help Section */}
      <Box
        sx={{
          textAlign: "center",
          mt: 5,
          p: 3,
          bgcolor: "#f8f9fa",
          borderRadius: "16px",
          border: "1px solid #e0e0e0",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", mb: 2, color: "#1976d2" }}
        >
          আরও কোনো প্রশ্ন আছে?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          আমাদের সাপোর্ট টিম ২৪/৭ আপনার সেবায় নিয়োজিত
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="outlined"
            startIcon={<Phone />}
            sx={{
              borderColor: "#4caf50",
              color: "#4caf50",
              "&:hover": {
                bgcolor: "#4caf50",
                color: "white",
              },
            }}
          >
            ১৬৯১০ এ কল করুন
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#1976d2",
              "&:hover": {
                bgcolor: "#1565c0",
              },
            }}
          >
            লাইভ চ্যাট শুরু করুন
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default Faq;
