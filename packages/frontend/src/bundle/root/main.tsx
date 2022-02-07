import { Box, styled } from "@mui/material";
import * as React from "react";
import { lazyImportModule } from "../common/functions/import-module";
import { UploadProps } from "../upload/upload";

// Component interfaces
export interface UploadItem {
  imageUrl: string;
  text: string;
}

// Styled components
const Container = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "100vw",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

// Lazily imported components
const UploadComponent: React.ComponentType<UploadProps> =
  lazyImportModule("upload/upload");

export const Main = () => {
  const [uploadItems, setUploadItems] = React.useState<Array<UploadItem>>([]);

  return (
    <Container>
      <section>
        <UploadComponent
          onListUpload={(list) => setUploadItems(list)}
          onImageUpload={(imageUrl) => {
            const newItem: UploadItem = { imageUrl, text: "" };
            setUploadItems([...uploadItems, newItem]);
            return newItem;
          }}
        />
      </section>
    </Container>
  );
};
