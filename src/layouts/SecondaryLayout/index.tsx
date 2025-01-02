import React from "react";
import "./SecondaryLayout.scss";

export const SecondaryLayout: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <div className="secondary-layout">
      <main className="secondary-layout__content">{children}</main>
    </div>
  );
};
