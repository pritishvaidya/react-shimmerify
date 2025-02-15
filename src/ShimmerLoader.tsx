import React from "react";
import { createShimmerSkeletonStructure } from "./layout";
import { ShimmerCustomStyles, ShimmerDimensionsMap } from "./types";
import "./index.scss";

const ShimmerLoader: React.FC<{
  isLoading: boolean;
  children: React.ReactNode;
  customDimensionsMap?: ShimmerDimensionsMap;
  customStyles?: ShimmerCustomStyles;
}> = ({ isLoading, children, customStyles = {}, customDimensionsMap }) => {
  const shimmerStructure = createShimmerSkeletonStructure(
    children,
    customDimensionsMap,
    customStyles.shimmer,
  );

  if (!isLoading) return children;

  return (
    <div className="shimmer-container" style={{ ...customStyles.container }}>
      {shimmerStructure.map((item, index) => (
        <div
          key={index}
          className={`shimmer-item ${item.type}`}
          style={{ ...item.styles }}
        ></div>
      ))}
    </div>
  );
};

export default ShimmerLoader;
