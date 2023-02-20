import { Dialog, DialogTitle } from "@mui/material";
import { MarkdownIndex } from "../services/constants";
import Markdown from "./markdown";

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
  title: string;
  content: MarkdownIndex;
}

export const ReadmeDialog = (props: SimpleDialogProps) => {
  const { onClose, open } = props;

  return (
    <Dialog onClose={onClose} open={open} maxWidth={"xl"}>
      <DialogTitle variant="h3">{props.title.toUpperCase()}</DialogTitle>
      <Markdown content={props.content}></Markdown>
    </Dialog>
  );
};
