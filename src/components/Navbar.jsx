import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const pages = [
  "About",
  "Services",
  "Tech Stack",
  "Projects",
  "Contact",
  "Resume",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        // sx={{
        //   background: "rgba(20,20,20,0.25)",
        //   backdropFilter: "blur(10px)",
        //   borderBottom: "1px solid rgba(255,255,255,0.08)",
        // }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              letterSpacing: 2,
              fontFamily: "BodoniModaSC",
            }}
          >
            Niyad-Labs
          </Typography>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
                //   background:" linear-gradient(90deg, rgb(0 0 0 / 0%), rgba(0, 0, 0, 35))",
              gap: 2,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                color="inherit"
                sx={{
                  textTransform: "none",
                  fontSize: "1rem",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu */}
          <IconButton
            color="inherit"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260 }}>
          <List>
            {pages.map((page) => (
              <ListItemButton key={page} onClick={() => setOpen(false)}>
                <ListItemText primary={page} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
