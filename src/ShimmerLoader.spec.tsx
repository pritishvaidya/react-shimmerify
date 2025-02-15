import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import ShimmerLoader from "./ShimmerLoader";

describe("ShimmerLoader Component", () => {
  it("should render shimmer elements with correct styles", () => {
    const { container } = render(
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
      </ShimmerLoader>,
    );

    const imageShimmer = container.querySelector(".shimmer-item.image");
    const titleShimmer = container.querySelector(
      ".shimmer-item.text[style*='width: 300px']",
    );
    const textShimmer = container.querySelector(
      ".shimmer-item.text[style*='width: 200px']",
    );
    const spanShimmer = container.querySelector(
      ".shimmer-item.text[style*='width: 75px']",
    );

    expect(imageShimmer).toHaveStyle({ width: "100px", height: "100px" });
    expect(titleShimmer).toHaveStyle({
      width: "300px",
      height: "40px",
      borderRadius: "2px",
    });
    expect(textShimmer).toHaveStyle({
      width: "200px",
      height: "20px",
      borderRadius: "2px",
    });
    expect(spanShimmer).toHaveStyle({
      width: "75px",
      height: "10px",
      borderRadius: "2px",
    });
  });
});
