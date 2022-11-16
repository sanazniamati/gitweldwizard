import React from "react";
import { Circle, Layer, Rect } from "react-konva";
import Layer1 from "./Layer1";

function Layer2({ width, showCircle, showRect }) {
  return <Layer1 showRect={showRect} showCircle={showCircle} width={width} />;

  // <Layer>
  //   {/*<Rect*/}
  //   {/*  visible={showRect}*/}
  //   {/*  x={100}*/}
  //   {/*  y={100}*/}
  //   {/*  width={width}*/}
  //   {/*  height={50}*/}
  //   {/*  // fill={"yellow"}*/}
  //   {/*  stroke={"black"}*/}
  //   {/*  strokeWidth={2}*/}
  //   {/*/>*/}
  //   {/*<Circle visible={showCircle} radius={30} x={50} y={50} stroke={"blue"} />*/}
  //
  // </Layer>
}

export default Layer2;
