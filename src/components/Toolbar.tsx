import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { LockContext, SlateDataContext } from "./context";
import {
  faEraser,
  faLock,
  faLockOpen,
  faUndoAlt,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import useDevice, { SCREENSIZE } from "./useDevice";
import { SlateScreenType } from "./Canvas";
import Settings from "./settings/Settings";

export type ScreenIconType = {
  icon: IconDefinition;
  color: string;
};

type ToolbarProps = {
  changeSlateScreenType: Function;
  brushSize: number;
  setbrushSize: any;
  screenIcon: ScreenIconType;
  slateType: SlateScreenType;
  clearScreen: any;
};

const Toolbar: React.FC<ToolbarProps> = ({
  changeSlateScreenType,
  screenIcon,
  brushSize,
  slateType,
  setbrushSize,
  clearScreen,
}) => {
  const { islocked, toggleLock } = React.useContext(LockContext);
  const { toggleRender } = React.useContext(SlateDataContext);

  const device = useDevice();
  const lockSlate = () => {
    toggleLock();
  };
  const loadData = () => {
    !islocked && toggleRender();
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
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid grey",
            width: `${window.innerWidth - 10}px`,
          }}
        >
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "space-between",
              alignItems: "center",
              // border: "1px solid grey",
              width: `${window.innerWidth - 10}px`,
              height: "45px",
            }}
          >
            <div
              style={{
                width: "10px",
              }}
            ></div>
            {/* <ColorPicker /> */}
            <Settings brushSize={brushSize} setbrushSize={setbrushSize} />
            <div style={{ width: "10px" }}></div>
            <div>
              <button
                style={{ borderRadius: "25px", border: "1px solid grey" }}
                className="btn btn-default btn-sm initialLower"
                type="button"
                onClick={loadData}
              >
                <FontAwesomeIcon icon={faUndoAlt} size={"sm"} />
                {device !== SCREENSIZE.MOBILE && <> Load Session Data </>}
              </button>
            </div>
            <div style={{ width: "10px" }}></div>
            <div>
              <button
                style={{ borderRadius: "25px" }}
                className="btn btn-warning btn-sm initialLower"
                type="button"
                onClick={() => {
                  !islocked && changeSlateScreenType();
                }}
              >
                <FontAwesomeIcon
                  icon={screenIcon.icon}
                  size={"sm"}
                  color={screenIcon.color}
                />
                <>{` ${SlateScreenType[slateType].toLocaleLowerCase()}`} </>
                {/* {device !== SCREENSIZE.MOBILE && (
                  <>{` ${SlateScreenType[slateType].toLocaleLowerCase()}`} </>
                )} */}
              </button>
            </div>
            <div style={{ width: "10px" }}></div>
            <div>
              <button
                style={{ borderRadius: "25px", border: "1px solid grey" }}
                className="btn btn-default btn-sm"
                type="button"
                onDoubleClick={() => clearScreen(2)}
                onClick={() => clearScreen(1)}
              >
                <FontAwesomeIcon icon={faEraser} size={"sm"} color={"red"} />
                {device !== SCREENSIZE.MOBILE && <> Clear </>}
              </button>
            </div>
            <div
              style={{
                width: "10px",
              }}
            ></div>
            <div>
              <button
                style={{ borderRadius: "25px" }}
                className="btn btn-info btn-sm"
                type="button"
                onClick={lockSlate}
              >
                <FontAwesomeIcon
                  icon={islocked ? faLockOpen : faLock}
                  size={"sm"}
                />
                {device !== SCREENSIZE.MOBILE && (
                  <>{islocked ? " UnLock" : " Lock"} </>
                )}
              </button>
            </div>
            <div
              style={{
                width: "10px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
