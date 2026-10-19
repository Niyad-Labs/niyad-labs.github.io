import { useEffect, useRef, useState } from "react";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
  GlobalStyles,
} from "@mui/material";
import { ArrowBack, Download, PictureAsPdf, Close } from "@mui/icons-material";
import { tokens } from "../Theme";

const RESUME_URL = import.meta.env.VITE_RESUME_URL;

const formatDate = (value) => {
  if (!value || value === "Present") return value || "";
  const [year, month] = value.split("-");
  if (!year || !month) return value;

  return new Date(Number(year), Number(month) - 1).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

const safeUrl = (value) => {
  if (!value || typeof value !== "string") return undefined;

  try {
    const url = new URL(
      value.startsWith("http://") || value.startsWith("https://")
        ? value
        : `https://${value}`,
    );

    return ["http:", "https:"].includes(url.protocol) ? url.href : undefined;
  } catch {
    return undefined;
  }
};

function Section({ title, children, ats = false }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        component="h2"
        sx={{
          fontSize: ats ? "12pt" : "0.9rem",
          fontWeight: 800,
          textTransform: ats ? "none" : "uppercase",
          letterSpacing: ats ? 0 : "0.12em",
          color: ats ? "#111" : "#5266d8",
          pb: 1,
          mb: 1.5,
          borderBottom: ats ? "1px solid #555" : "1px solid #e4e7ef",
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function ResumeDocument({ data, ats = false, documentRef }) {
  const info = data.personalInfo || {};
  const skills = data.technicalSkills || {};
  const linkStyle = {
    color: ats ? "#111" : "#5266d8",
    textDecoration: ats ? "none" : "none",
    overflowWrap: "anywhere",
  };

  const externalLink = (url, label) => {
    const href = safeUrl(url);
    if (!href) return null;

    return (
      <Typography
        component="a"
        href={href}
        target="_blank"
        rel="noreferrer"
        sx={{ ...linkStyle, fontSize: "0.78rem", px: "3px" }}
      >
        {label}
      </Typography>
    );
  };

  return (
    <Box
      className={`resume-document ${ats ? "resume-ats" : "resume-styled"}`}
      ref={documentRef}
      sx={{
        width: "100%",
        maxWidth: "794px",
        mx: "auto",
        p: ats ? "12mm" : { xs: 2.5, sm: 5 },
        bgcolor: "#fff",
        color: "#202433",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: ats ? "10pt" : "0.9rem",
        lineHeight: ats ? 1.4 : 1.65,
        boxSizing: "border-box",
        boxShadow: ats ? "none" : "0 12px 45px rgba(22,30,60,0.07)",
        border: ats ? "none" : "1px solid #eaecf2",
        borderRadius: ats ? 0 : 3,
        "& p": { m: 0 },
        "& a": { overflowWrap: "anywhere" },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: ats ? "block" : "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 2,
          mb: 3,
          pb: 2.5,
          borderBottom: ats ? "1px solid #555" : "2px solid #5266d8",
        }}
      >
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            component="h1"
            sx={{
              fontSize: ats ? "22pt" : { xs: "1.8rem", sm: "2.3rem" },
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: ats ? 0 : "-0.04em",
              color: "#17213b",
              mb: 1,
              overflowWrap: "anywhere",
            }}
          >
            {info.name}
          </Typography>

          <Typography
            sx={{
              fontSize: ats ? "11pt" : "0.95rem",
              fontWeight: 700,
              color: ats ? "#111" : "#5266d8",
              mb: 1.5,
            }}
          >
            {info.headline}
          </Typography>

          <Stack
            direction="row"
            useFlexGap
            gap={1}
            sx={{ color: "#515a6d", flexWrap: "wrap" }}
          >
            {info.location && (
              <Typography sx={{ fontSize: "0.78rem", pr: "3px" }}>
                {info.location}
              </Typography>
            )}
            {info.availability && (
              <Typography sx={{ fontSize: "0.78rem" }}>
                • {info.availability}
              </Typography>
            )}
          </Stack>

          <Stack
            direction="row"
            flexWrap="wrap"
            useFlexGap
            gap={1.2}
            sx={{ justifyContent: "flex-start", flexWrap: "wrap" }}
          >
            {info.email && (
              <Typography sx={{ fontSize: "0.78rem", px: "3px" }}>
                Email:
                <Typography
                  component="a"
                  href={`mailto:${info.email}`}
                  sx={{ ...linkStyle, fontSize: "0.78rem" }}
                >
                  {info.email}
                </Typography>{" "}
                |
              </Typography>
            )}
            {info.phone && (
              <Typography sx={{ fontSize: "0.78rem", px: "3px" }}>
                Phone no:
                <Typography
                  component="a"
                  href={`tel:${info.phone}`}
                  sx={{ ...linkStyle, fontSize: "0.78rem" }}
                >
                  {info.phone}
                </Typography>{" "}
                |
              </Typography>
            )}
            {externalLink(info.github, "GitHub |")}
            {externalLink(info.portfolio, "Portfolio |")}
            {externalLink(info.linkedin, "LinkedIn ")}
          </Stack>
        </Box>

        {!ats && (
          <Avatar
            sx={{
              display: { xs: "none", sm: "flex" },
              width: 62,
              height: 62,
              bgcolor: "#eef0ff",
              color: "#5266d8",
              fontSize: "1.4rem",
              fontWeight: 800,
            }}
          >
            {(info.name || "N").trim().charAt(0)}
          </Avatar>
        )}
      </Box>

      {/* Summary */}
      {data.professionalSummary && (
        <Section title="Professional Summary" ats={ats}>
          <Typography
            sx={{ fontSize: "inherit", lineHeight: 1.65, textAlign: "justify" }}
          >
            {data.professionalSummary}
          </Typography>
        </Section>
      )}

      {/* Skills */}
      {Object.keys(skills).length > 0 && (
        <Section title="Technical Skills" ats={ats}>
          <Stack gap={1.3} sx={{ textAlign: "justify" }}>
            {Object.entries(skills).map(([category, values]) => (
              <Box key={category}>
                <Typography
                  component="span"
                  sx={{ fontWeight: 800, fontSize: "inherit" }}
                >
                  {category
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (s) => s.toUpperCase())}
                  :{" "}
                </Typography>
                <Typography component="span" sx={{ fontSize: "inherit" }}>
                  {Array.isArray(values) ? values.join(", ") : ""}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Section>
      )}

      {/* Experience */}
      {data.experience?.length > 0 && (
        <Section title="Professional Experience" ats={ats}>
          {data.experience.map((job, index) => (
            <Box key={`${job.title}-${index}`} sx={{ mb: 2.5 }}>
              <Stack
                direction={ats ? "column" : { xs: "column", sm: "row" }}
                justifyContent="space-between"
                gap={0.3}
                sx={{ mb: 1 }}
              >
                <Typography sx={{ fontWeight: 800, fontSize: "inherit" }}>
                  {job.title}
                  {job.type ? ` | ${job.type}` : ""}
                </Typography>
              </Stack>
              <Typography
                sx={{ fontSize: "0.82rem", color: ats ? "#111" : "#687086" }}
              >
                {formatDate(job.startDate)} – {formatDate(job.endDate)}
              </Typography>
              <ul style={{ margin: "0", paddingLeft: "20px" }}>
                {(job.responsibilities || []).map((item, i) => (
                  <li
                    key={i}
                    style={{ marginBottom: "6px", textAlign: "justify" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Section>
      )}

      {/* Projects */}
      {data.projects?.length > 0 && (
        <Section title="Projects" ats={ats}>
          {data.projects.map((project, index) => (
            <Box key={`${project.name}-${index}`} sx={{ mb: 2.7 }}>
              <Typography
                component="h3"
                sx={{
                  fontSize: "inherit",
                  fontWeight: 800,
                  lineHeight: 1.5,
                  mb: 0.4,
                }}
              >
                {project.name}
              </Typography>

              <Typography
                sx={{ fontSize: "0.82rem", color: "#687086", mb: 0.6 }}
              >
                {formatDate(project.startDate)} – {formatDate(project.endDate)}
              </Typography>

              {project.techStack?.length > 0 && (
                <Typography sx={{ fontSize: "0.85rem", mb: 0.7 }}>
                  <strong>Tech Stack:</strong> {project.techStack.join(", ")}
                </Typography>
              )}

              {project.github && (
                <Box sx={{ mb: 0.7 }}>
                  {externalLink(project.github, project.github)}
                </Box>
              )}

              <ul style={{ margin: 0, paddingLeft: "20px" }}>
                {(project.responsibilities || []).map((item, i) => (
                  <li
                    key={i}
                    style={{ marginBottom: "6px", textAlign: "justify" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Section>
      )}

      {/* Education */}
      {data.education?.length > 0 && (
        <Section title="Education" ats={ats}>
          {data.education.map((item, index) => (
            <Box key={`${item.degree}-${index}`} sx={{ mb: 1.7 }}>
              <Typography sx={{ fontWeight: 800, fontSize: "inherit" }}>
                {item.degree}
              </Typography>
              <Typography sx={{ fontSize: "inherit" }}>
                {item.institution}
              </Typography>
              {item.university && (
                <Typography sx={{ fontSize: "0.85rem", color: "#687086" }}>
                  {item.university}
                  {" | "}
                  {item.status ||
                    [item.startYear, item.endYear || item.graduationYear]
                      .filter(Boolean)
                      .join(" – ")}
                </Typography>
              )}
            </Box>
          ))}
        </Section>
      )}

      {/* Core competencies */}
      {data.coreCompetencies?.length > 0 && (
        <Section title="Core Competencies" ats={ats}>
          {ats ? (
            <Typography sx={{ fontSize: "inherit", lineHeight: 1.6 }}>
              {data.coreCompetencies.join(" • ")}
            </Typography>
          ) : (
            <Stack
              direction="row"
              sx={{ flexWrap: "wrap" }}
              useFlexGap
              gap={0.8}
            >
              {data.coreCompetencies.map((item) => (
                <Chip
                  key={item}
                  label={`${item} • `}
                  size="small"
                  sx={{
                    bgcolor: "#f1f3ff",
                    color: "#3447a7",
                    fontWeight: 600,
                    borderRadius: 1.5,
                  }}
                />
              ))}
            </Stack>
          )}
        </Section>
      )}
    </Box>
  );
}

export default function Resume() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const previewRef = useRef(null);
  const atsRef = useRef(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadResume() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(RESUME_URL, {
          signal: controller.signal,
          cache: "no-cache",
        });

        if (!response.ok) {
          throw new Error(`Could not load resume (HTTP ${response.status}).`);
        }

        const data = await response.json();

        if (!data || typeof data !== "object" || !data.personalInfo) {
          throw new Error(
            "The hosted JSON does not have the expected resume structure.",
          );
        }

        setResume(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(
            err.message ||
              "Unable to load your resume. Check the JSON URL and hosting service.",
          );
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadResume();
    return () => controller.abort();
  }, []);

  const [printMode, setPrintMode] = useState("");

  const printResume = (type) => {
    setDialogOpen(false);
    setPrintMode(type); // "ats" or "styled"
  };

  useEffect(() => {
    if (!printMode) return;

    document.documentElement.dataset.resumePrint = printMode;

    const cleanup = () => {
      delete document.documentElement.dataset.resumePrint;
      setPrintMode("");
    };

    window.addEventListener("afterprint", cleanup);

    const frame = window.requestAnimationFrame(() => {
      window.print();
    });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("afterprint", cleanup);
      delete document.documentElement.dataset.resumePrint;
    };
  }, [printMode]);

  return (
    <>
      <GlobalStyles
        styles={{
          "@media print": {
            "@page": {
              size: "A4 portrait",
              margin: "9mm",
            },

            // Hide everything by default
            "body *": {
              visibility: "hidden !important",
            },

            // Show only the resume document and its contents
            ".resume-document, .resume-document *": {
              visibility: "visible !important",
            },

            // Hide page controls and dialogs
            ".resume-toolbar, .resume-modal, .resume-app-chrome": {
              display: "none !important",
            },

            // Remove preview styling that wastes print space
            ".resume-document": {
              position: "static !important",
              left: "auto !important",
              top: "auto !important",
              width: "100% !important",
              maxWidth: "none !important",
              margin: "0 !important",
              padding: "0 !important",
              border: "none !important",
              borderRadius: "0 !important",
              boxShadow: "none !important",
              overflow: "visible !important",
              background: "#fff !important",
              lineHeight: "1.3 !important",
            },

            // Show the selected format only
            "html[data-resume-print='ats'] .resume-styled": {
              display: "none !important",
            },

            "html[data-resume-print='ats'] .resume-ats-source": {
              display: "block !important",
              position: "static !important",
              left: "auto !important",
              width: "100% !important",
              height: "auto !important",
              visibility: "visible !important",
            },

            "html[data-resume-print='ats'] .resume-ats": {
              display: "block !important",
              visibility: "visible !important",
            },

            "html[data-resume-print='styled'] .resume-ats-source": {
              display: "none !important",
            },

            "html[data-resume-print='styled'] .resume-ats": {
              display: "none !important",
            },

            "html[data-resume-print='styled'] .resume-styled": {
              display: "block !important",
            },
          },
        }}
      />
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: colors.grey[200],
          py: { xs: 2, md: 4 },
        }}
      >
        <Container maxWidth="lg">
          <Stack
            className="resume-toolbar"
            direction="row"
            gap={1}
            sx={{
              mb: 3,
              px: { xs: 0, sm: 1 },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              startIcon={<ArrowBack />}
              onClick={() => window.close()}
              sx={{
                color: colors.grey[700],
                textTransform: "none",
                fontWeight: 700,
              }}
            >
              Back
            </Button>

            <Typography
              sx={{
                display: { xs: "none", sm: "block" },
                fontWeight: 700,
                fontSize: "1.2rem",
                color: colors.grey[700],
              }}
            >
              Live Resume Data
            </Typography>

            <Button
              variant="contained"
              startIcon={<Download />}
              onClick={() => setDialogOpen(true)}
              disabled={!resume || loading}
              sx={{
                borderRadius: 2.5,
                px: 2.2,
                py: 1.1,
                textTransform: "none",
                fontWeight: 700,
                bgcolor: "#5266d8",
                boxShadow: "none",
                color: "#fff",
                "&:hover": { bgcolor: "#3f50ba", boxShadow: "none" },
              }}
            >
              Download PDF
            </Button>
          </Stack>

          {loading && (
            <Stack
              alignItems="center"
              justifyContent="center"
              spacing={2}
              sx={{ py: 12 }}
            >
              <CircularProgress />
              <Typography color="text.secondary">Loading resume…</Typography>
            </Stack>
          )}

          {error && (
            <Alert
              severity="error"
              action={
                <Button
                  color="inherit"
                  onClick={() => window.location.reload()}
                >
                  Retry
                </Button>
              }
            >
              {error}
            </Alert>
          )}

          {resume && !loading && !error && (
            <>
              <ResumeDocument data={resume} documentRef={previewRef} />

              {/* ATS export source: kept outside the visible preview */}
              <Box
                className="resume-ats-source"
                aria-hidden="true"
                sx={{
                  position: "absolute",
                  left: "-12000px",
                  top: 0,
                  width: "794px",
                  pointerEvents: "none",
                }}
              >
                <ResumeDocument data={resume} ats documentRef={atsRef} />
              </Box>
            </>
          )}

          <Dialog
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
            fullWidth
            maxWidth="sm"
            PaperProps={{ sx: { borderRadius: 4, p: 1 } }}
          >
            <DialogTitle sx={{ fontWeight: 800, pr: 6 }}>
              Choose your resume format
              <IconButton
                onClick={() => setDialogOpen(false)}
                aria-label="Close dialog"
                sx={{ position: "absolute", right: 12, top: 12 }}
              >
                <Close />
              </IconButton>
            </DialogTitle>

            <DialogContent>
              <DialogContentText sx={{ mb: 2 }}>
                Select the version you want to generate as a PDF.
              </DialogContentText>

              <Stack spacing={1.5}>
                <Paper
                  variant="outlined"
                  sx={{ p: 2, borderRadius: 3, borderColor: "#dfe3f1" }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <PictureAsPdf sx={{ color: "#5266d8", mt: 0.3 }} />
                    <Box sx={{ flex: 1 }}>
                      <Typography fontWeight={800}>
                        ATS-friendly resume
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ my: 0.7 }}
                      >
                        Single-column layout, standard headings, simple text and
                        minimal styling.
                      </Typography>
                      <Button
                        variant="contained"
                        fullWidth
                        onClick={() => printResume("ats")}
                        sx={{ mt: 1, textTransform: "none", borderRadius: 2 }}
                      >
                        Download ATS-friendly PDF
                      </Button>
                    </Box>
                  </Stack>
                </Paper>

                <Paper
                  variant="outlined"
                  sx={{ p: 2, borderRadius: 3, borderColor: "#dfe3f1" }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <PictureAsPdf sx={{ color: "#5266d8", mt: 0.3 }} />
                    <Box sx={{ flex: 1 }}>
                      <Typography fontWeight={800}>Styled resume</Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ my: 0.7 }}
                      >
                        Modern typography, accent colors, and skill chips for
                        direct sharing.
                      </Typography>
                      <Button
                        variant="outlined"
                        fullWidth
                        onClick={() => printResume("styled")}
                        sx={{ mt: 1, textTransform: "none", borderRadius: 2 }}
                      >
                        Download styled PDF
                      </Button>
                    </Box>
                  </Stack>
                </Paper>
              </Stack>
            </DialogContent>

            <DialogActions sx={{ px: 2, pb: 2 }}>
              <Button
                onClick={() => setDialogOpen(false)}
                sx={{ textTransform: "none" }}
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      </Box>
    </>
  );
}
