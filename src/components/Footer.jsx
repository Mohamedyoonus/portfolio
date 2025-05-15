import React from 'react';
import { Box, Typography, IconButton, Stack, Divider, Tooltip, useTheme } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Instagram as InstagramIcon,
  ArrowUpward as ArrowUpwardIcon,
  Code as CodeIcon,
  DesignServices as DesignIcon,
  Palette as PaletteIcon
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  const controls = useAnimation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      icon: <GitHubIcon fontSize="medium" />,
      label: 'GitHub',
      url: 'https://github.com/Mohamedyoonus',
      color: '#6e5494'
    },
    {
      icon: <LinkedInIcon fontSize="medium" />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mohamed-yoonus-11288b248/',
      color: '#0077b5'
    },
    {
      icon: <InstagramIcon fontSize="medium" />,
      label: 'Instagram',
      url: 'https://www.instagram.com/_yoonu_z?igsh=ZnNlNTQ1YWtleXhv',
      color: '#E1306C'
    },
    {
      icon: <EmailIcon fontSize="medium" />,
      label: 'Email',
      url: 'mailto:yoonusy655@gmail.com',
      color: '#D44638'
    }
  ];

  const skills = [
    { icon: <CodeIcon />, name: 'Development', color: '#1e90ff' },
    { icon: <DesignIcon />, name: 'UI/UX Design', color: '#6c5ce7' },
    { icon: <PaletteIcon />, name: 'Creativity', color: '#00cec9' }
  ];

  // Enhanced animations
  const floatingAnimation = {
    float: {
      y: ["0%", "-25%", "0%", "15%", "0%"],
      rotate: [0, -8, 8, -5, 0],
      transition: {
        duration: 10,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop"
      }
    },
    hover: {
      scale: 1.3,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const colorPulse = {
    initial: { color: '#ddd' },
    animate: {
      color: ['#ddd', '#fff', link => link.color, '#ddd'],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }
    }
  };

  const particleAnimation = {
    animate: {
      y: [0, -50, 0, 30, 0],
      x: [0, 20, -20, 10, 0],
      opacity: [0.1, 0.6, 0.1],
      transition: {
        duration: Math.random() * 20 + 15,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const skillAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    }),
    hover: {
      scale: 1.1,
      y: -5,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#000',
        color: '#fff',
        py: 8,
        px: 2,
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #1e90ff, #6c5ce7, #00cec9, #1e90ff)',
          backgroundSize: '300% 100%',
          zIndex: 1,
          animation: 'gradientFlow 8s linear infinite'
        },
        '@keyframes gradientFlow': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '300% 50%' }
        }
      }}
    >
      {/* Enhanced Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 20% 30%, rgba(30, 144, 255, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(108, 92, 231, 0.15) 0%, transparent 40%),
            linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.7))
          `,
          zIndex: 0,
          opacity: 0.8
        }}
      />

      {/* Interactive Particles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            background: `hsl(${Math.random() * 60 + 200}, 100%, 70%)`,
            borderRadius: '50%',
            width: `${Math.random() * 10 + 2}px`,
            height: `${Math.random() * 10 + 2}px`,
            opacity: 0,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: 'blur(1px)'
          }}
          variants={particleAnimation}
          animate="animate"
        />
      ))}

      <Box sx={{ 
        position: 'relative', 
        zIndex: 1, 
        maxWidth: '1200px', 
        mx: 'auto',
        backdropFilter: 'blur(2px)'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.17, 0.67, 0.83, 0.67],
            delay: 0.2
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Enhanced Header Section */}
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h6"
              component={motion.div}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              sx={{
                fontWeight: 800,
                mb: 2,
                background: 'linear-gradient(90deg, #1e90ff, #6c5ce7, #00cec9)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                fontSize: { xs: '2.2rem', sm: '3rem', md: '2rem' },
                display: 'inline-block',
                letterSpacing: '0.05em',
                textShadow: '0 0 20px rgba(30, 144, 255, 0.3)'
              }}
            >
              Let's Work Together
            </Typography>
            
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: '#aaa',
                  mb: 4,
                  fontSize: { xs: '1rem', sm: '1.2rem' },
                  fontStyle: 'italic',
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '40%',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #1e90ff, transparent)'
                  }
                }}
              >
                Creating digital experiences that matter
              </Typography>
            </motion.div>
          </Box>

          

          {/* Enhanced Social Links */}
          <Box sx={{ mb: 6 }}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#ddd', 
                mb: 3,
                fontSize: { xs: '1rem', sm: '1.1rem' },
                letterSpacing: '1px'
              }}
            >
              CONNECT WITH ME
            </Typography>
            
           <Stack
  direction="row"
  spacing={{ xs: 3, sm: 4 }}
  justifyContent="center"
  alignItems="center"
  sx={{
    position: 'relative',
    height: '140px',
    mb: 6,
  }}
>
  {socialLinks.map((link, index) => (
    <Tooltip
      key={index}
      title={link.label}
      arrow
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: '#0e0e0e',
            color: link.color,
            fontSize: '0.85rem',
            fontWeight: 600,
            px: 1.5,
            py: 0.75,
            boxShadow: `0 4px 25px ${link.color}50`,
            '& .MuiTooltip-arrow': {
              color: '#0e0e0e',
            },
          },
        },
      }}
    >
      <motion.div
        variants={floatingAnimation}
        initial="initial"
        animate="float"
        whileHover="hover"
        style={{
          position: 'relative',
          filter: `drop-shadow(0 0 10px ${link.color}40)`,
        }}
      >
        <motion.div
          variants={colorPulse}
          animate="animate"
          custom={link}
        >
          <IconButton
            component="a"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              width: 64,
              height: 64,
              background: `radial-gradient(circle, ${link.color}22 0%, transparent 80%)`,
              backdropFilter: 'blur(8px)',
              border: `1px solid ${link.color}40`,
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: `inset 0 0 5px ${link.color}33, 0 0 10px ${link.color}33`,
              '& svg': {
                fontSize: '1.7rem',
                transition: 'color 0.3s ease',
              },
              '&:hover': {
                boxShadow: `0 0 30px ${link.color}99`,
                transform: 'scale(1.1) rotate(3deg)',
              },
            }}
          >
            {React.cloneElement(link.icon, {
              sx: {
                color: link.color,
              },
            })}
          </IconButton>
        </motion.div>

        {/* Layered glow pulse ring */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.6, 0.8],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: index * 0.3,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: '-25%',
            left: '-25%',
            width: '150%',
            height: '150%',
            background: `radial-gradient(circle, ${link.color} 0%, transparent 70%)`,
            borderRadius: '50%',
            zIndex: -1,
            filter: 'blur(10px)',
          }}
        />
      </motion.div>
    </Tooltip>
  ))}
</Stack>

          </Box>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ 
              duration: 1, 
              delay: 0.3,
              ease: [0.17, 0.67, 0.83, 0.67]
            }}
            viewport={{ once: true }}
            style={{ originX: 0 }}
          >
            <Divider sx={{ 
              my: 4, 
              background: 'linear-gradient(90deg, transparent, rgba(30, 144, 255, 0.5), transparent)',
              height: '1px',
              border: 'none'
            }} />
          </motion.div>

          {/* Footer Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            sx={{ mb: 4 }}
          >
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={{ xs: 1, sm: 3 }} 
              justifyContent="center"
              sx={{ mb: 3 }}
            >
              {['Home', 'Projects', 'About', 'Contact'].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.1,
                    textShadow: '0 0 8px rgba(30, 144, 255, 0.7)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Typography
                    component="a"
                    href={`#${item.toLowerCase()}`}
                    variant="body1"
                    sx={{
                      color: '#aaa',
                      fontWeight: 500,
                      '&:hover': { 
                        color: '#1e90ff',
                      },
                      transition: 'all 0.3s ease',
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      textDecoration: 'none',
                      cursor: 'pointer',
                      px: 2,
                      py: 1,
                      borderRadius: '4px'
                    }}
                  >
                    {item}
                  </Typography>
                </motion.div>
              ))}
            </Stack>

            <Typography
              variant="body2"
              sx={{
                color: '#888',
                fontSize: { xs: '0.9rem', sm: '1rem' },
                mb: 3,
                letterSpacing: '0.05em'
              }}
            >
              © {new Date().getFullYear()} Yoonus. All rights reserved.
            </Typography>

            <Stack direction="row" spacing={{ xs: 2, sm: 3 }} justifyContent="center" mb={3}>
              {['Privacy Policy', 'Terms of Service'].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: '0 0 5px rgba(30, 144, 255, 0.5)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Typography
                    component="a"
                    href="#"
                    variant="body2"
                    sx={{
                      color: '#888',
                      '&:hover': { 
                        color: '#6c5ce7',
                      },
                      transition: 'all 0.3s ease',
                      fontSize: { xs: '0.8rem', sm: '0.9rem' },
                      textDecoration: 'none',
                      cursor: 'pointer',
                      px: 1,
                      py: 0.5,
                      borderRadius: '4px'
                    }}
                  >
                    {item}
                  </Typography>
                </motion.div>
              ))}
            </Stack>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                mt: 3,
                color: '#666',
                fontSize: '0.8rem',
                letterSpacing: '0.05em'
              }}
            >
              Built with React, Material-UI, and Framer Motion
            </Typography>
          </motion.div>
        </motion.div>
      </Box>

      {/* Enhanced Scroll to Top Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          rotate: [0, 10, -10, 0],
          transition: { delay: 1 }
        }}
        whileHover={{ 
          scale: 1.1,
          rotate: 360,
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 1000
        }}
      >
        <Tooltip title="Back to top" arrow>
          <IconButton
            onClick={scrollToTop}
            sx={{
              bgcolor: 'rgba(30, 144, 255, 0.9)',
              color: '#fff',
              boxShadow: '0 4px 25px rgba(30, 144, 255, 0.7)',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              '&:hover': {
                bgcolor: 'rgba(0, 119, 204, 0.9)',
                boxShadow: '0 6px 30px rgba(30, 144, 255, 0.9)'
              },
              transition: 'all 0.3s ease',
              width: 56,
              height: 56
            }}
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <ArrowUpwardIcon fontSize="medium" />
            </motion.div>
          </IconButton>
        </Tooltip>
      </motion.div>
    </Box>
  );
};

export default Footer;