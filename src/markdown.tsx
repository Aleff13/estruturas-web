import React, { useEffect, useState } from "react";
import array from "../src/markdown/array.md";
import dictionary from "../src/markdown/dictionary.md";
import hash from "../src/markdown/Hashs.md";
import stack from "../src/markdown/Stack.md";
import tree from "../src/markdown/Tree.md";
import deque from "../src/markdown/Deque.md";
import queue from "../src/markdown/Queue.md";
import set from "../src/markdown/Set.md";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Container, Typography } from "@mui/material";

interface MardownProps {
  content: MarkdownIndex;
}

export enum MarkdownIndex {
  array = "array",
  dictionary = "dictionary",
  stack = "stack",
  queue = "queue",
  deque = "deque",
  hash = "hash",
  set = "set",
  tree = "tree",
}

const Markdown = ({ content }: MardownProps) => {
  const [docs, setDocs] = useState<string>("");
  const docsImport = [array, dictionary, stack, queue, deque, hash, set, tree];

  const getIndex = (content: string) => {
    switch (content) {
      case MarkdownIndex.array:
        return 0;
      case MarkdownIndex.dictionary:
        return 1;
      case MarkdownIndex.stack:
        return 2;
      case MarkdownIndex.queue:
        return 3;
      case MarkdownIndex.deque:
        return 4;
      case MarkdownIndex.hash:
        return 5;
      case MarkdownIndex.set:
        return 6;
      case MarkdownIndex.tree:
        return 7;
      default:
        return 0;
    }
  };

  useEffect(() => {
    fetch(docsImport[getIndex(content)]).then(async (res) => {
      let docToAdd = await res.text();
      setDocs(docToAdd);
    });
    console.log(docs);
    console.log(content);
  });

  return (
    <Container sx={{ overflowWrap: "break-word" }}>
      <Typography>
        <ReactMarkdown>{docs}</ReactMarkdown>
      </Typography>
    </Container>
  );
};

export default Markdown;
