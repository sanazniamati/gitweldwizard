import Layer2 from "./Layer2";

function Layer3({ width, height, color, showCircle, showRect }) {
  return (
    <Layer2
      showRect={showRect}
      showCircle={showCircle}
      width={width}
      height={height}
      color={color}
    />
  );
}

export default Layer3;
