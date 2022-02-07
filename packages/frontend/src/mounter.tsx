// We import Regular weight such that we can display the font
// without worrying about the network overhead.
import { css, Global } from "@emotion/react";
import "@fontsource/be-vietnam-pro/400.css";
import * as React from "react";
import { render } from "react-dom";
import { DefaultSuspense } from "./bundle/common/components/default-suspense";
import { lazyImportModule } from "./bundle/common/functions/import-module";

const RootApp = lazyImportModule("root/root", "RootApp");

render(
  <DefaultSuspense>
    <Global
      styles={css`
        body {
          font-family: "Be Vietnam Pro", sans-serif;
          margin: 0;
          padding: 0;
          font-size: 14px;
          letter-spacing: -0.4px;
        }
      `}
    />
    <RootApp />
  </DefaultSuspense>,
  document.getElementById("app"),
);
