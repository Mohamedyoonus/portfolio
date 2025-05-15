import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Button,
  useTheme,
  TextField,
  IconButton,
  Link
} from '@mui/material';
import {
  CalendarToday,
  Person,
  Category,
  Comment,
  ArrowForward,
  Send,
  Bookmark,
  Share,
  Favorite,
  TrendingUp,
  RocketLaunch
} from '@mui/icons-material';

const Blog = () => {
  const theme = useTheme();

  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Web Development Trends in 2024',
      excerpt: 'Explore the latest web development trends, including AI integration, serverless architecture, and new JavaScript frameworks that are shaping the future of the web.',
      image: './web.avif',
      date: 'May 10, 2024',
      author: 'Sarah Lee',
      category: 'Web Development',
      comments: 5,
      likes: 24,
      url: 'https://www.geeksforgeeks.org/top-web-development-trends',
      readTime: '5 min read',
      trending: true
    },
    {
      id: 2,
      title: 'Mastering UI/UX Principles in Modern Design',
      excerpt: 'A deep dive into the most effective UI/UX strategies that enhance user engagement and boost conversion rates for digital products and services.',
      image: './uiux.jpg',
      date: 'April 22, 2024',
      author: 'David Kim',
      category: 'Design',
      comments: 8,
      likes: 42,
      url: 'https://www.beyonduxdesign.com/book/',
      readTime: '7 min read',
      featured: true
    },
    {
      id: 3,
      title: 'React 18: Features, Benefits, and Migration Tips',
      excerpt: 'Learn about React 18\'s new concurrent features and how you can safely migrate your projects to take advantage of performance improvements.',
      image: './react.jpg',
      date: 'March 15, 2024',
      author: 'Lina Gomez',
      category: 'JavaScript',
      comments: 12,
      likes: 56,
      url: 'https://pieces.app/blog/react-18-a-comprehensive-guide-to-the-latest-features-and-updates',
      readTime: '8 min read',
      popular: true
    }
  ];

  // Color palette
  const colors = {
    primary: '#6e45e2',
    secondary: '#88d3ce',
    accent: '#ff7e5f',
    dark: '#0a0a0a',
    light: '#f8f9fa'
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardHover = {
    initial: { y: 0, scale: 1 },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const pulse = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floating = {
    initial: { y: 0 },
    float: {
      y: [-10, 10],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: "easeInOut"
      }
    }
  };

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: colors.dark,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `radial-gradient(circle at 20% 30%, ${colors.primary}20 0%, transparent 40%)`,
          zIndex: 0
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '100%',
          height: '100%',
          background: `radial-gradient(circle at 80% 70%, ${colors.secondary}15 0%, transparent 40%)`,
          zIndex: 0
        }
      }}
    >
      {/* Animated Background Elements */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            background: `linear-gradient(45deg, ${[colors.primary, colors.secondary, colors.accent][i % 3]}, ${[colors.secondary, colors.accent, colors.primary][i % 3]})`,
            borderRadius: '50%',
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            opacity: Math.random() * 0.2 + 0.05,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: 'blur(1.5px)'
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            rotate: [0, 360],
            transition: {
              duration: Math.random() * 25 + 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear'
            }
          }}
        />
      ))}

      {/* Floating Shapes */}
      <motion.div
        style={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          width: '100px',
          height: '100px',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          background: `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`,
          opacity: 0.15,
          filter: 'blur(15px)'
        }}
        animate={floating}
      />
      
      <motion.div
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '150px',
          height: '150px',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          background: `linear-gradient(45deg, ${colors.accent}, ${colors.primary})`,
          opacity: 0.1,
          filter: 'blur(20px)'
        }}
        animate={{
          ...floating.float,
          y: [-20, 20],
          transition: {
            ...floating.float.transition,
            duration: 5
          }
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div
              animate="pulse"
              variants={pulse}
            >
              <Chip
                label="Latest Articles"
                icon={<ArrowForward sx={{ fontSize: '0.8rem' }} />}
                sx={{
                  mb: 2,
                  px: 1,
                  py: 0.5,
                  backgroundColor: '#1e1e1e',
                  color: colors.accent,
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  '& .MuiChip-icon': {
                    color: colors.accent
                  }
                }}
              />
            </motion.div>
            
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mb: 2,
                color: '#ffffff',
                fontSize: { xs: '2rem', md: '2.8rem' },
                lineHeight: 1.2
              }}
            >
              Insights From Our{' '}
              <Box component="span" sx={{ 
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary}, ${colors.accent})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% auto',
                animation: 'gradient 3s ease infinite'
              }}>
                Tech Experts
              </Box>
            </Typography>
            
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              style={{ originX: 0 }}
            >
              <Divider
                sx={{
                  width: 80,
                  height: 4,
                  mx: 'auto',
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`,
                  border: 'none',
                  mb: 3,
                  borderRadius: 2
                }}
              />
            </motion.div>
            
            <Typography
              variant="subtitle1"
              sx={{
                color: '#a0a0a0',
                maxWidth: 700,
                mx: 'auto',
                fontSize: '1.1rem',
                lineHeight: 1.6
              }}
            >
              Discover the latest trends, tutorials, and insights in web development, design, and technology from our team of experts.
            </Typography>
          </Box>
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 4,
              py: 2
            }}
          >
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={fadeInUp}
                whileHover="hover"
                initial="initial"
                animate="animate"
              >
                <motion.div variants={cardHover}>
                  <Card
                    sx={{
                      height: '100%',
                      background: '#121212',
                      borderRadius: 3,
                      overflow: 'hidden',
                      border: '1px solid #1e1e1e',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: `0 15px 35px ${colors.primary}30`,
                        borderColor: colors.primary
                      }
                    }}
                  >
                    <Box sx={{ position: 'relative' }}>
                      {post.trending && (
                        <Box sx={{
                          position: 'absolute',
                          top: 16,
                          left: 16,
                          zIndex: 2
                        }}>
                          <Chip
                            icon={<TrendingUp sx={{ fontSize: '16px' }} />}
                            label="Trending"
                            size="small"
                            sx={{
                              backgroundColor: colors.accent,
                              color: '#000',
                              fontWeight: 700,
                              fontSize: '0.7rem'
                            }}
                          />
                        </Box>
                      )}
                      
                      {post.featured && (
                        <Box sx={{
                          position: 'absolute',
                          top: 16,
                          left: 16,
                          zIndex: 2
                        }}>
                          <Chip
                            icon={<RocketLaunch sx={{ fontSize: '16px' }} />}
                            label="Featured"
                            size="small"
                            sx={{
                              backgroundColor: colors.primary,
                              color: '#fff',
                              fontWeight: 700,
                              fontSize: '0.7rem'
                            }}
                          />
                        </Box>
                      )}
                      
                      <Link href={post.url} underline="none">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CardMedia
                            component="img"
                            height="220"
                            image={post.image}
                            alt={post.title}
                            sx={{ 
                              objectFit: 'cover',
                              width: '100%'
                            }}
                          />
                        </motion.div>
                      </Link>
                      
                      <Box sx={{ 
                        position: 'absolute', 
                        top: 16, 
                        right: 16,
                        display: 'flex',
                        gap: 1
                      }}>
                        <motion.div whileHover={{ scale: 1.1 }}>
                          <IconButton size="small" sx={{ 
                            backgroundColor: '#1e1e1e',
                            '&:hover': {
                              backgroundColor: colors.primary
                            }
                          }}>
                            <Bookmark fontSize="small" sx={{ color: '#ffffff' }} />
                          </IconButton>
                        </motion.div>
                        
                        <motion.div whileHover={{ scale: 1.1 }}>
                          <IconButton size="small" sx={{ 
                            backgroundColor: '#1e1e1e',
                            '&:hover': {
                              backgroundColor: colors.primary
                            }
                          }}>
                            <Share fontSize="small" sx={{ color: '#ffffff' }} />
                          </IconButton>
                        </motion.div>
                      </Box>
                    </Box>
                    
                    <CardContent sx={{ px: 3, pt: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Chip
                          label={post.category}
                          size="small"
                          icon={<Category fontSize="small" />}
                          sx={{
                            backgroundColor: '#1e1e1e',
                            color: colors.secondary,
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            height: 24,
                            '& .MuiChip-icon': {
                              color: colors.secondary,
                              fontSize: '0.8rem',
                              ml: 0.5
                            }
                          }}
                        />
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <Favorite sx={{ color: colors.accent, fontSize: 16 }} />
                          <Typography variant="caption" sx={{ color: '#a0a0a0', fontSize: '0.75rem' }}>
                            {post.likes}
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Link href={post.url} underline="none" color="inherit">
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{
                            fontWeight: 700,
                            color: '#ffffff',
                            fontSize: '1.25rem',
                            mb: 1.5,
                            lineHeight: 1.4,
                            minHeight: 68,
                            '&:hover': {
                              color: colors.primary
                            }
                          }}
                        >
                          {post.title}
                        </Typography>
                      </Link>
                      
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#a0a0a0',
                          mb: 3,
                          fontSize: '0.95rem',
                          lineHeight: 1.6,
                          minHeight: 70
                        }}
                      >
                        {post.excerpt}
                      </Typography>
                      
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 2
                      }}>
                        <motion.div whileHover={{ scale: 1.05 }}>
                          <Button
                            variant="contained"
                            size="small"
                            href={post.url}
                            component={Link}
                            endIcon={<ArrowForward />}
                            sx={{
                              backgroundColor: '#1e1e1e',
                              color: '#ffffff',
                              textTransform: 'none',
                              fontSize: '0.85rem',
                              px: 2.5,
                              py: 1,
                              borderRadius: 2,
                              '&:hover': {
                                background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`
                              }
                            }}
                          >
                            Read Article
                          </Button>
                        </motion.div>
                        
                        <Typography variant="caption" sx={{ 
                          color: '#707070',
                          fontSize: '0.75rem',
                          fontWeight: 500
                        }}>
                          {post.readTime}
                        </Typography>
                      </Box>
                    </CardContent>
                    
                    <Box
                      sx={{
                        px: 3,
                        pb: 2.5,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderTop: '1px solid #1e1e1e',
                        mt: 1
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Person sx={{ color: colors.secondary, fontSize: 16 }} />
                        <Typography variant="caption" sx={{ color: '#a0a0a0', fontSize: '0.8rem' }}>
                          {post.author}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <CalendarToday sx={{ color: colors.primary, fontSize: 14 }} />
                          <Typography variant="caption" sx={{ color: '#a0a0a0', fontSize: '0.8rem' }}>
                            {post.date}
                          </Typography>
                        </Box>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <Comment sx={{ color: colors.accent, fontSize: 14 }} />
                          <Typography variant="caption" sx={{ color: '#a0a0a0', fontSize: '0.8rem', mr: 1 }}>
                            {post.comments}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <Box sx={{ 
            textAlign: 'center', 
            mt: 10,
            mb: 4,
            backgroundColor: '#121212',
            borderRadius: 4,
            p: 6,
            border: `1px solid ${colors.primary}30`,
            position: 'relative',
            overflow: 'hidden',
            boxShadow: `0 10px 30px ${colors.primary}20`,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: `linear-gradient(135deg, ${colors.primary}10 0%, transparent 100%)`,
              zIndex: 0
            }
          }}>
            <motion.div
              animate={{
                rotate: [0, 360],
                transition: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: `conic-gradient(from 0deg, transparent 0%, ${colors.secondary}10 10%, transparent 20%)`,
                zIndex: 0
              }}
            />
            
            <Typography variant="h5" sx={{ 
              mb: 2, 
              fontWeight: 700, 
              color: '#ffffff',
              position: 'relative',
              zIndex: 1
            }}>
              Stay Updated With Our Latest Posts
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: '#a0a0a0',
                mb: 4,
                maxWidth: 600,
                mx: 'auto',
                fontSize: '1.05rem',
                position: 'relative',
                zIndex: 1
              }}
            >
              Join our newsletter to receive the newest articles and resources directly in your inbox.
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              maxWidth: 500, 
              mx: 'auto',
              position: 'relative',
              zIndex: 1
            }}>
              <motion.div whileHover={{ y: -2 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Your email address"
                  size="small"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#1e1e1e',
                      borderRadius: 2,
                      '& fieldset': {
                        borderColor: '#2e2e2e',
                      },
                      '&:hover fieldset': {
                        borderColor: colors.primary,
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: colors.primary,
                      },
                    },
                    '& .MuiInputBase-input': {
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      py: 1.5
                    }
                  }}
                />
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  endIcon={<Send />}
                  sx={{
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                    color: '#ffffff',
                    textTransform: 'none',
                    fontWeight: 600,
                    px: 3.5,
                    borderRadius: 2,
                    whiteSpace: 'nowrap',
                    boxShadow: `0 4px 15px ${colors.primary}40`,
                    '&:hover': {
                      boxShadow: `0 6px 20px ${colors.primary}60`
                    }
                  }}
                >
                  Subscribe
                </Button>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Blog;