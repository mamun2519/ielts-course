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
  Paper,
  useTheme,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
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
  ExpandMore,
  Group,
  VideoLibrary,
  Quiz,
  MenuBook,
  AccessTime,
} from "@mui/icons-material";
import AboutCourse from "./AboutCourse";

// Complete mock data from your API
const courseData = {
  title: "IELTS Course by Munzereen Shahid",
  description:
    "Academic IELTS এবং General Training IELTS- এর কমপ্লিট প্রিপারেশন নিন একটি কোর্সেই! দেশসেরা IELTS Instructor এর গাইডলাইনে আপনার কাঙ্ক্ষিত ব্যান্ড স্কোরটি অর্জন করতে আজই জয়েন করুন আমাদের IELTS Course-এ।",
  cta_text: "কোর্সটি কিনুন",
  checklist: [
    {
      text: "কোর্সটি করছেন ৩৩০১৭ জন",
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png",
    },
    {
      text: "সময় লাগবে ৫০ ঘন্টা",
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png",
    },
    {
      text: "৫৪টি ভিডিও",
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video.png",
    },
    {
      text: "১০টি রিডিং এবং ১০টি লিসেনিং মক টেস্ট",
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png",
    },
    {
      text: "৩৮টি লেকচার শিট",
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/cheatsheet-projectfile-exercisefile-sourcefile-resource.png",
    },
    {
      text: "২৫টি ভিডিও লেকচার",
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video-lecture.png",
    },
    {
      text: "১টি ফ্রি হার্ডকপি বই",
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/digital-book_work-book.png",
    },
    {
      text: "ফেসবুক সাপোর্ট গ্রুপ",
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/facebook-community.png",
    },
    {
      text: "কোর্সের মেয়াদ আজীবন",
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png",
    },
  ],
  instructor: {
    name: "Munzereen Shahid",
    description:
      "MSc (English), University of Oxford (UK); BA, MA (English), University of Dhaka; IELTS: 8.5",
    image: "https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg",
    short_description: "Course Instructor",
  },
  features: [
    {
      title: "৫০+ ভিডিও লেকচার",
      subtitle:
        "IELTS Academic ও General Training এর Overview, Format ও প্রশ্নের ধরন নিয়ে in-depth আলোচনা",
      icon: "https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604651_1684834874567.png",
    },
    {
      title: "৩৮টি লেকচার শিট",
      subtitle:
        "Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর করার স্ট্র্যাটেজি এবং 600+ Vocabulary",
      icon: "https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_1684919669537.png",
    },
    {
      title: "রিডিং এন্ড লিসিনিং মক টেস্ট",
      subtitle:
        "10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি যাচাই",
      icon: "https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604652_1684919731714.png",
    },
    {
      title: "ডাউট সল্ভিং লাইভ ক্লাস",
      subtitle:
        "সাপ্তাহিক জুম ক্লাসে এক্সপার্ট টিচারের কাছে প্রবলেম সলভিং এর সুযোগ",
      icon: "https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_%281%29_1684919813933.png",
    },
  ],
  learningPoints: [
    "IELTS পরীক্ষার প্রত্যেক সেকশনের প্রশ্ন ও উত্ত���ের ধরন, টাইম ম্যানেজমেন্ট সম্পর্কিত গুরুত্বপূর্ণ টিপস, ট্রিকস ও স্ট্র্যাটেজি",
    "IELTS Writing Task 1 ও IELTS Writing Task 2 এর ক্ষেত্রে ভালো স্কোর পেতে সহায়ক Structure ও Essay type",
    "IELTS Speaking test-এ Advanced/ Power Words ব্যবহার করে যেকোনো টপিকে নির্ভুলভাবে কথা বলার পদ্ধতি",
    "সেরা IELTS প্রস্তুতি নিতে প্রতিটি মডিউলের নিয়ম-কানুনসহ খুঁটিনাটি বিষয়াদি নিয়ে বিস্তারিত ধারণা",
    "IELTS পরীক্ষা চলাকালে নির্ধারিত সময়ের সঠিক ব্যবহারের মাধ্যমে ভালো স্কোর অর্জনের কৌশল",
    "IELTS Reading এবং IELTS Listening Mock Test এর মাধ্যমে IELTS পরীক্ষার রিয়েল এক্সপেরিয়েন্স ও Band Score সম্বন্ধে পরিপূর্ণ ধারণা",
  ],
  exclusiveFeatures: [
    {
      title: "ভিডিও লেকচার",
      checklist: [
        "IELTS Academic ও General Training নিয়ে আলোচনা",
        "Reading, Writing, Listening ও Speaking এর Overview & Format",
        "প্রতিটি প্রশ্নের ধরন-ভিত্তিক উত্তর করার স্ট্র্যাটেজি",
        "ভিডিওর সাথে প্র্যাকটিসের সুযোগ",
      ],
    },
    {
      title: "Reading ও Listening Mock Tests",
      checklist: [
        "10 Reading & 10 Listening Mock Tests",
        "Computer-delivered IELTS পরীক্ষার এক্সপেরিয়েন্স",
        "উত্তর সাবমিট করার সাথে সাথেই রেজাল্ট",
        "যেকোনো সময়, যেকোনো জায়গা থেকে মক টেস্ট",
      ],
    },
  ],
  aboutSections: [
    {
      title: "IELTS Course-টি যাদের জন্য",
      description: [
        "যারা উচ্চশিক্ষা, মাইগ্রেশন বা চাকরির জন্য বিদেশে যেতে চান।",
        "যারা উচ্চশিক্ষা শেষে বা দেশে বসবাসরত অবস্থায় বিদেশে স্থায়ীভাবে বসবাসের জন্য আবেদন করতে চান।",
        "IELTS পরীক্ষা যাদের জন্য ভীতিকর, কিংবা যারা IELTS প্রস্তুতি কোথা থেকে শুরু করবেন তা জানেন না।",
        "যারা আগে পরীক্ষা দিয়েছেন কিন্তু নিজের IELTS Band Score বাড়াতে চান।",
        "যারা চাকরি বা ব্যবসার কাজে কিংবা ব্যক্তিগত আগ্রহে নিজেদের reading, writing, listening এবং speaking দক্ষতা বাড়াতে চান।",
        "স্টুডেন্ট কিংবা চাকরিজীবীদের মধ্যে যারা ব্যস্ততার কারনে ঘরে বসেই IELTS এর জন্য সেরা প্রস্তুতি নিতে চান।",
      ],
    },
    {
      title: "এই IELTS Course-টি আপনাকে যেভাবে সাহায্য করবে",
      description: [
        '"Academic IELTS" ও "General Training IELTS" - উভয় মডিউলের জন্যই কার্যকরভাবে ঘরে বসে প্রস্তুতি নিতে পারবেন। এই IELTS Course টিতে দুটো মডিউলের জন্যই আলাদা দুটো সেকশন রয়েছে।',
        "IELTS speaking, reading, listening ও writing test-এর প্রশ্নের ধরন অনুযায়ী টিপস, হ্যাকস ও টেকনিক শিখতে পারবেন।",
        "IELTS এর সব ধরনের প্রশ্ন সঠিকভাবে সমাধান করে হাতে কলমে প্রস্তুতি নিতে পারবেন।",
        'ভিডিও দেখার পাশাপাশি IELTS Course-এ থাকা লেকচার শিট, "ঘরে বসে IELTS প্রস্তুতি" বই এবং Doubt Solving Live Class-এর মাধ্যমে নিতে পারবেন কমপ্লিট প্রিপারাশন।',
        "কোর্স শেষ করার পর IELTS Reading and Listening mock test প্রশ্ন সল্‌ভ করার মাধ্যমে নিজের IELTS প্রস্তুতি ঝালিয়ে নিতে পারবেন।",
      ],
    },
  ],
  testimonials: [
    {
      name: "Junaed Bin Samad",
      description: "IELTS Score: 8.5",
      testimonial: "IELTS Score: 8.5",
      profile_image:
        "https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_39_1746355488882.png",
    },
    {
      name: "Shah Mohammad Rafi",
      description: "IELTS Score: 8",
      testimonial: "IELTS Score: 8",
      profile_image:
        "https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_45_1746359412430.png",
    },
    {
      name: "Tisha Farhana",
      description: "IELTS Score: 8",
      testimonial:
        "প্রথম ভিডিওটা দেখেই বুঝেছিলাম যে কোর্সটা বেশ গোছানো এবং অন্যান্য কোর্সগুলোর মতন Advanced English-এ না পড়িয়ে মুনজেরিন আপু বাংলায় সবকিছু সুন্দর করে বুঝিয়েছেন। রিডিং পার্ট-এ প্র্যাক্টিসে-এর সময় ৪-৫-এর বেশি স্কোর তুলতে পারতাম না এবং এই কোর্সের রিডিং পার্টটা করে আমি আমার IELTS-এ স্কোর ৮ পেয়েছি।",
      profile_image:
        "https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_38_1746355189549.png",
    },
  ],
  faq: [
    {
      question: "কোর্সটি কিনে কিভাবে শুরু করবো?",
      answer:
        "১) 'কোর্সটি কিনুন' বাটনে ক্লিক করুন\n২) 'শুরু করুন' বাটনে ক্লিক করুন\n৩) আপনার ফোন নম্বর বা ইমেইল দিয়ে লগ-ইন করুন\n৪) লগ-ইন করা হয়ে গেলে 'এগিয়ে যান' বাটনে ক্লিক করুন\n৫) আপনার পছন্দের পেমেন্ট মাধ্যমটি বেছে নিন এবং 'পেমেন্ট করুন' বাটনে ক্লিক করুন",
    },
    {
      question:
        "আপনাদের এই কোর্স কি একাডেমিক নাকি জেনারেল IELTS করার জন্য তৈরি করা?",
      answer:
        "Academic কিংবা General; আপনি যেটির জন্যই Preparation নেন না কেন আপনার প্রয়োজন অনুযায়ী প্রস্তুতি নেওয়ার সকল গাইডলাইন থাকবে এই কোর্সে।",
    },
    {
      question: "কোর্সের মেয়াদ কতদিন থাকবে?",
      answer:
        "টেন মিনিট স্কুল Skills-এর যেকোনো Free এবং Paid কোর্সের মেয়াদ আজীবন।",
    },
  ],
};

export default function CoursePage() {
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
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height={isMobile ? "180" : "200"}
                  image="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
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
              {/* CTA */}
              <Box sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 2,
                    flexWrap: "wrap",
                  }}
                >
                  <Typography
                    variant={isMobile ? "h5" : "h4"}
                    component="span"
                    sx={{ fontWeight: "bold" }}
                  >
                    ৳২,৫০০
                  </Typography>
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{
                      textDecoration: "line-through",
                      color: "text.secondary",
                    }}
                  >
                    ৳৩,৫০০
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#4caf50", fontWeight: "bold" }}
                  >
                    29% off!
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
                    {courseData.cta_text}
                  </Button>
                  <IconButton sx={{ border: 1, borderColor: "divider" }}>
                    <FavoriteBorder />
                  </IconButton>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  🛡️ 14 day money back guarantee
                </Typography>
              </Box>
              {/* check list */}
              <Box sx={{ p: 3 }}>
                <List dense sx={{ p: 0 }}>
                  {courseData.checklist.map((item, index) => (
                    <ListItem
                      key={index}
                      sx={{ px: 0, alignItems: "flex-start" }}
                    >
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
            </Paper>
          </div>
        </div>

        {/* Additional Sections */}

        {/* About Course Section */}
        <Paper sx={{ p: 3, mt: 4, mb: 4 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", mb: 3 }}
          >
            কোর্স সম্পর্কে বিস্তারিত
          </Typography>
          {courseData.aboutSections.map((section, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                {section.title}
              </Typography>
              <List>
                {section.description.map((item, itemIndex) => (
                  <ListItem
                    key={itemIndex}
                    sx={{ px: 0, alignItems: "flex-start" }}
                  >
                    <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
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

        {/* Student Testimonials */}
        <Paper sx={{ p: 3, mt: 4, mb: 4 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", mb: 3 }}
          >
            শিক্ষার্থীরা যা বলছে
          </Typography>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {courseData.testimonials.map((testimonial, index) => (
              <Card key={index} sx={{ p: 2 }}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Avatar
                      src={testimonial.profile_image}
                      sx={{ width: 40, height: 40 }}
                    >
                      {testimonial.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: "bold" }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography variant="caption" color="primary">
                        {testimonial.description}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontStyle: "italic" }}
                  >
                    "{testimonial.testimonial}"
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </Paper>

        {/* FAQ Section */}
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

        {/* Features Section */}
        <Paper sx={{ p: 3, mt: 4 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            Features
          </Typography>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "24px",
            }}
          >
            <div style={{ textAlign: "center", padding: "16px" }}>
              <Language sx={{ fontSize: 40, color: "#1976d2", mb: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Multi-Language
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Available in Bengali & English
              </Typography>
            </div>
            <div style={{ textAlign: "center", padding: "16px" }}>
              <EmojiEvents sx={{ fontSize: 40, color: "#ff9800", mb: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Certificate
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Industry recognized certificate
              </Typography>
            </div>
            <div style={{ textAlign: "center", padding: "16px" }}>
              <Schedule sx={{ fontSize: 40, color: "#4caf50", mb: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Lifetime Access
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn at your own pace
              </Typography>
            </div>
            <div style={{ textAlign: "center", padding: "16px" }}>
              <Assignment sx={{ fontSize: 40, color: "#e91e63", mb: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Mock Tests
              </Typography>
              <Typography variant="body2" color="text.secondary">
                20 practice tests included
              </Typography>
            </div>
          </div>
        </Paper>
      </Container>
    </Box>
  );
}
