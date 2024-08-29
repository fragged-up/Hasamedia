// src/components/ShadowContainer.tsx
import React from "react";

type ShadowContainerProps = {
  children: React.ReactNode;
  title: string;
};

const ShadowContainer: React.FC<ShadowContainerProps> = ({
  children,
  title,
}) => {
  return (
    <div className="darken-container">
      <div className="darken-text">
        <h2>{title}</h2>
      </div>
      <div className="shadow-container-content">{children}</div>
    </div>
  );
};

export default ShadowContainer;
