import React from "react";

import { ResizeProvider, ResizeConsumer } from "react-resize-context";

import "./styles.css";

class Second extends React.PureComponent {
  state = {
    size: {}
  };

  getDatasetBySize = (size) => ({
    widthRange: size.width > 200 ? "large" : "small",
    heightRange: size.height > 200 ? "large" : "small"
  });

  handleSizeChanged = (size) => {
    this.setState({ size });
  };

  render() {
    return (
      <ResizeProvider>
        <ResizeConsumer
          className="container"
          onSizeChanged={this.handleSizeChanged}
          updateDatasetBySize={this.getDatasetBySize}
        ></ResizeConsumer>
      </ResizeProvider>
    );
  }
}
export default Second;
