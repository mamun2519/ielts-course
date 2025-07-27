import { CheckCircle } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

const AboutSection = ({
  courseData,
}: {
  courseData: {
    values: Array<{
      title: string;
      description: string[];
    }>;
  };
}) => {
  console.log("AboutSection component rendered with courseData:", courseData);
  return (
    <Paper sx={{ p: 3, mt: 4, mb: 4 }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{ fontWeight: "bold", mb: 3 }}
      >
        কোর্স সম্পর্কে বিস্তারিত
      </Typography>
      {courseData?.values?.map((section, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            {section?.title}
          </Typography>
          <List>
            {/* {section?.description?.map((item, itemIndex) => ( */}
            <ListItem key={index} sx={{ px: 0, alignItems: "flex-start" }}>
              <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                <CheckCircle sx={{ color: "#4caf50", fontSize: 18 }} />
              </ListItemIcon>
              <ListItemText
                primary={section.description}
                primaryTypographyProps={{ variant: "body2" }}
              />
            </ListItem>
            {/* ))} */}
          </List>
        </Box>
      ))}
    </Paper>
  );
};

export default AboutSection;
