import React, { useCallback } from "react";
import { drawSlateScreen } from "../slate-screen/SlateScreenManager";
import { getLineHeight } from "./canvasutils";
import {
  LockContext,
  SettingContext,
  SlateData,
  SlateDataContext,
} from "./context";
import getEraser, { clearEraser } from "./ui/Eraser";
import useDevice from "./useDevice";

export enum SlateScreenType {
  MATHS,
  TAMIL,
  ENGLISH,
  SKETCH,
  FOURLINE,
  TWOLINE,
  SINGLELINE,
  CHECKED,
}
type CanvasProps = {
  clearScreenAction: boolean;
  brushSize: number;
  slateScreenType: SlateScreenType;
};

const Canvas: React.FC<CanvasProps> = ({
  clearScreenAction,
  brushSize,
  slateScreenType,
}) => {
  const pageCanvasRef = React.useRef<HTMLCanvasElement>(null);
  const pageContextRef = React.useRef<CanvasRenderingContext2D | null>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const contextRef = React.useRef<CanvasRenderingContext2D | null>(null);
  // const [] = React.useState(slateScreenType);
  const [isDrawing, setDrawing] = React.useState(false);
  const [isClearing, setClearing] = React.useState(false);
  const [data, setData] = React.useState([] as Array<SlateData>);

  const [screenHeight, setScreenHeight] = React.useState(
    window.innerHeight - 50
  );
  const device = useDevice();
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth - 50);
  const [lineHeight] = React.useState(getLineHeight(device));
  const [clearToggle] = React.useState(false);
  const { islocked } = React.useContext(LockContext);
  const { brushColor } = React.useContext(SettingContext);
  const [color, setColor] = React.useState(brushColor);

  React.useEffect(() => {}, [brushColor]);
  const { renderData, slatePattern, loadData } =
    React.useContext(SlateDataContext);
  const clearSlateScreen = React.useCallback(() => {
    let ctx = pageContextRef.current;
    let canvasCtx = pageCanvasRef.current;
    if (ctx) {
      if (canvasCtx) {
        ctx.clearRect(0, 0, screenWidth, screenHeight);
      }
    }
  }, [screenHeight, screenWidth]);

  React.useEffect(() => {
    var offsetHeight = document?.getElementById("myDiv")?.offsetHeight;
    var offsetWidth = document?.getElementById("myDiv")?.offsetWidth;
    offsetHeight && setScreenHeight(offsetHeight);
    offsetWidth && setScreenWidth(offsetWidth);
  }, []);

  React.useEffect(() => {
    if (
      canvasRef &&
      canvasRef.current &&
      pageCanvasRef &&
      pageCanvasRef.current
    ) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      const pageCanvas: HTMLCanvasElement = pageCanvasRef.current;
      canvas.width = screenWidth;
      canvas.height = screenHeight;
      pageCanvas.width = screenWidth;
      pageCanvas.height = screenHeight;
      //   canvas.style.height = `${screenHeight * 2}px`;
      //   canvas.style.width = `${screenWidth * 2}px`;
      // canvas.style.height = "800px";
      // canvas.style.width = "800px";
      const context = canvas.getContext("2d");
      const pageContext = pageCanvas.getContext("2d");
      if (context && pageContext) {
        // context?.scale(2, 2);
        context.strokeStyle = "black";
        context.lineWidth = brushSize;
        contextRef.current = context;
        pageContext.strokeStyle = "black";
        pageContext.lineWidth = brushSize;
        pageContextRef.current = pageContext;
      }
    }
  }, [screenWidth, screenHeight, brushSize]);
  React.useEffect(() => {
    if (!islocked) {
      const initialY = lineHeight * 0.75;
      let ctx = pageContextRef.current;
      if (ctx) {
        clearSlateScreen();
        drawSlateScreen(
          ctx,
          slateScreenType,
          initialY,
          lineHeight,
          screenWidth,
          screenHeight
        );
      }
    }
  }, [
    slateScreenType,
    screenHeight,
    screenWidth,
    clearToggle,
    islocked,
    lineHeight,
    clearSlateScreen,
  ]);

  React.useEffect(() => {
    console.log("isDrawing", isDrawing);
  }, [isDrawing]);

  React.useEffect(() => {
    // !islocked && clearScreen();
    console.log("clearScreenAction", clearScreenAction);
    if (!islocked) {
      // setColor(clearScreenAction ? "#f8f9fa" : brushColor);
      setColor(brushColor);
      clearScreenAction ? getEraser(brushSize) : clearEraser();
      // remove the data
    }
  }, [brushColor, clearScreenAction, slateScreenType, brushSize, islocked]);
  const startDrawing = (nativeEvent: any) => {
    const { offsetX, offsetY } = nativeEvent;
    let ctx = contextRef.current;
    if (ctx) {
      if (clearScreenAction) {
        ctx.clearRect(offsetX, offsetY + 7, 25, 25);
        setClearing(true);
      } else {
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
        setDrawing(true);
        setData([]);
      }
    }
  };
  const stopDrawing = () => {
    let ctx = contextRef.current;
    if (ctx) {
      if (!clearScreenAction) {
        ctx.closePath();
        loadData({
          pattern: data,
          strokeStyle: ctx?.strokeStyle,
          lineWidth: ctx?.lineWidth,
        });
        setDrawing(false);
      }
      setClearing(false);
    }
  };

  const draw = useCallback(
    (
      x: number,
      y: number,
      strokeStyle: string | CanvasGradient | CanvasPattern,
      lineWidth: number
    ) => {
      let ctx = contextRef.current;
      if (ctx) {
        if (clearScreenAction) {
          ctx.clearRect(x, y + 7, 25, 25);
        } else {
          ctx.lineTo(x, y);
          ctx.strokeStyle = strokeStyle;
          ctx.lineWidth = lineWidth;
          ctx.stroke();
        }
      }
    },
    [clearScreenAction]
  );

  React.useEffect(() => {
    slatePattern.forEach((p) => {
      let ctx = contextRef.current;
      if (ctx) {
        ctx.beginPath();
        p.pattern.forEach((f) =>
          draw(f.x, f.y, p?.strokeStyle || color, p.lineWidth || brushSize)
        );
        ctx.closePath();
      }
    });
  }, [brushSize, color, draw, renderData, slatePattern]);

  const storeData = (nativeEvent: any) => {
    const { offsetX, offsetY } = nativeEvent;
    setData([...data, { x: offsetX, y: offsetY }]);
    // loadData({ x: offsetX, y: offsetY });
  };

  const drawing = (nativeEvent: any) => {
    if (!isDrawing && !isClearing) return;
    const { offsetX, offsetY } = nativeEvent;
    draw(offsetX, offsetY, color, brushSize);
    isDrawing && storeData(nativeEvent);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          id="myDiv"
          style={{
            flexDirection: "column",
            justifyContent: "center",
            border: "1px solid grey",
            height: `${window.innerHeight - 100}px`,
            width: `${window.innerWidth - 10}px`,
          }}
        >
          <div id="canvasesdiv" style={{ position: "relative" }}>
            <canvas
              ref={pageCanvasRef}
              style={{
                zIndex: 1,
                position: "absolute",
                height: `${window.innerHeight - 110}px`,
                width: `${window.innerWidth - 10}px`,
              }}
            ></canvas>
            <canvas
              style={{
                zIndex: 2,
                position: "absolute",
                height: `${window.innerHeight - 110}px`,
                width: `${window.innerWidth - 10}px`,
              }}
              onMouseDown={(e) => {
                !islocked && startDrawing(e.nativeEvent);
              }}
              onMouseUp={() => {
                !islocked && stopDrawing();
              }}
              onMouseMove={(e) => {
                !islocked && drawing(e.nativeEvent);
              }}
              onTouchStart={(e) => {
                var touch = e.touches[0];
                var mouseEvent = new MouseEvent("mousedown", {
                  clientX: touch.clientX - 10,
                  clientY: touch.clientY - 50,
                });
                !islocked && startDrawing(mouseEvent);
              }}
              onTouchEnd={() => {
                !islocked && stopDrawing();
              }}
              onTouchMove={(e) => {
                var touch = e.touches[0];
                var mouseEvent = new MouseEvent("mousemove", {
                  clientX: touch.clientX - 10,
                  clientY: touch.clientY - 50,
                });
                !islocked && drawing(mouseEvent);
              }}
              ref={canvasRef}
            ></canvas>
          </div>
        </div>
      </div>
    </>
  );
};

export default Canvas;
