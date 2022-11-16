import React from "react";

function Page2({ handelDecWidth, handelIncWidth }) {
  return (
    <div>
      <h1>page2</h1>
      <button onClick={handelIncWidth}>width : +</button>
      <br />
      <button onClick={handelDecWidth}>width : -</button>
    </div>
  );
}

export default Page2;
