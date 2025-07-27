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
import parse, { domToReact, Element } from "html-react-parser";

const AboutSection = ({
  courseData,
}: {
  courseData: {
    values: Array<{
      title: string;
      description: string;
    }>;
  };
}) => {
  return (
    <Paper sx={{ p: 3, mt: 4, mb: 4 }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{ fontWeight: "bold", mb: 3 }}
      >
        কোর্স সম্পর্কে বিস্তারিত
      </Typography>

      {courseData?.values
        ?.filter((_, index) => index === 0 || index === 2)
        .map((section, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              {parse(section.title)}
            </Typography>

            {/* Parse description to extract list items */}
            <List>
              {parse(section.description, {
                replace: (domNode) => {
                  if (domNode.type === "tag" && domNode.name === "li") {
                    return (
                      <ListItem
                        key={Math.random()} // ideally use stable key
                        sx={{ px: 0, alignItems: "flex-start" }}
                      >
                        <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                          <CheckCircle
                            sx={{ color: "#4caf50", fontSize: 18 }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={domToReact(
                            domNode?.children as import("html-react-parser").DOMNode[]
                          )}
                          primaryTypographyProps={{ variant: "body2" }}
                        />
                      </ListItem>
                    );
                  }
                },
              })}
            </List>
          </Box>
        ))}
    </Paper>
  );
};

export default AboutSection;
