import React from "react";
import { List, ListItem, Box, Text, Spinner } from "@chakra-ui/react";

interface User {
  name: string;
}

interface UserListProps {
  userData: User[];
  isLoading: boolean;
}

const UserList: React.FC<UserListProps> = ({ userData, isLoading }) => {
  return (
    <Box>
      {isLoading ? (
        <Spinner size="md" color="blue.500" />
      ) : (
        <Box>
          <Text fontSize="xl" mb={5}>
            Usuários da Máquina
          </Text>
          {userData.length > 0 ? (
            <List>
              {userData.map((user: User, index: number) => (
                <ListItem key={index}>{user.name}</ListItem>
              ))}
            </List>
          ) : (
            <p>Carregando dados de usuários...</p>
          )}
        </Box>
      )}
    </Box>
  );
};

export default UserList;
