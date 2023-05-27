import React from "react";
import { List, ListItem, Box, Text, Spinner } from "@chakra-ui/react";

interface User {
  id: number;
  name: string;
}

interface UserListProps {
  userData: User[];
  isLoading: boolean;
}

const UserList: React.FC<UserListProps> = ({ userData, isLoading }) => {
  if (isLoading) {
    return <Spinner size="md" color="blue.500" />;
  }

  return (
    <Box>
      <Text fontSize="xl" mb={5}>
        Usuários da Máquina
      </Text>
      {userData?.length > 0 ? (
        <List>
          {userData.map((user: User) => (
            <ListItem key={user.id}>{user.name}</ListItem>
          ))}
        </List>
      ) : (
        <Text>Nenhum usuário encontrado.</Text>
      )}
    </Box>
  );
};

export default UserList;
