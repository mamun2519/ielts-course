/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Box, Container, Paper, useTheme, useMediaQuery } from "@mui/material";

import AboutCourse from "./AboutCourse";
import Trailer from "./Trailer";
import CTA from "./CTA";
import CheckList from "./CheckList";
import AboutSection from "./AboutSection";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import Features from "./Features";

// type CourseData = typeof courseData;

export default function CoursePage({ courseData }: { courseData: any }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", py: 3 }}>
      <Container maxWidth="xl">
        {/* Header (Not Mandatory) */}

        {/* Main Content Layout - Responsive */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "24px",
            alignItems: "flex-start",
          }}
        >
          {/* Left Column */}
          <AboutCourse courseData={courseData} isMobile={isMobile} />

          {/* Right Column */}
          <div
            style={{
              flex: "1",
              minWidth: isMobile ? "100%" : "300px",
              position: isMobile ? "static" : "sticky",
              top: isMobile ? "auto" : "24px",
              width: isMobile ? "100%" : "auto",
            }}
          >
            {/* Trailer */}
            <Paper sx={{ mb: 3, overflow: "hidden" }}>
              <Trailer isMobile={isMobile} />
              {/* CTA */}
              <CTA isMobile={isMobile} />
              {/* check list */}
              <CheckList courseData={courseData} />
            </Paper>
          </div>
        </div>

        {/* About Course Section */}
        <AboutSection
          courseData={courseData?.sections?.find(
            (section: { type: string }) => section.type === "about"
          )}
        />
        {/* Student Testimonials */}
        <Testimonials
          courseData={courseData.sections?.find(
            (section: { type: string }) => section.type == "testimonials"
          )}
          isMobile={isMobile}
        />

        {/* Instructor Info */}

        {/* FAQ Section */}
        <Faq
          courseData={courseData.sections?.find(
            (section: { type: string }) => section.type == "faq"
          )}
        />

        {/* Features Section */}
        <Features isMobile={isMobile} />
      </Container>
    </Box>
  );
}
