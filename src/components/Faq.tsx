import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

const Faq = ({
  courseData,
}: {
  courseData: { faq: { question: string; answer: string }[] };
}) => {
  return (
    <Paper sx={{ p: 3, mt: 4, mb: 4 }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{ fontWeight: "bold", mb: 3 }}
      >
        সচরাচর জিজ্ঞাসা
      </Typography>
      {courseData.faq.map((faqItem, index) => (
        <Accordion key={index} sx={{ mb: 1 }}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
              {faqItem.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ whiteSpace: "pre-line" }}
            >
              {faqItem.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Paper>
  );
};

export default Faq;
