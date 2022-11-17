import React from "react";

function Page2({
  handelDecWidth,
  handelIncWidth,
  handelIncHeight,
  handelDecHeight,
  handelDecRadius,
  handelIncRadius,
}) {
  return (
    <div>
      <h1>page2</h1>
      <button onClick={handelIncWidth}>width : +</button>
      <button onClick={handelDecWidth}>width : -</button>
      <button onClick={handelIncHeight}>height : +</button>
      <button onClick={handelDecHeight}>height : -</button>
      <button onClick={handelIncRadius}>radius : +</button>
      <button onClick={handelDecRadius}>radius : -</button>
    </div>
  );
}

export default Page2;
