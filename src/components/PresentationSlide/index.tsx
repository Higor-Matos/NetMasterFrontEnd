import React from "react";
import { Box, Button } from "@chakra-ui/react";

type PresentationSlideProps = {
  onStartClick: () => void;
};

const PresentationSlide = ({ onStartClick }: PresentationSlideProps) => {
  return (
    <Box>
      <h1>Presentation Slide</h1>
      <Button onClick={onStartClick}>Start</Button>
    </Box>
  );
};

export default PresentationSlide;
