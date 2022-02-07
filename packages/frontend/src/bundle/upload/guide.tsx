import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  styled,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import * as React from "react";
import "@fontsource/azeret-mono/variable.css";

// Component interfaces
export interface GuideModalProps {
  onClose: () => void;
  open: boolean;
}

// Styled components
export const CodeBlock = styled("code")({
  fontFamily: "Azeret MonoVariable",
  fontWeight: 500,
  display: "block",
});

// Utility components
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Main component
export const GuideModal = (props: GuideModalProps) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      TransitionComponent={Transition}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>Upload guide</DialogTitle>
      <DialogContent>
        <DialogContentText>
          The CSV file should have the following format:
          <br />
          <CodeBlock>imageUrl , text</CodeBlock>
          <CodeBlock>
            https://example.com/image.png , &quot;This is an image&quot;
          </CodeBlock>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={props.onClose}>
          Got it!
        </Button>
      </DialogActions>
    </Dialog>
  );
};
