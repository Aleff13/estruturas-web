import { Box, Container, Typography } from "@mui/material";
import React from "react";
// import "./App.css";
import { StructureCard } from "./components/readmeDialog";
import { MarkdownIndex } from "./markdown";
import { linkReference, resumeText } from "./utils/constants";

const App = () => {
  return (
    <Container >
        <Typography
        variant="h3"
        sx={{textAlign: 'center'}}>Estruturas de dados</Typography>
      <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 2, pt: 2}}>
        <StructureCard
          resume={resumeText.arrays}
          title={MarkdownIndex.array}
          content={MarkdownIndex.array}
          reference={linkReference.arrays}
        ></StructureCard>

        <StructureCard
          resume={resumeText.queue}
          title={MarkdownIndex.queue}
          content={MarkdownIndex.queue}
          reference={linkReference.queue}
        ></StructureCard>

        <StructureCard
          resume={resumeText.deque}
          title={MarkdownIndex.deque}
          content={MarkdownIndex.deque}
          reference={linkReference.deque}
        ></StructureCard>

        <StructureCard
          resume={resumeText.dictionary}
          title={MarkdownIndex.dictionary}
          content={MarkdownIndex.dictionary}
          reference={linkReference.dictionary}
        ></StructureCard>

        <StructureCard
          resume={resumeText.set}
          title={MarkdownIndex.set}
          content={MarkdownIndex.set}
          reference={linkReference.set}
        ></StructureCard>

        <StructureCard
          resume={resumeText.hash}
          title={MarkdownIndex.hash}
          content={MarkdownIndex.hash}
          reference={linkReference.hash}
        ></StructureCard>

        <StructureCard
          resume={resumeText.tree}
          title={MarkdownIndex.tree}
          content={MarkdownIndex.tree}
          reference={linkReference.tree}
        ></StructureCard>
      </Box>
    </Container>
  );
};

export default App;
