import { MarkdownIndex } from "./constants";
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
import binarySearch from "../markdown/binarySearch.md";

class MarkdownService {
  static getDocs = () => {
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
      binarySearch,
    ];

    return docsImport;
  };

  static getIndex = (content: MarkdownIndex) => {
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
      case MarkdownIndex.binarySearch:
        return 10;
      default:
        return 0;
    }
  };
}

export default MarkdownService;
