import React from 'react';
import { motion } from 'framer-motion';
import { 
  School, 
  Work, 
  Code,
  Timeline,
  Star,
  StarBorder,
  ImportContacts
} from '@mui/icons-material';
import { 
  Box, 
  Typography, 
  Container, 
  Divider, 
  Chip,
  useTheme,
  Paper,
  Avatar,
  Grid
} from '@mui/material';

const Eduandexp = () => {
  const theme = useTheme();

  const education = [
    {
      id: 1,
      degree: 'MCA (Computer Applications)',
      institution: 'Jamal Mohamed College (Autonomous)',
      period: '2023 - 2025',
      achievements: [
        'Graduated with honors',
        'Published research paper on AI applications',
        'Lead developer for college tech fest'
      ],
      icon: <School fontSize="medium" />
    },
    {
      id: 2,
      degree: 'BSc in Computer Science',
      institution: 'Jamal Mohamed College (Autonomous)',
      period: '2020 - 2023',
      achievements: [
        'Specialized in Web Technologies',
        'Class representative for CS department'
      ],
      icon: <ImportContacts fontSize="medium" />
    }
  ];

  const experience = [
    {
      id: 1,
      role: 'Web Developer',
      company: 'CodeTech IT Solutions',
      period: 'April 2025 - May 2025',
      responsibilities: [
        'Developed responsive web applications using React and Node.js',
        'Optimized application performance by 40%',
      ],
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'GitHub'],
      icon: <Work fontSize="medium" />
    },
    {
      id: 2,
      role: 'Freelance Developer',
      company: 'Freelance',
      period: 'Jan 2025 - May 2025',
      responsibilities: [
        'Designed responsive UIs using React and Material-UI',
        'Integrated animations with Framer Motion',
      ],
      skills: [
        'React.js', 'JavaScript', 'Material-UI',
        'Tailwind CSS', 'Framer Motion', 'HTML5', 'CSS3'
      ],
      icon: <Code fontSize="medium" />
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Box
      id="education-experience"
      sx={{
        py: 6,
        backgroundColor: '#000000',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `linear-gradient(135deg, ${theme.palette.primary.dark}20 0%, transparent 100%)`,
          zIndex: 0
        }
      }}
    >
      {/* Top Gradient Divider */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #00cec9, #6c5ce7, #1e90ff)',
          zIndex: 1,
        }}
      />

      {/* Bottom Gradient Divider (already present) */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #00cec9, #6c5ce7, #1e90ff)',
          zIndex: 1,
        }}
      />
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

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 4, position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="overline"
              sx={{
                color: theme.palette.secondary.main,
                letterSpacing: 2,
                fontSize: '0.8rem',
                display: 'block',
                mb: 0.5
              }}
            >
              JOURNEY
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 1,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              Education & Experience
            </Typography>
            <Divider sx={{
              width: 60,
              height: 3,
              mx: 'auto',
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              border: 'none',
              mb: 1
            }} />
            <Typography
              variant="subtitle2"
              sx={{
                color: '#b0b0b0',
                maxWidth: 600,
                mx: 'auto',
                fontSize: '0.9rem'
              }}
            >
              My academic background and professional journey
            </Typography>
          </motion.div>
        </Box>

        {/* Main content section */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            px: { xs: 2, md: 4 },
            py: 4
          }}
        >
          <Grid container spacing={4} sx={{ maxWidth: '1200px', mx: 'auto' }}>
            {/* Education Column */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Timeline color="primary" sx={{ fontSize: '2rem', mr: 1.5 }} />
                  <Typography variant="h5" sx={{ fontWeight: 600, color: '#ffffff' }}>
                    Education
                  </Typography>
                </Box>

                {education.map((edu) => (
                  <motion.div key={edu.id} variants={fadeInUp}>
                    <Paper
                      elevation={2}
                      sx={{
                        p: 2,
                        mb: 3,
                        borderRadius: 2,
                        background: '#121212',
                        borderLeft: `3px solid ${theme.palette.primary.main}`,
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: `0 6px 20px ${theme.palette.primary.main}20`
                        }
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Avatar
                          sx={{
                            bgcolor: theme.palette.primary.main,
                            mr: 1.5,
                            width: 40,
                            height: 40
                          }}
                        >
                          {edu.icon}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#ffffff' }}>
                            {edu.degree}
                          </Typography>
                          <Typography variant="body2" sx={{ color: theme.palette.secondary.main }}>
                            {edu.institution}
                          </Typography>
                          <Chip
                            label={edu.period}
                            size="small"
                            sx={{
                              mt: 0.5,
                              bgcolor: '#000000',
                              color: '#ffffff',
                              fontSize: '0.7rem'
                            }}
                          />
                        </Box>
                      </Box>

                      <Box component="ul" sx={{ pl: 1.5, mt: 1 }}>
                        {edu.achievements.map((achievement, i) => (
                          <Box
                            component="li"
                            key={i}
                            sx={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              mb: 0.5,
                              color: '#e0e0e0',
                              fontSize: '0.9rem'
                            }}
                          >
                            <StarBorder
                              sx={{
                                color: theme.palette.secondary.main,
                                fontSize: '0.8rem',
                                mt: '2px',
                                mr: 0.5
                              }}
                            />
                            <Typography variant="body2">{achievement}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Paper>
                  </motion.div>
                ))}
              </motion.div>
            </Grid>

            {/* Experience Column */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Timeline color="secondary" sx={{ fontSize: '2rem', mr: 1.5 }} />
                  <Typography variant="h5" sx={{ fontWeight: 600, color: '#ffffff' }}>
                    Experience
                  </Typography>
                </Box>

                {experience.map((exp) => (
                  <motion.div key={exp.id} variants={fadeInUp}>
                    <Paper
                      elevation={2}
                      sx={{
                        p: 2,
                        mb: 3,
                        borderRadius: 2,
                        background: '#121212',
                        borderLeft: `3px solid ${theme.palette.secondary.main}`,
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: `0 6px 20px ${theme.palette.secondary.main}20`
                        }
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Avatar
                          sx={{
                            bgcolor: theme.palette.secondary.main,
                            mr: 1.5,
                            width: 40,
                            height: 40
                          }}
                        >
                          {exp.icon}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#ffffff' }}>
                            {exp.role}
                          </Typography>
                          <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
                            {exp.company}
                          </Typography>
                          <Chip
                            label={exp.period}
                            size="small"
                            sx={{
                              mt: 0.5,
                              bgcolor: '#000000',
                              color: '#ffffff',
                              fontSize: '0.7rem'
                            }}
                          />
                        </Box>
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{ color: '#b0b0b0', mb: 1 }}
                      >
                        Key responsibilities:
                      </Typography>

                      <Box component="ul" sx={{ pl: 1.5, mb: 2 }}>
                        {exp.responsibilities.map((item, i) => (
                          <Box
                            component="li"
                            key={i}
                            sx={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              mb: 0.5,
                              color: '#e0e0e0',
                              fontSize: '0.9rem'
                            }}
                          >
                            <Star
                              sx={{
                                color: theme.palette.primary.main,
                                fontSize: '0.8rem',
                                mt: '2px',
                                mr: 0.5
                              }}
                            />
                            <Typography variant="body2">{item}</Typography>
                          </Box>
                        ))}
                      </Box>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {exp.skills.map((skill, i) => (
                          <Chip
                            key={i}
                            label={skill}
                            size="small"
                            sx={{
                              bgcolor: '#000000',
                              color: '#ffffff',
                              border: `1px solid ${theme.palette.divider}`,
                              fontSize: '0.7rem'
                            }}
                          />
                        ))}
                      </Box>
                    </Paper>
                  </motion.div>
                ))}
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Eduandexp;
