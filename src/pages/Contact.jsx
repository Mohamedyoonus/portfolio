import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  useTheme,
  IconButton,
  Snackbar,
  Alert,
  Divider
} from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // WhatsApp redirection
    const whatsappNumber = '917449112303'; // your number in international format without +
    const message = `Hi, I am ${formData.name} (%0AEmail: ${formData.email}) %0A%0A${formData.message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappURL, '_blank');

    setSnackbarMessage('Redirecting to WhatsApp...');
    setSnackbarSeverity('success');
    setOpenSnackbar(true);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        py: 8,
        px: { xs: 2, sm: 4 },
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            background: '#1e90ff',
            borderRadius: '50%',
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            opacity: Math.random() * 0.5 + 0.1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            transition: {
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }
          }}
        />
      ))}

      <Container maxWidth="md" sx={{ zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              textAlign: 'center',
              fontSize: { xs: '2rem', md: '3rem' },
              color: theme.palette.primary.main,
              position: 'relative',
            }}
          >
            Get In Touch
            <Box
              component="span"
              sx={{
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: '2px',
              }}
            />
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              mb: 6,
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            Have a question, a project idea, or just want to say hello? Feel free to reach out.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: '#111',
                  borderRadius: 4,
                  p: 4,
                  boxShadow: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  variant="outlined"
                  InputLabelProps={{ style: { color: '#ccc' } }}
                  InputProps={{ style: { color: '#fff' } }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  variant="outlined"
                  InputLabelProps={{ style: { color: '#ccc' } }}
                  InputProps={{ style: { color: '#fff' } }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  error={!!errors.message}
                  helperText={errors.message}
                  variant="outlined"
                  InputLabelProps={{ style: { color: '#ccc' } }}
                  InputProps={{ style: { color: '#fff' } }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<SendIcon />}
                  onClick={handleSubmit}
                >
                  Send Message
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: '#111',
                  borderRadius: 4,
                  p: 4,
                  boxShadow: 4,
                  color: '#fff',
                }}
              >
                <Typography variant="h5" sx={{ mb: 3, color: theme.palette.primary.main }}>
                  Contact Information
                </Typography>

                <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                  <ContactMailIcon sx={{ mr: 2, color: theme.palette.secondary.main }} />
                  <Typography>yoonusy655@email.com</Typography>
                </Box>

                <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                  <PhoneIcon sx={{ mr: 2, color: theme.palette.secondary.main }} />
                  <Typography>+91 7449112303</Typography>
                </Box>

                <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                  <LocationOnIcon sx={{ mr: 2, color: theme.palette.secondary.main }} />
                  <Typography>Ramnathapuram, Tamilnadu</Typography>
                </Box>

                <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.2)' }} />

                <Typography variant="h6" sx={{ mb: 2 }}>
                  Connect With Me
                </Typography>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <IconButton
                    component="a"
                    href="https://linkedin.com"
                    target="_blank"
                    sx={{
                      color: '#fff',
                      backgroundColor: '#1a1a1a',
                      '&:hover': {
                        backgroundColor: '#0077b5'
                      }
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://github.com"
                    target="_blank"
                    sx={{
                      color: '#fff',
                      backgroundColor: '#1a1a1a',
                      '&:hover': {
                        backgroundColor: '#333'
                      }
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://instagram.com"
                    target="_blank"
                    sx={{
                      color: '#fff',
                      backgroundColor: '#1a1a1a',
                      '&:hover': {
                        backgroundColor: '#e1306c'
                      }
                    }}
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://facebook.com"
                    target="_blank"
                    sx={{
                      color: '#fff',
                      backgroundColor: '#1a1a1a',
                      '&:hover': {
                        backgroundColor: '#1877f2'
                      }
                    }}
                  >
                    <FacebookIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
