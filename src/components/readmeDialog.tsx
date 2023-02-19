import * as React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import Markdown, { MarkdownIndex } from "../markdown";
import { Card, CardActions, CardContent, IconButton, Link, Paper } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';
import MenuBookIcon from '@mui/icons-material/MenuBook';

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
interface StructureCardProps {
    title: string
    content: MarkdownIndex
    resume: string
    reference: string
}
const StructureCard = ({title, content, resume, reference}: StructureCardProps) => {
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
    <Card sx={{ minWidth: 200, margin: 5, backgroundColor: '#080541' }} elevation={8}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="white" gutterBottom>
            {title.toUpperCase()}
        </Typography>
        <Typography variant="body2" color="white" sx={{ fontSize: 16 }}>
        {resume}
      </Typography>
      </CardContent>
      <CardActions sx={{gap: 2, pt: 2}}>
      <IconButton onClick={handleClickOpen} color="primary">
        <MenuBookIcon/>
      </IconButton>
      <IconButton href={reference} color="primary">
        <CodeIcon  />
      </IconButton>
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

export {ReadmeDialog, StructureCard}
