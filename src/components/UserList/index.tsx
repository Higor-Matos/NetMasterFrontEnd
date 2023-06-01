import React from "react";
import {
  List,
  ListItem,
  Box,
  Text,
  Spinner,
  useColorModeValue,
  UnorderedList,
} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";

interface User {
  id: number;
  name: string;
}

interface UserListProps {
  userData: User[];
  isLoading: boolean;
}

const UserList: React.FC<UserListProps> = ({ userData, isLoading }) => {
  const loadingColor = useColorModeValue("blue.500", "blue.300");
  const iconColor = useColorModeValue("#283142", "#F5F5F5");
  const boxBgColor = useColorModeValue("#F5F5F5", "#283142");
  const textColor = useColorModeValue("gray.700", "gray.300");

  if (isLoading) {
    return <Spinner size="md" color={loadingColor} />;
  }

  return (
    <Box
      boxShadow="0px 3px 6px rgba(0,0,0,0.16)"
      p="4"
      borderRadius="lg"
      backgroundColor={boxBgColor}
    >
      <Text
        mb="4"
        fontSize="xl"
        fontWeight="bold"
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color={textColor}
      >
        <AiOutlineUser style={{ marginRight: "8px", color: iconColor }} />
        Usuários
      </Text>
      {userData?.length > 0 ? (
        <UnorderedList color={textColor}>
          {userData.map((user: User) => (
            <ListItem key={user.id} color={textColor}>
              {user.name}
            </ListItem>
          ))}
        </UnorderedList>
      ) : (
        <Text color={textColor} textAlign="center">
          Nenhum usuário encontrado.
        </Text>
      )}
    </Box>
  );
};

export default UserList;
