import { VStack, Heading, Box } from "@chakra-ui/react";
import Card from "./Card";
import { projects } from "../data/projects";

export const ProjectsSection = () => {
  return (
    <Box id="projects-section" bg="white" minH="100vh" py={10}>
      <Heading mb={8} textAlign="center" color="teal.600">
        Projects
      </Heading>

      <VStack spacing={6} align="stretch" px={{ base: 4, md: 12 }}>
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
          />
        ))}
      </VStack>
    </Box>
  );
};
