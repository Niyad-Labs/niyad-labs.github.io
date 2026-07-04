import { Html } from "@react-three/drei";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contacts() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailjsServiceId,
        emailjsTemplateId,
        formRef.current,
        emailjsPublicKey,
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current.reset();
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };

  return (
    <Html transform occlude distanceFactor={8} position={[0, 0, -108]}>
      <Box
        sx={{
          width: 600,
          bgcolor: "rgba(20, 20, 20, 0.5)",
          p: 3,
          borderRadius: 3,
          border: "1px solid #727272",
        }}
      >
        <Typography
          variant="h4"
          color="white"
          mb={2}
          sx={{
            fontFamily: "BodoniModaSC",
            fontWeight: "bold",
            padding: "10px",
          }}
        >
          Contact Me
        </Typography>

        <form ref={formRef} onSubmit={sendEmail}>
          <Stack spacing={2}>
            <TextField
              name="name"
              label="Name"
              fullWidth
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  "& fieldset": {
                    borderColor: "#fff",
                  },
                  "&:hover fieldset": {
                    borderColor: "#fff",
                  },
                  "& .Mui-focused fieldset": {
                    borderColor: "#fff",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#c2c2c2",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#fff",
                },
              }}
            />

            <TextField
              name="email"
              label="Email"
              type="email"
              fullWidth
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  "& fieldset": {
                    borderColor: "#fff",
                  },
                  "&:hover fieldset": {
                    borderColor: "#fff",
                  },
                  "& .Mui-focused fieldset": {
                    borderColor: "#fff",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#c2c2c2",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#fff",
                },
              }}
            />

            <TextField
              name="message"
              label="Message"
              multiline
              rows={4}
              fullWidth
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  "& fieldset": {
                    borderColor: "#fff",
                  },
                  "&:hover fieldset": {
                    borderColor: "#fff",
                  },
                  "& .Mui-focused fieldset": {
                    borderColor: "#fff",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#c2c2c2",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#fff",
                },
              }}
            />

            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#c2c2c2",
                color: "#000000",
              }}
            >
              Send Message
            </Button>
          </Stack>
        </form>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "10px 10px 0 10px",
          }}
          mt={3}
        >
          <Tooltip title="Email">
            <IconButton
              component="a"
              href="mailto:muhammedniyad720@email.com"
              sx={{ color: "#c2c2c2" }}
            >
              <EmailIcon
                sx={{
                  fontSize: 40,
                  transition: "0.3s",
                  "&:hover": {
                    color: "#e43232",
                    transform: "scale(1.15)",
                  },
                }}
              />
            </IconButton>
          </Tooltip>

          <Tooltip title="Phone">
            <IconButton
              component="a"
              href="tel:+918606079774"
              sx={{ color: "#c2c2c2" }}
            >
              <PhoneIcon
                sx={{
                  fontSize: 40,
                  "&:hover": {
                    color: "#e43232",
                    transform: "scale(1.15)",
                  },
                }}
              />
            </IconButton>
          </Tooltip>

          <Tooltip title="Instagram">
            <IconButton
              component="a"
              href="https://wwww.instagram.com/mr.niyad"
              target="_blank"
              sx={{ color: "#c2c2c2" }}
            >
              <InstagramIcon
                sx={{
                  fontSize: 40,
                  "&:hover": {
                    color: "#e43232",
                    transform: "scale(1.15)",
                  },
                }}
              />
            </IconButton>
          </Tooltip>

          <Tooltip title="GitHub">
            <IconButton
              component="a"
              href="https://github.com/Niyad-Labs"
              target="_blank"
              sx={{ color: "#c2c2c2" }}
            >
              <GitHubIcon
                sx={{
                  fontSize: 40,
                  "&:hover": {
                    color: "#e43232",
                    transform: "scale(1.15)",
                  },
                }}
              />
            </IconButton>
          </Tooltip>

          <Tooltip title="LinkedIn">
            <IconButton
              component="a"
              href="https://linkedin.com/in/muhammed-niyad"
              target="_blank"
              sx={{
                color: "#c2c2c2",
                "&:hover": {
                  color: "#e43232",
                  transform: "scale(1.15)",
                },
              }}
            >
              <LinkedInIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>
    </Html>
  );
}
