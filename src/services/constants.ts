export enum MarkdownIndex {
  array = "array",
  dictionary = "dictionary",
  stack = "stack",
  queue = "queue",
  deque = "deque",
  hash = "hash",
  set = "set",
  tree = "tree",
  recursion = "recursion",
  hashSearch = "hashSearch",
  binarySearch = "binarySearch",
}

export const linkReference = {
  arrays: "https://github.com/Aleff13/estruturas/tree/master/Array",
  dictionary: "https://github.com/Aleff13/estruturas/tree/master/Dictionary",
  hash: "https://github.com/Aleff13/estruturas/tree/master/Hash",
  queue: "https://github.com/Aleff13/estruturas/tree/master/Queue",
  deque: "https://github.com/Aleff13/estruturas/tree/master/Queue/Deque",
  set: "https://github.com/Aleff13/estruturas/tree/master/Set",
  stack: "https://github.com/Aleff13/estruturas/tree/master/Stack",
  tree: "https://github.com/Aleff13/estruturas/tree/master/Tree",
  recursion: "https://github.com/Aleff13/estruturas/tree/master/Algorithms",
  hashSearch:
    "https://github.com/Aleff13/estruturas/blob/master/Hash/HashTable.ts#L61-L84",
  binarySearch: "",
};

export const resumeText = {
  arrays:
    "Arrays, a estrutura mais básica, semelhante a uma lista, pode ser muito útil para tarefas simples",
  dictionary:
    "Dicionários, primeira estrutura utilizando chave, valor, se você está procurando uma forma de armazenar seus elementos de forma parecida com os arrays, mas quer buscar um valor com base em uma chave",
  hash: "As tabelas hash serão sua escolha se estiver buscando melhorar a eficiencia de estruturas baseadas em dicionarios",
  queue:
    "Filas, uma implementação das listas implementando os conceitos de FIFO",
  deque:
    "Deques, se você precisa de uma mistura entre pilhas e filas essa é a sua escolha",
  set: "Os conjuntos, muito utilizados na matemática, podemos encarar como um superset dos dicionários",
  stack:
    "Pilhas, uma implementação das listas implementando os conceitos de LIFO",
  tree: "Árvore, se você busca utilizar o que há de mais avançado em termos de eficiencia de busca chegou no lugar certo",
};

interface dataStructureInterface {
  resume: string;
  title: string;
  content: MarkdownIndex;
  reference: string;
}

//add new structure here
export const dataStructures: dataStructureInterface[] = [
  {
    resume: resumeText.arrays,
    title: MarkdownIndex.array,
    content: MarkdownIndex.array,
    reference: linkReference.arrays,
  },
  {
    resume: resumeText.queue,
    title: MarkdownIndex.queue,
    content: MarkdownIndex.queue,
    reference: linkReference.queue,
  },
  {
    resume: resumeText.stack,
    title: MarkdownIndex.stack,
    content: MarkdownIndex.stack,
    reference: linkReference.stack,
  },
  {
    resume: resumeText.deque,
    title: MarkdownIndex.deque,
    content: MarkdownIndex.deque,
    reference: linkReference.deque,
  },
  {
    resume: resumeText.dictionary,
    title: MarkdownIndex.dictionary,
    content: MarkdownIndex.dictionary,
    reference: linkReference.dictionary,
  },
  {
    resume: resumeText.set,
    title: MarkdownIndex.set,
    content: MarkdownIndex.set,
    reference: linkReference.set,
  },
  {
    resume: resumeText.hash,
    title: MarkdownIndex.hash,
    content: MarkdownIndex.hash,
    reference: linkReference.hash,
  },
  {
    resume: resumeText.tree,
    title: MarkdownIndex.tree,
    content: MarkdownIndex.tree,
    reference: linkReference.tree,
  },
];

interface algotithmInterface {
  title: string;
  content: MarkdownIndex;
  reference: string;
}

export const algotithms: algotithmInterface[] = [
  {
    title: MarkdownIndex.recursion,
    content: MarkdownIndex.recursion,
    reference: linkReference.recursion,
  },
  {
    title: MarkdownIndex.hashSearch,
    content: MarkdownIndex.hashSearch,
    reference: linkReference.hashSearch,
  },
];
