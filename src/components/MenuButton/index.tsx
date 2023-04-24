import React from "react";
import { Button, Icon, Text, IconProps, HStack, Box } from "@chakra-ui/react";

interface MenuButtonProps {
  text: string;
  icon: React.ComponentType<IconProps>;
  onClick: () => void;
  page: string;
  renderIndicator: (page: string) => JSX.Element | null;
  iconColor: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  text,
  icon: IconComponent,
  onClick,
  page,
  renderIndicator,
  iconColor,
}) => (
  <Button
    leftIcon={<Icon as={IconComponent} boxSize="16px" color={iconColor} />}
    variant="ghost"
    fontSize="sm"
    fontWeight="semibold"
    textAlign="left"
    onClick={onClick}
    width="100%"
    alignItems="center"
    borderRadius="md"
  >
    <HStack spacing={2} flex="1">
      <Text>{text}</Text>
      <Box flex="1" />
      {renderIndicator(page)}
    </HStack>
  </Button>
);

export default MenuButton;
