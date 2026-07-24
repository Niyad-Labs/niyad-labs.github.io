import { useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Stack,
  Button,
  Box,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DownloadIcon from "@mui/icons-material/Download";

export default function CertificateViewer({
  open,
  onClose,
  certificates,
  selectedIndex,
  setSelectedIndex,
}) {
  const certificate = certificates[selectedIndex];

  const previous = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1,
    );
  }, [certificates.length, setSelectedIndex]);

  const next = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1,
    );
  }, [certificates.length, setSelectedIndex]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") previous();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, previous, next, onClose]);

  if (!certificates.length) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen
      slotProps={{
        paper: {
          sx: {
            background: "#000000a1",
            backgroundImage: "none",
          },
        },
      }}
    >
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 5,
          px: 3,
          overflowY: "auto",

          "&::-webkit-scrollbar": {
            display: "none",
          },

          scrollbarWidth: "none",
        }}
      >
        {/* Close */}

        <IconButton
          onClick={onClose}
          sx={{
            position: "fixed",
            right: 20,
            top: 35,
            color: "white",
            bgcolor: "rgba(87, 87, 87, 0.5)",
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Previous */}

        <IconButton
          onClick={previous}
          sx={{
            position: "fixed",
            left: 20,
            top: "40%",
            color: "white",
            bgcolor: "rgba(87, 87, 87, 0.5)",
          }}
        >
          <NavigateBeforeIcon fontSize="large" />
        </IconButton>

        {/* Next */}

        <IconButton
          onClick={next}
          sx={{
            position: "fixed",
            right: 20,
            top: "40%",
            color: "white",
            bgcolor: "rgba(87, 87, 87, 0.5)",
          }}
        >
          <NavigateNextIcon fontSize="large" />
        </IconButton>
        <Box sx={{ width: "100%", maxWidth: 450, m: "auto" }}>
          {/* Image */}

          <Box
            component="img"
            src={certificate.image}
            alt={certificate.title}
            sx={{
              width: "100%",
              maxWidth: 500,
              maxHeight: "70vh",
              objectFit: "contain",
              borderRadius: 3,
              boxShadow: 8,
            }}
          />

          {/* Info */}

          <Stack spacing={1} alignItems="left" mt={4}>
            <Typography
              variant="h4"
              fontWeight={700}
              color="white"
              textAlign="left"
            >
              {certificate.title}
            </Typography>

            <Typography color="grey.400">{certificate.provider}</Typography>

            <Typography color="primary">{certificate.category}</Typography>

            <Stack
              direction="row"
              spacing={2}
              mt={2}
              flexWrap="wrap"
              justifyContent="center"
            >
              {certificate.credential && (
                <Button
                  variant="contained"
                  startIcon={<OpenInNewIcon />}
                  href={certificate.credential}
                  target="_blank"
                >
                  View Credential
                </Button>
              )}

              <Button
                variant="outlined"
                color="inherit"
                startIcon={<DownloadIcon />}
                component="a"
                href={certificate.image}
                download
              >
                Download
              </Button>
            </Stack>
            <Typography mt={2} color="grey.500">
              {selectedIndex + 1} / {certificates.length}
            </Typography>
          </Stack>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
