function Page1({ handelCreateCircle, handelCreateRect }) {
  return (
    <>
      <h1>page1</h1>
      <button onClick={handelCreateRect}>create Rect</button>
      <button onClick={handelCreateCircle}>create Circle</button>
      <br />
    </>
  );
}

export default Page1;
