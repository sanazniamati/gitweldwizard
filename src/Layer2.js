import Layer1 from "./Layer1";

function Layer2({
  width,
  height,
  radius,
  circleColor,
  rectColor,
  showCircle,
  showRect,
}) {
  return (
    <Layer1
      showRect={showRect}
      showCircle={showCircle}
      width={width}
      height={height}
      circleColor={circleColor}
      rectColor={rectColor}
      radius={radius}
    />
  );
}

export default Layer2;
