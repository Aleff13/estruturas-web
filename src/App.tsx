import { Box, Container, Typography } from "@mui/material";
import React from "react";
import "./App.css";
import { AlgotithmCard } from "./components/algorithmCard";
import { StructureCard } from "./components/structureCard";
import { algotithms, dataStructures } from "./services/constants";

const App = () => {
  return (
    <Container>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", marginTop: "25px" }}
        color="white"
      >
        Estruturas de dados
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          pt: 2,
        }}
      >
        {dataStructures.map((structure) => (
          <StructureCard
            resume={structure.resume}
            title={structure.title}
            content={structure.content}
            reference={structure.reference}
          ></StructureCard>
        ))}
      </Box>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", marginTop: "25px" }}
        color="white"
      >
        Algoritimos
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          pt: 2,
          overflowX: "visible",
          overflowY: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {algotithms.map((algorithm) => (
          <AlgotithmCard
            title={algorithm.title}
            content={algorithm.content}
            reference={algorithm.reference}
          ></AlgotithmCard>
        ))}
      </Box>
    </Container>
  );
};

export default App;
