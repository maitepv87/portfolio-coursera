import { VStack, Heading, Box } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Responsive Portfolio",
    description: "A modern React portfolio using Chakra UI and Vercel.",
    imageUrl: "https://source.unsplash.com/random/300x200?portfolio",
  },
  {
    title: "Lucky Shrub",
    description:
      "A fictional plant shop web app built with accessibility in mind.",
    imageUrl: "https://source.unsplash.com/random/300x200?plants",
  },
  {
    title: "Todo App",
    description:
      "Interactive task manager with localStorage and smooth transitions.",
    imageUrl: "https://source.unsplash.com/random/300x200?tasks",
  },
];

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
          />
        ))}
      </VStack>
    </Box>
  );
};
