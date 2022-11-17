import { useState, useRef } from "react";
import { Card } from "react-bootstrap";
import { jsPDF } from "jspdf";
import Wizard from "./Wizard";
import Page2 from "./Page2";
import Page1 from "./Page1";
import Page3 from "./Page3";

const GitweldWizard = () => {
  const [showRect, setShowRect] = useState(false);
  const [showCircle, setShowCircle] = useState(false);
  const handelCreateRect = () => {
    setShowRect((showRect) => !showRect);
    console.log("showRect :" + showRect);
  };
  const handelCreateCircle = () => {
    setShowCircle((showCircle) => !showCircle);
    console.log("showCircle: " + showCircle);
  };
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(50);
  const handelIncWidth = () => {
    setWidth(width + 15);
    console.log("width: " + width);
  };
  const handelDecWidth = () => {
    setWidth(width - 15);
    console.log("width: " + width);
  };
  const handelIncWHeight = () => {
    setHeight(height + 15);
    console.log("height: " + height);
  };
  const handelDecHeight = () => {
    setHeight(height - 15);
    console.log("height: " + height);
  };
  //-------------
  const stageRef = useRef(null);
  const handleExportPNG = () => {
    // Convert the canvas to data
    const image = stageRef.current.toDataURL({ pixelRatio: 2 });
    // Create a link
    const aDownloadLink = document.createElement("a");
    // Add the name of the file to the link
    aDownloadLink.download = "canvas_image.png";
    // Attach the data to the link
    aDownloadLink.href = image;
    document.body.appendChild(aDownloadLink);
    // Get the code to click the download link
    aDownloadLink.click();
    // Cleanup the DOM
    document.body.removeChild(aDownloadLink);
  };

  const handelExportPDF = () => {
    const pdf = new jsPDF("l", "px", [500, 500]);
    pdf.setTextColor("#000000");
    // first add texts
    stageRef.current.find("Text").forEach((text) => {
      const size = text.fontSize() / 0.75; // convert pixels to points
      pdf.setFontSize(size);
      pdf.text(text.text(), text.x(), text.y(), {
        baseline: "top",
        angle: -text.getAbsoluteRotation(),
      });
    });
    pdf.addImage(
      stageRef.current.toDataURL({ pixelRatio: 2 }),
      0,
      0,
      stageRef.current.width(),
      stageRef.current.height()
    );
    pdf.save("canvas.pdf");
  };

  return (
    <Card>
      <Wizard
        stageRef={stageRef}
        width={width}
        height={height}
        showRect={showRect}
        showCircle={showCircle}
      >
        <Page1
          handelCreateRect={handelCreateRect}
          handelCreateCircle={handelCreateCircle}
        />

        <Page2
          handelIncWidth={handelIncWidth}
          handelDecWidth={handelDecWidth}
        />
        <Page3
          handleExportPNG={handleExportPNG}
          handelExportPDF={handelExportPDF}
        />
      </Wizard>
    </Card>
  );
};

export default GitweldWizard;
