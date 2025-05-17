import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Code, Visibility, GitHub, OpenInNew } from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';

// Styled components
const ProjectsContainer = styled(motion.div)`
  padding: ${props => props.isMobile ? '2rem 1rem' : '4rem 2rem'};
  max-width: 1400px;
  margin: 0 auto;
  background-color: #0a0a0a;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 30%, rgba(0, 118, 210, 0.15) 0%, transparent 40%);
    z-index: 0;
  }
`;

const SectionTitle = styled(motion.h1)`
  font-size: ${props => props.isMobile ? '2rem' : '3rem'};
  color: white;
  margin-bottom: ${props => props.isMobile ? '1.5rem' : '3rem'};
  text-align: center;
  position: relative;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: ${props => props.isMobile ? '100px' : '150px'};
    height: 3px;
    background: linear-gradient(90deg, #0076D6, #00B4D8);
    border-radius: 2px;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: ${props => props.isMobile ? '1rem' : '1.2rem'};
  color: #a0a0a0;
  text-align: center;
  max-width: 700px;
  margin: 0 auto ${props => props.isMobile ? '1.5rem' : '3rem'};
  line-height: 1.6;
  padding: ${props => props.isMobile ? '0 1rem' : '0'};
  z-index: 1;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${props => props.isMobile ? '280px' : '350px'}, 1fr));
  gap: ${props => props.isMobile ? '1.5rem' : '2.5rem'};
  margin-top: ${props => props.isMobile ? '1rem' : '2rem'};
  position: relative;
  z-index: 1;
  padding: ${props => props.isMobile ? '0 0.5rem' : '0'};
`;

const ProjectCard = styled(motion.div)`
  background: #121212;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  border: 1px solid #1e1e1e;
  
  &:hover {
    transform: translateY(${props => props.isMobile ? '0' : '-10px'});
    box-shadow: 0 15px 40px rgba(0, 118, 210, 0.2);
    border-color: #0076D6;
  }
`;

const ProjectImage = styled.div`
  height: ${props => props.isMobile ? '180px' : '220px'};
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(${props => props.isMobile ? '1' : '1.05'});
  }
`;

const ProjectContent = styled.div`
  padding: ${props => props.isMobile ? '1.2rem' : '1.8rem'};
`;

const ProjectTitle = styled.h3`
  font-size: ${props => props.isMobile ? '1.3rem' : '1.6rem'};
  margin-bottom: 0.6rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProjectDescription = styled.p`
  color: #b0b0b0;
  margin-bottom: ${props => props.isMobile ? '1rem' : '1.5rem'};
  line-height: 1.6;
  font-size: ${props => props.isMobile ? '0.9rem' : '1rem'};
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: ${props => props.isMobile ? '1rem' : '1.5rem'};
`;

const Tag = styled.span`
  background: rgba(0, 118, 210, 0.2);
  color: #4fc3f7;
  padding: 0.3rem 0.8rem;
  border-radius: 6px;
  font-size: ${props => props.isMobile ? '0.75rem' : '0.85rem'};
  font-weight: 500;
  border: 1px solid rgba(0, 180, 216, 0.3);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${props => props.isMobile ? '0.8rem' : '1rem'};
  margin-top: ${props => props.isMobile ? '1rem' : '1.5rem'};
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: ${props => props.isMobile ? '0.5rem 0.8rem' : '0.6rem 1.2rem'};
  background: ${props => props.variant === 'primary' ? 'linear-gradient(135deg, #0076D6, #00B4D8)' : 'transparent'};
  color: ${props => props.variant === 'primary' ? 'white' : '#4fc3f7'};
  border-radius: 6px;
  font-size: ${props => props.isMobile ? '0.8rem' : '0.9rem'};
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: ${props => props.variant === 'secondary' ? '1px solid #0076D6' : 'none'};
  
  &:hover {
    transform: translateY(${props => props.isMobile ? '0' : '-2px'});
    box-shadow: ${props => props.variant === 'primary' ? '0 5px 15px rgba(0, 118, 210, 0.4)' : 'none'};
    background: ${props => props.variant === 'secondary' ? 'rgba(0, 118, 210, 0.1)' : ''};
  }
`;

const ViewMore = styled(motion.div)`
  text-align: center;
  margin-top: ${props => props.isMobile ? '2.5rem' : '4rem'};
  position: relative;
  z-index: 1;
`;

const ViewMoreButton = styled(motion.button)`
  padding: ${props => props.isMobile ? '0.8rem 1.8rem' : '1rem 2.5rem'};
  background: linear-gradient(135deg, #0076D6, #00B4D8);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: ${props => props.isMobile ? '1rem' : '1.1rem'};
  font-weight: 600;
  cursor: pointer;
  outline: none;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  box-shadow: 0 4px 20px rgba(0, 118, 210, 0.3);
  
  &:hover {
    background: linear-gradient(135deg, #0066C0, #00A4C8);
  }
`;

// Sample project data with images (replace URLs with your own screenshots)
const projects = [
  {
    id: 1,
    title: "Appointment Booking System",
    description: "A MERN stack-based Healthcare Management System designed to streamline appointment scheduling and improve overall clinic management efficiency.",
    tags: ["React","Express", "Node.js", "MongoDB", "Stripe", "Ruzorpay"],
    demoUrl:"https://healthcare-management-system-gamma.vercel.app/",
    codeUrl:  "https://github.com/Mohamedyoonus/Healthcare-Management-System",
    imageUrl: "./medicare.png"
  },
  {
    id: 2,
    title: "Art Gallery Website",
    description: "A responsive portfolio website with smooth animations, dark/light mode toggle, and project showcase.",
    tags: ["React", "Styled Components", "Framer Motion", "MUI"],
    demoUrl: "https://www.chalzart.in/",
    codeUrl: "https://github.com/Mohamedyoonus/ChalzArt",
    imageUrl: "chalzart.png"
  },
  {
    id: 3,
    title: "E-commerce Store",
    description: "An e-commerce website is an online platform that allows users to browse, select, and purchase products or services securely and conveniently. note: open in desktop view for better experiance ",
    tags: ["React", "MUI", "Framer Motion"],
    demoUrl: "https://shopy-olive.vercel.app/",
    codeUrl: "https://github.com/Mohamedyoonus/E-com_Web",
    imageUrl: "./shopy.png"
  },
  {
    id: 4,
    title: "Live_chat_App",
    description: "A full-stack real-time chat application built with a separate frontend and backend structure for scalable messaging.",
    tags: ["JavaScript", "Socket.io", "node.js","react","mongodb"],
    demoUrl: "https://chat-app-4lju.vercel.app/login",
    codeUrl: "https://github.com/Mohamedyoonus/chat_app",
    imageUrl: "./chat.png"
  },
  {
    id: 5,
    title: "Empty Box",
    description: "demo",
    tags: ["demo"],
    demoUrl: "https://shopy-olive.vercel.app/",
    codeUrl: "https://github.com/Mohamedyoonus/E-com_Web",
    imageUrl: "./shopy.png"
  },
  {
    id: 6,
    title: "Empty Box",
    description: "demo",
    tags: ["demo"],
    demoUrl:"https://healthcare-management-system-gamma.vercel.app/",
    codeUrl:  "https://github.com/Mohamedyoonus/Healthcare-Management-System",
    imageUrl: "./medicare.png"
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Projects = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <ProjectsContainer
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, margin: "-100px" }}
      isMobile={isMobile}
    >
      
      <SectionTitle
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        isMobile={isMobile}
      >
        My Projects
      </SectionTitle>
      
      <SectionSubtitle
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        isMobile={isMobile}
      >
        Here are some of my featured projects. Each one was built to solve specific problems and showcase different aspects of my skills.
      </SectionSubtitle>
      
      <ProjectsGrid isMobile={isMobile}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            variants={itemVariants}
            whileHover={{ y: isMobile ? 0 : -10 }}
            isMobile={isMobile}
          >
            <ProjectImage isMobile={isMobile}>
              {project.imageUrl ? (
                <img src={project.imageUrl} alt={`${project.title} screenshot`} />
              ) : (
                <Code style={{ fontSize: isMobile ? '3rem' : '4rem', color: 'rgba(255,255,255,0.2)' }} />
              )}
            </ProjectImage>
            <ProjectContent isMobile={isMobile}>
              <ProjectTitle isMobile={isMobile}>
                {project.title}
                <span style={{ fontSize: isMobile ? '1rem' : '1.2rem', color: '#4fc3f7' }}>↗</span>
              </ProjectTitle>
              <ProjectDescription isMobile={isMobile}>{project.description}</ProjectDescription>
              <ProjectTags isMobile={isMobile}>
                {project.tags.map((tag, index) => (
                  <Tag key={index} isMobile={isMobile}>{tag}</Tag>
                ))}
              </ProjectTags>
              <ProjectLinks isMobile={isMobile}>
                <ProjectLink 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variant="primary"
                  isMobile={isMobile}
                >
                  <Visibility fontSize={isMobile ? "small" : "medium"} />
                  Live Demo
                </ProjectLink>
                <ProjectLink 
                  href={project.codeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variant="secondary"
                  isMobile={isMobile}
                >
                  <GitHub fontSize={isMobile ? "small" : "medium"} />
                  View Code
                </ProjectLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
      
      <ViewMore
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        isMobile={isMobile}
      >
        <ViewMoreButton
          whileHover={{ scale: isMobile ? 1 : 1.05 }}
          whileTap={{ scale: 0.95 }}
          isMobile={isMobile}
        >
          <OpenInNew fontSize={isMobile ? "small" : "medium"} />
          View More Projects
        </ViewMoreButton>
      </ViewMore>
    </ProjectsContainer>
  );
};

export default Projects;