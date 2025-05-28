import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Grid,
  Avatar,
  useTheme,
  Container,
  Divider,
  LinearProgress,
  Paper,
  Chip,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import {
  Code,
  DesignServices,
  Storage,
  School,
  Work,
  Star,
  Favorite,
  Share,
  LinkedIn,
  GitHub,
  Email,
  Terminal,
} from "@mui/icons-material";
import { alpha } from "@mui/material/styles";
import { styled } from "@mui/system";

// Custom styled component with glow effect
const GlowCard = styled(Paper)(({ theme, glowcolor }) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    background: `radial-gradient(circle, ${alpha(
      glowcolor,
      0.2
    )} 0%, transparent 70%)`,
    transform: "rotate(30deg)",
    transition: "all 0.5s ease",
    opacity: 0,
  },
  "&:hover::before": {
    opacity: 1,
    animation: "rotateGlow 6s linear infinite",
    "@keyframes rotateGlow": {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    },
  },
}));

const Aboutme = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Enhanced color palette
  const colors = {
    primary: "#6e45e2",
    secondary: "#88d3ce",
    accent: "#ff7e5f",
    dark: "#0a0a0a",
    light: "#f8f9fa",
    success: "#4caf50",
    warning: "#ff9800",
    info: "#2196f3",
  };

  // Enhanced skills data
  const skills = {
    frontend: [
      { name: "React", level: 90, icon: "⚛️" },
      { name: "JavaScript", level: 70, icon: "📜" },
      { name: "HTML/CSS", level: 95, icon: "🎨" },
      { name: "Material-UI", level: 85, icon: "🧩" },
      { name: "Tailwind CSS", level: 80, icon: "🌀" },
    ],
    backend: [
      { name: "Node.js", level: 70, icon: "🟢" },
      { name: "Express", level: 70, icon: "🚂" },
      { name: "REST APIs", level: 60, icon: "🔗" },
    ],
    design: [
      { name: "UI/UX", level: 70, icon: "✨" },
      { name: "Figma", level: 50, icon: "✏️" },
      { name: "Adobe XD", level: 50, icon: "🖌️" },
      { name: "Responsive Design", level: 80, icon: "📱" },
    ],
    tools: [
      { name: "GitHub", level: 85, icon: "🐙" },
      { name: "MySQL", level: 70, icon: "🗃️" },
      { name: "MongoDB", level: 70, icon: "🍃" },
    ],
  };

  // Skill category component
  const SkillCategory = ({ title, icon, skills, color }) => (
    <GlowCard
      glowcolor={color}
      sx={{
        mb: 3,
        p: isMobile ? 2 : 3,
        backgroundColor: "#121212",
        borderRadius: 4,
        boxShadow: `0 4px 20px ${alpha(color, 0.1)}`,
        height: "100%",
        border: `1px solid ${alpha(color, 0.2)}`,
        transition: "all 0.3s ease",
        "&:hover": {
          transform: isMobile ? "none" : "translateY(-5px)",
          boxShadow: `0 8px 30px ${alpha(color, 0.3)}`,
          border: `1px solid ${alpha(color, 0.4)}`,
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          color: color,
          fontWeight: 600,
          textAlign: "center",
          fontSize: isMobile ? "1rem" : "1.25rem",
        }}
      >
        {icon} {title}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <Box sx={{ mb: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 0.5,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography variant="body2" sx={{ minWidth: 24 }}>
                    {skill.icon}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ 
                      fontWeight: 500, 
                      color: "#e0e0e0",
                      fontSize: isMobile ? "0.8rem" : "0.875rem"
                    }}
                  >
                    {skill.name}
                  </Typography>
                </Box>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: "#aaa",
                    fontSize: isMobile ? "0.8rem" : "0.875rem"
                  }}
                >
                  {skill.level}%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={skill.level}
                sx={{
                  height: 6,
                  borderRadius: 4,
                  backgroundColor: "#252525",
                  "& .MuiLinearProgress-bar": {
                    background: `linear-gradient(90deg, ${color}, ${alpha(
                      color,
                      0.7
                    )})`,
                    borderRadius: 4,
                    boxShadow: `0 0 8px ${alpha(color, 0.5)}`,
                  },
                }}
              />
            </Box>
          </motion.div>
        ))}
      </Box>
    </GlowCard>
  );

  return (
    <Box
      id="about"
      sx={{
        py: isMobile ? 6 : 10,
        px: { xs: 2, sm: 4, md: 6 },
        background:
          "radial-gradient(circle at 10% 20%, #0a0a0a 0%, #000000 90%)",
        color: "#ffffff",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Animated background elements */}
      {[...Array(isMobile ? 10 : 20)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            borderRadius: "50%",
            background: `linear-gradient(45deg, ${
              [colors.primary, colors.secondary, colors.accent][i % 3]
            }, ${[colors.secondary, colors.accent, colors.primary][i % 3]})`,
            opacity: Math.random() * 0.2 + 0.05,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: "blur(1.5px)",
            zIndex: 0,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            rotate: [0, 360],
            transition: {
              duration: Math.random() * 25 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            },
          }}
        />
      ))}

      {/* Floating shapes */}
      {!isMobile && (
        <>
          <motion.div
            style={{
              position: "absolute",
              top: "15%",
              left: "5%",
              width: "150px",
              height: "150px",
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              background: `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`,
              opacity: 0.1,
              filter: "blur(20px)",
            }}
            animate={{
              y: [-20, 20],
              x: [-10, 10],
              transition: {
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          />

          <motion.div
            style={{
              position: "absolute",
              bottom: "20%",
              right: "10%",
              width: "200px",
              height: "200px",
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              background: `linear-gradient(45deg, ${colors.accent}, ${colors.primary})`,
              opacity: 0.1,
              filter: "blur(25px)",
            }}
            animate={{
              y: [-30, 30],
              x: [-15, 15],
              transition: {
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          />
        </>
      )}

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mb: isMobile ? 4 : 8 }}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Chip
                label="PROFESSIONAL PROFILE"
                size="small"
                sx={{
                  mb: 2,
                  px: 2,
                  py: 0.5,
                  backgroundColor: alpha(colors.primary, 0.1),
                  color: colors.primary,
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: 1,
                  "& .MuiChip-label": {
                    px: 0.5,
                  },
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  fontSize: isMobile ? "2rem" : { xs: "2.5rem", md: "3.5rem" },
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary}, ${colors.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundSize: "200% auto",
                  animation: "gradient 3s ease infinite",
                  "@keyframes gradient": {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
                  },
                }}
              >
                About Me
              </Typography>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ originX: 0 }}
            >
              <Divider
                sx={{
                  width: 100,
                  height: 4,
                  mx: "auto",
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`,
                  border: "none",
                  borderRadius: 2,
                  boxShadow: `0 0 15px ${alpha(colors.primary, 0.5)}`,
                }}
              />
            </motion.div>
          </Box>
        </motion.div>

        {/* MARK:Profile Section */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: isMobile ? 4 : 8 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ maxWidth: "800px", width: "100%" }}
          >
            <GlowCard
              glowcolor={colors.primary}
              sx={{
                p: isMobile ? 2 : { xs: 3, md: 4 },
                backgroundColor: alpha("#121212", 0.8),
                borderRadius: 4,
                boxShadow: `0 8px 32px ${alpha(colors.primary, 0.2)}`,
                border: `1px solid ${alpha(colors.primary, 0.3)}`,
                backdropFilter: "blur(12px)",
                margin: "0 auto",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Animated background pattern */}
              {!isMobile && (
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    transition: {
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                  style={{
                    position: "absolute",
                    top: "-50%",
                    left: "-50%",
                    width: "200%",
                    height: "200%",
                    background: `conic-gradient(from 0deg, transparent 0%, ${alpha(
                      colors.secondary,
                      0.05
                    )} 10%, transparent 20%)`,
                    zIndex: 0,
                  }}
                />
              )}

              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mb: isMobile ? 2 : 4,
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      mb: isMobile ? 1 : 3,
                      "&::before, &::after": {
                        content: '""',
                        position: "absolute",
                        borderRadius: "50%",
                        border: `2px dashed ${colors.primary}`,
                        animation: "spin 20s linear infinite",
                        "@keyframes spin": {
                          "0%": { transform: "rotate(0deg)" },
                          "100%": { transform: "rotate(360deg)" },
                        },
                      },
                      "&::before": {
                        top: -10,
                        left: -10,
                        right: -10,
                        bottom: -10,
                        opacity: 0.7,
                      },
                      "&::after": {
                        top: -20,
                        left: -20,
                        right: -20,
                        bottom: -20,
                        opacity: 0.3,
                        animationDirection: "reverse",
                      },
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Avatar
                        src="/yass.jpg"
                        alt="Profile"
                        sx={{
                          width: isMobile ? 120 : 180,
                          height: isMobile ? 120 : 180,
                          border: `4px solid ${colors.primary}`,
                          boxShadow: `0 10px 30px ${alpha(
                            colors.primary,
                            0.4
                          )}`,
                          position: "relative",
                          zIndex: 1,
                        }}
                      />
                    </motion.div>
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      fontSize: isMobile ? "1.5rem" : "2.125rem",
                      background: `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Mohamed Yoonus
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: colors.secondary,
                        fontSize: isMobile ? "0.9rem" : "1rem",
                        fontWeight: 500,
                      }}
                    >
                      MERN Stack Developer
                    </Typography>
                  </Box>

                  {/* Social links */}
                  <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                    <motion.div whileHover={{ y: -3 }}>
                      <IconButton
                        href="https://linkedin.com"
                        target="_blank"
                        sx={{
                          backgroundColor: alpha("#0077b5", 0.1),
                          color: "#0077b5",
                          "&:hover": {
                            backgroundColor: alpha("#0077b5", 0.2),
                          },
                        }}
                        size={isMobile ? "small" : "medium"}
                      >
                        <LinkedIn fontSize={isMobile ? "small" : "medium"} />
                      </IconButton>
                    </motion.div>

                    <motion.div whileHover={{ y: -3 }}>
                      <IconButton
                        href="https://github.com"
                        target="_blank"
                        sx={{
                          backgroundColor: alpha("#333", 0.1),
                          color: "#fff",
                          "&:hover": {
                            backgroundColor: alpha("#333", 0.2),
                          },
                        }}
                        size={isMobile ? "small" : "medium"}
                      >
                        <GitHub fontSize={isMobile ? "small" : "medium"} />
                      </IconButton>
                    </motion.div>

                    <motion.div whileHover={{ y: -3 }}>
                      <IconButton
                        href="mailto:contact@example.com"
                        sx={{
                          backgroundColor: alpha(colors.accent, 0.1),
                          color: colors.accent,
                          "&:hover": {
                            backgroundColor: alpha(colors.accent, 0.2),
                          },
                        }}
                        size={isMobile ? "small" : "medium"}
                      >
                        <Email fontSize={isMobile ? "small" : "medium"} />
                      </IconButton>
                    </motion.div>
                  </Box>
                </Box>

                <Typography
                  variant="h5"
                  sx={{
                    mb: isMobile ? 1 : 3,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1.5,
                    color: colors.primary,
                    fontSize: isMobile ? "1.25rem" : "1.5rem",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      width: isMobile ? 8 : 12,
                      height: isMobile ? 8 : 12,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                      boxShadow: `0 0 10px ${colors.primary}`,
                    }}
                  />
                  Professional Summary
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 2,
                    lineHeight: 1.9,
                    fontSize: isMobile ? "0.95rem" : "1.05rem",
                    color: "#e0e0e0",
                    textAlign: "left",
                  }}
                >
                  Motivated and detail-oriented
                  <Box
                    component="span"
                    sx={{ color: colors.primary, fontWeight: 600 }}
                  >
                    {" "}
                    MERN Stack Developer
                  </Box>{" "}
                  with hands-on experience building responsive and user-centric
                  web applications. As a recent
                  <Box
                    component="span"
                    sx={{ color: colors.secondary, fontWeight: 600 }}
                  >
                    {" "}
                    MCA graduate
                  </Box>
                  , I've developed a solid foundation in frontend and backend
                  development through academic projects and freelance work. I
                  specialize in creating
                  <Box component="span" sx={{ fontWeight: 600 }}>
                    {" "}
                    high-performance applications
                  </Box>{" "}
                  with clean architecture and intuitive user interfaces.
                </Typography>
              </Box>
            </GlowCard>
          </motion.div>
        </Box>

        {/* MARK:Skills Section */}
        <Box sx={{ mb: isMobile ? 4 : 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: isMobile ? 2 : 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                color: colors.primary,
                fontSize: isMobile ? "1.5rem" : "2.125rem",
              }}
            >
              <Code fontSize={isMobile ? "medium" : "large"} />
              Skills & Expertise
            </Typography>
          </motion.div>

          <Grid container justifyContent="center" spacing={isMobile ? 2 : 3}>
            {[
              {
                title: "Frontend",
                icon: <Code sx={{ color: colors.primary }} />,
                skills: skills.frontend,
                color: colors.primary,
              },
              {
                title: "Backend",
                icon: <Storage sx={{ color: colors.secondary }} />,
                skills: skills.backend,
                color: colors.secondary,
              },
              {
                title: "UI/UX",
                icon: <DesignServices sx={{ color: colors.accent }} />,
                skills: skills.design,
                color: colors.accent,
              },
              {
                title: "Tools & DB",
                icon: <Terminal sx={{ color: "#9575cd" }} />,
                skills: skills.tools,
                color: "#9575cd",
              },
            ].map((category, index) => (
              <Grid item xs={6} sm={6} md={6} lg={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <SkillCategory
                    title={category.title}
                    icon={category.icon}
                    skills={category.skills}
                    color={category.color}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* MARK:Fun Facts Section */}
        <Box sx={{ mb: isMobile ? 4 : 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: isMobile ? 2 : 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                color: colors.accent,
                fontSize: isMobile ? "1.5rem" : "2.125rem",
              }}
            >
              <Star fontSize={isMobile ? "medium" : "large"} />
              Fun Facts
            </Typography>
          </motion.div>

          <Grid container spacing={isMobile ? 2 : 3} justifyContent="center">
            {[
              {
                text: "5+ Projects",
                color: colors.primary,
                icon: <Code sx={{ color: "#fff" }} />,
              },
              {
                text: "5+ Clients",
                color: colors.secondary,
                icon: <Favorite sx={{ color: "#fff" }} />,
              },
              {
                text: "500+ Hours",
                color: "#9575cd",
                icon: <Terminal sx={{ color: "#fff" }} />,
              },
            ].map((fact, index) => (
              <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
                <motion.div whileHover={{ y: isMobile ? 0 : -5 }} whileTap={{ scale: 0.98 }}>
                  <GlowCard
                    glowcolor={fact.color}
                    sx={{
                      p: isMobile ? 1.5 : 3,
                      backgroundColor: "#121212",
                      borderRadius: 3,
                      border: `1px solid ${alpha(fact.color, 0.2)}`,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: isMobile ? 40 : 60,
                        height: isMobile ? 40 : 60,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `linear-gradient(135deg, ${
                          fact.color
                        }, ${alpha(fact.color, 0.7)})`,
                        mb: isMobile ? 1 : 2,
                      }}
                    >
                      {React.cloneElement(fact.icon, {
                        fontSize: isMobile ? "small" : "medium"
                      })}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ 
                        fontWeight: 600, 
                        color: "#fff",
                        fontSize: isMobile ? "0.9rem" : "1.25rem"
                      }}
                    >
                      {fact.text}
                    </Typography>
                  </GlowCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Aboutme;