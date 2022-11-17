import Layer2 from "./Layer2";

function Layer3({
  width,
  height,
  circleColor,
  rectColor,
  radius,
  showCircle,
  showRect,
}) {
  return (
    <Layer2
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

export default Layer3;
