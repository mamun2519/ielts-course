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

const CourseExclusiveFeature = ({
  data,
}: {
  data: {
    values: Array<{
      title: string;
      checklist: string[];
    }>;
  };
}) => {
  console.log("CourseExclusiveFeature component rendered with data:", data);
  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        কোর্স এক্সক্লুসিভ ফিচার
      </Typography>
      {data?.values?.map((feature, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            {feature?.title}
          </Typography>
          <List dense>
            {feature?.checklist?.map((item, itemIndex) => (
              <ListItem key={itemIndex} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircle sx={{ color: "#4caf50", fontSize: 18 }} />
                </ListItemIcon>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{ variant: "body2" }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Paper>
  );
};

export default CourseExclusiveFeature;
