import styled from "styled-components";

export type CustomStyleProps = {
  bgColor?: string;
  cellsize?: string;
  height?: string;
  width?: string;
  border?: string;
  compType?: string;
  fontSize?: number;
};

export const ContainerDiv = styled.div`
  display: flex;
  width: ${(props: CustomStyleProps) => props.width || "100%"};
  height: ${(props: CustomStyleProps) => props.height || "100%"};
  flex-direction: ${(props: CustomStyleProps) => props.compType || "row"};
  border: ${(props: CustomStyleProps) => props.border || "1px solid #f3cdc1"};
  background-color: ${(props: CustomStyleProps) =>
    props.bgColor || "transparent"};
`;

export const SizedBox = styled.div<CustomStyleProps>`
  height: ${(props: CustomStyleProps) => props.height || "100%"};
  width: ${(props: CustomStyleProps) => props.width || "100%"};
`;

export const CardAction = styled(ContainerDiv)<CustomStyleProps>`
  justify-content: flex-end;
  align-items: center;
  margin-right: 10px;
  font-size: ${(props: CustomStyleProps) =>
    props.fontSize ? `${props.fontSize * 0.6}px` : "15px"};
  border: none;
`;
