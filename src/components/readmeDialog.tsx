import * as React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { marked } from "marked";
import Markdown, { MarkdownIndex } from "../markdown";
import { Card, CardActions, CardContent, Link } from "@mui/material";

const emails = ["username@gmail.com", "user02@gmail.com"];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  title: string;
  content: MarkdownIndex;
}

const ReadmeDialog = (props: SimpleDialogProps) => {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth={"xl"}>
      <DialogTitle variant="h3">{props.title.toUpperCase()}</DialogTitle>
      <Markdown content={props.content}></Markdown>
    </Dialog>
  );
}
interface ReadmeSimpleDialogProps {
    title: string
    content: MarkdownIndex
    resume: string
    reference: string
}
const ReadmeSimpleDialog = ({title, content, resume, reference}: ReadmeSimpleDialogProps) => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Card sx={{ minWidth: 275, margin: 5 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {title.toUpperCase()}
        </Typography>
        <Typography variant="body2">
        {resume}
      </Typography>
      </CardContent>
      <CardActions>
      <Button onClick={handleClickOpen}>
        {title}
      </Button>
      <Link href={reference} color="inherit">Exemplo</Link>
      <ReadmeDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        content={content}
        title={content}
      />
      </CardActions>
    </Card>
  );
}

export {ReadmeDialog, ReadmeSimpleDialog}
