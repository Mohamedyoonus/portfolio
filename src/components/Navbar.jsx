import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link,
  Button,
  useScrollTrigger,
  Slide,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger({ threshold: 50 });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeLink, setActiveLink] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      const sections = ['home', 'about', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', },
    { name: 'Projects', href: '/projects', },
    { name: 'Contact', href: '/contact', },
  ];

  const handleLinkClick = (section) => {
    setActiveLink(section);
    setMobileOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        sx={{
          background: scrolled ? 'rgba(15, 15, 20, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(15px)' : 'none',
          boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.2)' : 'none',
          transition: 'all 0.4s ease-in-out',
          py: 1,
          zIndex: 999,
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: { xs: 2, md: 6 },
            width: '100%',
            maxWidth: 'lg',
            mx: 'auto',
            position: 'relative',
          }}
        >
          {/* Mobile Menu Toggle (Left) */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, zIndex: 2 }}>
            <IconButton onClick={toggleMobileMenu} sx={{ color: '#fff' }}>
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>

          {/* Centered Nav Links */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              gap: 4,
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                custom={i}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <Link
                  href={link.href}
                  underline="none"
                  onClick={() => handleLinkClick(link.href.slice(1))}
                  sx={{
                    color: activeLink === link.href.slice(1) ? '#1e90ff' : '#fff',
                    fontWeight: 600,
                    fontSize: '1rem',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-6px',
                      left: 0,
                      width: activeLink === link.href.slice(1) ? '100%' : '0',
                      height: '3px',
                      background: 'linear-gradient(90deg, #1e90ff, #4da6ff)',
                      borderRadius: '2px',
                      transition: 'width 0.3s ease-in-out',
                    },
                    '&:hover': {
                      color: '#1e90ff',
                      '&::after': {
                        width: '100%',
                      },
                    },
                  }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </Box>

          {/* CTA Button (Right) */}
         
        </Toolbar>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                backgroundColor: 'rgba(10, 10, 10, 0.95)',
                backdropFilter: 'blur(12px)',
                padding: '2rem',
                zIndex: 10,
                borderTop: '1px solid rgba(30, 144, 255, 0.1)',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 3,
                }}
              >
                {navLinks.map((link, i) => (
                  <motion.div key={link.href} custom={i} variants={navItemVariants}>
                    <Link
                      href={link.href}
                      underline="none"
                      onClick={() => handleLinkClick(link.href.slice(1))}
                      sx={{
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: activeLink === link.href.slice(1) ? '#1e90ff' : '#fff',
                        '&:hover': {
                          color: '#1e90ff',
                        },
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
