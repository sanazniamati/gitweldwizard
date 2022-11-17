function Page3({
  handelSetColorGreenRect,
  handelSetColorYellowRect,
  handelSetColorGreenCircle,
  handelSetColorYellowCircle,
}) {
  return (
    <div>
      <h1>page3</h1>
      <button onClick={handelSetColorGreenCircle}>Circle:green</button>
      <button onClick={handelSetColorYellowCircle}>Circle:yellow</button>
      <button onClick={handelSetColorGreenRect}> Rect:green</button>
      <button onClick={handelSetColorYellowRect}> Rect:yellow</button>
    </div>
  );
}

export default Page3;
