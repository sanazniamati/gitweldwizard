import { Circle, Layer, Rect } from "react-konva";

function Layer1({
  width,
  height,
  radius,
  circleColor,
  rectColor,
  showCircle,
  showRect,
}) {
  return (
    <Layer>
      <Rect
        visible={showRect}
        x={100}
        y={50}
        width={width}
        height={height}
        fill={rectColor}
        stroke={"black"}
        strokeWidth={2}
      />
      <Circle
        visible={showCircle}
        radius={radius}
        x={50}
        y={50}
        fill={circleColor}
        stroke={"blue"}
      />
    </Layer>
  );
}

export default Layer1;
