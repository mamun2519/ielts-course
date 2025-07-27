import { School } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

const CourseSummary = ({
  data,
}: {
  data: {
    values: Array<{
      title: string;
      subtitle: string;
    }>;
  };
}) => {
  console.log("CourseSummary component rendered with data:", data);
  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        কোর্সটি যেভাবে সাজানো হয়েছে
      </Typography>
      <List>
        {data?.values?.map((feature, index) => (
          <ListItem key={index} sx={{ px: 0, alignItems: "flex-start" }}>
            <ListItemIcon sx={{ mt: 1 }}>
              <School lsx={{ color: "#1976d2" }} />
            </ListItemIcon>
            <ListItemText
              primary={feature?.title}
              secondary={feature?.subtitle}
              primaryTypographyProps={{ fontWeight: "bold" }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default CourseSummary;
