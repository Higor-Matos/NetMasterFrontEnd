import React from "react";
import { List, ListItem, Box, Text, Spinner } from "@chakra-ui/react";

const UserList = ({ userData, isLoading }) => {
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
              {userData.map((user, index) => (
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
