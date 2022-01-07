import { drawLine } from "./draw";

export const getSingleLine = (
    ctx: any,
    yFactor: number,
    initialY: number,
    lineHeight: number,
    screenWidth: number
) => {
    if (ctx) {
        for (let index = 1; index <= 1; index++) {
            let y = initialY + yFactor + lineHeight * index;
            let color = "blue";
            drawLine(ctx, { x: 0, y: y }, { x: screenWidth, y: y }, color, yFactor);
        }
    }
};

export const constructSingleLineSlate = (
    ctx: any,
    initialY: number,
    lineHeight: number,
    screenWidth: number,
    screenHeight: number
) => {
    const count = Math.floor((screenHeight - initialY) / (lineHeight));
    for (let index = 0; index < count; index++) {
        const yFactor = index * lineHeight;
        getSingleLine(ctx, yFactor, initialY, lineHeight, screenWidth);
    }
};
