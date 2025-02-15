export type ShimmerElementConfig = {
    tag: string;
    skeletonType: "image" | "text" | "button" | "container";
};

export type ShimmerDimensions = {
    width: string;
    height: string;
    borderRadius?: string;
    [key: string]: any;
};

export type ShimmerDimensionsMap = {
    [key: string]: ShimmerDimensions;
};

export type ShimmerCustomStyles = {
    container?: any;
    shimmer?: any;
};
