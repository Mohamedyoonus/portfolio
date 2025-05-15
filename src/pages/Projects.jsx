import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Code, Visibility, GitHub, OpenInNew } from '@mui/icons-material';

// Styled components
const ProjectsContainer = styled(motion.div)`
  padding: 4rem 2rem;
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
  font-size: 3rem;
  color: white;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 4px;
    background: linear-gradient(90deg, #0076D6, #00B4D8);
    border-radius: 2px;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #a0a0a0;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  z-index: 1;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 2rem;
  position: relative;
  z-index: 1;
`;

const ProjectCard = styled(motion.div)`
  background: #121212;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  border: 1px solid #1e1e1e;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 118, 210, 0.2);
    border-color: #0076D6;
  }
`;

const ProjectImage = styled.div`
  height: 220px;
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
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 1.8rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 0.8rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProjectDescription = styled.p`
  color: #b0b0b0;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 1rem;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background: rgba(0, 118, 210, 0.2);
  color: #4fc3f7;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(0, 180, 216, 0.3);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: ${props => props.variant === 'primary' ? 'linear-gradient(135deg, #0076D6, #00B4D8)' : 'transparent'};
  color: ${props => props.variant === 'primary' ? 'white' : '#4fc3f7'};
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: ${props => props.variant === 'secondary' ? '1px solid #0076D6' : 'none'};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.variant === 'primary' ? '0 5px 15px rgba(0, 118, 210, 0.4)' : 'none'};
    background: ${props => props.variant === 'secondary' ? 'rgba(0, 118, 210, 0.1)' : ''};
  }
`;

const ViewMore = styled(motion.div)`
  text-align: center;
  margin-top: 4rem;
  position: relative;
  z-index: 1;
`;

const ViewMoreButton = styled(motion.button)`
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #0076D6, #00B4D8);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
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
    id: 3,
    title: "Empty Box",
  description: "demo",
    tags: ["demo"],
    demoUrl: "https://shopy-olive.vercel.app/",
    codeUrl: "https://github.com/Mohamedyoonus/E-com_Web",
    imageUrl: "./shopy.png"
  },
   {
    id: 1,
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
  return (
    <ProjectsContainer
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, margin: "-100px" }}
    >
      
      <SectionTitle
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Projects
      </SectionTitle>
      
      <SectionSubtitle
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Here are some of my featured projects. Each one was built to solve specific problems and showcase different aspects of my skills.
      </SectionSubtitle>
      
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <ProjectImage>
              {project.imageUrl ? (
                <img src={project.imageUrl} alt={`${project.title} screenshot`} />
              ) : (
                <Code style={{ fontSize: '4rem', color: 'rgba(255,255,255,0.2)' }} />
              )}
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>
                {project.title}
                <span style={{ fontSize: '1.2rem', color: '#4fc3f7' }}>↗</span>
              </ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTags>
                {project.tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </ProjectTags>
              <ProjectLinks>
                <ProjectLink 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variant="primary"
                >
                  <Visibility fontSize="small" />
                  Live Demo
                </ProjectLink>
                <ProjectLink 
                  href={project.codeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  <GitHub fontSize="small" />
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
      >
        <ViewMoreButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <OpenInNew fontSize="small" />
          View More Projects
        </ViewMoreButton>
      </ViewMore>
    </ProjectsContainer>
  );
};

export default Projects;
