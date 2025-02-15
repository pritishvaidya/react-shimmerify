import React, { Children } from "react";
import {
  SHIMMER_ELEMENTS_CONFIG,
  SHIMMER_ELEMENTS_DIMENSIONS_MAP,
} from "./constants";
import { ShimmerCustomStyles, ShimmerDimensionsMap } from "./types";

const createShimmerSkeletonStructure = (
  children: React.ReactNode,
  customDimensionsMap: ShimmerDimensionsMap = {},
  customShimmerStyles: ShimmerCustomStyles = {},
): { type: string; styles: any }[] => {
  const skeletonStructure: {
    type: string;
    styles: any;
  }[] = [];

  const processChild = (child: any) => {
    if (!child || typeof child !== "object" || !child.type) return;

    const elementConfig = SHIMMER_ELEMENTS_CONFIG.find(
      (e) => e.tag === child.type,
    );
    if (elementConfig) {
      const dimensionsMap = {
        ...SHIMMER_ELEMENTS_DIMENSIONS_MAP,
        ...customDimensionsMap,
      };

      const baseStyles = dimensionsMap[child.type];
      const extendedStyles = customShimmerStyles[child.type] || {};

      skeletonStructure.push({
        type: elementConfig.skeletonType,
        styles: {
          ...baseStyles,
          ...extendedStyles,
          width: child.props?.width || baseStyles?.width || "100%",
          height: child.props?.height || baseStyles?.height || "auto",
        },
      });
    }

    // Recursively process children elements
    if (child.props?.children) {
      Children.forEach(child.props.children, processChild);
    }
  };

  Children.forEach(children, processChild);
  return skeletonStructure;
};

export { createShimmerSkeletonStructure };
