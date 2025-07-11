import { useEffect, useRef } from "react";
import { Flex, HStack, Spacer, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    href: "https://github.com/maitepv87",
    icon: faGithub,
  },
  {
    href: "https://linkedin.com/in/maite-perez-vento",
    icon: faLinkedin,
  },
];

const handleClick = (e, sectionId) => {
  e.preventDefault();
  const target = document.getElementById(sectionId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", `/#${sectionId}`);
  }
};

export const Header = () => {
  const headerRef = useRef();

  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;
      lastScrollY.current = currentScrollY;

      if (headerRef.current) {
        headerRef.current.style.transform = isScrollingDown
          ? "translateY(-200px)"
          : "translateY(0)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      width="100%"
      bg="black"
      zIndex="1000"
      boxShadow="sm"
      transition="transform 0.3s ease-in-out"
    >
      <Flex px={6} py={4} align="center" color="white">
        {/* Socials */}
        <nav>
          <HStack spacing={4}>
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </a>
            ))}
          </HStack>
        </nav>

        <Spacer />

        {/* Internal navigation links */}
        <nav>
          <HStack spacing={6}>
            <a
              href="/#projects-section"
              onClick={(e) => handleClick(e, "projects-section")}
            >
              Projects
            </a>
            <a
              href="/#contactme-section"
              onClick={(e) => handleClick(e, "contactme-section")}
            >
              Contact Me
            </a>
          </HStack>
        </nav>
      </Flex>
    </Box>
  );
};
