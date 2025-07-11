import { VStack, Heading, Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";

const greeting = "Hi, I'm Maité";
const bio1 = "Frontend developer passionate about crafting intuitive UIs.";
const bio2 = "I love turning ideas into responsive and accessible experiences.";

export const LandingSection = () => {
  return (
    <VStack
      spacing={6}
      align="center"
      justify="center"
      minH="100vh"
      bg="gray.50"
    >
      <Avatar.Root size="2xl" colorPalette="teal">
        <Avatar.Image
          src="https://bit.ly/broken-link"
          name="Maite"
          alt="Maité"
        />
        <Avatar.Fallback>MPV</Avatar.Fallback>
      </Avatar.Root>

      <Heading>{greeting}</Heading>
      <Text fontSize="lg" textAlign="center" maxW="600px">
        {bio1}
      </Text>
      <Text fontSize="lg" textAlign="center" maxW="600px">
        {bio2}
      </Text>
    </VStack>
  );
};
