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
  //-------------
  const stageRef = useRef(null);
  function downloadURI(dataUrl, name) {
    // Construct the 'a' element
    const link = document.createElement("a");
    link.download = name;
    // Construct the URI
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    // Cleanup the DOM
    document.body.removeChild(link);
  }
  const handleExport = () => {
    var pdf = new jsPDF();
    const dataUrl = stageRef.current.toDataURL({ pixelRatio: 2 });
    const pdfData = pdf.addImage(dataUrl, "JPEG", 15, 40, 200, 100);
    // const dataUrl = stageRef.current.toDataURL({ pixelRatio: 3 });
    // we also can save url as file
    // but in the demo on Konva website it will not work
    // because of iframe restrictions
    // but feel free to use it in your apps:
    // downloadURI(dataUrl, "stage.pdf");
    // downloadURI(dataUrl, "stageJason.json");
    // downloadURI(dataUrl, "stageJpeg.jpeg");
    // downloadURI(dataUrl, "stageSVG.svg");
    downloadURI(pdfData, "stagePNG.pdf");
  };

  return (
    <Card>
      <Wizard
        stageRef={stageRef}
        width={width}
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
        <Page3 handleExport={handleExport} />
      </Wizard>
    </Card>
  );
};

export default GitweldWizard;
