import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Stage } from "react-konva";
import Layer1 from "./Layer1";
import Layer2 from "./Layer2";
import Layer3 from "./Layer3";

const Wizard = ({
  children,
  width,
  height,
  radius,
  circleColor,
  rectColor,
  stageRef,
  showCircle,
  showRect,
}) => {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const pages = React.Children.toArray(children);
  const currentPage = pages[activePageIndex];

  const goNextPage = () => {
    setActivePageIndex((index) => index + 1);
    console.log(
      "activePageIndex " +
        activePageIndex +
        " currentPage " +
        pages[activePageIndex]
    );
  };

  const goPrevPage = () => {
    setActivePageIndex((index) => index - 1);
    console.log("activePageIndex " + activePageIndex);
  };

  const ButtonPrev = () =>
    activePageIndex > 0 ? (
      <Button type="button" onClick={goPrevPage}>
        Prev
      </Button>
    ) : null;
  const ButtonNext = () =>
    activePageIndex < pages.length - 1 ? (
      <Button type="button" onClick={goNextPage}>
        Next
      </Button>
    ) : null;

  return (
    <div>
      {/*  این دیو هربار یک step را فعال میکند*/}
      <div>{currentPage}</div>
      <Stage
        ref={stageRef}
        width={500}
        height={200}
        style={{ background: "lightpink" }}
      >
        {activePageIndex === 0 ? (
          <Layer1
            width={width}
            height={height}
            circleColor={circleColor}
            rectColor={rectColor}
            radius={radius}
            showRect={showRect}
            showCircle={showCircle}
          />
        ) : null}
        {activePageIndex === 1 ? (
          <Layer2
            width={width}
            height={height}
            circleColor={circleColor}
            rectColor={rectColor}
            radius={radius}
            showRect={showRect}
            showCircle={showCircle}
          />
        ) : null}
        {activePageIndex === 2 ? (
          <Layer3
            width={width}
            height={height}
            circleColor={circleColor}
            rectColor={rectColor}
            radius={radius}
            showRect={showRect}
            showCircle={showCircle}
          />
        ) : null}
        {activePageIndex === 3 ? (
          <Layer3
            width={width}
            height={height}
            radius={radius}
            circleColor={circleColor}
            rectColor={rectColor}
            showRect={showRect}
            showCircle={showCircle}
          />
        ) : null}
      </Stage>
      <div>
        <p>active page : {activePageIndex}</p>
        <br /> <br />
        <ButtonPrev />
        <ButtonNext />
      </div>
    </div>
  );
};

export default Wizard;
