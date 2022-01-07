import React from "react";
import Canvas, { SlateScreenType } from "./Canvas";
import { LockContext, SlateDataContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEraser,
  faGripLines,
  faGripLinesVertical,
  faLock,
  faLockOpen,
  faPaintBrush,
  faPencilRuler,
  faTable,
  faUndo,
  faUndoAlt,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import useDevice, { SCREENSIZE } from "./useDevice";
import ColorPicker from "./ColorPicker";
import Toolbar, { ScreenIconType } from "./Toolbar";

const MainPage = () => {
  const [trigger, setClearTrigger] = React.useState(false);
  const [brushSize, setbrushSize] = React.useState(1);
  const [slateType, setSlateType] = React.useState(SlateScreenType.SKETCH);
  const [screenIcon, setscreenIcon] = React.useState<ScreenIconType>({
    icon: faPaintBrush,
    color: "red",
  });
  const { islocked, toggleLock } = React.useContext(LockContext);
  const { toggleRender } = React.useContext(SlateDataContext);
  const device = useDevice();
  const clearScreen = (state: number) => {
    if (state === 2) {
      setClearTrigger(!trigger);
    } else if (state === 1) {
      // add transparent brush to erase
      setClearTrigger(!trigger);
    }
  };
  const lockSlate = () => {
    toggleLock();
  };
  const changeSlateScreenType = () => {
    //   default sketch -> english
    if (slateType === SlateScreenType.SKETCH) {
      setSlateType(SlateScreenType.FOURLINE);
      setscreenIcon({ icon: faPencilRuler, color: "#6f42c1" });
      //   #0dcaf0
    } else if (slateType === SlateScreenType.FOURLINE) {
      setSlateType(SlateScreenType.TWOLINE);
      setscreenIcon({
        icon: faGripLines,
        color: "grey",
      });
    } else if (slateType === SlateScreenType.TWOLINE) {
      setSlateType(SlateScreenType.SINGLELINE);
      setscreenIcon({
        icon: faPaintBrush,
        color: "blue",
      });
    } else if (slateType === SlateScreenType.SINGLELINE) {
      setSlateType(SlateScreenType.CHECKED);
      setscreenIcon({
        icon: faTable,
        color: "grey",
      });
    } else if (slateType === SlateScreenType.CHECKED) {
      setSlateType(SlateScreenType.SKETCH);
      setscreenIcon({
        icon: faPaintBrush,
        color: "red",
      });
    } else {
      setSlateType(SlateScreenType.SKETCH);
      setscreenIcon({
        icon: faPaintBrush,
        color: "red",
      });
    }
  };
  const loadData = () => {
    toggleRender();
  };
  return (
    <>
      <div
        style={{
          height: "50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <div style={{ width: "10px" }}></div>
          <h3 style={{ color: "#6610f2" }}>Web Slate</h3>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <span
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "0 10px",
            }}
          >
            {islocked && "Locked"}
          </span>
          <div style={{ width: "10px" }}></div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Canvas
          clearScreenAction={trigger}
          brushSize={brushSize}
          slateScreenType={slateType}
        />
        <Toolbar
          changeSlateScreenType={changeSlateScreenType}
          screenIcon={screenIcon}
          brushSize={brushSize}
          slateType={slateType}
          setbrushSize={setbrushSize}
          clearScreen={clearScreen}
        />
      </div>
    </>
  );
};

export default MainPage;
