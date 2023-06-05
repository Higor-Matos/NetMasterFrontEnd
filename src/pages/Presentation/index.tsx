import React, { useState } from "react";
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
  const { colorMode } = useColorMode();
  const backgroundColor = useColorModeValue(
    "rgba(0, 0, 0, 0.7)",
    "rgba(255, 255, 255, 0.7)"
  );
  const [startButtonVisible, setStartButtonVisible] = useState(true);
  const [startClicked, setStartClicked] = useState(false);

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
      {colorMode === "light" ? (
        <ParticlesBg type="cobweb" bg={true} color="#000000" />
      ) : (
        <ParticlesBg type="cobweb" bg={true} color="#ffffff" />
      )}

      <VStack spacing={8} zIndex="1">
        <Box bg={backgroundColor} p={4} borderRadius="xl">
          <MotionHeading
            fontSize="6xl"
            fontWeight="bold"
            color={colorMode === "light" ? "black" : "white"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            textShadow="2px 2px 3px rgba(0, 0, 0, 0.8)"
          >
            Net Master
          </MotionHeading>
        </Box>
        <Box bg={backgroundColor} p={4} borderRadius="xl">
          <MotionText
            fontSize="2xl"
            fontWeight="medium"
            color={colorMode === "light" ? "black" : "white"}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            textShadow="1px 1px 2px rgba(0, 0, 0, 0.7)"
          >
            O painel de administração para sua rede
          </MotionText>
        </Box>
        {startButtonVisible && (
          <MotionButton
            onClick={handleStartClick}
            size="lg"
            bg="purple.600"
            color="white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            borderRadius="md"
            boxShadow="md"
            rightIcon={<AiOutlineArrowRight />}
          >
            Start
          </MotionButton>
        )}
      </VStack>
    </Box>
  );
};

export default Presentation;
