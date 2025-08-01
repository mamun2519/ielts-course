import { IAboutCourse } from "@/types/aboutCourse";
import {
  AccessTime,
  Group,
  MenuBook,
  Quiz,
  Schedule,
  VideoLibrary,
} from "@mui/icons-material";
import { Box, Chip, Paper, Rating, Typography } from "@mui/material";
import React from "react";
import Instructor from "./Instructor";
import CourseSummary from "./CourseSummary";
import LearningPoint from "./LearningPoint";
import CourseExclusiveFeature from "./CourseExclusiveFeature";
import parse from "html-react-parser";

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
          {courseData?.title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 1.6 }}
        >
          {parse(courseData?.description)}
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

      <Instructor
        isMobile={isMobile}
        instructor={courseData?.sections?.find(
          (section) => section.type === "instructors"
        )}
      />

      {/* How the course is laid out */}

      <CourseSummary
        data={courseData?.sections?.find(
          (section) => section.type === "features"
        )}
      />

      {/* What you will learn by doing the course */}
      <LearningPoint
        data={courseData?.sections?.find(
          (section) => section.type === "pointers"
        )}
      />

      {/* Course Summary */}

      {/* Course Exclusive Feature */}
      <CourseExclusiveFeature
        data={courseData?.sections?.find(
          (section) => section.type === "feature_explanations"
        )}
      />

      {/* Course details */}

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
