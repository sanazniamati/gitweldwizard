function Page3({ handelSetColor }) {
  return (
    <div>
      <h1>page3</h1>
      <button onClick={handelSetColor}>color : yellow </button>
      <button onClick={handelSetColor}>color : green</button>
    </div>
  );
}

export default Page3;
