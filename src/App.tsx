import { Container } from "@mui/material";
import React from "react";
import "./App.css";
import { ReadmeSimpleDialog } from "./components/readmeDialog";
import { MarkdownIndex } from "./markdown";
import { linkReference, resumeText } from "./utils/constants";

const App = () => {
  return (
    <Container>
      <ReadmeSimpleDialog
        resume={resumeText.arrays}
        title={MarkdownIndex.array}
        content={MarkdownIndex.array}
        reference={linkReference.arrays}
      ></ReadmeSimpleDialog>

      <ReadmeSimpleDialog
        resume={resumeText.queue}
        title={MarkdownIndex.queue}
        content={MarkdownIndex.queue}
        reference={linkReference.queue}
      ></ReadmeSimpleDialog>

      <ReadmeSimpleDialog
        resume={resumeText.deque}
        title={MarkdownIndex.deque}
        content={MarkdownIndex.deque}
        reference={linkReference.deque}
      ></ReadmeSimpleDialog>

      <ReadmeSimpleDialog
        resume={resumeText.dictionary}
        title={MarkdownIndex.dictionary}
        content={MarkdownIndex.dictionary}
        reference={linkReference.dictionary}
      ></ReadmeSimpleDialog>

      <ReadmeSimpleDialog
        resume={resumeText.set}
        title={MarkdownIndex.set}
        content={MarkdownIndex.set}
        reference={linkReference.set}
      ></ReadmeSimpleDialog>

      <ReadmeSimpleDialog
        resume={resumeText.hash}
        title={MarkdownIndex.hash}
        content={MarkdownIndex.hash}
        reference={linkReference.hash}
      ></ReadmeSimpleDialog>

      <ReadmeSimpleDialog
        resume={resumeText.tree}
        title={MarkdownIndex.tree}
        content={MarkdownIndex.tree}
        reference={linkReference.tree}
      ></ReadmeSimpleDialog>
    </Container>
  );
};

export default App;
