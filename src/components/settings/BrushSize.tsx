import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ContainerDiv } from "../ui/Container";

type BrushSizeProps = {
  brushSize: number;
  setbrushSize: any;
};

const BrushSize: React.FunctionComponent<BrushSizeProps> = (props) => {
  const { brushSize, setbrushSize } = props;
  return (
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
        <FontAwesomeIcon icon={faPaintBrush} size="sm" color="#0d6efd" />
        <div style={{ width: "10px" }}></div>
        <label htmlFor=""> Brush Size </label>
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
          <input
            style={{ width: "100px" }}
            width="30"
            id="typeinp"
            type="range"
            min="1"
            max="25"
            value={brushSize}
            onChange={(e) => {
              setbrushSize(parseInt(e.target.value) || 1);
            }}
            step="1"
          />
          <div style={{ width: "10px" }}></div>
          <div
            style={{
              fontSize: "0.875rem",
              borderRadius: "25px",
              padding: "0.25rem 0.5rem",
              border: "1px solid grey",
              color: "white",
              backgroundColor: "grey",
            }}
          >
            {`${brushSize > 9 ? brushSize : "0" + brushSize}`}
          </div>
        </label>
      </div>
    </ContainerDiv>
  );
};

export default BrushSize;
