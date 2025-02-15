import React from "react";
import ShimmerLoader from "react-shimmerify";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const scope = { ShimmerLoader };

const sample1 = `<ShimmerLoader isLoading={true}>
  <div className="content">
    <img src="" alt="Loading..." width="100px" height="100px" />
    <div>
      <p>Loading Title</p>
      <p>Loading Title</p>
      <span>Loading description</span>
    </div>
  </div>
</ShimmerLoader>`;

const sample2 = `<ShimmerLoader isLoading={true} customDimensionsMap={{ 
     span: { width: "75px", height: "10px", borderRadius: "2px" }
}}>
  <div className="content">
    <img src="" alt="Loading..." width="100px" height="100px" />
    <div>
      <h1>Loading Title</h1>
      <p>Loading description</p>
      <span>Loading description</span>
    </div>
  </div>
</ShimmerLoader>`;

const ContentExample = () => {
  return (
    <div className="container">
      <div className="title-container">
        <title>React Shimmer</title>
        <h1>Customizable React Shimmer</h1>
        <h3>Edit the code to view the changes live!</h3>
      </div>

      <div className="layout">
        <LiveProvider code={sample1} scope={scope}>
          <div className="editor">
            <LiveEditor />
          </div>
          <div className="preview">
            <LivePreview />
            <LiveError />
          </div>
        </LiveProvider>
      </div>

      <div className="layout">
        <LiveProvider code={sample2} scope={scope}>
          <div className="editor">
            <LiveEditor />
          </div>
          <div className="preview">
            <LivePreview />
            <LiveError />
          </div>
        </LiveProvider>
      </div>
    </div>
  );
};

export default ContentExample;
