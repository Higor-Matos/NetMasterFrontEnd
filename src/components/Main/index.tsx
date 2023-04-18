import React from "react";
import { Box } from "@chakra-ui/react";

type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => (
  <Box
    mt={{ base: "16", md: "8" }}
    w="100%"
    minHeight="calc(100vh - 2rem)"
    pl={{ base: 0, md: 4 }}
    ml={{ base: 0, md: "220px" }}
  >
    {children}
  </Box>
);

export default Main;
