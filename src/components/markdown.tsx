import React, { useEffect, useState } from "react";
import array from "../markdown/array.md";
import dictionary from "../markdown/dictionary.md";
import hash from "../markdown/Hashs.md";
import stack from "../markdown/Stack.md";
import tree from "../markdown/Tree.md";
import deque from "../markdown/Deque.md";
import queue from "../markdown/Queue.md";
import set from "../markdown/Set.md";
import recursion from "../markdown/recursion.md";
import hashSearch from "../markdown/hashSearch.md";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Container, Typography } from "@mui/material";
import { MarkdownIndex } from "../services/constants";

interface MardownProps {
  content: MarkdownIndex;
}

const Markdown = ({ content }: MardownProps) => {
  const [docs, setDocs] = useState<string>("");
  const docsImport = [
    array,
    dictionary,
    stack,
    queue,
    deque,
    hash,
    set,
    tree,
    recursion,
    hashSearch,
  ];

  const getIndex = (content: MarkdownIndex) => {
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
      case MarkdownIndex.recursion:
        return 8;
      case MarkdownIndex.hashSearch:
        return 9;
      default:
        return 0;
    }
  };

  useEffect(() => {
    fetch(docsImport[getIndex(content)]).then(async (res) => {
      let docToAdd = await res.text();
      setDocs(docToAdd);
    });
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
