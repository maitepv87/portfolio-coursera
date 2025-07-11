import { Box } from "@chakra-ui/react";
import {
  Header,
  LandingSection,
  ProjectsSection,
  ContactMeSection,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <Box as="main">
        <Box id="landing-section" minH="100vh" bg="gray.50">
          <LandingSection />
        </Box>
        <Box id="projects-section" minH="100vh" bg="white">
          <ProjectsSection />
        </Box>
        <Box id="contactme-section" minH="100vh" bg="gray.100">
          <ContactMeSection />
        </Box>
      </Box>
    </>
  );
}

export default App;
