import { Box, Button, Link, styled, Typography } from "@mui/material";
import * as React from "react";
import { lazyImportModule } from "../common/functions/import-module";
import { UploadItem } from "../root/main";
import { GuideModalProps } from "./guide";
import { HiUpload as UploadIcon } from "react-icons/hi";

// Styled components
const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "80vh",
  padding: "0 60px",
  backgroundColor: theme.alternate.main,
  borderBottomRightRadius: 24,
  color: theme.palette.background.default,
}));

// Component interfaces
export interface UploadProps {
  onListUpload: (list: Array<UploadItem>) => unknown;
  onImageUpload: (imageUrl: string) => UploadItem;
}

// Lazily imported components
const GuideModalComponent: React.ComponentType<GuideModalProps> =
  lazyImportModule("upload/guide", "GuideModal");

// Main component
export const Upload = () => {
  const [showGuide, setShowGuide] = React.useState(false);

  return (
    <>
      <GuideModalComponent
        open={showGuide}
        onClose={() => setShowGuide(false)}
      />
      <Container>
        <Typography variant="h1">Upload</Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "1rem",
          }}
        >
          Upload a CSV file or image file(s) to apply the text.
          <br />
          Check the{" "}
          <Link onClick={() => setShowGuide(true)} color="secondary">
            guide
          </Link>{" "}
          for more details on the format.
        </Typography>
        <Box
          sx={{
            marginTop: "1rem",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={<UploadIcon />}
            size="small"
          >
            Upload
          </Button>
        </Box>
      </Container>
    </>
  );
};
