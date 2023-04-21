import React, { useState } from 'react';
import { Box, Text, Button, Heading, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import wallpaper from '../../assets/img/wallpaper.jpg';
import { AiOutlineArrowRight } from 'react-icons/ai';

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

interface PresentationProps {
  handlePageChange: (page: string) => void;
  setShowSidebarTopbar: (show: boolean) => void;
}

const Presentation: React.FC<PresentationProps> = ({ handlePageChange, setShowSidebarTopbar }) => {
  const handleStartClick = () => {
    setShowSidebarTopbar(true);
  };

  const handleButtonClick = () => {
    handlePageChange("control-panel");
    setShowSidebarTopbar(true);
  };

  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      backgroundImage={`url(${wallpaper})`}
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      textAlign="center"
      px="4"
    >
      <VStack spacing={8}>
        <MotionHeading
          fontSize="6xl"
          fontWeight="bold"
          color="white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          textShadow="2px 2px 3px rgba(0, 0, 0, 20)" 
        >
          Net Master
        </MotionHeading>
        <MotionText
          fontSize="2xl"
          fontWeight="medium"
          color="white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          textShadow="2px 2px 3px rgba(0, 0, 0, 20)"
        >
          O painel de administração para gerenciar sua rede
        </MotionText>
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
      </VStack>
    </Box>
  );
};

export default Presentation;