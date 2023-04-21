import { Box, BoxProps } from "@chakra-ui/react";

interface MainProps extends BoxProps {}

const Main: React.FC<MainProps> = ({ children, ...rest }) => (
  <Box
    mt={{ base: "16", md: "8" }}
    w="100%"
    minHeight="calc(100vh - 2rem)"
    pl={{ base: 0, md: "220px" }}
    {...rest}
  >
    {children}
  </Box>
);

export default Main;
