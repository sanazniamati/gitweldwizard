import { Circle, Layer, Rect } from "react-konva";

function Layer1({ width, height, showCircle, showRect }) {
  return (
    <Layer>
      <Rect
        visible={showRect}
        x={100}
        y={100}
        width={width}
        height={height}
        fill={"yellow"}
        stroke={"black"}
        strokeWidth={2}
      />
      <Circle visible={showCircle} radius={30} x={50} y={50} stroke={"blue"} />
    </Layer>
  );
}

export default Layer1;
