import React from "react";
import { Circle, Layer, Rect } from "react-konva";
import Layer1 from "./Layer1";

function Layer2({ width, height, showCircle, showRect }) {
  return (
    <Layer1
      showRect={showRect}
      showCircle={showCircle}
      width={width}
      height={height}
    />
  );
}

export default Layer2;
