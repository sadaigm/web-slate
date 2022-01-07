import {
  faCog,
  faCogs,
  faPalette,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useDevice, { SCREENSIZE } from "../useDevice";
import SettingsDialogue from "./SettingsDialogue";

export type SettingsProps = {
  brushSize: number;
  setbrushSize: any;
};
const Settings: React.FunctionComponent<SettingsProps> = (props) => {
  const { brushSize, setbrushSize } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonRef: React.RefObject<HTMLButtonElement> = React.createRef();
  const device = useDevice();
  return (
    <>
      <button
        ref={buttonRef}
        style={{
          borderRadius: `${device !== SCREENSIZE.MOBILE ? "25px" : "50px"}`,
          border: "1px solid grey",
        }}
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-default btn-sm"
      >
        <FontAwesomeIcon icon={faCog} size="sm" color="#e91e63" />
        {device !== SCREENSIZE.MOBILE && <>{" Settings"}</>}
      </button>
      {isOpen && (
        <SettingsDialogue
          brushSize={brushSize}
          setbrushSize={setbrushSize}
          close={() => {
            setIsOpen(false);
          }}
        ></SettingsDialogue>
      )}
    </>
  );
};

export default Settings;
