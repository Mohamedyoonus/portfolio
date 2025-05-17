import React, { useEffect, useRef } from "react";
import { Box, Typography, Button, Stack, useMediaQuery } from "@mui/material";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

// Floating 3D Particles
const FloatingParticles = ({ count = 50 }) => {
  const particles = useRef();
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCnt = count;

  const posArray = new Float32Array(particlesCnt * 3);
  const sizeArray = new Float32Array(particlesCnt);
  const colorArray = new Float32Array(particlesCnt * 3);

  for (let i = 0; i < particlesCnt * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 10;
    if (i % 3 === 0) {
      sizeArray[i / 3] = Math.random() * 0.5 + 0.1;
    }
    colorArray[i] = Math.random() * 0.5 + 0.5;
  }

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(posArray, 3)
  );
  particlesGeometry.setAttribute(
    "color",
    new THREE.BufferAttribute(colorArray, 3)
  );

  useFrame((state) => {
    if (particles.current) {
      const time = state.clock.getElapsedTime();
      particles.current.rotation.x = time * 0.1;
      particles.current.rotation.y = time * 0.05;
    }
  });

  return (
    <points ref={particles}>
      <bufferGeometry attach="geometry" {...particlesGeometry} />
      <pointsMaterial
        attach="material"
        size={0.1}
        sizeAttenuation={true}
        alphaTest={0.01}
        transparent
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const Header = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const scrollDownRef = useRef();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isSmallMobile = useMediaQuery("(max-width: 480px)");

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollDownRef.current.style.transform = "translateY(10px)";
      setTimeout(() => {
        scrollDownRef.current.style.transform = "translateY(0)";
      }, 500);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: isMobile ? 80 : 100,
        damping: isMobile ? 15 : 10,
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [0, isMobile ? -10 : -15, 0],
      rotate: [0, 5, -5, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const textGlowVariants = {
    hidden: { textShadow: "0 0 0px rgba(30, 144, 255, 0)" },
    visible: {
      textShadow: [
        "0 0 0px rgba(30, 144, 255, 0)",
        "0 0 10px rgba(30, 144, 255, 0.5)",
        "0 0 20px rgba(30, 144, 255, 0.3)",
        "0 0 10px rgba(30, 144, 255, 0.5)",
        "0 0 0px rgba(30, 144, 255, 0)",
      ],
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const MotionButton = motion(Button);

  return (
    <Box
      ref={ref}
      sx={{
        flexGrow: 1,
        bgcolor: "#000",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: isSmallMobile ? 2 : isMobile ? 3 : 4,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 3D Background Canvas with Particles Only */}
      <Canvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          opacity: isMobile ? 0.2 : 0.3,
        }}
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingParticles count={isMobile ? 50 : 100} />
      </Canvas>

      {/* Animated Floating Particles (2D) */}
      {[...Array(isMobile ? 15 : 30)].map((_, i) => {
        const size = Math.random() * (isMobile ? 6 : 8) + 2;
        return (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: "50%",
              background: `rgba(30, 144, 255, ${Math.random() * 0.5 + 0.2})`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              zIndex: 1,
              filter: "blur(1px)",
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * (isMobile ? 100 : 200)],
              x: [0, (Math.random() - 0.5) * (isMobile ? 75 : 150)],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Main Animated Text Content */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "800px",
          width: "100%",
          padding: isSmallMobile ? "0 0.5rem" : "0 1rem",
        }}
      >
        <motion.div variants={itemVariants}>
          <Typography
            variant="h4"
            component={motion.div}
            variants={textGlowVariants}
            animate="visible"
            initial="hidden"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(90deg, #fff, #1e90ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              mb: isMobile ? 1 : 2,
              fontSize: isSmallMobile
                ? "1.5rem"
                : isMobile
                ? "1.75rem"
                : "2.125rem",
            }}
          >
            hello!
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: isSmallMobile ? "2.2rem" : isMobile ? "3rem" : "5rem",
              lineHeight: 1.1,
              mb: isMobile ? 0.5 : 1,
              position: "relative",
              display: "inline-block",
            }}
          >
            I'm{" "}
            <motion.span
              style={{
                color: "#1e90ff",
                display: "inline-block",
                position: "relative",
              }}
              animate="float"
              variants={floatingVariants}
            >
              Yoonus
            </motion.span>
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            variant="h6"
            component={motion.div}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            sx={{
              color: "#1e90ff",
              letterSpacing: isMobile ? 1 : 2,
              fontSize: isSmallMobile
                ? "0.9rem"
                : isMobile
                ? "1rem"
                : "1.25rem",
              textTransform: "uppercase",
              mb: isMobile ? 3 : 4,
              display: "inline-block",
            }}
          >
            Web Developer & Designer
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            variant="body1"
            component={motion.div}
            animate={{
              x: [0, 5, -5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
            sx={{
              maxWidth: "600px",
              mx: "auto",
              fontSize: isSmallMobile ? "0.9rem" : isMobile ? "1rem" : "1.1rem",
              lineHeight: 1.7,
              mb: isMobile ? 3 : 4,
              color: "rgba(255,255,255,0.8)",
              position: "relative",
            }}
          >
            Crafting digital experiences with clean code and creative design.
            Specializing in modern web technologies to build fast, responsive,
            and user-friendly applications.
            <motion.span
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(30,144,255,0.5), transparent)",
              }}
              animate={{
                background: [
                  "linear-gradient(90deg, transparent, rgba(30,144,255,0.5), transparent)",
                  "linear-gradient(90deg, transparent, rgba(0,206,201,0.5), transparent)",
                  "linear-gradient(90deg, transparent, rgba(108,92,231,0.5), transparent)",
                  "linear-gradient(90deg, transparent, rgba(30,144,255,0.5), transparent)",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
            />
          </Typography>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants}>
          <Stack
            direction="row" // Always row direction
            spacing={isMobile ? 1 : 3} // Smaller spacing on mobile
            justifyContent="center"
            sx={{
              mb: isMobile ? 4 : 6,
              flexWrap: "wrap", // Allow wrapping if needed
              "& .MuiButton-root": {
                minWidth: isSmallMobile
                  ? "calc(50% - 8px)"
                  : isMobile
                  ? "140px"
                  : "auto",
                fontSize: isSmallMobile
                  ? "0.8rem"
                  : isMobile
                  ? "0.9rem"
                  : "1rem",
                px: isSmallMobile ? 1 : isMobile ? 2 : 5,
                py: isMobile ? 1 : 1.5,
                mx: isSmallMobile ? "4px" : 0, // Small margin on very small screens
              },
            }}
          >
            {/* Primary Button */}
            <MotionButton
              component={motion.a}
              href="/projects"
              size="large"
              whileHover={{
                scale: isMobile ? 1.03 : 1.08,
                boxShadow: "0 0 20px rgba(30,144,255,0.8)",
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                boxShadow: "0 8px 20px rgba(30,144,255,0.4)",
              }}
              transition={{ duration: 0.6, delay: 0.3 }}
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #1e90ff, #00bcd4)",
                color: "#fff",
                borderRadius: "999px",
                fontWeight: "bold",
                textTransform: "uppercase",
                position: "relative",
                overflow: "hidden",
                flex: isSmallMobile ? 1 : "none", // Take equal space on very small screens
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: "-50%",
                  left: "-60%",
                  width: "200%",
                  height: "200%",
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0))",
                  transform: "rotate(30deg)",
                  transition: "left 0.6s ease-in-out",
                },
                "&:hover::after": {
                  left: "100%",
                },
              }}
            >
              View My Work
            </MotionButton>

            {/* Outlined Button with Border Animation */}
            <MotionButton
              component={motion.a}
              href="/contact"
              size="large"
              whileHover={{
                scale: isMobile ? 1.03 : 1.08,
                boxShadow: "0 0 15px rgba(0,206,201,0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              variant="outlined"
              sx={{
                position: "relative",
                borderRadius: "999px",
                color: "#1e90ff",
                borderColor: "#1e90ff",
                fontWeight: "bold",
                textTransform: "uppercase",
                overflow: "hidden",
                zIndex: 1,
                flex: isSmallMobile ? 1 : "none", // Take equal space on very small screens
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "200%",
                  height: "100%",
                  background:
                    "linear-gradient(120deg, transparent, rgba(30,144,255,0.2), transparent)",
                  transition: "left 0.6s ease-in-out",
                  zIndex: -1,
                },
                "&:hover::before": {
                  left: "100%",
                },
                "&:hover": {
                  borderColor: "#00bcd4",
                  color: "#00bcd4",
                  "&::after": {
                    opacity: 1,
                  },
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: "-2px",
                  left: "-2px",
                  right: "-2px",
                  bottom: "-2px",
                  borderRadius: "999px",
                  background:
                    "linear-gradient(90deg, #1e90ff, #00cec9, #6c5ce7)",
                  zIndex: -2,
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                },
              }}
            >
              Contact Me
            </MotionButton>
          </Stack>
        </motion.div>
      </motion.div>

      {/* Scroll Down Icon with Animation */}
      <motion.div
        ref={scrollDownRef}
        animate={{
          y: [0, 15, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          bottom: isMobile ? 30 : 40,
          zIndex: 2,
          color: "#1e90ff",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <KeyboardArrowDownIcon fontSize={isMobile ? "medium" : "large"} />
        <motion.div
          style={{
            width: "2px",
            height: isMobile ? "30px" : "40px",
            background: "linear-gradient(to bottom, #1e90ff, transparent)",
            marginTop: "8px",
          }}
          animate={{
            height: ["0px", isMobile ? "30px" : "40px", "0px"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 0.3,
          }}
        />
      </motion.div>
    </Box>
  );
};

export default Header;
