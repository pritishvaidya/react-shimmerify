import { ShimmerElementConfig, ShimmerDimensionsMap } from "./types";

export const SHIMMER_ELEMENTS_CONFIG: ShimmerElementConfig[] = [
  { tag: "img", skeletonType: "image" },
  { tag: "p", skeletonType: "text" },
  { tag: "h1", skeletonType: "text" },
  { tag: "h2", skeletonType: "text" },
  { tag: "h3", skeletonType: "text" },
  { tag: "span", skeletonType: "text" },
  { tag: "button", skeletonType: "button" },
  { tag: "div", skeletonType: "container" },
];

export const SHIMMER_ELEMENTS_DIMENSIONS_MAP: ShimmerDimensionsMap = {
  img: { width: "100px", height: "100px" },
  p: { width: "200px", height: "20px", borderRadius: "2px" },
  h1: { width: "300px", height: "40px", borderRadius: "2px" },
  h2: { width: "250px", height: "35px", borderRadius: "2px" },
  h3: { width: "200px", height: "30px", borderRadius: "2px" },
  span: { width: "150px", height: "15px", borderRadius: "2px" },
  button: { width: "100px", height: "40px", borderRadius: "4px" },
  div: { width: "100%", height: "auto" },
};
