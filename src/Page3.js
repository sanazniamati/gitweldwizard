function Page3({ handleExportPNG, handelExportPDF }) {
  return (
    <div>
      <h1>page3</h1>
      <button onClick={handleExportPNG}>export to png</button>
      <button onClick={handelExportPDF}>export to PDF</button>
    </div>
  );
}

export default Page3;
