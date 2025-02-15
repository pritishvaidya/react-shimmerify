# React Shimmer Loader

## Overview

This project is a customizable React shimmer loader that can be used to create skeleton loading screens for various elements. It automatically maps HTML elements to corresponding shimmer skeletons and ensures a smooth linear shimmer animation from left to right.

## Features

- Automatically generates shimmer skeletons based on child elements.
- Configurable styles for different HTML elements.

## Installation

```sh
   npm install react-shimmerify 
```
```sh
   yarn add react-shimmerify 
```

## Usage

Import the `ShimmerLoader` component and wrap your content:

```tsx
import { ShimmerLoader } from "react-shimmerify";

const App = () => {
  return (
    <ShimmerLoader>
      <div>
        <img src="" alt="Loading..." />
        <h1>Loading Title</h1>
        <p>Loading description</p>
      </div>
    </ShimmerLoader>
  );
};

export default App;
```

## Configuration

The component uses a configuration object to define shimmer styles:

```ts
export const SHIMMER_ELEMENTS_CONFIG: ShimmerElementConfig[] = [
  { tag: "img", skeletonType: "image" },
  { tag: "p", skeletonType: "text" },
  { tag: "h1", skeletonType: "text" },
  { tag: "h2", skeletonType: "text" },
  { tag: "h3", skeletonType: "text" },
  { tag: "span", skeletonType: "text" },
  { tag: "button", skeletonType: "button" },
  { tag: "div", skeletonType: "container" }
];

export const SHIMMER_ELEMENTS_DIMENSIONS_MAP: ShimmerDimensionsMap = {
  p: { width: "200px", height: "20px", borderRadius: "2px" },
  h1: { width: "300px", height: "40px", borderRadius: "2px" },
  h2: { width: "250px", height: "35px", borderRadius: "2px" },
  h3: { width: "200px", height: "30px", borderRadius: "2px" },
  span: { width: "150px", height: "15px", borderRadius: "2px" },
  img: { width: "100px", height: "100px" }
};
```

## Styling

The shimmer effect is achieved using CSS animations:

```css
.loader-item {
  background: linear-gradient(90deg, #f9f9f9 0%, #ececec 50%, #f9f9f9 100%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 4px;
}

@keyframes shimmer {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
}
```

## Contributions

Contributions are welcome! Feel free to open issues and submit pull requests.

## License

This project is licensed under the MIT License.

