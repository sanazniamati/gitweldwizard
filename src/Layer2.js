import Layer1 from "./Layer1";

function Layer2({ width, height, color, showCircle, showRect }) {
  return (
    <Layer1
      showRect={showRect}
      showCircle={showCircle}
      width={width}
      height={height}
      color={color}
    />
  );
}

export default Layer2;
