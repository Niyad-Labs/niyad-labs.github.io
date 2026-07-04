import { Drawer, Box, Button } from "@mui/material";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrollToProgress = (progress) => {
    setOpen(false);
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    window.scrollTo({
      top: maxScroll * progress,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Box
        onClick={() => setOpen(!open)}
        sx={{
          margin: "10px",
          position: "fixed",
          right: 0,
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: 34,
          height: 28,
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {[0, 1, 2].map((i) => (
          <Box
            key={i}
            sx={{
              height: 3,
              borderRadius: 5,
              bgcolor: "white",
              transition: "all .35s ease",

              width: open
                ? i === 0
                  ? "35%"
                  : i === 1
                    ? "70%"
                    : "100%"
                : "100%",

              ml: open ? (i === 0 ? "65%" : i === 1 ? "30%" : "0%") : "0%",
            }}
          />
        ))}
      </Box>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: "100%",
              background:
                "linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,1))",
              // backdropFilter: "blur(20px)",
              color: "white",
              borderLeft: "1px solid rgba(255,255,255,0.1)",
            },
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "center",
            pr: 5,
            gap: 2,
          }}
        >
          <Button color="inherit" onClick={() => scrollToProgress(0.12)}>
            About
          </Button>
          <Button
            color="inherit"
            component="a"
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Button>
          <Button color="inherit" onClick={() => scrollToProgress(0.3)}>
            Services
          </Button>
          <Button color="inherit">Certificates</Button>
          <Button color="inherit" onClick={() => scrollToProgress(0.54)}>
            Tech Stack
          </Button>
          <Button color="inherit" onClick={() => scrollToProgress(0.67)}>
            Projects
          </Button>
          <Button color="inherit" onClick={() => scrollToProgress(1)}>
            Contact
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
