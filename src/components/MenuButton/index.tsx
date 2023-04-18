import React from "react";
import { Button, Icon, Text, IconBaseProps } from "@chakra-ui/react";

interface MenuButtonProps {
  text: string;
  icon: (props: IconBaseProps) => JSX.Element;
  onClick: () => void;
  page: string;
  renderIndicator: (page: string) => JSX.Element | null;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  text,
  icon,
  onClick,
  page,
  renderIndicator,
}) => (
  <Button
    leftIcon={<Icon as={icon} boxSize="16px" />}
    variant="ghost"
    fontSize="sm"
    fontWeight="semibold"
    textAlign="left"
    onClick={onClick}
    width="100%"
    justifyContent="space-between"
    alignItems="center"
    borderRadius="md"
    mb={2}
  >
    <Text flex="1">{text}</Text>
    {renderIndicator(page)}
  </Button>
);

export default MenuButton;
