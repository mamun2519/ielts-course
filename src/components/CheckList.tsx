import { CheckCircle } from "@mui/icons-material";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

const CheckList = ({
  courseData,
}: {
  courseData: { checklist: { text: string }[] };
}) => {
  return (
    <Box sx={{ p: 3 }}>
      <List dense sx={{ p: 0 }}>
        {courseData.checklist.map((item, index) => (
          <ListItem key={index} sx={{ px: 0, alignItems: "flex-start" }}>
            <ListItemIcon sx={{ minWidth: 28, mt: 0.5 }}>
              <CheckCircle sx={{ color: "#4caf50", fontSize: 18 }} />
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{ variant: "body2" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CheckList;
