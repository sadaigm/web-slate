import { drawLine } from "./draw";

export const getTwoLine = (
    ctx: any,
    yFactor: number,
    initialY: number,
    lineHeight: number,
    screenWidth: number
) => {
    if (ctx) {
        for (let index = 1; index <= 3; index++) {
            let y = initialY + yFactor * 2.5 + lineHeight * index;
            let color = "grey";
            if (index === 3) {
                color = "transparent";
                y = y - (lineHeight * 0.5)
            }
            drawLine(ctx, { x: 0, y: y }, { x: screenWidth, y: y }, color, yFactor);
        }
    }
};

export const constructTwoLineSlate = (
    ctx: any,
    initialY: number,
    lineHeight: number,
    screenWidth: number,
    screenHeight: number
) => {
    const count = Math.floor((screenHeight - initialY) / (lineHeight * 2.5));
    for (let index = 0; index < count; index++) {
        const yFactor = index * lineHeight;
        getTwoLine(ctx, yFactor, initialY, lineHeight, screenWidth);
    }
};
