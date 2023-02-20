import * as React from "react";
import Typography from "@mui/material/Typography";
import { Card, CardActions, CardContent, IconButton } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { MarkdownIndex } from "../services/constants";
import { ReadmeDialog } from "./readmeDialog";

interface StructureCardProps {
  title: string;
  content: MarkdownIndex;
  resume: string;
  reference: string;
}
const StructureCard = ({
  title,
  content,
  resume,
  reference,
}: StructureCardProps) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

  return (
    <Card
      sx={{ minWidth: 200, margin: 5, backgroundColor: "#080541" }}
      elevation={8}
    >
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="white" gutterBottom>
          {title.toUpperCase()}
        </Typography>
        <Typography variant="body2" color="white" sx={{ fontSize: 16 }}>
          {resume}
        </Typography>
      </CardContent>
      <CardActions sx={{ gap: 2, pt: 2 }}>
        <IconButton onClick={handleClickOpen} color="primary">
          <MenuBookIcon />
        </IconButton>
        <IconButton href={reference} color="primary">
          <CodeIcon />
        </IconButton>
        <ReadmeDialog
          open={open}
          onClose={handleClose}
          content={content}
          title={content}
        />
      </CardActions>
    </Card>
  );
};

export { ReadmeDialog, StructureCard };
