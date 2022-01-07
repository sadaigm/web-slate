import React from "react";
import styled from "styled-components";
import { device } from "../../const";
import ColorPicker from "../ColorPicker";
import { CardAction, ContainerDiv, SizedBox } from "../ui/Container";
import BrushSize from "./BrushSize";
import Portal from "./Portal";
export type ModalDialogProps = {
  close: any;
  brushSize: number;
  setbrushSize: any;
};

export const ModalContainerDiv = styled(ContainerDiv)`
  justify-content: center;
  align-items: center;
  border: none;
  @media ${device.mobileS} {
    width: 85%;
    height: auto;
  }
  @media ${device.tablet} {
    width: 65%;
    height: auto;
  }
  @media ${device.laptop} {
    width: 45%;
  }

  @media ${device.desktop} {
    flex-basis: 30%;
  }
`;

const SettingsDialogue: React.FunctionComponent<ModalDialogProps> = (props) => {
  const { close, brushSize, setbrushSize } = props;
  return (
    <>
      <Portal>
        <div className="modal">
          <ModalContainerDiv
            compType="column"
            bgColor="white"
            height="35%"
            style={{
              borderRadius: "10px",
              backgroundColor: "white",
              padding: "5px",
            }}
          >
            <SizedBox height="5px" />
            <ContainerDiv
              border="none"
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: "50px",
                borderBottom: "1px solid brown",
              }}
              compType="column"
            >
              <h3> Settings </h3>
            </ContainerDiv>
            <SizedBox height="5px" />

            <ContainerDiv
              border="none"
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: "50px",
              }}
            >
              <BrushSize brushSize={brushSize} setbrushSize={setbrushSize} />
            </ContainerDiv>
            <SizedBox height="5px" />
            <ContainerDiv
              border="none"
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: "50px",
              }}
            >
              <ColorPicker />
            </ContainerDiv>

            <CardAction
              height="60px"
              style={{
                justifyContent: "center",
              }}
            >
              <button
                type="button"
                onClick={close}
                className="btn btn-danger btn-sm"
              >
                Close
              </button>
            </CardAction>
          </ModalContainerDiv>
        </div>
      </Portal>
    </>
  );
};

export default SettingsDialogue;
