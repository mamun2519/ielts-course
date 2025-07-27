"use client";

import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  InputBase,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  Search,
  Phone,
  KeyboardArrowDown,
  Menu,
  Close,
} from "@mui/icons-material";
import { useState } from "react";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "ক্লাস ৬-১২", hasDropdown: true },
    { label: "স্কিলস", hasDropdown: true },
    { label: "ভর্তি পরীক্ষা", hasDropdown: false },
    { label: "অনলাইন ব্যাচ", hasDropdown: true },
    { label: "ইংলিশ সেন্টার", hasDropdown: true },
    { label: "আরো", hasDropdown: true },
  ];

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "white",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar sx={{ px: { xs: 2, md: 3 }, py: 1 }}>
          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuToggle}
              sx={{ mr: 2, color: "black" }}
            >
              <Menu />
            </IconButton>
          )}

          {/* Logo */}
          <Box
            sx={{ display: "flex", alignItems: "center", mr: { xs: 2, md: 4 } }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ color: "#e91e63" }}>10</span>
                <span
                  style={{
                    fontSize: "0.7em",
                    verticalAlign: "super",
                    color: "#e91e63",
                  }}
                >
                  MINUTE
                </span>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  ml: 0.5,
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  whiteSpace: "nowrap",
                }}
              >
                SCHOOL
              </Typography>
            </Box>
          </Box>

          {/* Search Bar - Hidden on mobile */}
          {!isMobile && (
            <Box
              sx={{
                position: "relative",
                backgroundColor: "#f5f5f5",
                borderRadius: "25px",
                width: "100%",
                maxWidth: "400px",
                mx: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box sx={{ p: 1, pl: 2 }}>
                <Search sx={{ color: "#666", fontSize: 20 }} />
              </Box>
              <InputBase
                placeholder="স্কিলস কোর্স, কিংবা বুক প্রোগ্রাম সার্চ করুন..."
                sx={{
                  flex: 1,
                  py: 1,
                  pr: 2,
                  fontSize: "0.9rem",
                  "& ::placeholder": {
                    color: "#666",
                    opacity: 1,
                  },
                }}
              />
            </Box>
          )}

          {/* Spacer for mobile */}
          {isMobile && <Box sx={{ flexGrow: 1 }} />}

          {/* Navigation Items - Hidden on mobile */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 3, ml: 2 }}>
              {navigationItems.map((item, index) => (
                <Button
                  key={index}
                  sx={{
                    color: "black",
                    textTransform: "none",
                    fontSize: "0.9rem",
                    fontWeight: "normal",
                    minWidth: "auto",
                    p: 1,
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#e91e63",
                    },
                  }}
                  endIcon={
                    item.hasDropdown ? (
                      <KeyboardArrowDown sx={{ fontSize: 16 }} />
                    ) : null
                  }
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Right Side Items */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, md: 2 },
              ml: "auto",
            }}
          >
            {/* Language Selector */}
            <Button
              sx={{
                color: "black",
                textTransform: "none",
                fontSize: "0.9rem",
                fontWeight: "normal",
                minWidth: "auto",
                p: 1,
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              🌐 EN
            </Button>

            {/* Phone Number */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Phone sx={{ color: "#4caf50", fontSize: 18 }} />
              <Typography
                variant="body2"
                sx={{
                  color: "#4caf50",
                  fontWeight: "medium",
                  fontSize: "0.9rem",
                }}
              >
                16910
              </Typography>
            </Box>

            {/* Login Button */}
            <Button
              variant="contained"
              sx={{
                bgcolor: "#4caf50",
                color: "white",
                textTransform: "none",
                borderRadius: "6px",
                px: { xs: 2, md: 3 },
                py: 1,
                fontSize: "0.9rem",
                fontWeight: "medium",
                "&:hover": {
                  bgcolor: "#45a049",
                },
              }}
            >
              লগ-ইন
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={handleMobileMenuToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280,
            pt: 2,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
            mb: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Menu
          </Typography>
          <IconButton onClick={handleMobileMenuToggle}>
            <Close />
          </IconButton>
        </Box>

        {/* Mobile Search */}
        <Box sx={{ px: 2, mb: 2 }}>
          <Box
            sx={{
              backgroundColor: "#f5f5f5",
              borderRadius: "25px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ p: 1, pl: 2 }}>
              <Search sx={{ color: "#666", fontSize: 20 }} />
            </Box>
            <InputBase
              placeholder="সার্চ করুন..."
              sx={{
                flex: 1,
                py: 1,
                pr: 2,
                fontSize: "0.9rem",
              }}
            />
          </Box>
        </Box>

        <List>
          {navigationItems.map((item, index) => (
            <ListItem key={index} sx={{ py: 1 }}>
              <ListItemText
                primary={item.label}
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "1rem",
                    fontWeight: "medium",
                  },
                }}
              />
              {item.hasDropdown && <KeyboardArrowDown />}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
