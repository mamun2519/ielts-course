import { IAboutCourse } from "@/types/aboutCourse";
import {
  AccessTime,
  CheckCircle,
  Group,
  MenuBook,
  Person,
  Quiz,
  Schedule,
  School,
  VideoLibrary,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

const AboutCourse = ({ courseData, isMobile }: IAboutCourse) => {
  return (
    <div
      style={{
        flex: isMobile ? "1" : "2",
        minWidth: "0",
        width: isMobile ? "100%" : "auto",
      }}
    >
      {/* Title */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}>
          <Chip
            label="Intermediate"
            variant="outlined"
            sx={{ color: "#e91e63", borderColor: "#f8bbd9" }}
          />
          <Chip
            label="Advanced"
            variant="outlined"
            sx={{ color: "#009688", borderColor: "#b2dfdb" }}
          />
        </Box>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          component="h1"
          sx={{ fontWeight: "bold", mb: 2, wordBreak: "break-word" }}
        >
          {courseData.title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 1.6 }}
        >
          {courseData.description}
        </Typography>

        <div className="mt-5">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Rating value={4.5} precision={0.5} readOnly size="small" />
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                4.5
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              2,220 reviews
            </Typography>
            <Typography variant="body2" color="text.secondary">
              33,017 students
            </Typography>
          </Box>
        </div>
      </Paper>

      {/* Instructors */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          কোর্স ইন্সট্রাক্টর
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexWrap: isMobile ? "wrap" : "nowrap",
          }}
        >
          <Avatar
            src={courseData.instructor.image}
            sx={{ width: 50, height: 50 }}
          >
            <Person />
          </Avatar>
          <Box>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {courseData.instructor.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {courseData.instructor.short_description}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {courseData.instructor.description}
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* How the course is laid out */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          কোর্সটি যেভাবে সাজানো হয়েছে
        </Typography>
        <List>
          {courseData.features.map((feature, index) => (
            <ListItem key={index} sx={{ px: 0, alignItems: "flex-start" }}>
              <ListItemIcon sx={{ mt: 1 }}>
                <School lsx={{ color: "#1976d2" }} />
              </ListItemIcon>
              <ListItemText
                primary={feature.title}
                secondary={feature.subtitle}
                primaryTypographyProps={{ fontWeight: "bold" }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* What you will learn by doing the course */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          কোর্সটি করে যা শিখবেন
        </Typography>
        <div>
          {courseData.learningPoints.map((point, index) => (
            <Box
              key={index}
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
                {point}
              </Typography>
            </Box>
          ))}
        </div>
      </Paper>

      {/* Course Exclusive Feature */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          কোর্স এক্সক্লুসিভ ফিচার
        </Typography>
        {courseData.exclusiveFeatures.map((feature, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
              {feature.title}
            </Typography>
            <List dense>
              {feature.checklist.map((item, itemIndex) => (
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

      {/* Course details - Updated with complete data */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          Course Details
        </Typography>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: "16px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, py: 1 }}>
            <Group sx={{ color: "#1976d2", fontSize: 20 }} />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                ৩৩০১৭ জন
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Students Enrolled
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, py: 1 }}>
            <Schedule sx={{ color: "#ff9800", fontSize: 20 }} />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                ৫০ ঘন্টা
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Total Duration
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, py: 1 }}>
            <VideoLibrary sx={{ color: "#e91e63", fontSize: 20 }} />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                ৫৪টি ভিডিও
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Video Lectures
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, py: 1 }}>
            <Quiz sx={{ color: "#4caf50", fontSize: 20 }} />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                ২০টি মক টেস্ট
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Mock Tests
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, py: 1 }}>
            <MenuBook sx={{ color: "#9c27b0", fontSize: 20 }} />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                ৩৮টি লেকচার শিট
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Lecture Sheets
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, py: 1 }}>
            <AccessTime sx={{ color: "#607d8b", fontSize: 20 }} />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                আজীবন
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Course Access
              </Typography>
            </Box>
          </Box>
        </div>
      </Paper>
    </div>
  );
};

export default AboutCourse;
