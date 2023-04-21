import React from "react";
import { Text, Grid, GridItem } from "@chakra-ui/react";

const Dashboard: React.FC = () => {
  return (
    <>
      <Text fontSize="2xl">Dashboard</Text>
      <Text>Aqui serão exibidos gráficos e relatórios.</Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}
      >
        {/* Coloque seus gráficos e relatórios aqui como GridItems */}
        <GridItem>
          {/* Exemplo de um gráfico ou relatório */}
          <Text>Gráfico 1</Text>
        </GridItem>
        <GridItem>
          {/* Exemplo de um gráfico ou relatório */}
          <Text>Gráfico 2</Text>
        </GridItem>
      </Grid>
    </>
  );
};

export default Dashboard;
