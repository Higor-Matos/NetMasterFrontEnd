import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Button,
  Heading,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import ParticlesBg from "particles-bg";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

interface PresentationProps {
  handlePageChange: (page: string) => void;
  setShowSidebarTopbar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Presentation: React.FC<PresentationProps> = ({
  handlePageChange,
  setShowSidebarTopbar,
}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const backgroundColor = useColorModeValue(
    "rgba(255, 255, 255, 0.9)",
    "rgba(0, 0, 0, 0.9)"
  );
  const [startButtonVisible, setStartButtonVisible] = useState(true);
  const [startClicked, setStartClicked] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const colorScheme = localStorage.getItem("chakra-ui-color-mode");
    return colorScheme === "dark";
  });

  useEffect(() => {
    setIsDarkMode(colorMode === "dark");
    localStorage.setItem("chakra-ui-color-mode", colorMode);
  }, [colorMode]);

  const handleStartClick = () => {
    setShowSidebarTopbar(true);
    setStartButtonVisible(false);
    setStartClicked(true);
  };

  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      textAlign="center"
      px="4"
    >
      {isDarkMode ? (
        <ParticlesBg type="cobweb" bg={true} color="#ffffff" />
      ) : (
        <ParticlesBg type="cobweb" bg={true} color="#000000" />
      )}

      <VStack spacing={8}>
        <Box
          bg={backgroundColor}
          p={6}
          borderRadius="xl"
          backdropFilter="blur(10px)"
          boxShadow="lg"
        >
          <MotionHeading
            fontSize="4xl"
            fontWeight="bold"
            color={colorMode === "light" ? "black" : "white"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            textShadow="2px 2px 3px rgba(0, 0, 0, 0.2)"
            fontFamily="sans-serif"
          >
            Net Master
          </MotionHeading>
        </Box>
        <Box
          bg={backgroundColor}
          p={4}
          borderRadius="xl"
          backdropFilter="blur(10px)"
          boxShadow="lg"
        >
          <MotionText
            fontSize="xl"
            fontWeight="medium"
            color={colorMode === "light" ? "black" : "white"}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            textShadow="1px 1px 2px rgba(0, 0, 0, 0.2)"
            fontFamily="sans-serif"
          >
            O painel de admin istração para sua rede
          </MotionText>
        </Box>
        {startButtonVisible && (
          <MotionButton
            onClick={handleStartClick}
            size="lg"
            bg="purple.600"
            color="white"
            _hover={{ bg: "purple.700" }}
            _active={{ bg: "purple.800", transform: "scale(0.95)" }}
            _focus={{ boxShadow: "outline" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1,
              type: "spring",
              stiffness: 500,
            }}
            borderRadius="md"
            boxShadow="md"
            rightIcon={<AiOutlineArrowRight />}
            fontFamily="sans-serif"
            aria-label="Start"
          >
            Start
          </MotionButton>
        )}
      </VStack>
    </Box>
  );
};

export default Presentation;
