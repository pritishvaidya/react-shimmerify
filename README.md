# React Shimmerify [[Live Demo]](https://react-shimmerify.netlify.app) [![codecov](https://codecov.io/gh/pritishvaidya/react-shimmerify/branch/master/graph/badge.svg?token=NFC4YGNEJX)](https://codecov.io/gh/pritishvaidya/react-shimmerify)

## Overview

This project is a customizable React shimmer loader that can be used to create skeleton loading screens for various elements. It automatically maps HTML elements to corresponding shimmer skeletons and ensures a smooth linear shimmer animation from left to right.


https://github.com/user-attachments/assets/b409da0b-2400-45b0-8324-5313d2803820


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
      <ShimmerLoader
          isLoading={true}
          customDimensionsMap={{
              span: { width: "75px", height: "10px", borderRadius: "2px" },
          }}
      >
          <div className="content">
              <img
                  src=""
                  alt="Loading..."
                  width="100px"
                  height="100px"
                  aria-label="shimmer-image"
              />
              <div>
                  <h1 aria-label="shimmer-title">Loading Title</h1>
                  <p aria-label="shimmer-text">Loading description</p>
                  <span aria-label="shimmer-span">Loading description</span>
              </div>
          </div>
      </ShimmerLoader>
  );
};

export default App;
```

## Configuration

The component uses a configuration object to define shimmer styles:

```ts
export const SHIMMER_ELEMENTS_DIMENSIONS_MAP: ShimmerDimensionsMap = {
  p: { width: "200px", height: "20px", borderRadius: "2px" },
  h1: { width: "300px", height: "40px", borderRadius: "2px" },
  h2: { width: "250px", height: "35px", borderRadius: "2px" },
  h3: { width: "200px", height: "30px", borderRadius: "2px" },
  span: { width: "150px", height: "15px", borderRadius: "2px" },
  img: { width: "100px", height: "100px" }
};
```

## Contributions

Contributions are welcome! Feel free to open issues and submit pull requests.

## License

This project is licensed under the MIT License.

