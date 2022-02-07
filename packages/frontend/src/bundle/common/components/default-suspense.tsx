import * as React from "react";

export const DefaultSuspense: React.FC = (props) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {props.children}
    </React.Suspense>
  );
};
