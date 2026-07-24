import { useMemo, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Chip,
  Stack,
  TextField,
  Grid,
  useTheme,
} from "@mui/material";
import { tokens } from "../Theme";
import SearchIcon from "@mui/icons-material/Search";

import CertificateCard from "../components/CertificateCard";
import CertificateViewer from "../components/CertificateViewer";
import { certificates } from "../data/certificates";

export default function Certificates() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const categories = [
    "All",
    ...new Set(certificates.map((item) => item.category)),
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredCertificates = useMemo(() => {
    return certificates.filter((certificate) => {
      const categoryMatch =
        selectedCategory === "All" || certificate.category === selectedCategory;

      const searchMatch =
        certificate.title.toLowerCase().includes(search.toLowerCase()) ||
        certificate.provider.toLowerCase().includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, search]);

  const handleOpen = (index) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: colors.honeyBg,
        backgroundSize: "66px 114.18px",
        color: colors.grey[100],
      }}
    >
      <Container maxWidth="xl" sx={{ py: 8 }}>
        {/* Heading */}

        <Typography variant="h3" fontWeight={700} gutterBottom>
          Certificates
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={4}>
          Professional certifications earned across programming, web
          development, artificial intelligence, design, databases, cloud
          technologies, and software engineering.
        </Typography>

        {/* Search */}

        <TextField
          fullWidth
          placeholder="Search certificates..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: <SearchIcon sx={{ mr: 1 }} />,
          }}
          sx={{ mb: 4 }}
        />

        {/* Categories */}

        <Stack
  direction="row"
  spacing={1}
  sx={{
    overflowX: "auto",
    overflowY: "hidden",
    flexWrap: "nowrap",
    whiteSpace: "nowrap",
    pb: 1,

    "&::-webkit-scrollbar": {
      height: 6,
    },

    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#666",
      borderRadius: 10,
    },
  }}
>
  {categories.map((category) => (
    <Chip
      key={category}
      label={category}
      onClick={() => setSelectedCategory(category)}
      sx={{
        flexShrink: 0, // Prevent shrinking
        px: 1,
        borderRadius: 6,
        transition: "0.3s",

        bgcolor:
          selectedCategory === category
            ? "secondary.dark"
            : "transparent",

        color:
          selectedCategory === category
            ? "#fff"
            : colors.grey[100],

        border: "1px solid",
        borderColor:
          selectedCategory === category
            ? "secondary.main"
            : "grey.700",

        "&:hover": {
          bgcolor: "secondary.dark",
        },
      }}
    />
  ))}
</Stack>

        {/* Count */}

        <Typography variant="subtitle1" color="text.secondary" sx={{ my: 2 }}>
          {filteredCertificates.length} Certificate
          {filteredCertificates.length !== 1 && "s"}
        </Typography>

        {/* Grid */}

        <Grid container spacing={3}>
          {filteredCertificates.map((certificate, index) => (
            <Grid
              key={index}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
                lg: 3,
              }}
            >
              <CertificateCard
                certificate={certificate}
                index={index}
                onOpen={handleOpen}
              />
            </Grid>
          ))}
        </Grid>

        {/* Viewer */}

        <CertificateViewer
          open={open}
          onClose={() => setOpen(false)}
          certificates={filteredCertificates}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </Container>
    </Box>
  );
}
