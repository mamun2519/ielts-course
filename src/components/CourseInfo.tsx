"use client";

import {
  Box,
  Container,
  Typography,
  Chip,
  Rating,
  Avatar,
  Button,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Paper,
} from "@mui/material";
import {
  FavoriteBorder,
  PlayArrow,
  CheckCircle,
  Language,
  Schedule,
  EmojiEvents,
  Assignment,
  Person,
  School,
} from "@mui/icons-material";

export default function CoursePage() {
  const learningPoints = [
    "Key factors in the development of HR and People Management as a Generalist HR.",
    "Generalist Human Resource Management, the Scope of HRM, Processes in HRM, and the Role of HRM in this framework.",
    "Skills required for Generalist HR Professionals with case studies, assignments, and coursework.",
    "Advanced HR analytics and data-driven decision making techniques.",
  ];

  const courseLayout = [
    "Module 1: Introduction to HR Management",
    "Module 2: Employee Life Cycle Management",
    "Module 3: HR Policies and Procedures",
    "Module 4: Strategic HR Planning",
    "Module 5: Performance Management Systems",
    "Module 6: Case Studies and Practical Applications",
  ];

  const exclusiveFeatures = [
    "Interactive HR simulation exercises",
    "Real-world case study analysis",
    "Direct mentorship from industry experts",
    "Access to HR toolkit and templates",
    "Networking opportunities with HR professionals",
  ];

  const courseDetails = [
    { label: "Duration", value: "10 hours 36 minutes" },
    { label: "Level", value: "Intermediate to Advanced" },
    { label: "Language", value: "English with subtitles" },
    { label: "Certificate", value: "Yes, upon completion" },
    { label: "Access", value: "Lifetime access" },
    { label: "Updates", value: "Free updates included" },
  ];

  const checkLists = [
    "Basic understanding of business operations",
    "Interest in human resource management",
    "Access to computer and internet",
    "Willingness to participate in interactive exercises",
    "Commitment to complete all modules",
  ];

  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", py: 3 }}>
      <Container maxWidth="xl">
        {/* Requirements Section */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            Requirements
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Please follow the wireframe, or you can visit our landing page as
            mentioned previously
          </Typography>
        </Paper>

        {/* Header (Not Mandatory) */}
        <Paper sx={{ p: 2, mb: 3, textAlign: "center", bgcolor: "#e3f2fd" }}>
          <Typography variant="h6" color="text.secondary">
            Header (Not Mandatory)
          </Typography>
        </Paper>

        {/* Main Content Layout */}
        <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
          {/* Left Column */}
          <div style={{ flex: "2", minWidth: "0" }}>
            {/* Title */}
            <Paper sx={{ p: 3, mb: 3 }}>
              <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
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
                variant="h4"
                component="h1"
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                Advanced Diploma Course in Generalist Human Resource Management
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
                  21,450 students
                </Typography>
              </Box>
            </Paper>

            {/* Description */}
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Description
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.6 }}
              >
                Learn the Role and Responsibilities at Individual, Group, and
                Organization Levels, Employee Life Cycle, Policy & Process.
                Master the intricacies of creating and implementing HR policies,
                process management and strategic planning. This comprehensive
                course will equip you with the essential skills needed to excel
                in human resource management roles across various industries.
              </Typography>
            </Paper>

            {/* Instructors */}
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Instructors
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar sx={{ width: 50, height: 50 }}>
                  <Person />
                </Avatar>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Amanda Kim
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    HR University, Senior HR Consultant
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    15+ years experience in HR Management
                  </Typography>
                </Box>
              </Box>
            </Paper>

            {/* How the course is laid out */}
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                How the course is laid out
              </Typography>
              <List>
                {courseLayout.map((module, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <School sx={{ color: "#1976d2" }} />
                    </ListItemIcon>
                    <ListItemText primary={module} />
                  </ListItem>
                ))}
              </List>
            </Paper>

            {/* What you will learn by doing the course */}
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                What you will learn by doing the course
              </Typography>
              <div>
                {learningPoints.map((point, index) => (
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
                      sx={{ color: "#4caf50", fontSize: 20, mt: 0.5 }}
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
                Course Exclusive Features
              </Typography>
              <List>
                {exclusiveFeatures.map((feature, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <EmojiEvents sx={{ color: "#ff9800" }} />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
            </Paper>

            {/* Course details */}
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Course Details
              </Typography>
              <div>
                {courseDetails.map((detail, index) => (
                  <div key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        py: 1,
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        {detail.label}:
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                        {detail.value}
                      </Typography>
                    </Box>
                    {index < courseDetails.length - 1 && <Divider />}
                  </div>
                ))}
              </div>
            </Paper>
          </div>

          {/* Right Column */}
          <div
            style={{
              flex: "1",
              minWidth: "300px",
              position: "sticky",
              top: "24px",
            }}
          >
            {/* Trailer */}
            <Paper sx={{ mb: 3, overflow: "hidden" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  p: 2,
                  bgcolor: "#e3f2fd",
                  textAlign: "center",
                  m: 0,
                }}
              >
                Trailer
              </Typography>
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="/course-preview.webp"
                  alt="Course trailer"
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "rgba(0, 0, 0, 0.3)",
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: "rgba(0, 0, 0, 0.4)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "white",
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        bgcolor: "rgba(255, 255, 255, 0.2)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <PlayArrow />
                    </Box>
                    <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                      Watch Trailer
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>

            {/* CTA */}
            <Paper sx={{ mb: 3, overflow: "hidden" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  p: 2,
                  bgcolor: "#e3f2fd",
                  textAlign: "center",
                  m: 0,
                }}
              >
                CTA
              </Typography>
              <Box sx={{ p: 3 }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
                >
                  <Typography
                    variant="h4"
                    component="span"
                    sx={{ fontWeight: "bold" }}
                  >
                    $68,00
                  </Typography>
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{
                      textDecoration: "line-through",
                      color: "text.secondary",
                    }}
                  >
                    $90,00
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#4caf50", fontWeight: "bold" }}
                  >
                    75% off!
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      bgcolor: "#e91e63",
                      "&:hover": { bgcolor: "#c2185b" },
                      py: 1.5,
                    }}
                  >
                    Start Course
                  </Button>
                  <IconButton sx={{ border: 1, borderColor: "divider" }}>
                    <FavoriteBorder />
                  </IconButton>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  🛡️ 14 day money back guarantee
                </Typography>
              </Box>
            </Paper>

            {/* Check Lists */}
            <Paper sx={{ mb: 3, overflow: "hidden" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  p: 2,
                  bgcolor: "#e3f2fd",
                  textAlign: "center",
                  m: 0,
                }}
              >
                Check Lists
              </Typography>
              <Box sx={{ p: 3 }}>
                <List dense sx={{ p: 0 }}>
                  {checkLists.map((item, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
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
            </Paper>
          </div>
        </div>

        {/* Features Section */}
        <Paper sx={{ p: 3, mt: 4 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            Features
          </Typography>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <div
              style={{
                flex: "1",
                minWidth: "200px",
                textAlign: "center",
                padding: "16px",
              }}
            >
              <Language sx={{ fontSize: 40, color: "#1976d2", mb: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Multi-Language
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Available in 5 languages
              </Typography>
            </div>
            <div
              style={{
                flex: "1",
                minWidth: "200px",
                textAlign: "center",
                padding: "16px",
              }}
            >
              <EmojiEvents sx={{ fontSize: 40, color: "#ff9800", mb: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Certificate
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Industry recognized certificate
              </Typography>
            </div>
            <div
              style={{
                flex: "1",
                minWidth: "200px",
                textAlign: "center",
                padding: "16px",
              }}
            >
              <Schedule sx={{ fontSize: 40, color: "#4caf50", mb: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Flexible
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn at your own pace
              </Typography>
            </div>
            <div
              style={{
                flex: "1",
                minWidth: "200px",
                textAlign: "center",
                padding: "16px",
              }}
            >
              <Assignment sx={{ fontSize: 40, color: "#e91e63", mb: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Practical
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Hands-on assignments
              </Typography>
            </div>
          </div>
        </Paper>
      </Container>
    </Box>
  );
}
