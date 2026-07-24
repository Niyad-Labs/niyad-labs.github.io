import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Stack,
  Button,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function CertificateCard({ certificate, index, onOpen }) {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: 4,
        overflow: "hidden",
        bgcolor: "#00000052",
        border: "1px solid",
        borderColor: "divider",
        transition: "0.3s",
        display: "flex",
        flexDirection: "column",

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: 8,
        },
      }}
    >
      <CardMedia
        component="img"
        image={certificate.image}
        alt={certificate.title}
        sx={{
          height: 220,
          objectFit: "cover",
          cursor: "pointer",
        }}
        onClick={() => onOpen(index)}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Stack spacing={2}>
          <Chip
            label={certificate.category}
            size="small"
            sx={{ width: "fit-content", bgcolor: "secondary.dark" }}
          />

          <Typography variant="h6" fontWeight={700} lineHeight={1.3}>
            {certificate.title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {certificate.provider}
          </Typography>

          <Stack spacing={2}>
            <Button
              variant="contained"
              startIcon={<VisibilityIcon />}
              onClick={() => onOpen(index)}
              fullWidth
            >
              View
            </Button>

            {certificate.credential && (
              <Button
                width="100%"
                variant="outlined"
                color="secondary"
                href={certificate.credential}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<OpenInNewIcon />}
              >
                Credential
              </Button>
            )}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
