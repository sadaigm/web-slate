import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SettingContext } from "./context";
import { ContainerDiv } from "./ui/Container";

const ColorPicker = () => {
  const { brushColor, setBrushColor } = React.useContext(SettingContext);

  const changeColor = (e: any) => {
    if (e.target.value && e.target.value.trim() !== "rgba(0, 0, 0, 0)")
      setBrushColor(e.target.value);
  };
  return (
    <>
      <ContainerDiv
        border="none"
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <ContainerDiv
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            border: "none",
            width: "40%",
          }}
        >
          <FontAwesomeIcon icon={faPalette} size="sm" color="#e91e63" />
          <div style={{ width: "10px" }}></div>
          <label htmlFor=""> Color Picker </label>
        </ContainerDiv>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "100%",
            width: "60%",
          }}
        >
          <label
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <input type="color" value={brushColor} onChange={changeColor} />
            <div style={{ width: "10px" }}></div>
            <div
              style={{
                fontSize: "0.875rem",
                borderRadius: "25px",
                padding: "0.25rem 0.5rem",
                border: "1px solid grey",
                color: "white",
                backgroundColor: `${brushColor}`,
              }}
            >
              {brushColor}
            </div>
          </label>
        </div>
      </ContainerDiv>
    </>
  );
};

export default ColorPicker;
