import { Box, BoxProps } from "@chakra-ui/react";

interface PageContentProps extends BoxProps {
  showSidebarTopbar: boolean;
}

const PageContent: React.FC<PageContentProps> = ({
  showSidebarTopbar,
  children,
  ...rest
}) => (
  <Box
    marginLeft={{ base: 0, md: showSidebarTopbar ? "250px" : "0" }}
    paddingTop="5rem"
    minHeight="100vh"
    paddingRight={{ base: "1rem", md: "0" }}
    paddingLeft={{ base: "1rem", md: "0" }}
    transition="margin-left 0.3s ease-in"
    {...rest}
  >
    {children}
  </Box>
);

export default PageContent;
