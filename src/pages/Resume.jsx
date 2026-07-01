import { Button, Container, Stack, Typography } from "@mui/material";
import { ArrowBack, Download } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Resume() {
  const navigate = useNavigate();

  const fileId = "1eRvf69PZt2swr_UJFxk4kLBcqtUCVId-";

  const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          flexDirection: "row",
          flexWarp: "warp",
        }}
      >
        <Button
          variant="outlined"
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>

        <Typography variant="h4" style={{padding:"0 10px 0 10px"}}>Resume</Typography>

        <Button variant="contained" startIcon={<Download />} href={downloadUrl}>
          Download
        </Button>
      </Stack>

      <iframe
        title="Resume"
        src={previewUrl}
        width="100%"
        height="900"
        style={{
          border: "none",
          borderRadius: "12px",
        }}
      />
    </Container>
  );
}
